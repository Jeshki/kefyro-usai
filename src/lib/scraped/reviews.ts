/**
 * Google Maps reviews — Kefyro ūsai
 * Rating: 4.7/5 · 299 reviews
 * Last synced: 2026-07-13
 */
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: { lt: string; en: string };
  source: "Google";
  timeAgo?: { lt: string; en: string };
  priceRange?: string;
  highlight?: { lt: string; en: string };
}

export const GOOGLE_RATING = {
  score: 4.7,
  count: 299,
  sourceUrl: "https://www.google.com/maps/search/Kefyro+%C5%ABsai+Palanga",
  distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<1 | 2 | 3 | 4 | 5, number>,
};

/** Popular mentions from Google review summary */
export const REVIEW_HIGHLIGHTS = [
  { key: "tortilla", count: 38, label: { lt: "Tortilija", en: "Tortilla" } },
  { key: "pancakes", count: 4, label: { lt: "Bulviniai blynai", en: "Potato pancakes" } },
  { key: "outdoor", count: 3, label: { lt: "Lauko terasa", en: "Outdoor area" } },
  { key: "beet-soup", count: 4, label: { lt: "Šaltibarščiai", en: "Cold beet soup" } },
  { key: "kebab", count: 12, label: { lt: "Libanietiškas kebabas", en: "Lebanese kebab" } },
  { key: "vegan", count: 18, label: { lt: "Vegan opcijos", en: "Vegan options" } },
  { key: "falafel", count: 15, label: { lt: "Falafeliai", en: "Falafel" } },
  { key: "atmosphere", count: 45, label: { lt: "Atmosfera", en: "Atmosphere" } },
];

export const REVIEWS: Review[] = [
  {
    id: "paulius-stravinskas",
    name: "Paulius Stravinskas",
    rating: 5,
    timeAgo: { lt: "prieš 1 mėn.", en: "a month ago" },
    priceRange: "€10–15",
    highlight: { lt: "Libanietiškas kebabas", en: "Lebanese kebab" },
    text: {
      lt: "Viena mėgstamiausių vietų Palangoje! Ypač rekomenduočiau libanietišką kebabą — porcija tokia didelė, kad užteks vieno patiekalo. Maistas skanus, personalas mandagus, vieta pet friendly 😊",
      en: "One of my favourite places in Palanga! Especially recommend the Lebanese kebab — the portion is so big one dish is enough. Delicious food, polite staff, and pet friendly 😊",
    },
    source: "Google",
  },
  {
    id: "tom-krause",
    name: "Tom Krause",
    rating: 5,
    timeAgo: { lt: "prieš 3 sav.", en: "3 weeks ago" },
    text: {
      lt: "Tikrai nuostabi vieta! Azijietiška sriuba su lašiša buvo skani, personalas labai draugiškas. Rekomenduoju!",
      en: "Truly an amazing place, my Asian soup with salmon was delicious and the staff lady was very friendly. I recommend this place!",
    },
    source: "Google",
  },
  {
    id: "ruta-jakucioniene",
    name: "Rūta Jakučionienė",
    rating: 5,
    timeAgo: { lt: "prieš 3 sav.", en: "3 weeks ago" },
    priceRange: "€10–15",
    highlight: { lt: "Tortilija su vištiena", en: "Chicken tortilla" },
    text: {
      lt: "Valgiau vasarą, labai patiko muzika. Tortilija su traškia vištiena — išskirtinė ir labai skani 👌",
      en: "Ate here in summer, loved the music. The tortilla with crispy chicken was exceptional and delicious 👌",
    },
    source: "Google",
  },
  {
    id: "juste-buciunaite",
    name: "Justė Bučiūnaitė",
    rating: 5,
    timeAgo: { lt: "prieš 6 mėn.", en: "6 months ago" },
    priceRange: "€20–25",
    highlight: { lt: "Vegan meniu", en: "Vegan menu" },
    text: {
      lt: "Pati geriausia vieta Palangoje! Labai skanu, gražu, jauku, stilinga. Yra atskiras veganiško maisto meniu! Per atostogas ėjome kasdien!",
      en: "The best place in Palanga! Delicious, beautiful, cozy, stylish. Separate vegan menu! We came here every day on holiday!",
    },
    source: "Google",
  },
  {
    id: "kristijonas-b",
    name: "Kristijonas B",
    rating: 5,
    timeAgo: { lt: "prieš 6 mėn.", en: "6 months ago" },
    priceRange: "€50+",
    highlight: { lt: "Vegan tortilija, obuolių pyragas", en: "Vegan tortilla, apple pie" },
    text: {
      lt: "Labai skanus veganiškas maistas — vegan tortilija, obuolių pyragas ir pupelių salotos. Jauki atmosfera ir draugiškas personalas.",
      en: "Very tasty vegan food — vegan tortilla, apple pie and bean salad. Cozy atmosphere and friendly staff.",
    },
    source: "Google",
  },
  {
    id: "maverick",
    name: "I am Maverick",
    rating: 5,
    timeAgo: { lt: "prieš 6 mėn.", en: "6 months ago" },
    priceRange: "€10–15",
    highlight: { lt: "Falafeliai", en: "Falafel" },
    text: {
      lt: "Puiki vieta! Azijietiška sriuba su lašiša ir tortilija su falafeliais — skaniausi falafeliai kelionėje! Reggae muzika, jauki atmosfera, draugiški savininkai.",
      en: "Great place! Asian soup with salmon and falafel tortilla — the best falafel on our travels! Reggae music, cozy vibe, friendly owners.",
    },
    source: "Google",
  },
  {
    id: "migle-januseviciute",
    name: "Miglė Januševičiūtė",
    rating: 5,
    timeAgo: { lt: "prieš 1 metus", en: "a year ago" },
    priceRange: "€10–15",
    text: {
      lt: "Labai jauki vieta — ir viduje, ir terasoje! Gražus interjeras 😊 Skanus maistas (yra vegan opcijų), draugiškas aptarnavimas. Puiki patirtis!",
      en: "Such a cozy place, both indoors and on the terrace! Beautiful decor 😊 Tasty food (vegan options), friendly service. Great experience!",
    },
    source: "Google",
  },
  {
    id: "zuchryte",
    name: "Zuchryte",
    rating: 5,
    timeAgo: { lt: "prieš 11 mėn.", en: "11 months ago" },
    priceRange: "€10–15",
    highlight: { lt: "Didelės porcijos", en: "Large portions" },
    text: {
      lt: "Porcijos didžiulės, maistas tikrai skanus! Yra atskiras vegetariškų pasirinkimų meniu. Kefyro ūsai vadinasi bariuku, bet su vaikais niekas nevarė 🙂 Pritaikyta neįgaliesiems.",
      en: "Huge portions, really tasty food! Separate vegetarian menu. Called a bar but totally fine with kids 🙂 Wheelchair accessible.",
    },
    source: "Google",
  },
  {
    id: "sandra-tom",
    name: "Sandra Tom",
    rating: 5,
    timeAgo: { lt: "prieš 1 metus", en: "a year ago" },
    priceRange: "€45–50",
    text: {
      lt: "Apsilankėme pirmą kartą, bet tikrai ne paskutinį! Jauku, šilta, saulėta nuotaika. Muzika sustiprino jausmą, kad pataikėm būtent čia. Maistas labai skanus, aptarnavimas 100%!",
      en: "First visit but definitely not the last! Cozy, warm, sunny vibe. Music made it feel just right. Food delicious, service 100%!",
    },
    source: "Google",
  },
  {
    id: "gustas-vitkunas",
    name: "Gustas Vitkūnas",
    rating: 5,
    timeAgo: { lt: "prieš 4 mėn.", en: "4 months ago" },
    highlight: { lt: "Empanados, libanietiškas kebabas", en: "Empanados, Lebanese kebab" },
    text: {
      lt: "Empanados, libanietiškas kebabas ir atmosfera labai patiko. Panašu, kad bus nauja mėgstamiausia vieta pavalgyti Palangoje!",
      en: "Empanados, Lebanese kebab and the atmosphere were great. Looks like a new favourite place to eat in Palanga!",
    },
    source: "Google",
  },
  {
    id: "karolis-cibiras",
    name: "Karolis Cibiras",
    rating: 5,
    timeAgo: { lt: "prieš 2 metus", en: "2 years ago" },
    text: {
      lt: "Labai skanūs sumuštiniai ir skanūs gėrimai! Nustebino, kad taip greitai pagamino, maloniai aptarnavo. Labai jauki atmosfera ir chill muzika! 10 balų!",
      en: "Very tasty sandwiches and drinks! Surprised how fast they made it, lovely service. Cozy atmosphere and chill music! 10/10!",
    },
    source: "Google",
  },
  {
    id: "ruta-vaskyte",
    name: "Rūta Vaškytė",
    rating: 5,
    timeAgo: { lt: "prieš 2 metus", en: "2 years ago" },
    text: {
      lt: "Skanus, spalvingas, aromatingas maistas — tiek visavalgiam, tiek žolėdžiams. Fone groja kokybiška muzika. Hipsteriškas bariukas pačia geriausia prasme 🤍",
      en: "Tasty, colourful, aromatic food — for omnivores and vegetarians alike. Quality music in the background. A hipster bar in the best sense 🤍",
    },
    source: "Google",
  },
  {
    id: "tadas-perminas",
    name: "Tadas Perminas",
    rating: 5,
    timeAgo: { lt: "prieš 2 metus", en: "2 years ago" },
    priceRange: "€5–10",
    highlight: { lt: "Quesadillas, burrito", en: "Quesadillas, burrito" },
    text: {
      lt: "Maistas, aptarnavimas ir aplinka 💯 10/10! Greitai aptarnauja, malonus bendravimas. Savininkas gali prisėsti ir papasakoti kaip įkūrė tokią fainą vietą!",
      en: "Food, service and atmosphere 💯 10/10! Fast service, friendly chat. Owner might sit down and tell you how they started this great place!",
    },
    source: "Google",
  },
  {
    id: "monika-bendoraitiene",
    name: "Monika Bendoraitienė",
    rating: 5,
    timeAgo: { lt: "prieš 2 metus", en: "2 years ago" },
    highlight: { lt: "Quesadillas, burrito", en: "Quesadillas, burrito" },
    text: {
      lt: "Nerealus bariukas! Skanus maistas, puikus aptarnavimas, o aplinkos jaukumas — nesinori išeiti! 🤩 Būtinai sugrįšim dar ir kokteilių paragauti!",
      en: "Amazing little bar! Tasty food, great service, and such a cozy atmosphere you don't want to leave! 🤩 We'll definitely be back for cocktails!",
    },
    source: "Google",
  },
  {
    id: "domotor-toth",
    name: "Domotor Toth",
    rating: 5,
    timeAgo: { lt: "prieš 1 metus", en: "a year ago" },
    priceRange: "€10–15",
    highlight: { lt: "Tortilijos, blyneliai", en: "Tortillas, pancakes" },
    text: {
      lt: "Miela vieta su gera vibe, skaniu maistu ir gera muzika! Tortilijos ir blyneliai buvo tobuli. Tikrai norėčiau apsilankyti dar kartą!",
      en: "A lovely place with nice vibes, tasty food and good music! Tortillas and pancakes were perfect. Would definitely visit again!",
    },
    source: "Google",
  },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/kefyrousai/",
  instagram: "https://www.instagram.com/kefyrousai/?hl=en",
  instagramHandle: "@kefyrousai",
};
