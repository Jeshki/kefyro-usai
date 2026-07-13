export interface MenuItem {
  id: string;
  name: { lt: string; en: string };
  description: { lt: string; en: string };
  price: number;
  image: string;
  vegan?: boolean;
  isNew?: boolean;
  allergens?: string[];
  category: "food" | "cocktails" | "wineBeer" | "nonAlcoholic" | "takeaway";
  section?: import("./scraped/menu-items").FoodSection;
}

export {
  SCRAPED_MENU as MENU_ITEMS,
  FEATURED_ITEMS as COCKTAILS,
  DAILY_SPECIALS_SCRAPED as DAILY_SPECIALS,
  FOOD_SECTIONS,
  WOLT_MENU_SOURCE,
} from "./scraped/menu-items";
