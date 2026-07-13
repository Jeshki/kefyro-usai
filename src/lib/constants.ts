export const BRAND = {
  logo: "/logo.jpg",
  logoOriginal: "/kefyro usu logo.jpg",
  cover: "/cover.jpg",
  coverOriginal: "/cover foto.jpg",
  colors: {
    beige: "#F5E9CC",
    orange: "#F19421",
    plum: "#4D3B4D",
    plumDark: "#3A2E38",
    ink: "#1A1218",
  },
} as const;

export const SITE = {
  name: "Kefyro ūsai",
  tagline: {
    lt: "Vegetarian / vegan friendly 🌱 · Draugiški gyvūnams 🐶",
    en: "Vegetarian / vegan friendly 🌱 · Pet friendly 🐶",
  },
  address: "J. Janonio g. 1, Palanga, 00136",
  phone: "+37064703730",
  phoneDisplay: "(0-647) 03730",
  email: "kefyrousai@gmail.com",
  priceRange: "€10–15",
  googleRating: { score: 4.7, count: 299 },
  coordinates: { lat: 55.9175, lng: 21.0686 },
  social: {
    facebook: "https://www.facebook.com/kefyrousai/",
    instagram: "https://www.instagram.com/kefyrousai/?hl=en",
  },
  order: {
    wolt: "https://wolt.com/lt/ltu/palanga/restaurant/kefyro-usai",
    bolt: "https://food.bolt.eu/lt-lt/palanga",
  },
  googleMaps: "https://maps.google.com/?q=J.+Janonio+g.+1,+Palanga",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.0!2d21.0686!3d55.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU1JzAzLjAiTiAyMcKwMDQnMDcuMCJF!5e0!3m2!1slt!2slt!4v1",
} as const;

export const HOURS = {
  monday: { open: null, close: null },
  tuesday: { open: null, close: null },
  wednesday: { open: "12:00", close: "22:00" },
  thursday: { open: "12:00", close: "22:00" },
  friday: { open: "12:00", close: "23:00" },
  saturday: { open: "12:00", close: "23:00" },
  sunday: { open: "12:00", close: "22:00" },
} as const;

export type DayKey = keyof typeof HOURS;

export const DAY_KEYS: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
