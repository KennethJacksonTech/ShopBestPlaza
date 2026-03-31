import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/stores/", label: "Stores" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-inverse text-fg-inverse">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div>
            <p className="text-accent-primary font-bold text-xl mb-2">
              Shop Best Plaza
            </p>
            <p className="text-fg-inverse-muted text-sm leading-relaxed">
              4310 S Western Street
              <br />
              Amarillo, TX 79109
            </p>
          </div>

          {/* Right */}
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-fg-inverse-muted text-sm hover:text-accent-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-surface-inverse-light my-8" />

        <p className="text-fg-inverse-muted text-xs text-center">
          Designed by KennethJackson.Tech
        </p>
      </div>
    </footer>
  );
}
