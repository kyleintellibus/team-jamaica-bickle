import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const sideArticles = [
  {
    category: "News",
    date: "December 19, 2025",
    title: "Team Jamaica Bickle Marks 25 Years of Supporting Caribbean Athletes",
    image: "/Content.png",
  },
  {
    category: "News",
    date: "December 19, 2025",
    title: "Team Jamaica Bickle Defibrillator Program Expands in Jamaica",
    image: "/Content.png",
  },
  {
    category: "News",
    date: "December 19, 2025",
    title: "Team Jamaica Bickle at the Penn Relays",
    image: "/Content.png",
  },
  {
    category: "News",
    date: "March 24, 2023",
    title: "Resorts World New York City Proudly Supports Team Jamaica Bickle",
    image: "/Content.png",
  },
];

export default function MediaNews() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-4xl font-bold">Media &amp; News</h2>
          <Button asChild variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black rounded-lg shrink-0">
            <Link href="/news">View All News</Link>
          </Button>
        </div>
        <p className="text-gray-400 text-sm max-w-xl mb-10 leading-relaxed">
          Explore the latest stories, announcements, and highlights from Team Jamaica Bickle as we
          continue supporting youth athletes from Jamaica and across the Caribbean.
        </p>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Featured article */}
          <div className="md:col-span-3">
            <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/Content.png"
                alt="Team Jamaica Bickle athletes"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs border border-white rounded-full px-2.5 py-0.5 text-white">Penn Relays</span>
              <span className="text-xs text-gray-400">1 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Team Jamaica Bickle Celebrates 30 Years of Service</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              The organization celebrates three decades of supporting youth athletes from Jamaica and
              across the Caribbean, highlighting its lasting impact on student-athletes competing internationally.
            </p>
          </div>

          {/* Side articles */}
          <div className="md:col-span-2 flex flex-col gap-0 divide-y divide-gray-800">
            {sideArticles.map((a, i) => (
              <div key={i} className="flex gap-3 py-4 group cursor-pointer">
                <div className="relative w-20 h-16 rounded shrink-0 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {a.category} &nbsp;|&nbsp; {a.date}
                  </p>
                  <p className="text-sm font-semibold leading-snug group-hover:text-green-400 transition-colors">
                    {a.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
