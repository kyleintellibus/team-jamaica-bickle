"use client";

import Image from "next/image";
import Link from "next/link";
import Flag from "react-world-flags";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Penn Relays", href: "/news" },
  { label: "Fundraising", href: "https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget", external: true },
  { label: "Programs", href: "#" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/tjblogo.png" alt="Team Jamaica Bickle" width={48} height={48} className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:flex items-center gap-1.5 border border-gray-200 rounded-md px-2 py-1.5 hover:bg-gray-50 transition-colors">
            <Flag code="US" className="w-6 h-6 rounded-full object-cover" />
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
            Donate now
          </Link>
          {/* Mobile hamburger */}
          <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md text-center" onClick={() => setOpen(false)}>
            Donate now
          </Link>
        </div>
      )}
    </header>
  );
}
