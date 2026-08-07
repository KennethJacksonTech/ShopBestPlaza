# Shop Best Plaza — CLAUDE.md

@AGENTS.md

## Site Identity

- **Business**: Shop Best Plaza Shopping Center
- **Address**: 4310 S Western Street, Amarillo, TX 79109
- **GPS**: 35.167003, -101.885417
- **Owner**: Lee Blakney
- **Domain**: shopbestplaza.com
- **Type**: Neighborhood shopping center — 12 locally-owned tenant businesses
- **Built**: 1976, renovated 1985. Multi-tenant masonry with mansard roof and storefront entrances.

## Tech Stack

- Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4
- Static export ONLY (`output: "export"`)
- `trailingSlash: true`
- `images: { unoptimized: true }`

## Routes (16 pages)

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Best Plaza |
| `/stores` | Store Directory (all 12) |
| `/stores/against-the-wall` | Against the Wall — Frame Shop |
| `/stores/amarillo-mattress` | Amarillo Mattress |
| `/stores/back-and-forth` | Back & Forth Storage Locker Treasures |
| `/stores/chris-johnson-fine-art` | Chris Johnson — Fine Art |
| `/stores/creative-needle` | Creative Needle |
| `/stores/gallery-ethnica` | Gallery Ethnica |
| `/stores/lip-store` | Better Than Lipstick |
| `/stores/massages` | Elite Massage |
| `/stores/recycled-entertainment` | Recycled Entertainment |
| `/stores/the-pop-stop` | The Pop Stop & SnoBall Stop |
| `/stores/the-vault-legacy` | The Vault Legacy — Airsoft & Paintball |
| `/stores/the-wash-tub` | The Wash Tub |
| `/contact` | Contact |

## Store Profiles

> **Slug note (2026-08-07):** two stores' URL slugs do not match their business
> names — Better Than Lipstick lives at `/stores/lip-store/` and Elite Massage at
> `/stores/massages/`. The slugs below are the LIVE ones from lib/stores.ts and
> the published sitemap. Renaming them to match the business names would change
> two indexed URLs, so that is Kenneth's call, not a tidy-up.

All 12 stores are at 4310 S Western Street, Amarillo, TX 79109. Each store has a suite letter.

---

### 1. Against the Wall — Frame Shop
- **Slug**: `against-the-wall`
- **Category**: Art & Framing
- **Suite**: B
- **Phone**: (806) 359-9255
- **Website**: againstthewallframing.com
- **Description**: Custom picture framing with over 17 years of experience. Wood and metal frame options for photos, artwork, maps, and memorabilia. Modern, traditional, and everything in between — fast, affordable, and designed with your piece in mind.
- **Services**: Custom framing, photo framing, artwork framing, shadow boxes, mat cutting
- **Highlights**: 17+ years experience, affordable pricing, friendly service, wide frame selection

---

### 2. Amarillo Mattress
- **Slug**: `amarillo-mattress`
- **Category**: Retail
- **Suite**: J
- **Phone**: (806) 683-9662
- **Website**: amarillomattress.com
- **Description**: Clearance center offering premium mattress brands including Sealy, MLILY, DreamCloud, and Nectar. By appointment or walk-in. Wide selection at competitive prices with personalized customer service.
- **Hours**: Mon–Sat 9:00 AM – 5:30 PM (by appointment recommended)
- **Services**: Mattress sales, mattress delivery, sleep consultations
- **Highlights**: Premium brands, clearance pricing, appointment-based shopping for personal attention

---

### 3. Back & Forth Storage Locker Treasures
- **Slug**: `back-and-forth`
- **Category**: Retail
- **Suite**: F
- **Phone**: (806) 803-9624
- **Description**: Resale store with a "price cheaper guarantee." Furniture, home goods, and unique finds from storage locker auctions. Quality items at unbeatable prices. A treasure-hunting experience where new inventory appears regularly.
- **Services**: Resale furniture, home goods, storage auction finds, vintage items
- **Highlights**: Price cheaper guarantee, rotating inventory, quality furniture, friendly staff

---

### 4. Chris Johnson — Fine Art
- **Slug**: `chris-johnson-fine-art`
- **Category**: Art & Framing
- **Suite**: (studio on-site)
- **Website**: facebook.com/ChrisJohnsonArtist
- **Description**: Amarillo-based artist specializing in figurative work, portraits, animals, and landscapes. Works primarily in oils, pastels, and charcoals. Available for commissions from life or photographs. Also does caricature work, murals, children's book illustration, and teaching.
- **Services**: Portrait painting, landscape art, caricatures, murals, art instruction, book illustration, t-shirt design
- **Highlights**: Works from life or photo reference, murals in Amarillo and Lubbock, children's book illustrator

---

### 5. Creative Needle
- **Slug**: `creative-needle`
- **Category**: Crafts
- **Suite**: S
- **Phone**: (806) 355-6233
- **Owner**: Raymond Girard
- **Description**: Clothing alterations and tailoring shop. Trusted by the Amarillo community for wedding dress alterations, prom dress fittings, suit tailoring, zipper repairs, hemming, and general garment repair. Known for excellent work and friendly, personable service.
- **Services**: Clothing alterations, wedding dress alterations, prom dress fittings, suit tailoring, zipper replacement, hemming, coat repairs
- **Highlights**: Highly recommended locally, sweet and friendly staff, handles everything from everyday wear to formal garments

---

### 6. Gallery Ethnica
- **Slug**: `gallery-ethnica`
- **Category**: Art & Framing
- **Suite**: R–T
- **Phone**: (806) 418-2191
- **Website**: (Facebook: galleryethnica)
- **Description**: Importers of international folk art, furniture, rugs, jewelry, and ornaments. The owners know many of the artists personally and visit their cooperatives, villages, and workshops, offering backstory and history with each piece. Constantly rotating inventory with new close-out items weekly.
- **Hours**: Fri–Sun 10:00 AM – 5:30 PM (warehouse outlet hours)
- **Services**: International folk art, furniture, rugs, jewelry, ornaments, home decor
- **Highlights**: Direct-from-artist sourcing, personal relationships with artisans, constantly rotating inventory, unique international finds

---

### 7. Better Than Lipstick
- **Slug**: `lip-store`
- **Category**: Wellness
- **Suite**: Q
- **Phone**: (806) 683-4216
- **Description**: Permanent makeup clinic specializing in lip blushing and cosmetic tattooing. By chance or appointment — calling ahead is highly recommended. Professional beauty enhancement services in a comfortable setting.
- **Services**: Lip blushing, permanent makeup, cosmetic tattooing, beauty consultations
- **Highlights**: Specialized permanent makeup, by appointment recommended, professional results

---

### 8. Elite Massage
- **Slug**: `massages`
- **Category**: Wellness
- **Phone**: (806) 678-2302
- **Description**: Professional massage therapy studio offering a range of services from deep tissue to Swedish massage, tailored to individual needs. Trained professionals providing the best massage experience in a relaxing setting.
- **Services**: Deep tissue massage, Swedish massage, relaxation massage, therapeutic bodywork
- **Highlights**: Trained professional therapists, personalized sessions, walk-ins welcome

---

### 9. Recycled Entertainment
- **Slug**: `recycled-entertainment`
- **Category**: Gaming
- **Suite**: P
- **Phone**: (806) 553-0697
- **Description**: Game store offering an impressive array of gaming products — video games, board games, card games, and collectibles. A go-to destination for gamers of all ages. Kid-friendly atmosphere with a community focus. New and used games available.
- **Hours**: Mon 12:00 PM – 10:30 PM, Tue–Sun 12:00 PM – 10:00 PM
- **Services**: Video game sales (new and used), board games, card games, collectibles, trading cards, gaming accessories
- **Highlights**: Kid-friendly, huge selection, community gaming hub, evening hours

---

### 10. The Pop Stop & SnoBall Stop
- **Slug**: `the-pop-stop`
- **Category**: Food & Drinks
- **Suite**: V
- **Phone**: (806) 679-6627
- **Website**: popstopsnoballstop.com
- **Description**: Convenience store, soda fountain, and snow cone shop with a drive-thru window. Specialty sodas mixed with homemade cream and custom flavors, snacks, drinks, and desserts. A vibrant shop with incredible selection and customer service.
- **Hours**: Mon 6:30 AM – 9:00 PM (hours vary by day)
- **Services**: Specialty sodas, snow cones (snoballs), snacks, drinks, desserts, drive-thru service
- **Highlights**: Drive-thru window, homemade cream sodas, custom flavors, great for quick stops

---

### 11. The Vault Legacy — Airsoft & Paintball
- **Slug**: `the-vault-legacy`
- **Category**: Gaming
- **Suite**: U
- **Phone**: (806) 318-3006
- **Email**: thevaultlegacy@gmail.com
- **Website**: thevaultlegacy.com
- **Description**: Amarillo's only indoor airsoft and paintball field. Dynamic environment for both seasoned players and newcomers. Thrilling gameplay in a controlled indoor setting. Equipment rental available.
- **Services**: Indoor airsoft, indoor paintball, equipment rental, group events, birthday parties
- **Highlights**: Only indoor airsoft/paintball in Amarillo, great for groups, all skill levels welcome

---

### 12. The Wash Tub
- **Slug**: `the-wash-tub`
- **Category**: Retail
- **Suite**: A
- **Phone**: (806) 358-6566
- **Description**: Laundromat with self-service washers and dryers. Clean, well-maintained facility with friendly and helpful staff. Regular and double-loading machines available. Known for cleanliness — staff vacuums dryers and wipes out washers between uses.
- **Hours**: Mon–Sat 7:00 AM – 9:00 PM (approx), Sun 7:00 AM – 10:00 PM
- **Services**: Self-service laundry, large-capacity washers, dryers, coin-operated machines
- **Highlights**: Very clean facility, attentive staff, double-loading machines, affordable pricing

---

## Categories

Use these for the homepage category cards and store filtering:
- **Art & Framing**: Against the Wall, Chris Johnson Fine Art, Gallery Ethnica
- **Gaming**: Recycled Entertainment, The Vault Legacy
- **Food & Drinks**: The Pop Stop & SnoBall Stop
- **Wellness**: Better Than Lipstick, Elite Massage
- **Crafts**: Creative Needle
- **Retail**: Amarillo Mattress, Back & Forth, The Wash Tub

## Anti-Patterns

- NO chain-store / corporate mall aesthetic — this is a neighborhood center with local character
- NO font-weight: 300
- NO auto-push to git
- NO server-side features (no API routes, no middleware, no ISR)
- NO e-commerce, cart, or checkout
- NO external API dependencies beyond Google Maps iframe
- NO blue (#0000FF, #0066CC) — use earth tones from the design system

## Contact / Leasing

- **Plaza Address**: 4310 S Western Street, Amarillo, TX 79109
- **Owner**: Lee Blakney
- **Leasing Inquiries**: Contact Lee Blakney directly (no public phone listed — use contact form)
- **Google Maps Embed**: Use iframe with GPS coordinates 35.167003, -101.885417

## Footer

Every page must include: "Designed by KennethJackson.Tech" with link to kennethjackson.tech

## About Copy

Shop Best Plaza is a neighborhood shopping center on the S Western Street commercial corridor in Amarillo, Texas. Home to 12 locally-owned businesses, the plaza offers a unique mix of art, gaming, food, wellness, crafts, and retail — all under one roof. Built in 1976 and renovated in 1985, Best Plaza has been a gathering place for the community for decades. Whether you're hunting for vintage treasures, getting a custom frame, grabbing a specialty soda, or playing indoor airsoft, there's something for everyone at Best Plaza.
