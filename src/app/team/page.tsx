import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Irwine Clare Sr.",
    title: "Founder & Executive Director",
    image: "/Irwine.jpg",
    bio: [
      "Irwine Clare Sr. is the visionary founder of Team Jamaica Bickle, an organization he established over 30 years ago with a singular mission: to ensure that Jamaican athletes competing at the Penn Relays had the support, dignity, and care they deserved.",
      "Born in Jamaica and deeply rooted in the Caribbean community of New York, Irwine recognized a gap — talented young athletes arriving in Philadelphia with no hospitality, no medical support, and no home away from home. He set out to change that.",
      "Under his leadership, TJB has grown from a grassroots hospitality effort into a comprehensive athlete support organization, running programs that span medical care, nutrition, education, and community engagement. His tireless advocacy for athlete welfare has earned him recognition from governments, sports federations, and communities across the Caribbean diaspora.",
      "Irwine's philosophy is simple: 'Our Athletes, Our Ambassadors.' He believes that when you invest in young people, you invest in the future of an entire nation.",
    ],
    quote: "Our Athletes, Our Ambassadors.",
    linkedin: "#",
    email: "mailto:info@teamjamaicabickle.org",
  },
  {
    name: "Lancelot L. Clarke",
    title: "Board Member & Legal Counsel",
    image: "/lancelot_l_clarke.png",
    bio: [
      "Lancelot L. Clarke brings decades of legal expertise and community leadership to Team Jamaica Bickle. As a trusted board member and legal counsel, he has been instrumental in shaping the organization's governance, partnerships, and long-term strategic direction.",
      "A distinguished attorney with deep ties to the Caribbean-American community, Lancelot has championed causes that uplift youth and celebrate Caribbean culture throughout his career. His commitment to TJB reflects a broader dedication to ensuring that organizations serving the community operate with integrity, transparency, and purpose.",
      "Lancelot has been a steady hand in navigating the legal and organizational complexities that come with running a nonprofit of TJB's scale and reach. His counsel has helped the organization forge meaningful partnerships with sponsors, government entities, and international sports bodies.",
      "Beyond his professional contributions, Lancelot is a passionate advocate for the athletes TJB serves — believing firmly that sport is one of the most powerful vehicles for personal development and national pride.",
    ],
    quote: "Sport is one of the most powerful vehicles for personal development and national pride.",
    linkedin: "#",
    email: "mailto:info@teamjamaicabickle.org",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0d1f1a] pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">Our People</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          The Team Behind<br />Team Jamaica Bickle
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          For over 30 years, these dedicated individuals have worked tirelessly to support
          Caribbean athletes on the world stage.
        </p>
      </div>

      {/* Team members */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        {team.map((person, i) => (
          <div
            key={person.name}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start`}
          >
            {/* Photo */}
            <div className="w-full md:w-80 shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={person.linkedin}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <span className="text-gray-200">|</span>
                <a
                  href={person.email}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-2">
                {person.title}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{person.name}</h2>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-green-500 pl-4 mb-6">
                <p className="text-lg font-medium text-gray-700 italic">"{person.quote}"</p>
              </blockquote>

              <div className="space-y-4">
                {person.bio.map((para, j) => (
                  <p key={j} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-green-50 border-t border-green-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Mission</h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
          Support the work of Team Jamaica Bickle and help us continue investing in the next generation of Caribbean athletes.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 font-semibold">
            <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">
              Donate Now
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-300 text-gray-700 px-8 font-semibold">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
