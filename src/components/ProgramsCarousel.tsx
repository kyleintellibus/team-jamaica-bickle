"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Athlete Meals Program",
    desc: "During the Penn Relays, Team Jamaica Bickle prepares and serves nearly 2,000 traditional Caribbean meals daily to athletes and coaches.",
    raised: "$60,000",
    goal: "$100,000",
    pct: 60,
  },
  {
    title: "Medical Support Services",
    desc: "Team Jamaica Bickle provides access to physiotherapists, chiropractors, and medical professionals throughout the Penn Relays.",
    raised: "$60,000",
    goal: "$100,000",
    pct: 60,
  },
  {
    title: "Defibrillator Program",
    desc: "Through its Defibrillator Program, Team Jamaica Bickle has donated 130+ automated external defibrillators to schools across Jamaica.",
    raised: "$60,000",
    goal: "$100,000",
    pct: 60,
  },
  {
    title: "TJB Village",
    desc: "The TJB Village is a welcoming hub where athletes rest, recover, and connect with their community while competing abroad.",
    raised: "$60,000",
    goal: "$100,000",
    pct: 60,
  },
  {
    title: "Labor of Love",
    desc: "A fundraising initiative that rallies the community to support Jamaican youth athletes with resources and encouragement.",
    raised: "$60,000",
    goal: "$100,000",
    pct: 60,
  },
];

function CircleProgress({ pct }: { pct: number }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative w-12 h-12 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={r} fill="none" stroke="#e5e7eb" strokeWidth="4" />
        <circle
          cx="22" cy="22" r={r} fill="none"
          stroke="#16a34a" strokeWidth="4"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
        {pct}%
      </span>
    </div>
  );
}

export default function ProgramsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight max-w-sm">
            Where Your Support<br />Makes a Difference
          </h2>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg shrink-0">
            <Link href="#">See all campaign</Link>
          </Button>
        </div>
        <p className="text-gray-500 text-sm max-w-sm mb-10 leading-relaxed">
          Your support helps fund essential programs that provide meals, medical care, and resources
          for athletes competing internationally.
        </p>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {programs.map((p, i) => (
              <div
                key={i}
                className="min-w-[300px] border border-gray-200 rounded-xl overflow-hidden flex flex-col"
              >
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gray-200" />

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{p.desc}</p>

                  <div className="flex items-center justify-between mb-4 mt-auto">
                    <div>
                      <p className="text-base font-bold text-gray-900">{p.raised}</p>
                      <p className="text-xs text-gray-400">raised of {p.goal} goal</p>
                    </div>
                    <CircleProgress pct={p.pct} />
                  </div>

                  <a href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Donate now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
