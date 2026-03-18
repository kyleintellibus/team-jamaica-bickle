"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = ["All", "News", "Penn Relays", "Events", "Programs", "Featured"];

const articles = [
  {
    slug: "dajour-raymond-wins-high-jump-penn-relays-1",
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    excerpt: "TJB athlete Dajour Raymond delivered a stunning performance to claim the high jump title at the Penn Relays, continuing Jamaica's proud tradition of excellence at the historic meet.",
    image: "/Content.png",
  },
  {
    slug: "dajour-raymond-wins-high-jump-penn-relays-2",
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    excerpt: "TJB athlete Dajour Raymond delivered a stunning performance to claim the high jump title at the Penn Relays, continuing Jamaica's proud tradition of excellence at the historic meet.",
    image: "/Content.png",
  },
  {
    slug: "dajour-raymond-wins-high-jump-penn-relays-3",
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    excerpt: "TJB athlete Dajour Raymond delivered a stunning performance to claim the high jump title at the Penn Relays, continuing Jamaica's proud tradition of excellence at the historic meet.",
    image: "/Content.png",
  },
  {
    slug: "dajour-raymond-wins-high-jump-penn-relays-4",
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    excerpt: "TJB athlete Dajour Raymond delivered a stunning performance to claim the high jump title at the Penn Relays, continuing Jamaica's proud tradition of excellence at the historic meet.",
    image: "/Content.png",
  },
  {
    slug: "tjb-30-years-supporting-athletes",
    category: "News",
    date: "March 2, 2024",
    readTime: "5 min read",
    title: "Team Jamaica Bickle, after 30 years, continuing to put athletes' welfare first",
    excerpt: "'Our Athletes, Our Ambassadors.' Those are the words that govern the actions of one of the leading organizations in sports.",
    image: "/Content.png",
  },
  {
    slug: "resorts-world-supports-tjb",
    category: "News",
    date: "March 24, 2023",
    readTime: "4 min read",
    title: "Resorts World New York City Proudly Supports Team Jamaica Bickle",
    excerpt: "Resorts World New York City announced its continued partnership and support of Team Jamaica Bickle ahead of the 2023 Penn Relays.",
    image: "/Content.png",
  },
  {
    slug: "edwin-allen-4x100-record",
    category: "Featured",
    date: "April 30, 2022",
    readTime: "3 min read",
    title: "Edwin Allen smash 4×100 record, claim 4×800 title",
    excerpt: "Edwin Allen dismissed their rivals to win the Penn Relays Championship of America 4×100-metre relays in a new meet record.",
    image: "/Content.png",
  },
  {
    slug: "hibbert-wins-long-jump-penn",
    category: "Featured",
    date: "April 30, 2022",
    readTime: "2 min read",
    title: "HIBBERT WINS LONG JUMP AT PENN",
    excerpt: "Despite competing with an injured ankle, Kingston College's Jaydon Hibbert still managed to outclass his rivals to claim the long jump title at the Penn Relays.",
    image: "/Content.png",
  },
];

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
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
        <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">Our Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Stories from<br />Team Jamaica Bickle
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          The latest stories, announcements, and highlights from Team Jamaica Bickle as we continue
          supporting youth athletes from Jamaica and across the Caribbean.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-5 py-2 text-sm font-semibold">
            All Posts
          </Button>
          <Button variant="outline" className="rounded-md px-5 py-2 text-sm font-semibold border-gray-300 text-gray-700">
            View Events
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block w-44 shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Category</p>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                  className={`w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors ${
                    activeCategory === cat
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {/* Mobile category pills */}
          <div className="flex gap-2 flex-wrap mb-6 md:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {paginated.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
                <div className="relative w-full rounded-lg overflow-hidden mb-3" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-green-600">{article.category}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="text-sm font-bold text-gray-900 leading-snug mb-2 group-hover:text-green-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="text-xs px-3 py-1.5 border border-gray-200 rounded-md text-gray-500 disabled:opacity-40 hover:bg-gray-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`text-xs w-8 h-8 rounded-md border transition-colors ${
                    page === n
                      ? "bg-green-600 text-white border-green-600"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="text-xs px-3 py-1.5 border border-gray-200 rounded-md text-gray-500 disabled:opacity-40 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
