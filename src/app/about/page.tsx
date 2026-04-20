import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/teamMembers";

const visionPoints = [
  "A future where Caribbean youth athletes compete globally with pride and support",
  "Stronger pathways for student-athletes to grow on and off the track",
  "A lasting legacy of Caribbean excellence, care, and representation",
];

const missionPoints = [
  "Support Jamaican and Caribbean student-athletes competing internationally",
  "Provide meals, wellness care, transportation, and hospitality during Penn Relays",
  "Serve young athletes through the spirit of 'Our Athletes, Our Ambassadors'",
];

const journeyMilestones = [
  {
    year: "1994",
    title: "Team Jamaica Bickle is Formed",
    description:
      "Team Jamaica Bickle is established in New York State by Irwine G. Clare Sr. to support Jamaican student-athletes traveling to Philadelphia for the Penn Relays. At the same time, the affiliated TJB-Philadelphia Organizing Committee is formed by co-founder Blane Stoddart, who now heads the affiliated Friends of Team Jamaica Bickle in Philadelphia.",
  },
  {
    year: "1999",
    title: "A Historic First at Penn Relays",
    description:
      "Team Jamaica Bickle becomes the first Jamaican organization to serve as a participating sponsor at the Penn Relays. As a result, the Jamaican flag becomes the first foreign flag to be flown at the Penn Relays, a distinction that remains unmatched.",
    highlighted: true,
  },
  {
    year: "2000s",
    title: "Programs and Reach Expand",
    description:
      "What began as a support system for Jamaican teams grows into a broader Caribbean mission. Over the years, Team Jamaica Bickle extends its services to student-athletes and coaches from Jamaica, Trinidad and Tobago, St. Vincent and the Grenadines, Guyana, Grenada, Bahamas, Barbados, United States Virgin Islands and Belize.",
  },
  {
    year: "2010s",
    title: "Support Services Deepen",
    description:
      "Team Jamaica Bickle expands the range of services available to athletes and coaches during Penn Relays, including meals and refreshments, physical therapy, chiropractic and medical services, mentorship, ground transportation, hotel-to-stadium shuttle service, airport transfers, subsidized hotel rates, and subsidized airfare.",
  },
  {
    year: "Today",
    title: "A Trusted Support System for Caribbean Youth Athletes",
    description:
      "Today, Team Jamaica Bickle provides services to a delegation of approximately 650 students and coaches each year. For many young athletes, Team Jamaica Bickle remains a home away from home during one of the most important competitions of their lives.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <div
        className="pt-36 pb-24 px-6 text-center relative overflow-hidden bg-[#edfaf0]"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: "contain",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
          minHeight: "420px",
        }}
      >
        <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">About Team Jamaica Bickle</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Meet the team behind
          <br />
          Team Jamaica Bickle
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Team Jamaica Bickle is a leading nonprofit organization providing support services for Caribbean
          student-athletes, particularly Jamaicans, who compete annually at the Penn Relays Carnival at the
          University of Pennsylvania in Philadelphia.
        </p>
      </div>

      <section className="bg-[#022a22] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-[#f6d42e] text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            What Team Jamaica Bickle
            <br />
            is about
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mt-8 leading-relaxed">
            Our work over the past 30+ years reflects the strength of our community and the commitment to
            supporting youth athletes competing on the international stage.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-14 mt-16 md:mt-20">
            <article>
              <h2 className="text-4xl font-semibold text-white">Our Vision</h2>
              <p className="mt-6 text-xl text-gray-200 leading-relaxed">
                To ensure that Caribbean youth athletes competing internationally have the support, care, and
                encouragement they need to perform with confidence and pride.
              </p>

              <ol className="mt-8">
                {visionPoints.map((point, index) => (
                  <li key={point} className="border-t border-white/20 py-5 flex items-start gap-5">
                    <span className="text-xl text-gray-200 w-5 shrink-0">{index + 1}</span>
                    <span className="text-xl text-gray-100 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article>
              <h2 className="text-4xl font-semibold text-white">Our Mission</h2>
              <p className="mt-6 text-xl text-gray-200 leading-relaxed">
                To provide essential services for student-athletes and coaches attending the Penn Relays and
                other international events, while representing the spirit of Jamaica through the motto: “Our
                Athletes, Our Ambassadors.”
              </p>

              <ol className="mt-8">
                {missionPoints.map((point, index) => (
                  <li key={point} className="border-t border-white/20 py-5 flex items-start gap-5">
                    <span className="text-xl text-gray-200 w-5 shrink-0">{index + 1}</span>
                    <span className="text-xl text-gray-100 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#1f3348]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-[#0f3158] text-4xl md:text-6xl font-semibold">Our Journey</h2>
          <p className="text-[#4f637c] max-w-xl mt-5 text-base md:text-lg">
            Our work over the past 30+ years reflects the strength of our community and the commitment to
            supporting youth athletes competing on the international stage.
          </p>

          <div className="mt-12 border-t border-[#d7dee6]">
            {journeyMilestones.map((item) => (
              <div
                key={item.year + item.title}
                className={[
                  "grid md:grid-cols-[110px_1.2fr_1.6fr] gap-6 md:gap-10 px-5 md:px-8 py-7 md:py-8 border-b border-[#d7dee6]",
                  item.highlighted ? "bg-[#ecf0f4] text-[#1f3348]" : "bg-white text-[#1f3348]",
                ].join(" ")}
              >
                <p className={item.highlighted ? "text-[#456179] font-semibold" : "text-[#1d4b7b] font-semibold"}>
                  {item.year}
                </p>
                <h3 className={item.highlighted ? "text-2xl font-semibold text-[#355067]" : "text-2xl font-semibold text-[#1a4f84]"}>
                  {item.title}
                </h3>
                <p className={item.highlighted ? "text-base leading-relaxed text-[#4c6279]" : "text-base leading-relaxed text-[#4f637c]"}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ecef] text-[#1a2234]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            The people behind
            <br />
            Team Jamaica Bickle
          </h2>
          <p className="max-w-xl text-lg text-[#4d5564] mt-6 leading-relaxed">
            Our work over the past 30+ years reflects the strength of our community and the commitment to
            supporting youth athletes competing on the international stage.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((person) => (
              <article key={person.slug} className="rounded-xl overflow-hidden bg-[#f4f6f8] border border-[#dde2e7]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-[#1f3850]">{person.name}</h3>
                  <p className="mt-2 text-sm text-[#6a7280]">{person.role}</p>
                  <p className="mt-3 text-sm text-[#4f5b6d] leading-relaxed min-h-16">{person.summary}</p>
                  {person.bio ? (
                    <Link
                      href={`/team/${person.slug}`}
                      className="mt-5 inline-flex items-center rounded-lg border border-[#d4e9d7] px-3 py-1.5 text-sm font-semibold text-green-600 hover:bg-green-50 transition-colors"
                    >
                      About
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-5 inline-flex items-center rounded-lg border border-[#e2e7ed] px-3 py-1.5 text-sm font-semibold text-[#9ba7b6] cursor-not-allowed"
                    >
                      About
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
