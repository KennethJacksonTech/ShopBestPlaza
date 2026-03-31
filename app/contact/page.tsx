import Hero from "@/components/Hero";
import { MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Hero
        tag="GET IN TOUCH"
        title="Contact Us"
        height="180px"
      />

      <section className="bg-surface-primary py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_360px] gap-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-fg-primary mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-fg-primary mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-border-subtle rounded-lg px-4 py-3 text-sm bg-surface-primary text-fg-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-fg-primary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-border-subtle rounded-lg px-4 py-3 text-sm bg-surface-primary text-fg-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-fg-primary mb-1">
                  Inquiry Type
                </label>
                <select className="w-full border border-border-subtle rounded-lg px-4 py-3 text-sm bg-surface-primary text-fg-primary focus:outline-none focus:ring-2 focus:ring-accent-primary">
                  <option>General Inquiry</option>
                  <option>Leasing</option>
                  <option>Event</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-fg-primary mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-border-subtle rounded-lg px-4 py-3 text-sm bg-surface-primary text-fg-primary focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <p className="text-xs text-fg-secondary">
                Form functionality requires backend integration. For immediate
                inquiries, please visit the plaza in person.
              </p>
              <button
                type="button"
                className="bg-accent-primary text-surface-inverse font-semibold text-sm px-8 py-3 rounded-lg hover:bg-accent-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="bg-surface-secondary rounded-xl p-6 space-y-6 h-fit">
            <h3 className="font-bold text-fg-primary text-lg">
              Plaza Information
            </h3>

            <div className="flex items-start gap-3 text-sm text-fg-secondary">
              <MapPin size={16} className="text-accent-warm shrink-0 mt-0.5" />
              <span>
                4310 S Western Street
                <br />
                Amarillo, TX 79109
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm text-fg-secondary">
              <Clock size={16} className="text-accent-warm shrink-0 mt-0.5" />
              <span>Store hours vary by tenant.</span>
            </div>

            <div className="bg-accent-primary/10 rounded-lg p-4">
              <p className="text-sm font-semibold text-fg-primary mb-1">
                Leasing Inquiries
              </p>
              <p className="text-xs text-fg-secondary">
                Interested in leasing space at Shop Best Plaza? Select
                &ldquo;Leasing&rdquo; from the inquiry type above or visit us in
                person to discuss available suites.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
