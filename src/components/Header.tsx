import Image from "next/image";
import Link from "next/link";
import Flag from "react-world-flags";

const navLinks = [
  { label: "Penn Relays", href: "#" },
  { label: "Fundraising", href: "#" },
  { label: "Programs", href: "#" },
  { label: "Sponsors", href: "#" },
  { label: "Media", href: "#" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/tjblogo.png"
            alt="Team Jamaica Bickle"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Country selector */}
          <button className="flex items-center gap-1.5 border border-gray-200 rounded-md px-2 py-1.5 hover:bg-gray-50 transition-colors">
            <Flag code="US" className="w-6 h-6 rounded-full object-cover" />
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Donate button */}
          <Link
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Donate now
          </Link>
        </div>
      </div>
    </header>
  );
}
