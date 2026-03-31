import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import { getAllStores, getStoreBySlug } from "@/lib/stores";
import { Phone, Globe, MapPin, Tag } from "lucide-react";

export function generateStaticParams() {
  return getAllStores().map((store) => ({ slug: store.slug }));
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  if (!store) notFound();

  return (
    <>
      <Hero tag={store.category.toUpperCase()} title={store.name} />

      <section className="bg-surface-primary py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_360px] gap-10">
          {/* Main content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-fg-primary mb-4">
                About {store.name}
              </h2>
              <p className="text-fg-secondary leading-relaxed">
                {store.description}
              </p>
            </div>

            {store.services.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-fg-primary mb-3">
                  Products & Services
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {store.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-fg-secondary text-sm"
                    >
                      <span className="text-accent-primary mt-0.5">&#9679;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {store.hours && (
              <div>
                <h3 className="text-xl font-bold text-fg-primary mb-3">
                  Hours
                </h3>
                <p className="text-fg-secondary text-sm">{store.hours}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="bg-surface-secondary rounded-xl p-6 space-y-5 h-fit">
            <h3 className="font-bold text-fg-primary text-lg">
              Store Information
            </h3>

            {store.phone && (
              <div className="flex items-center gap-3 text-sm text-fg-secondary">
                <Phone size={16} className="text-accent-warm shrink-0" />
                <a href={`tel:${store.phone}`} className="hover:text-accent-primary">
                  {store.phone}
                </a>
              </div>
            )}

            {store.website && (
              <div className="flex items-center gap-3 text-sm text-fg-secondary">
                <Globe size={16} className="text-accent-warm shrink-0" />
                <a
                  href={store.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-primary truncate"
                >
                  Visit Website
                </a>
              </div>
            )}

            {store.suite && (
              <div className="flex items-center gap-3 text-sm text-fg-secondary">
                <MapPin size={16} className="text-accent-warm shrink-0" />
                {store.suite}
              </div>
            )}

            <div className="flex items-center gap-3 text-sm text-fg-secondary">
              <Tag size={16} className="text-accent-warm shrink-0" />
              {store.category}
            </div>
          </aside>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-12">
          <Link
            href="/stores/"
            className="text-accent-primary font-semibold text-sm hover:underline"
          >
            &larr; Back to All Stores
          </Link>
        </div>
      </section>
    </>
  );
}
