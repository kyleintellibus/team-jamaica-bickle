import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-64px)] flex flex-col overflow-hidden bg-[#edfaf0] pb-6"
      style={{
        backgroundImage: "url('/bg-pattern.png')",
        backgroundSize: "contain",
        backgroundPosition: "center 80%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top text content */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-10 text-center w-full">
        <div className="inline-flex items-center gap-2 border border-gray-200 bg-white rounded-full px-3 py-1 text-sm mb-6">
          <span className="text-gray-700 font-medium">The Penn Relays 2026</span>
          <span className="text-green-600 flex items-center gap-1 font-medium">
            Supporting Athletes at the 2026 Penn Relays <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <h1
          className="text-center mb-6"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}
        >
          Supporting Jamaica&apos;s Youth Athletes<br />Wherever They Compete
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          For over 30 years, Team Jamaica Bickle has supported Jamaican and Caribbean
          student-athletes at the Penn Relays through{" "}
          <strong>meals, medical care, mentorship, and community support.</strong>
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-full">
            <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-green-600 text-green-600 hover:bg-green-50 px-6">
            <Link href="#">Our programs</Link>
          </Button>
        </div>
      </div>

      {/* Image + card row — pinned to bottom */}
      <div className="flex-1 flex items-end overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-end">
          {/* Hero image */}
          <div className="relative w-full md:flex-1 rounded-t-xl overflow-hidden" style={{ height: "280px" }}>
            <Image
              src="/heroimg.png"
              alt="Jamaican athletes celebrating at Penn Relays"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-semibold text-base">Athlete Support Program</p>
              <p className="text-gray-300 text-sm mt-1">
                Team Jamaica Bickle ensures Jamaican youth athletes receive the care and support they need while competing abroad.
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="w-full md:w-72 shrink-0 bg-[#0d3d2a] text-white rounded-t-xl p-6" style={{ minHeight: "260px" }}>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="flex items-center gap-1 text-xs bg-white/10 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                The Penn Relays 2026
              </span>
              <span className="flex items-center gap-1 text-xs bg-white/10 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Fundraising
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 leading-snug">Athlete Support Program</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Providing meals, medical care, and recovery support for Jamaican youth athletes competing internationally.
            </p>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 rounded-full text-sm bg-transparent">
                <Link href="#">Learn more</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm">
                <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
