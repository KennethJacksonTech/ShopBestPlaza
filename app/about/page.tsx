import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero tag="ABOUT US" title="About Best Plaza" />

      <section className="bg-surface-primary py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-fg-secondary leading-relaxed">
          <p>
            Shop Best Plaza is a neighborhood shopping center located at 4310 S
            Western Street in Amarillo, Texas. Home to 12 unique locally-owned
            businesses, the plaza has been a gathering place for the Amarillo
            community for decades — offering everything from retro video games
            and international folk art to custom framing, massage therapy, and
            the best snow cones in town.
          </p>
          <p>
            What makes Shop Best Plaza special is its people. Every store is
            independently owned and operated by local entrepreneurs who take
            pride in their craft and their customers. There are no chain stores
            here — just real people building real businesses, serving their
            neighbors with care and expertise.
          </p>
          <p>
            Situated along the busy S Western Street commercial corridor, Shop
            Best Plaza is easy to find and offers convenient parking. Whether
            you&apos;re hunting for a rare retro game, looking for the perfect
            gift, or just stopping by for a fresh-baked cookie and a snow cone,
            there&apos;s always something to discover.
          </p>

          {/* Plaza photo placeholder */}
          <div className="rounded-xl bg-surface-secondary h-64 flex items-center justify-center mt-8">
            <span className="text-fg-secondary opacity-40 font-semibold">
              Plaza Photo
            </span>
          </div>

          <p>
            Shop Best Plaza is proudly managed by Lee Blakeney, who is committed
            to maintaining a welcoming, well-kept environment where local
            businesses and the community can thrive together.
          </p>
        </div>
      </section>
    </>
  );
}
