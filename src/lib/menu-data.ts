export interface MenuItem {
  id: string;
  name: { lt: string; en: string };
  description: { lt: string; en: string };
  price: number;
  displayPrice?: { lt: string; en: string };
  image: string;
  vegan?: boolean;
  isNew?: boolean;
  allergens?: string[];
  category: "food" | "cocktails" | "wineBeer" | "nonAlcoholic";
  section?: import("./scraped/menu-items").FoodSection | import("./scraped/menu-items").DrinkSection;
}

export {
  SCRAPED_MENU as MENU_ITEMS,
  FEATURED_ITEMS as COCKTAILS,
  DAILY_SPECIALS_SCRAPED as DAILY_SPECIALS,
  FOOD_SECTIONS,
  DRINK_SECTIONS,
  MENU_PAGES,
} from "./scraped/menu-items";
