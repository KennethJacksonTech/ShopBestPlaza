import Link from "next/link";
import {
  Palette,
  Gamepad2,
  Utensils,
  Heart,
  Scissors,
  ShoppingBag,
} from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import StoreCard from "@/components/StoreCard";
import { getStoreBySlug } from "@/lib/stores";

const categories = [
  { icon: Palette, label: "Art & Framing" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Utensils, label: "Food & Drinks" },
  { icon: Heart, label: "Wellness" },
  { icon: Scissors, label: "Crafts" },
  { icon: ShoppingBag, label: "Retail" },
];

const featuredSlugs = [
  "recycled-entertainment",
  "gallery-ethnica",
  "the-pop-stop",
  "the-vault-legacy",
];

export default function Home() {
  const featured = featuredSlugs
    .map((s) => getStoreBySlug(s))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "480px",
          background: "linear-gradient(to bottom, #2C2416, #4A3D2A)",
        }}
      >
        <p className="text-accent-primary text-[11px] font-semibold uppercase tracking-[2px] mb-4">
          AMARILLO&apos;S NEIGHBORHOOD SHOPPING CENTER
        </p>
        <h1 className="text-fg-inverse font-extrabold text-5xl leading-tight max-w-3xl">
          Discover Local Treasures at Shop Best Plaza
        </h1>
        <p className="text-fg-inverse-muted mt-4 max-w-xl text-base">
          12 unique locally-owned businesses, all under one roof on S Western
          Street in Amarillo, Texas.
        </p>
        <Link
          href="/stores/"
          className="mt-8 inline-block bg-accent-primary text-surface-inverse font-semibold text-sm px-8 py-3 rounded-lg hover:bg-accent-secondary transition-colors"
        >
          Explore Our Stores
        </Link>
      </section>

      {/* Categories */}
      <section className="bg-surface-primary py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[32px] font-bold text-fg-primary mb-10">
            What Will You Discover?
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((c) => (
              <CategoryCard key={c.label} icon={c.icon} label={c.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[32px] font-bold text-fg-primary mb-10">
            Featured Stores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((store) => (
              <StoreCard key={store!.slug} store={store!} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-surface-primary py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[32px] font-bold text-fg-primary mb-4">
              Visit Us Today
            </h2>
            <p className="text-fg-secondary mb-2">
              4310 S Western Street
              <br />
              Amarillo, TX 79109
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=35.167003,-101.885417"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-surface-inverse text-fg-inverse font-semibold text-sm px-8 py-3 rounded-lg hover:bg-surface-inverse-light transition-colors"
            >
              Get Directions
            </a>
          </div>
          <div className="rounded-xl overflow-hidden">
            <iframe
              title="Shop Best Plaza Location"
              src="https://maps.google.com/maps?q=35.167003,-101.885417&z=16&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
