import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/image-20.png", alt: "Grace Foods", href: "https://gracefoods.com" },
  { src: "/image-21.png", alt: "Jamaica Tourist Board", href: "https://www.visitjamaica.com" },
  { src: "/image-23.png", alt: "Resorts World Casino", href: "https://rwnewyork.com" },
  { src: "/image-24.png", alt: "New York Life", href: "https://www.newyorklife.com" },
  { src: "/image-26.png", alt: "On", href: "https://www.on.com" },
  { src: "/image-27.png", alt: "Second Round Foundation", href: "https://secondroundfoundation.org" },
  { src: "/image-30.png", alt: "Tower Isle's 50", href: "https://towerislespatties.com" },
  { src: "/image-31.png", alt: "BFW Group LLC", href: "https://bfwgroup.net" },
];

export default function LogosMarquee() {
  return (
    <div id="sponsors" className="w-full bg-white border-y border-gray-100 py-8 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
        Our Sponsors
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <Link
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mx-10 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
