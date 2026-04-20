import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerColumns = [
  {
    heading: "Browse",
    links: [
      { label: "The Penn Relays", href: "/penn-relays" },
      { label: "Defibrillator Program", href: "/defibrillator-program" },
      { label: "Labor of Love", href: "/labor-of-love" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Bickle TV", href: "/bickle-tv" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Athlete Meals Program", href: "/athlete-meals" },
      { label: "Medical Support Services", href: "/medical-support" },
      { label: "TJB Village", href: "/tjb-village" },
      { label: "Defibrillator Program", href: "/defibrillator-program" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Sponsor an Athlete", href: "/sponsor-athlete" },
      { label: "Support a Program", href: "/support-program" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "info@teamjamaicabickle.org", href: "mailto:info@teamjamaicabickle.org" },
      { label: "teamjamaicabickle@gmail.com", href: "mailto:teamjamaicabickle@gmail.com" },
      { label: "718 523-2861", href: "tel:+17185232861" },
      { label: "Team Jamaica Bickle, Inc\n242-14 Merrick Blvd\nRosedale, NY 11422", href: "/contact" },
    ],
  },
  {
    heading: "Follow us",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/teamjamaicabickle" },
      { label: "X (Formerly Twitter)", href: "https://twitter.com/teamjamaicabickle" },
      { label: "TikTok", href: "https://www.tiktok.com/@teamjamaicabickle" },
      { label: "Instagram", href: "https://www.instagram.com/teamjamaicabickle" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f1a] text-gray-300">
      {/* Hero image */}
      <div className="relative w-full" style={{ aspectRatio: "3 / 1" }}>
        <Image
          src="/footer_image.png"
          alt="Athletes at the Penn Relays"
          fill
          className="object-cover object-top"
        />
      </div>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Brand block */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/tjblogo.png"
              alt="Team Jamaica Bickle"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="text-white font-semibold text-base">Team Jamaica Bickle</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Team Jamaica Bickle is a nonprofit organization dedicated to supporting Jamaican and
            Caribbean youth athletes competing internationally at the Penn Relays.
          </p>
          <Button asChild className="mt-4 bg-green-600 hover:bg-green-700 text-white">
            <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate Now</Link>
          </Button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-semibold mb-3">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors whitespace-pre-line"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© Team Jamaica Bickle 2026</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
