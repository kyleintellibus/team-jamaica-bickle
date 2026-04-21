"use client";

import Image from "next/image";
import Link from "next/link";
import Flag from "react-world-flags";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Penn Relays", href: "/penn-relays" },
  { label: "Fundraising", href: "https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget", external: true },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Media", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "About us", href: "/about" },
  { label: "Contacts", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="mx-auto grid h-16 w-full max-w-[1300px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5">
        <Link href="/" className="justify-self-start">
          <Image src="/tjblogo.png" alt="Team Jamaica Bickle" width={48} height={48} className="object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 justify-self-center">
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

        <div className="flex items-center justify-self-end gap-3">
          <button className="hidden lg:flex items-center gap-1.5 border border-gray-200 rounded-md px-2 py-1.5 hover:bg-gray-50 transition-colors">
            <Flag code="US" className="w-6 h-6 rounded-full object-cover" />
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
            Donate now
          </Link>
          <button className="lg:hidden p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
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
