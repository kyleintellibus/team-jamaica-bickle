import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    heading: "Browse",
    links: [
      { label: "The Penn Relays", href: "#" },
      { label: "Defibrillator Program", href: "#" },
      { label: "Labor of Love", href: "#" },
      { label: "Events", href: "#" },
      { label: "News", href: "#" },
      { label: "Bickle TV", href: "#" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Athlete Meals Program", href: "#" },
      { label: "Medical Support Services", href: "#" },
      { label: "TJB Village", href: "#" },
      { label: "Defibrillator Program", href: "#" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "Sponsor an Athlete", href: "#" },
      { label: "Support a Program", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Email", href: "#" },
      { label: "Phone", href: "#" },
      { label: "Mailing Address", href: "#" },
      { label: "Philadelphia, Pennsylvania\nUnited States", href: "#" },
    ],
  },
  {
    heading: "Follow us",
    links: [
      { label: "Facebook", href: "#" },
      { label: "X (Formerly Twitter)", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
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
          <Link
            href="#"
            className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Donate Now
          </Link>
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
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
