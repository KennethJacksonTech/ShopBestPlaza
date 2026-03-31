import Hero from "@/components/Hero";
import StoreCard from "@/components/StoreCard";
import { getAllStores } from "@/lib/stores";

export default function StoresPage() {
  const stores = getAllStores();

  return (
    <>
      <Hero
        tag="OUR STORES"
        title="Store Directory"
        subtitle="12 unique locally-owned businesses under one roof"
      />

      <section className="bg-surface-primary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
