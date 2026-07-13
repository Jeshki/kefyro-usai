import { REVIEWS, GOOGLE_RATING, SOCIAL_LINKS } from "./scraped/reviews";
import { PHOTOS } from "./media";

export interface GalleryImage {
  id: string;
  src: string;
  alt: { lt: string; en: string };
  category: "bar" | "food" | "drinks";
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", src: PHOTOS.baras, alt: { lt: "Kefyro ūsai bariukas", en: "Kefyro ūsai bar" }, category: "bar", width: 1200, height: 800 },
  { id: "g2", src: PHOTOS.baras2, alt: { lt: "Baro interjeras", en: "Bar interior" }, category: "drinks", width: 1200, height: 800 },
  { id: "g3", src: PHOTOS.baras3, alt: { lt: "Gėrimai bare", en: "Drinks at the bar" }, category: "drinks", width: 1200, height: 800 },
  { id: "g4", src: PHOTOS.baras4, alt: { lt: "Baras ir terasa", en: "Bar and terrace" }, category: "bar", width: 1200, height: 800 },
  { id: "g5", src: PHOTOS.baras5, alt: { lt: "Kefyro ūsai Palangoje", en: "Kefyro ūsai in Palanga" }, category: "bar", width: 1200, height: 800 },
  { id: "g6", src: PHOTOS.tortilija, alt: { lt: "Tortilija", en: "Tortilla" }, category: "food", width: 800, height: 1000 },
  { id: "g7", src: PHOTOS.makaronai, alt: { lt: "Azijietiški WOK makaronai", en: "Asian WOK noodles" }, category: "food", width: 800, height: 1000 },
  { id: "g8", src: PHOTOS.salotos, alt: { lt: "Salotos", en: "Salad" }, category: "food", width: 800, height: 1000 },
  { id: "g9", src: PHOTOS.saltibarsciai, alt: { lt: "Šaltibarščiai", en: "Cold beetroot soup" }, category: "food", width: 800, height: 1000 },
  { id: "g10", src: PHOTOS.sparneliai, alt: { lt: "BBQ vištienos sparneliai", en: "BBQ chicken wings" }, category: "food", width: 800, height: 1000 },
];

export { GOOGLE_RATING, SOCIAL_LINKS };
export const TESTIMONIALS = REVIEWS;

export const INSTAGRAM_POSTS = [
  { id: "ig1", src: PHOTOS.tortilija, alt: "Tortilija" },
  { id: "ig2", src: PHOTOS.makaronai, alt: "WOK makaronai" },
  { id: "ig3", src: PHOTOS.saltibarsciai, alt: "Šaltibarščiai" },
  { id: "ig4", src: PHOTOS.sparneliai, alt: "Vištienos sparneliai" },
  { id: "ig5", src: PHOTOS.salotos, alt: "Salotos" },
  { id: "ig6", src: PHOTOS.baras, alt: "Kefyro ūsai bariukas" },
];
