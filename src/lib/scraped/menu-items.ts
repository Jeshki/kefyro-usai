/**
 * Menu data — Wolt (2026-07-13) + Google Maps highlights
 * Source: wolt.com/lt/ltu/palanga/restaurant/kefyro-usai
 */

import { PHOTOS } from "../media";

export type FoodSection = "mains" | "snacks" | "vegan" | "soups" | "desserts";

export interface ScrapedMenuItem {
  id: string;
  name: { lt: string; en: string };
  description: { lt: string; en: string };
  price: number;
  image: string;
  vegan?: boolean;
  isNew?: boolean;
  allergens?: string[];
  category: "food" | "cocktails" | "wineBeer" | "nonAlcoholic" | "takeaway";
  section?: FoodSection;
}

export const FOOD_SECTIONS: { key: FoodSection; label: { lt: string; en: string } }[] = [
  { key: "mains", label: { lt: "Pagrindiniai patiekalai", en: "Main dishes" } },
  { key: "snacks", label: { lt: "Užkandžiai", en: "Snacks" } },
  { key: "vegan", label: { lt: "VEGAN maistas", en: "Vegan food" } },
  { key: "soups", label: { lt: "Sriubos", en: "Soups" } },
  { key: "desserts", label: { lt: "Desertai", en: "Desserts" } },
];

export const SCRAPED_MENU: ScrapedMenuItem[] = [
  // —— Pagrindiniai patiekalai ——
  {
    id: "falafel-lekste",
    name: { lt: "Libanietiško stiliaus FALAFELIŲ lėkštė + PEPSI NEMOKAMAI", en: "Lebanese Falafel Plate + Free Pepsi" },
    description: {
      lt: "Falafelių lėkštė su bulvytėmis, „Coleslaw“ ir tabulės salotomis su kuskusu, marinuotomis paprikomis ir svogūnais bei pitos duonele",
      en: "Falafel plate with fries, coleslaw and tabbouleh with couscous, marinated peppers and onions, plus pita bread",
    },
    price: 15.9,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
    vegan: true,
    isNew: true,
  },
  {
    id: "doner-lekste",
    name: { lt: "Libanietiško stiliaus VIŠTIENOS Doner kebabas lėkštėje + PEPSI NEMOKAMAI", en: "Lebanese Chicken Doner Plate + Free Pepsi" },
    description: {
      lt: "Vištienos doner kebabas lėkštėje su bulvytėmis, „Coleslaw“ ir tabulės salotomis su kuskusu, marinuotomis paprikomis ir svogūnais bei pitos duonele",
      en: "Chicken doner plate with fries, coleslaw and tabbouleh with couscous, marinated peppers and onions, plus pita bread",
    },
    price: 15.9,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
    isNew: true,
  },
  {
    id: "lietiniu-vaflis",
    name: { lt: "Lietinių vaflis su naminiais bulvių traškučiais", en: "Crepe Waffle with Homemade Potato Chips" },
    description: {
      lt: "Lietinių blynų vaflis su kumpiu, čederio ir parmezano sūriais, baziliko pesto, saulėje džiovintais ir šviežiais pomidorais bei prieskoninėmis žolelėmis",
      en: "Crepe waffle with ham, cheddar and parmesan, basil pesto, sun-dried and fresh tomatoes, and herbs",
    },
    price: 14.9,
    image: PHOTOS.baras,
    category: "food",
    section: "mains",
  },
  {
    id: "salotos-krevetes",
    name: { lt: "Salotos su krevetėmis", en: "Shrimp Salad" },
    description: {
      lt: "Šviežios salotos, daržovės, keptos marinuotos krevetės, parmezano sūris, marinuoti svogūnai, žolelių padažas",
      en: "Fresh greens, vegetables, grilled marinated shrimp, parmesan, pickled onions, herb dressing",
    },
    price: 13.5,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
    allergens: ["shellfish", "dairy"],
  },
  {
    id: "fish-and-chips",
    name: { lt: "Fish and Chips (menkė alaus tešloje)", en: "Fish and Chips (Beer-Battered Cod)" },
    description: {
      lt: "Menkė alaus tešloje patiekiama su bulvytėmis fri, majoneziniu agurkiniu padažu, kopūstų-morkų salotomis",
      en: "Beer-battered cod served with fries, mayo-cucumber sauce and cabbage-carrot salad",
    },
    price: 14.5,
    image: PHOTOS.baras4,
    category: "food",
    section: "mains",
    allergens: ["fish", "gluten"],
  },
  {
    id: "bulviniai-lasisa",
    name: { lt: "Bulviniai blynai su lašiša ir žolelių varške", en: "Potato Pancakes with Salmon and Herb Cheese" },
    description: {
      lt: "Tarkuotų bulvių blynai su rūkyta lašiša ir trinta žolelių varške",
      en: "Grated potato pancakes with smoked salmon and herb cream cheese",
    },
    price: 13.6,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
    allergens: ["fish", "dairy"],
  },
  {
    id: "wok-krevetes",
    name: { lt: "Azijietiški WOK makaronai su krevetėmis", en: "Asian WOK Noodles with Shrimp" },
    description: {
      lt: "Azijietiški ramen makaronai su krevetėmis, daržovėmis ir teriyaki kario padažu",
      en: "Asian ramen noodles with shrimp, vegetables and teriyaki curry sauce",
    },
    price: 14.6,
    image: PHOTOS.makaronai,
    category: "food",
    section: "mains",
    allergens: ["shellfish"],
  },
  {
    id: "salotos-vistiena",
    name: { lt: "Salotos su vištiena", en: "Chicken Salad" },
    description: {
      lt: "Šviežios salotos, daržovės, vištienos juostelės, parmezano sūris, marinuoti svogūnai, žolelių padažas",
      en: "Fresh greens, vegetables, chicken strips, parmesan, pickled onions, herb dressing",
    },
    price: 11.5,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
  },
  {
    id: "salotos-falafel",
    name: { lt: "Salotos su falafeliais", en: "Falafel Salad with Curry Sauce" },
    description: {
      lt: "Šviežios salotos, daržovės, falafeliai, parmezano sūris, marinuoti svogūnai, kario padažas",
      en: "Fresh greens, vegetables, falafel, parmesan, pickled onions, curry dressing",
    },
    price: 11.5,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
    vegan: true,
  },
  {
    id: "pita-jautiena",
    name: { lt: "Kepta itališka pita su jautiena ir bulvytėmis + PEPSI NEMOKAMAI", en: "Grilled Italian Pita with Beef + Free Pepsi" },
    description: {
      lt: "Kepta įdaryta pita su malta jautiena, mocarelos sūriu, pomidorais, spec. mėsainių padažu ir bulvytėmis",
      en: "Grilled stuffed pita with ground beef, mozzarella, tomatoes, burger sauce and fries",
    },
    price: 14.5,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
  },
  {
    id: "vistienos-juosteles",
    name: { lt: "Traškios vištienos juostelės su bulvytėmis fri ir padažu", en: "Crispy Chicken Strips with Fries and Sauce" },
    description: {
      lt: "Vištienos kepsneliai traškioje kukurūzų dribsnių plutelėje su gruzdintomis fri bulvytėmis ir pomidorų padažu",
      en: "Chicken in crispy cornflake coating with fries and tomato sauce",
    },
    price: 9.5,
    image: PHOTOS.sparneliai,
    category: "food",
    section: "mains",
  },
  {
    id: "zemaiciu-blynai",
    name: { lt: "Žemaičių blynai", en: "Samogitian Pancakes" },
    description: {
      lt: "Žemaičių blynai su mėsa grietinės ir sviesto padaže",
      en: "Samogitian potato pancakes with meat in sour cream and butter sauce",
    },
    price: 9.6,
    image: PHOTOS.baras5,
    category: "food",
    section: "mains",
  },
  {
    id: "wok-vistiena",
    name: { lt: "Azijietiški WOK makaronai su vištiena", en: "Asian WOK Noodles with Chicken" },
    description: {
      lt: "Azijietiški ramen makaronai su vištiena, daržovėmis ir teriyaki kario padažu",
      en: "Asian ramen noodles with chicken, vegetables and teriyaki curry sauce",
    },
    price: 13.6,
    image: PHOTOS.makaronai,
    category: "food",
    section: "mains",
  },
  {
    id: "varsketukai",
    name: { lt: "Kepti varškėtukai", en: "Fried Curd Dumplings" },
    description: {
      lt: "Kepti varškėtukai patiekiami su grietine ir uogiene arba su karamele",
      en: "Fried curd dumplings with sour cream and jam or caramel",
    },
    price: 8.2,
    image: PHOTOS.baras,
    category: "food",
    section: "mains",
  },
  {
    id: "bbq-sparneliai",
    name: { lt: "BBQ vištienos sparneliai", en: "BBQ Chicken Wings" },
    description: {
      lt: "BBQ sweet chilli vištienos sparneliai patiekiami su kopūstų-agurkų salotomis ir bulvytėmis",
      en: "BBQ sweet chilli chicken wings with coleslaw and fries",
    },
    price: 13.6,
    image: PHOTOS.sparneliai,
    category: "food",
    section: "mains",
  },
  {
    id: "sumustiniai",
    name: { lt: "Kepti trikampiai sumuštiniai su vištiena", en: "Grilled Triangle Sandwiches with Chicken" },
    description: {
      lt: "Su kreminiu ir čedario sūriais, vištiena, pomidorais, marinuotų agurkų-garstyčių padažu, adžika ir marinuotais svogūnais",
      en: "With cream and cheddar cheese, chicken, tomato, pickle-mustard sauce, adjika and pickled onions",
    },
    price: 14.5,
    image: PHOTOS.baras,
    category: "food",
    section: "mains",
  },
  {
    id: "quesadillas",
    name: { lt: "Kesadilijos", en: "Quesadillas" },
    description: {
      lt: "Traškios meksikietiškos kesadilijos su sūriu, vištiena ir šviežiomis daržovėmis, patiekiamos su salsa ir grietine",
      en: "Crispy Mexican quesadillas with cheese, chicken and fresh vegetables, served with salsa and sour cream",
    },
    price: 12.5,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
  },
  {
    id: "burrito",
    name: { lt: "Burrito", en: "Burrito" },
    description: {
      lt: "Firminis burrito su vištiena, ryžiais, pupelėmis, sūriu ir šviežiomis daržovėmis",
      en: "Signature burrito with chicken, rice, beans, cheese and fresh vegetables",
    },
    price: 12.5,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
  },
  {
    id: "gnocci",
    name: { lt: "Gnocci kreminiame kokosų ir saulėje džiovintų pomidorų padaže", en: "Gnocchi in Coconut & Sun-Dried Tomato Cream" },
    description: {
      lt: "Itališki gnocci kreminiame kokosų pieno ir saulėje džiovintų pomidorų padaže su šviežiomis žolelėmis",
      en: "Italian gnocchi in a creamy coconut milk and sun-dried tomato sauce with fresh herbs",
    },
    price: 13.5,
    image: PHOTOS.makaronai,
    category: "food",
    section: "mains",
    vegan: true,
  },
  {
    id: "kesadilijos-veg",
    name: { lt: "Vegetariškos kesadilijos", en: "Vegetarian Quesadillas" },
    description: {
      lt: "Traškios kesadilijos su sūriu, daržovėmis ir pupelėmis, patiekiamos su salsa",
      en: "Crispy quesadillas with cheese, vegetables and beans, served with salsa",
    },
    price: 11.5,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
    vegan: true,
  },
  {
    id: "tortilija-vistiena",
    name: { lt: "Tortilija su vištiena", en: "Chicken Tortilla" },
    description: {
      lt: "Firminė tortilija su vištiena, šviežiomis daržovėmis, traškiais svogūnėliais ir naminiais padažais",
      en: "Signature tortilla with chicken, fresh vegetables, crispy onions and house sauces",
    },
    price: 9.5,
    image: PHOTOS.tortilija,
    category: "food",
    section: "mains",
  },
  {
    id: "tortilija-falafel",
    name: { lt: "Tortilija su falafeliais", en: "Falafel Tortilla" },
    description: {
      lt: "Firminė tortilija su falafeliais, šviežiomis daržovėmis ir naminiais padažais",
      en: "Signature tortilla with falafel, fresh vegetables and house sauces",
    },
    price: 9.5,
    image: PHOTOS.salotos,
    category: "food",
    section: "mains",
    vegan: true,
  },
  {
    id: "cepelinai",
    name: { lt: "Cepelinai su mėsa", en: "Cepelinai with Meat" },
    description: {
      lt: "Lietuviški cepelinai su mėsos įdaru",
      en: "Traditional Lithuanian cepelinai with meat filling",
    },
    price: 10,
    image: PHOTOS.baras5,
    category: "food",
    section: "mains",
  },
  // —— Užkandžiai ——
  {
    id: "bulviu-traskuciai",
    name: { lt: "Naminiai bulvių traškučiai", en: "Homemade Potato Chips" },
    description: {
      lt: "Naminiai bulvių traškučiai, patiekiami su naminiu padažu",
      en: "Homemade potato chips served with house sauce",
    },
    price: 7.5,
    image: PHOTOS.baras,
    category: "food",
    section: "snacks",
    vegan: true,
  },
  {
    id: "empanados",
    name: { lt: "Empanados", en: "Empanadas" },
    description: {
      lt: "Ispaniški pyragėliai su kumpiu ir sūriu",
      en: "Spanish pastries with ham and cheese",
    },
    price: 8.5,
    image: PHOTOS.baras,
    category: "food",
    section: "snacks",
  },
  {
    id: "duona-parmezanas",
    name: { lt: "Kepta duonelė su parmezano sūriu", en: "Garlic Bread with Parmesan" },
    description: {
      lt: "Kepta česnakinė duonelė su parmezano sūriu ir pikantišku padažu",
      en: "Grilled garlic bread with parmesan and spicy sauce",
    },
    price: 7.5,
    image: PHOTOS.baras,
    category: "food",
    section: "snacks",
  },
  {
    id: "pupeliu-salotos",
    name: { lt: "Pupelių salotos", en: "Beans in Sun-Dried Tomato Sauce" },
    description: {
      lt: "Sviestinių pupelių ir saulėje džiovintų pomidorų salotos, patiekiamos su kepta česnakine duonele",
      en: "Butter bean and sun-dried tomato salad served with grilled garlic bread",
    },
    price: 10,
    image: PHOTOS.salotos,
    category: "food",
    section: "snacks",
    vegan: true,
  },
  {
    id: "bulvytes-fri",
    name: { lt: "Bulvytės fri", en: "French Fries" },
    description: { lt: "Traškios bulvytės fri", en: "Crispy french fries" },
    price: 6,
    image: PHOTOS.baras2,
    category: "food",
    section: "snacks",
    vegan: true,
  },
  {
    id: "surio-kamuoliukai",
    name: { lt: "Sūrio kamuoliukai su jelapenais", en: "Cheese Balls with Jalapeños" },
    description: { lt: "Traškūs sūrio kamuoliukai su jelapenais ir padažu", en: "Crispy cheese balls with jalapeños and dipping sauce" },
    price: 8,
    image: PHOTOS.baras,
    category: "food",
    section: "snacks",
  },
  // —— VEGAN ——
  {
    id: "vegan-lietiniai",
    name: { lt: "Vegan lietiniai blynai", en: "Vegan Crepes" },
    description: {
      lt: "Vegan lietiniai blynai su bananais, uogiene ir žemės riešutų kremu",
      en: "Vegan crepes with banana, jam and peanut butter",
    },
    price: 11,
    image: PHOTOS.baras,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  {
    id: "vegan-salotos",
    name: { lt: "Veganiškos salotos su falafeliais", en: "Vegan Falafel Salad" },
    description: {
      lt: "Šviežios salotos, falafeliai, daržovės, marinuoti svogūnai, žolelių padažas",
      en: "Fresh greens, falafel, vegetables, pickled onions, herb dressing",
    },
    price: 11.2,
    image: PHOTOS.salotos,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  {
    id: "vegan-pupeliu",
    name: { lt: "Veganiškos pupelių salotos", en: "Vegan Bean Salad" },
    description: {
      lt: "Sviestinių pupelių ir saulėje džiovintų pomidorų salotos su vegan majonezu, patiekiama su kepta česnakine duonele",
      en: "Butter bean and sun-dried tomato salad with vegan mayo and garlic bread",
    },
    price: 10,
    image: PHOTOS.salotos,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  {
    id: "tom-yum-vegan",
    name: { lt: "Azijietiška Tom Yum sriuba (vegan)", en: "Vegan Tom Yum Soup" },
    description: {
      lt: "Lengvai aštri azijietiška sriuba su ramen makaronais, daržovėmis, kokosu pienu ir citrinžolės rūgštele",
      en: "Lightly spicy Asian soup with ramen noodles, vegetables, coconut milk and lemongrass",
    },
    price: 9.6,
    image: PHOTOS.saltibarsciai,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  {
    id: "wok-tofu",
    name: { lt: "Azijietiški WOK makaronai su keptu tofu", en: "Asian WOK Noodles with Fried Tofu" },
    description: {
      lt: "Azijietiški ramen makaronai su keptu, rūkytu tofu ir daržovėmis, teriyaki ir kario padaže",
      en: "Asian ramen noodles with fried smoked tofu, vegetables, teriyaki and curry sauce",
    },
    price: 13.6,
    image: PHOTOS.makaronai,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  {
    id: "tortilija-vegan",
    name: { lt: "Veganiška tortilija", en: "Vegan Tortilla" },
    description: {
      lt: "Veganiška tortilija su falafeliais, šviežiomis daržovėmis ir kario padažu",
      en: "Vegan tortilla with falafel, fresh vegetables and curry sauce",
    },
    price: 9.5,
    image: PHOTOS.salotos,
    category: "food",
    section: "vegan",
    vegan: true,
  },
  // —— Sriubos ——
  {
    id: "sriuba-lasisa",
    name: { lt: "Azijietiška sriuba su lašiša", en: "Asian Soup with Salmon" },
    description: {
      lt: "Azijietiška sriuba su lašiša, daržovėmis ir ramen makaronais",
      en: "Asian soup with salmon, vegetables and ramen noodles",
    },
    price: 9.6,
    image: PHOTOS.saltibarsciai,
    category: "food",
    section: "soups",
    allergens: ["fish"],
  },
  {
    id: "saltibarsciai",
    name: { lt: "Šventiniai šaltibarščiai", en: "Festive Cold Beetroot Soup" },
    description: {
      lt: "Tradiciniai lietuviški šaltibarščiai",
      en: "Traditional Lithuanian cold beetroot soup",
    },
    price: 7.5,
    image: PHOTOS.saltibarsciai,
    category: "food",
    section: "soups",
    vegan: true,
  },
  // —— Desertai ——
  {
    id: "churros",
    name: { lt: "Ispaniškos CHURROS", en: "Spanish Churros" },
    description: {
      lt: "Ispaniškos churros patiekiamos su cinamoniniu cukrumi ir šokoladinio kondensuoto pieno padažu",
      en: "Spanish churros with cinnamon sugar and condensed chocolate sauce",
    },
    price: 6.6,
    image: PHOTOS.baras3,
    category: "food",
    section: "desserts",
  },
  // —— Kokteiliai ——
  {
    id: "gin-tonic",
    name: { lt: "Gin Tonic", en: "Gin & Tonic" },
    description: {
      lt: "Klasikinis gin tonic su žolelėmis ir citrina",
      en: "Classic gin and tonic with herbs and lemon",
    },
    price: 8,
    image: PHOTOS.baras3,
    category: "cocktails",
  },
  // —— Alkoholiniai ——
  {
    id: "alus-gutstout",
    name: { lt: "Alus Dundulio Gutstoutas 500 ml 5%", en: "Dundulis Gutstout 500ml 5%" },
    description: {
      lt: "Tamsus, avižinis stautas",
      en: "Dark oat stout",
    },
    price: 6,
    image: PHOTOS.baras2,
    category: "wineBeer",
  },
  {
    id: "alus-debesainis",
    name: { lt: "Alus Dundulio Debesainis 500 ml 5%", en: "Dundulis Debesainis 500ml 5%" },
    description: { lt: "Kvietinis alus", en: "Wheat beer" },
    price: 6,
    image: PHOTOS.baras2,
    category: "wineBeer",
  },
  {
    id: "alus-simkala",
    name: { lt: "Alus Dundulio Simkala APA 500 ml 5%", en: "Dundulis Simkala APA 500ml 5%" },
    description: { lt: "Amerikietiškas pale ale", en: "American Pale Ale" },
    price: 6,
    image: PHOTOS.baras2,
    category: "wineBeer",
  },
  {
    id: "sidras",
    name: { lt: "Obuolių sidras Tinginio pantis 330 ml 5%", en: "Tinginio Pantis Apple Cider 330ml 5%" },
    description: { lt: "Pusiau sausas obuolių sidras", en: "Semi-dry apple cider" },
    price: 5,
    image: PHOTOS.baras2,
    category: "wineBeer",
  },
  // —— Nealkoholiniai ——
  {
    id: "on-lemon-rabarbarai",
    name: { lt: "On Lemon rabarbarų 330 ml", en: "On Lemon Rhubarb 330ml" },
    description: { lt: "Natūralus rabarbarų limonadas", en: "Natural rhubarb lemonade" },
    price: 5,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  {
    id: "on-lemon-kriause",
    name: { lt: "On Lemon kriaušė 330 ml", en: "On Lemon Pear 330ml" },
    description: { lt: "Natūralus limonadas", en: "Natural lemonade" },
    price: 5,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  {
    id: "on-lemon-apelsinas",
    name: { lt: "On Lemon apelsinas 330 ml", en: "On Lemon Orange 330ml" },
    description: { lt: "Natūralus apelsinų limonadas", en: "Natural orange lemonade" },
    price: 5,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  {
    id: "coca-cola",
    name: { lt: "Coca-Cola 250 ml", en: "Coca-Cola 250ml" },
    description: { lt: "Coca-Cola", en: "Coca-Cola" },
    price: 3,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
  },
  {
    id: "coca-cola-zero",
    name: { lt: "Coca-Cola Zero 250 ml", en: "Coca-Cola Zero 250ml" },
    description: { lt: "Coca-Cola Zero", en: "Coca-Cola Zero" },
    price: 3,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
  },
  {
    id: "akvile",
    name: { lt: "Akvilė vanduo", en: "Akvilė Water" },
    description: { lt: "Gazuotas arba negazuotas mineralinis vanduo", en: "Sparkling or still mineral water" },
    price: 3,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  {
    id: "kombucha",
    name: { lt: "Vigo kombučia imbierinė", en: "Vigo Ginger Kombucha" },
    description: { lt: "Fermentuota imbierinė arbata", en: "Fermented ginger tea" },
    price: 5,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  {
    id: "gira",
    name: { lt: "Ruginė gira 0,33", en: "Rye Kvass 0.33l" },
    description: { lt: "Tradicinė ruginė gira", en: "Traditional rye kvass" },
    price: 3,
    image: PHOTOS.baras3,
    category: "nonAlcoholic",
    vegan: true,
  },
  // —— Kompleksai ——
  {
    id: "kompleksas-vegan",
    name: { lt: "Veganiška tortilija + bulvytės fri + gėrimas", en: "Vegan Tortilla + Fries + Drink" },
    description: {
      lt: "Firminė tortilija su falafeliais, šviežiomis daržovėmis, kario padažu, bulvytėmis fri, BBQ traškiais saldžiais svogūnėliais ir padažais + Coca-Cola",
      en: "Signature vegan tortilla with falafel, vegetables, curry sauce, fries, crispy onions and sauces + Coca-Cola",
    },
    price: 16.6,
    image: PHOTOS.salotos,
    category: "takeaway",
    vegan: true,
  },
  {
    id: "kompleksas-falafel",
    name: { lt: "Tortilija su falafeliais + bulvytės fri + gėrimas", en: "Falafel Tortilla + Fries + Drink" },
    description: {
      lt: "Firminė tortilija su falafeliais, daržovėmis, parmezanu, fri bulvytėmis ir naminiais padažais + Coca-Cola",
      en: "Signature falafel tortilla with vegetables, parmesan, fries and house sauces + Coca-Cola",
    },
    price: 16.6,
    image: PHOTOS.salotos,
    category: "takeaway",
    vegan: true,
  },
  {
    id: "kompleksas-fish",
    name: { lt: "Fish and Chips + svogūnų žiedai + gėrimas", en: "Fish and Chips + Onion Rings + Drink" },
    description: {
      lt: "Menkė alaus tešloje su bulvytėmis fri, majoneziniu agurkiniu padažu ir mėlynojo kopūsto salotomis + gėrimas",
      en: "Beer-battered cod with fries, mayo-cucumber sauce and cabbage salad + drink",
    },
    price: 16.6,
    image: PHOTOS.baras4,
    category: "takeaway",
    allergens: ["fish", "gluten"],
  },
  {
    id: "kompleksas-vistiena",
    name: { lt: "Tortilija su vištiena + bulvytės fri + gėrimas", en: "Chicken Tortilla + Fries + Drink" },
    description: {
      lt: "Firminė tortilija su vištiena, daržovėmis, parmezanu, fri bulvytėmis ir naminiais padažais + Coca-Cola",
      en: "Signature chicken tortilla with vegetables, parmesan, fries and house sauces + Coca-Cola",
    },
    price: 16.6,
    image: PHOTOS.tortilija,
    category: "takeaway",
  },
];

function menuItem(id: string): ScrapedMenuItem {
  const item = SCRAPED_MENU.find((i) => i.id === id);
  if (!item) throw new Error(`Missing menu item: ${id}`);
  return item;
}

/** Google Maps menu highlights */
export const FEATURED_ITEMS: ScrapedMenuItem[] = [
  menuItem("quesadillas"),
  menuItem("alus-simkala"),
  menuItem("salotos-falafel"),
  menuItem("burrito"),
  menuItem("salotos-vistiena"),
  menuItem("gin-tonic"),
  menuItem("tom-yum-vegan"),
  menuItem("bbq-sparneliai"),
  menuItem("wok-tofu"),
  menuItem("kompleksas-vegan"),
  menuItem("gnocci"),
  menuItem("pupeliu-salotos"),
  menuItem("kesadilijos-veg"),
  menuItem("on-lemon-rabarbarai"),
  menuItem("saltibarsciai"),
];

export const DAILY_SPECIALS_SCRAPED: ScrapedMenuItem[] = [
  menuItem("falafel-lekste"),
  menuItem("doner-lekste"),
  menuItem("lietiniu-vaflis"),
];

export const WOLT_MENU_SOURCE = {
  label: { lt: "Pateikta per Wolt", en: "Provided by Wolt" },
  url: "https://wolt.com/lt/ltu/palanga/restaurant/kefyro-usai",
  updatedAt: "2026-07-13",
};
