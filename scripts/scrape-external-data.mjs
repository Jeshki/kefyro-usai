#!/usr/bin/env node
/**
 * Syncs menu & review data from public sources.
 * Run: node scripts/scrape-external-data.mjs
 *
 * Sources:
 * - Menu: https://semeny.no/lt/sted/kefyrousai (SE MENY — official digital menu)
 * - Reviews: https://de.restaurantguru.com/Kefyro-usai-Palanga (Google aggregate)
 *
 * Note: Facebook & Instagram require login/API — cannot be scraped directly.
 */

const MENU_URL = "https://semeny.no/lt/sted/kefyrousai";
const REVIEWS_URL = "https://de.restaurantguru.com/Kefyro-usai-Palanga";

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "KefyroUsai-Website-Sync/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function parseMenuItems(html) {
  const items = [];
  const priceRegex = /([^+\n€]+?)\s*\n\s*(\d+)\s*€/g;
  const lines = html.replace(/<[^>]+>/g, "\n").split("\n").map((l) => l.trim()).filter(Boolean);

  let currentCategory = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("🍽️") || line.includes("🍰") || line.includes("🍺")) {
      currentCategory = line;
      continue;
    }
    const priceMatch = line.match(/^(\d+)\s*€$/);
    if (priceMatch && i > 0) {
      const name = lines[i - 1];
      if (name && name.length > 2 && !name.includes("€")) {
        items.push({ name, price: parseInt(priceMatch[1]), category: currentCategory });
      }
    }
  }
  return items;
}

async function main() {
  console.log("Fetching menu from SE MENY...");
  const menuHtml = await fetchText(MENU_URL);
  const menuItems = parseMenuItems(menuHtml);
  console.log(`  Found ${menuItems.length} menu items`);

  console.log("Fetching reviews from Restaurant Guru...");
  const reviewsHtml = await fetchText(REVIEWS_URL);
  const googleMatch = reviewsHtml.match(/Google\s*\(([\d.]+)\/5\)\s*(\d+)/i);
  if (googleMatch) {
    console.log(`  Google rating: ${googleMatch[1]}/5 (${googleMatch[2]} reviews)`);
  }

  const output = {
    syncedAt: new Date().toISOString(),
    sources: { menu: MENU_URL, reviews: REVIEWS_URL },
    menuCount: menuItems.length,
    googleRating: googleMatch
      ? { score: parseFloat(googleMatch[1]), count: parseInt(googleMatch[2]) }
      : null,
    menuPreview: menuItems.slice(0, 5),
  };

  const fs = await import("fs");
  const path = await import("path");
  const outPath = path.join(process.cwd(), "src", "data", "sync-status.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`\nSync status written to ${outPath}`);
  console.log("\nNote: Facebook/Instagram require Meta API — update social content manually.");
}

main().catch((err) => {
  console.error("Scrape failed:", err.message);
  process.exit(1);
});
