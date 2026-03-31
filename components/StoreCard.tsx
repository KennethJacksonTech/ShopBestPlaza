import Link from "next/link";
import type { Store } from "@/lib/stores";

export default function StoreCard({ store }: { store: Store }) {
  const initials = store.name
    .replace(/[^A-Z]/g, "")
    .slice(0, 2);

  return (
    <Link
      href={`/stores/${store.slug}/`}
      className="group block rounded-xl border border-border-subtle bg-surface-primary overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Image placeholder */}
      <div className="h-40 bg-surface-secondary flex items-center justify-center">
        <span className="text-fg-secondary text-2xl font-bold opacity-40">
          {initials}
        </span>
      </div>

      <div className="p-5 space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-warm">
          {store.category}
        </p>
        <h3 className="text-lg font-bold text-fg-primary">{store.name}</h3>
        <p className="text-sm text-fg-secondary line-clamp-2">
          {store.description}
        </p>
        <span className="inline-block text-sm font-semibold text-accent-primary group-hover:translate-x-1 transition-transform">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
