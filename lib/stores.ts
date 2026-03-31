export interface Store {
  slug: string;
  name: string;
  category: string;
  description: string;
  suite: string;
  phone: string;
  website: string;
  email: string;
  hours: string;
  services: string[];
  highlights: string[];
}

export const stores: Store[] = [
  {
    slug: "against-the-wall",
    name: "Against the Wall – Frame Shop",
    category: "Art & Framing",
    description:
      "Against the Wall is Amarillo's go-to destination for custom picture framing and art display solutions. Run by Billy Dunavin, all work is done on-site with expert consultation on frame styles, matting, and preservation techniques for everything from family portraits and diplomas to fine art and sports memorabilia. Highly rated by customers for quality craftsmanship and attention to detail.",
    suite: "Suite B",
    phone: "(806) 359-9255",
    website: "https://www.againstthewallframing.com",
    email: "",
    hours: "Mon–Fri 10am–6pm, Sat 9am–6pm",
    services: [
      "Custom picture framing",
      "Ready-made frames",
      "Shadow boxes",
      "Artwork display",
      "Matting & mounting",
    ],
    highlights: [
      "All work done on-site",
      "5-star rated by customers",
      "Wide selection of frame styles and materials",
    ],
  },
  {
    slug: "amarillo-mattress",
    name: "Amarillo Mattress",
    category: "Retail",
    description:
      "Amarillo Mattress is a locally-owned family mattress clearance center offering up to 70% off name-brand mattresses. They operate by appointment to guarantee the best pricing and a personalized shopping experience. Carrying brands like Sealy, DreamCloud, Nectar, and more, they offer same-day local delivery and free shipping across the lower 48 states.",
    suite: "Suite J",
    phone: "(806) 683-9662",
    website: "https://amarillomattress.com",
    email: "",
    hours: "Mon–Sat 10am–5:30pm (by appointment)",
    services: [
      "Mattress sales (Sealy, DreamCloud, Nectar, MLILY & more)",
      "Bed frames & foundations",
      "Pillows & bedding accessories",
      "Same-day local delivery",
      "Free shipping (lower 48 states)",
    ],
    highlights: [
      "Up to 70% off name-brand mattresses",
      "Family-owned clearance center",
      "Same-day delivery available",
    ],
  },
  {
    slug: "back-and-forth",
    name: "Back and Forth Storage Locker Treasures",
    category: "Retail",
    description:
      "Back and Forth Storage Locker Treasures brings the thrill of the hunt to Amarillo shoppers. Owned by Kristie, this well-organized resale shop sources most of its inventory from storage locker auctions. With an ever-changing selection of clothing, household items, collectibles, and unique finds, every visit is a new adventure. Praised for exceptional customer service and affordable prices.",
    suite: "Suite F",
    phone: "(806) 803-9624",
    website: "",
    email: "",
    hours: "Wed–Sat 10am–7pm, Sun 1pm–5pm",
    services: [
      "Storage locker auction finds",
      "Clothing",
      "Household items",
      "Collectibles & unique finds",
    ],
    highlights: [
      "Constantly rotating inventory",
      "Exceptional customer service",
      "Affordable prices on unique goods",
    ],
  },
  {
    slug: "chris-johnson-fine-art",
    name: "Chris Johnson – Fine Art",
    category: "Art & Framing",
    description:
      "Chris Johnson Fine Art showcases original paintings and prints by Amarillo-based artist Chris Johnson. Working primarily in pastels and oils, Chris has studied with numerous accomplished artists and brings the beauty of the Texas Panhandle to canvas. The studio offers original artwork, limited-edition prints, and commissioned pieces — perfect for collectors and anyone looking to add local art to their home or office.",
    suite: "",
    phone: "",
    website: "https://chrisjohnsonart.com",
    email: "",
    hours: "By appointment",
    services: [
      "Original paintings",
      "Limited-edition prints",
      "Commissioned artwork",
      "Art exhibitions",
      "Corporate art consultation",
    ],
    highlights: [
      "Local Amarillo artist",
      "Southwestern and Western-themed works",
      "Custom commissions available",
    ],
  },
  {
    slug: "creative-needle",
    name: "Creative Needle",
    category: "Crafts",
    description:
      "Creative Needle has been providing reliable, quality, and affordable alterations and tailoring services in Amarillo since 1993. Whether you need wedding or prom dress alterations, dance costumes, hemming, or general tailoring, their skilled seamstresses deliver expert craftsmanship with a personal touch. Trusted by the Amarillo community for over 30 years.",
    suite: "Suite S",
    phone: "(806) 355-6233",
    website: "",
    email: "",
    hours: "Mon–Fri 10am–6pm",
    services: [
      "Garment alterations",
      "Wedding dress alterations",
      "Prom dress alterations",
      "Dance costumes",
      "Hemming & tailoring",
    ],
    highlights: [
      "Established in 1993",
      "Trusted by the Amarillo community for 30+ years",
      "Expert seamstress work at affordable prices",
    ],
  },
  {
    slug: "gallery-ethnica",
    name: "Gallery Ethnica",
    category: "Art & Framing",
    description:
      "Gallery Ethnica is a globally-inspired warehouse outlet featuring hand-crafted folk art, jewelry, textiles, furniture, rugs, and décor from more than 50 countries. As an importer and wholesaler, Gallery Ethnica personally visits the artists they source from, and many items are Certified Fair Trade. The Amarillo location serves as a warehouse outlet with rotating close-out inventory from their flagship in Santa Fe, NM.",
    suite: "Suites R–T",
    phone: "",
    website: "https://galleryethnica.com",
    email: "info@galleryethnica.com",
    hours: "Thu–Sun 10am–5:30pm",
    services: [
      "Hand-crafted folk art",
      "International jewelry",
      "Textiles & woven goods",
      "Furniture & rugs",
      "Home décor & ceramics",
      "Certified Fair Trade products",
    ],
    highlights: [
      "Imports from over 50 countries",
      "Certified Fair Trade goods",
      "Warehouse outlet with close-out pricing",
    ],
  },
  {
    slug: "lip-store",
    name: "Lip Store",
    category: "Wellness",
    description:
      "The Lip Store offers a curated collection of beauty and cosmetics products with a focus on lip care, color, and skincare essentials. Whether you're looking for the perfect bold lip shade, nourishing lip treatments, or everyday beauty must-haves, this locally-owned beauty boutique provides personalized service and quality products at great prices.",
    suite: "",
    phone: "",
    website: "",
    email: "",
    hours: "",
    services: [
      "Lip color & cosmetics",
      "Skincare products",
      "Beauty accessories",
      "Gift sets",
    ],
    highlights: [
      "Curated beauty collections",
      "Personalized beauty consultations",
      "Locally owned boutique",
    ],
  },
  {
    slug: "massages",
    name: "Massages",
    category: "Wellness",
    description:
      "Elite Massage provides professional therapeutic and relaxation massage services in a calm, welcoming environment right inside Shop Best Plaza. Offering foot massage, deep tissue, Swedish, hot stone, couples massage, and reflexology, their therapists tailor each session to your specific needs. Walk-ins are welcome and the facility is wheelchair accessible.",
    suite: "",
    phone: "(806) 678-2302",
    website: "",
    email: "",
    hours: "",
    services: [
      "Foot massage",
      "Deep tissue massage",
      "Swedish massage",
      "Hot stone massage",
      "Couples massage",
      "Reflexology",
    ],
    highlights: [
      "Walk-ins welcome",
      "Wheelchair accessible",
      "Multiple massage styles available",
    ],
  },
  {
    slug: "recycled-entertainment",
    name: "Recycled Entertainment",
    category: "Gaming",
    description:
      "Recycled Entertainment is a retro gaming haven and one of Amarillo's most beloved shops, established in 2004. Stocking thousands of used and retro video games, consoles, and trading card games, they're the go-to spot for gamers and collectors alike. From classic NES and SEGA to PlayStation and Xbox, their shelves are packed with nostalgia. They also host in-store tournaments, free play nights, and buy-sell-trade programs.",
    suite: "Unit P",
    phone: "(806) 553-0697",
    website: "https://recycledentertainment.crystalcommerce.com",
    email: "",
    hours: "Mon–Thu 12pm–9pm, Fri 12pm–12am, Sat 12pm–11pm, Sun 12pm–9pm",
    services: [
      "Retro & used video games",
      "Gaming consoles (Nintendo, Xbox, PlayStation, Sega)",
      "Trading card games (Magic, Pokemon, Dragonball Z)",
      "In-store tournaments & free play nights",
      "Buy, sell & trade programs",
    ],
    highlights: [
      "Established in 2004",
      "Hosts tournaments and community events",
      "Buy-sell-trade on games and consoles",
    ],
  },
  {
    slug: "the-pop-stop",
    name: "The Pop Stop",
    category: "Food & Drinks",
    description:
      "The Pop Stop & SnoBall Stop is the plaza's favorite spot for a quick bite and a refreshing treat. Featuring over 100 homemade shaved ice flavors, Nathan's Famous hot dogs made daily, fresh-baked cookies every 30 minutes, specialty fountain drinks, and frozen daiquiris, The Pop Stop is a neighborhood staple. With a convenient drive-thru window and an ATM in the parking lot, it's easy to grab a treat on the go.",
    suite: "Suite V",
    phone: "(806) 679-6627",
    website: "https://popstopsnoballstop.com",
    email: "",
    hours: "Mon–Fri 6:30am–9:15pm, Sat 7:30am–9:15pm, Sun 8am–9:15pm",
    services: [
      "100+ homemade shaved ice flavors",
      "Nathan's Famous hot dogs (made daily)",
      "Fresh-baked cookies (every 30 minutes)",
      "Specialty fountain drinks",
      "Frozen daiquiris",
      "Drive-thru window",
    ],
    highlights: [
      "Over 100 homemade snow cone flavors",
      "Fresh-baked cookies every 30 minutes",
      "Convenient drive-thru window",
    ],
  },
  {
    slug: "the-vault-legacy",
    name: "The Vault – Legacy Gaming",
    category: "Gaming",
    description:
      "The Vault – Legacy Gaming is a family-owned indoor airsoft and paintball arena, offering an adrenaline-pumping experience for players of all skill levels with no age restrictions. Their indoor facility features multiple game modes including Team Deathmatch, Attack and Defense, Hostage, and more. Rental gear is available for first-timers, and private party packages start at $330 for up to 10 players.",
    suite: "Unit U",
    phone: "(806) 318-3006",
    website: "https://www.thevaultlegacy.com",
    email: "",
    hours: "Fri 3pm–12am, Sat 12pm–12am, Sun 2pm–10pm",
    services: [
      "Indoor airsoft arena",
      "Indoor paintball arena",
      "Rental gear for first-timers",
      "Private party packages ($330 for up to 10 players)",
      "All-day play passes",
      "Multiple game modes",
    ],
    highlights: [
      "Family-owned, no age restrictions",
      "Multiple game modes (TDM, Hostage, Knockout & more)",
      "Party packages available",
    ],
  },
  {
    slug: "the-wash-tub",
    name: "The Wash Tub",
    category: "Retail",
    description:
      "The Wash Tub is a well-maintained laundromat located inside Shop Best Plaza, operated by BST Laundry, LLC since 2019. Offering self-service coin-operated washers and dryers in various sizes, wash & fold service, dry cleaning, and a Laundry Bundle service with free pickup and delivery for residential and commercial customers. Accepts credit cards, Apple Pay, and offers free Wi-Fi.",
    suite: "Unit A",
    phone: "(806) 358-6566",
    website: "",
    email: "",
    hours: "Mon–Thu 7am–9pm, Fri–Sun 7am–10pm",
    services: [
      "Self-service coin-operated washers & dryers",
      "Wash & fold service",
      "Dry cleaning",
      "Laundry Bundle (free pickup & delivery)",
      "Free Wi-Fi",
    ],
    highlights: [
      "Accepts credit cards & Apple Pay",
      "Free pickup & delivery service",
      "Open 7 days a week",
    ],
  },
];

export function getAllStores(): Store[] {
  return stores;
}

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}

export function getStoresByCategory(category: string): Store[] {
  return stores.filter((s) => s.category === category);
}
