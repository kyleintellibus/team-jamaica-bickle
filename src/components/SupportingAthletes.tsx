"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const tabs = [
  {
    label: "TJB Village",
    title: "TJB Village",
    subtitle: "A Home for Jamaican Athletes at Penn Relays",
    body: [
      "The TJB Village is the heart of Team Jamaica Bickle's support during the Penn Relays. It provides a welcoming space where athletes can rest, recover, receive meals, and connect with their community while competing abroad.",
      "The village brings together athletes, volunteers, and supporters in an environment that celebrates Jamaican pride and athletic excellence.",
    ],
    results: [
      "Central hub for Jamaican athletes during Penn Relays",
      "A safe and supportive space for rest and recovery",
    ],
  },
  {
    label: "Medical and Physiotherapy Care",
    title: "Medical and Physiotherapy Care",
    subtitle: "Keeping Athletes Healthy and Competition-Ready",
    body: [
      "Team Jamaica Bickle provides on-site medical and physiotherapy services to athletes during the Penn Relays, ensuring they receive prompt care for injuries and physical strain.",
      "Our team of medical professionals works around the clock to keep athletes healthy and performing at their best.",
    ],
    results: [
      "On-site medical support throughout the Penn Relays",
      "Physiotherapy and injury recovery services",
    ],
  },
  {
    label: "Hospitality",
    title: "Hospitality",
    subtitle: "A Warm Welcome for Every Athlete",
    body: [
      "From the moment athletes arrive, Team Jamaica Bickle ensures they feel at home. Our hospitality program covers meals, accommodation support, and cultural connection.",
      "We serve over 2,000 meals daily and create an environment where athletes from across the Caribbean feel supported and celebrated.",
    ],
    results: [
      "2,000+ meals served daily during Penn Relays",
      "Cultural and community connection for Caribbean athletes",
    ],
  },
];

export default function SupportingAthletes() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Supporting Jamaican Youth Athletes for more than 30 years
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Team Jamaica Bickle was founded in 1994 by Irwine G. Clare Sr. to support Jamaican
              high school athletes traveling to compete at the Penn Relays in Philadelphia. What
              began as a small hospitality initiative quickly grew into a trusted support system for
              student-athletes and coaches from across the Caribbean.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Today, the organization provides meals, medical services, transportation assistance,
              and mentorship for hundreds of athletes each year. For many young competitors
              traveling abroad for the first time, Team Jamaica Bickle offers a home away from home.
            </p>

            {/* Tab list */}
            <div className="flex flex-col">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className={`text-left py-3 border-b border-gray-200 text-sm transition-colors ${
                    active === i
                      ? "text-gray-900 font-semibold"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Image */}
            <div className="relative w-full rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/heroimg.png"
                alt="Athletes at Penn Relays"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-white text-sm font-medium">Reduced Resource Waste</p>
              </div>
            </div>

            {/* Tab content */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">{tab.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{tab.subtitle}</p>
            {tab.body.map((p, i) => (
              <p key={i} className="text-sm text-gray-500 leading-relaxed mb-3">{p}</p>
            ))}
            <p className="text-sm font-semibold text-gray-900 mb-2">Results:</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mb-6">
              {tab.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
              <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
