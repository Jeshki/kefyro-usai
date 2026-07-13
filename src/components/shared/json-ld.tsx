import { SITE, HOURS, BRAND } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description:
      "Bariukas Palangoje. Vegetarian / vegan friendly. Draugiški gyvūnams. Maistas ir gėrimai.",
    image: `https://kefyrousai.lt${BRAND.cover}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "J. Janonio g. 1",
      addressLocality: "Palanga",
      postalCode: "00136",
      addressCountry: "LT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    telephone: SITE.phone,
    url: "https://kefyrousai.lt",
    priceRange: "€€",
    servesCuisine: ["International", "Cocktails", "Lithuanian"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday"],
        opens: HOURS.wednesday.open!,
        closes: HOURS.wednesday.close!,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: HOURS.friday.open!,
        closes: HOURS.friday.close!,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: HOURS.sunday.open!,
        closes: HOURS.sunday.close!,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "299",
      bestRating: "5",
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
