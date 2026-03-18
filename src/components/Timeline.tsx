const milestones = [
  {
    year: "1994",
    desc: "Team Jamaica Bickle is founded to support Jamaican high school athletes traveling to Penn Relays.",
  },
  {
    year: "1999",
    desc: "The Jamaican flag flies at Franklin Field for the first time as a foreign flag during Penn Relays.",
  },
  {
    year: "2000s",
    desc: "The TJB Village program expands, serving hundreds of athletes annually.",
  },
  {
    year: "2014",
    desc: "The Defibrillator Program launches, placing life-saving AED devices in schools across Jamaica.",
  },
  {
    year: "2024",
    desc: "Team Jamaica Bickle celebrates 30 years of supporting youth athletes internationally.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-[#f5d020] leading-tight">
              30+ years of Supporting<br />Youth Athletes
            </h2>
          </div>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Since 1994, Team Jamaica Bickle has provided essential support for Jamaican and
              Caribbean athletes competing internationally.
            </p>
            <p>
              What began as a small volunteer effort has grown into one of the most important
              support systems for athletes traveling to the Penn Relays.
            </p>
          </div>
        </div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-5 mb-4">
            {milestones.map((m) => (
              <div key={m.year}>
                <span className="text-3xl font-bold text-white">{m.year}</span>
              </div>
            ))}
          </div>
          <div className="relative flex items-center mb-6">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-600" />
            <div className="grid grid-cols-5 w-full relative z-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex justify-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-500 border-2 border-gray-400" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {milestones.map((m) => (
              <p key={m.year} className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            ))}
          </div>
        </div>

        {/* Mobile timeline — vertical */}
        <div className="md:hidden flex flex-col gap-6 relative pl-6 border-l border-gray-700">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-gray-500 border-2 border-gray-400" />
              <p className="text-2xl font-bold text-white mb-1">{m.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
