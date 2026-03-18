import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  {
    number: "30+",
    title: "Years of Community Support",
    desc: "Supporting youth athletes since 1994",
    bg: "bg-[#0d3d2a]",
    text: "text-white",
    numColor: "text-white",
  },
  {
    number: "650+",
    title: "Athletes & Coaches Supported Each Year",
    desc: "Student-athletes supported during Penn Relays",
    bg: "bg-[#c8f06b]",
    text: "text-gray-800",
    numColor: "text-gray-900",
  },
  {
    number: "2,000+",
    title: "Meals Served Daily",
    desc: "Served to athletes and coaches during the event",
    bg: "bg-[#e8fae0]",
    text: "text-gray-800",
    numColor: "text-[#0d3d2a]",
  },
  {
    number: "3,500+",
    title: "Athletes Served Since 1994",
    desc: "Generations of athletes have received hospitality and support through Team Jamaica Bickle.",
    bg: "bg-[#f5d020]",
    text: "text-gray-800",
    numColor: "text-gray-900",
  },
  {
    number: "150+",
    title: "Automated External Defibrillator donated",
    desc: "Life-saving defibrillators placed in Jamaican schools",
    bg: "bg-[#2db84b]",
    text: "text-white",
    numColor: "text-white",
  },
];

export default function ImpactGlance() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact at a Glance</h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Our work over the past 30+ years reflects the strength of our community and the
            commitment to supporting youth athletes competing on the international stage.
          </p>
          <Button asChild className="mt-6 bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
            <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
          </Button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-end">
          {stats.map((s, i) => (
            <div
              key={s.number}
              className={`${s.bg} ${s.text} p-5 flex flex-col justify-between`}
              style={{ height: [320, 260, 220, 280, 340][i] }}
            >
              <div>
                <p className={`text-4xl font-bold ${s.numColor} mb-2`}>{s.number}</p>
                <p className="text-sm font-semibold leading-snug">{s.title}</p>
              </div>
              <p className="text-xs leading-relaxed opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
