import { REVIEWS, GOOGLE_RATING, SOCIAL_LINKS } from "./scraped/reviews";

export interface GalleryImage {
  id: string;
  src: string;
  alt: { lt: string; en: string };
  category: "rooftop" | "food" | "cocktails" | "events";
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80", alt: { lt: "Stogo terasa saulėlydžio metu", en: "Rooftop terrace at sunset" }, category: "rooftop", width: 1200, height: 800 },
  { id: "g2", src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80", alt: { lt: "Kokteilių baras", en: "Cocktail bar" }, category: "cocktails", width: 800, height: 1200 },
  { id: "g3", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80", alt: { lt: "Vakarienė terasoje", en: "Dinner on the terrace" }, category: "food", width: 1200, height: 800 },
  { id: "g4", src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", alt: { lt: "Vasaros renginys", en: "Summer event" }, category: "events", width: 800, height: 1000 },
  { id: "g5", src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", alt: { lt: "Parašo kokteilis", en: "Signature cocktail" }, category: "cocktails", width: 800, height: 1000 },
  { id: "g6", src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80", alt: { lt: "Jūros vaizdas nuo terasos", en: "Sea view from the terrace" }, category: "rooftop", width: 1200, height: 800 },
  { id: "g7", src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", alt: { lt: "Traški pica", en: "Crispy pizza" }, category: "food", width: 800, height: 1000 },
  { id: "g8", src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80", alt: { lt: "DJ vakaras", en: "DJ night" }, category: "events", width: 1200, height: 800 },
  { id: "g9", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80", alt: { lt: "Mule kokteilis", en: "Mule cocktail" }, category: "cocktails", width: 800, height: 1000 },
  { id: "g10", src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80", alt: { lt: "Lauko sėdimos vietos", en: "Outdoor seating" }, category: "rooftop", width: 1200, height: 800 },
  { id: "g11", src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", alt: { lt: "Salotų lėkštė", en: "Salad bowl" }, category: "food", width: 800, height: 1000 },
  { id: "g12", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80", alt: { lt: "Live muzika", en: "Live music" }, category: "events", width: 1200, height: 800 },
];

export { GOOGLE_RATING, SOCIAL_LINKS };
export const TESTIMONIALS = REVIEWS;

/** Food images linking to Instagram — real posts require Meta API */
export const INSTAGRAM_POSTS = [
  { id: "ig1", src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", alt: "Falafel salad" },
  { id: "ig2", src: "https://images.unsplash.com/photo-1569718212165-3a2858c93e42?w=600&q=80", alt: "WOK noodles" },
  { id: "ig3", src: "https://images.unsplash.com/photo-1548946839-e2f660cfb560?w=600&q=80", alt: "Asian soup" },
  { id: "ig4", src: "https://images.unsplash.com/photo-1587241326-5c058a811fe5?w=600&q=80", alt: "Churros" },
  { id: "ig5", src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80", alt: "Tortilla" },
  { id: "ig6", src: "https://images.unsplash.com/photo-1608032599945-89f755e6e627?w=600&q=80", alt: "Chicken wings" },
];
