"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/stores/", label: "Stores" },
  { href: "/contact/", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-surface-inverse">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-accent-primary font-bold text-xl tracking-tight">
          Shop Best Plaza
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-fg-inverse text-sm font-semibold hover:text-accent-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-fg-inverse"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-surface-inverse-light px-6 pb-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block text-fg-inverse text-sm font-semibold py-2 hover:text-accent-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
