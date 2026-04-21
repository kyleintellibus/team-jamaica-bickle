import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

const articles: Record<string, {
  category: string;
  date: string;
  readTime: string;
  title: string;
  subtitle?: string;
  image: string;
  content: string[];
  relatedSlugs: string[];
}> = {
  "dajour-raymond-wins-high-jump-penn-relays-1": {
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    subtitle: "TJB athlete delivers a stunning performance at Franklin Field",
    image: "/Content.png",
    content: [
      "TJB athlete Dajour Raymond delivered a stunning performance to claim the high jump title at the Penn Relays, continuing Jamaica's proud tradition of excellence at the historic meet held at Franklin Field Stadium in Philadelphia.",
      "Raymond cleared the bar with authority, besting a competitive field of athletes from across the Caribbean and the United States. His victory is a testament to the dedication and support provided by Team Jamaica Bickle throughout his athletic career.",
      "\"This win means everything to me and to everyone at TJB who believed in me,\" Raymond said after the competition. \"The support I've received has allowed me to focus entirely on my training and performance.\"",
      "Team Jamaica Bickle has been a cornerstone of support for Caribbean athletes competing at the Penn Relays for over 30 years, providing hospitality, medical support, and logistical assistance to ensure athletes can perform at their best.",
      "The Penn Relays, held annually at the University of Pennsylvania's Franklin Field, is the oldest and largest track and field competition in the United States. Jamaican athletes have long been among the most celebrated competitors at the event.",
      "Raymond's victory adds to a long list of achievements by TJB-supported athletes at the Penn Relays, reinforcing the organization's mission to put athletes' welfare first and create an environment where they can thrive.",
    ],
    relatedSlugs: ["dajour-raymond-wins-high-jump-penn-relays-2", "tjb-30-years-supporting-athletes", "hibbert-wins-long-jump-penn"],
  },
  "dajour-raymond-wins-high-jump-penn-relays-2": {
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    subtitle: "A closer look at the championship performance",
    image: "/Content.png",
    content: [
      "In a thrilling conclusion to the high jump competition at the Penn Relays, Dajour Raymond soared above the competition to claim gold at Franklin Field Stadium.",
      "Raymond's technique was flawless throughout the competition, and his mental composure under pressure was evident as he navigated each height with precision and confidence.",
      "Team Jamaica Bickle's support infrastructure played a crucial role in Raymond's preparation, with the organization providing everything from accommodation to nutritional support during the competition week.",
      "The victory was celebrated by the entire TJB family, with supporters from across the Caribbean cheering loudly from the stands at Franklin Field.",
    ],
    relatedSlugs: ["dajour-raymond-wins-high-jump-penn-relays-1", "tjb-30-years-supporting-athletes", "edwin-allen-4x100-record"],
  },
  "dajour-raymond-wins-high-jump-penn-relays-3": {
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    subtitle: "Behind the scenes of a championship moment",
    image: "/Content.png",
    content: [
      "Behind every great athletic performance is a support system that makes it possible. For Dajour Raymond, that system is Team Jamaica Bickle.",
      "The organization's comprehensive athlete support program ensures that competitors like Raymond can focus entirely on their performance without worrying about logistics, accommodation, or medical needs.",
      "Raymond's high jump victory at the Penn Relays is the latest in a series of outstanding performances by TJB-supported athletes, demonstrating the effectiveness of the organization's holistic approach to athlete welfare.",
    ],
    relatedSlugs: ["dajour-raymond-wins-high-jump-penn-relays-1", "resorts-world-supports-tjb", "hibbert-wins-long-jump-penn"],
  },
  "dajour-raymond-wins-high-jump-penn-relays-4": {
    category: "Penn Relays",
    date: "April 28, 2024",
    readTime: "3 min read",
    title: "Dajour Raymond wins High Jump at the Penn Relays",
    subtitle: "The impact of TJB support on athlete performance",
    image: "/Content.png",
    content: [
      "The impact of Team Jamaica Bickle's support on athlete performance cannot be overstated. Dajour Raymond's Penn Relays high jump victory is a prime example of what becomes possible when athletes are given the resources they need to succeed.",
      "From the TJB Village hospitality program to the medical support team on standby, every aspect of the organization's operation is designed with the athlete in mind.",
      "Raymond joins a distinguished list of TJB-supported champions who have made their mark at the Penn Relays over the organization's 30-plus year history.",
    ],
    relatedSlugs: ["dajour-raymond-wins-high-jump-penn-relays-1", "tjb-30-years-supporting-athletes", "resorts-world-supports-tjb"],
  },
  "tjb-30-years-supporting-athletes": {
    category: "News",
    date: "March 2, 2024",
    readTime: "5 min read",
    title: "Team Jamaica Bickle, after 30 years, continuing to put athletes' welfare first",
    subtitle: "'Our Athletes, Our Ambassadors'",
    image: "/Content.png",
    content: [
      "'Our Athletes, Our Ambassadors.' Those are the words that govern the actions of one of the leading organizations in sports. Team Jamaica Bickle has spent over three decades ensuring that Caribbean athletes competing on the world stage have everything they need to succeed.",
      "Founded with a simple but powerful mission — to support Jamaican athletes competing at the Penn Relays — TJB has grown into a comprehensive support organization that touches every aspect of an athlete's experience.",
      "From the TJB Village hospitality program to the Defibrillator Initiative, the organization has consistently innovated to meet the evolving needs of athletes and their families.",
      "\"Thirty years ago, we saw a need and we filled it,\" said a TJB spokesperson. \"Today, we're proud to say that our athletes know they have a family behind them every step of the way.\"",
      "The organization's programs include athlete meals, medical support, hospitality services, and educational initiatives that extend well beyond the track. TJB's holistic approach to athlete welfare has made it a model for sports support organizations worldwide.",
      "As TJB looks ahead to the next 30 years, the organization remains committed to its founding mission while expanding its reach to support more athletes from Jamaica and across the Caribbean.",
    ],
    relatedSlugs: ["resorts-world-supports-tjb", "dajour-raymond-wins-high-jump-penn-relays-1", "hibbert-wins-long-jump-penn"],
  },
  "resorts-world-supports-tjb": {
    category: "News",
    date: "March 24, 2023",
    readTime: "4 min read",
    title: "Resorts World New York City Proudly Supports Team Jamaica Bickle",
    subtitle: "A partnership built on shared values",
    image: "/Content.png",
    content: [
      "Resorts World New York City announced its continued partnership and support of Team Jamaica Bickle ahead of the 2023 Penn Relays, reaffirming its commitment to the Caribbean community and athletic excellence.",
      "The partnership between Resorts World NYC and TJB reflects a shared commitment to supporting Caribbean athletes and celebrating the rich cultural heritage of Jamaica and the broader Caribbean diaspora.",
      "\"We are proud to stand alongside Team Jamaica Bickle in their mission to support these incredible athletes,\" said a Resorts World NYC representative. \"Their dedication to athlete welfare aligns perfectly with our values as an organization.\"",
      "The sponsorship will help fund TJB's comprehensive athlete support programs, including the TJB Village hospitality program, medical support services, and athlete meals during the Penn Relays.",
      "This partnership is part of a broader effort by TJB to secure sustainable funding for its programs, ensuring that athletes from Jamaica and across the Caribbean continue to receive world-class support at international competitions.",
    ],
    relatedSlugs: ["tjb-30-years-supporting-athletes", "dajour-raymond-wins-high-jump-penn-relays-1", "edwin-allen-4x100-record"],
  },
  "edwin-allen-4x100-record": {
    category: "Featured",
    date: "April 30, 2022",
    readTime: "3 min read",
    title: "Edwin Allen smash 4×100 record, claim 4×800 title",
    subtitle: "A historic day at Franklin Field",
    image: "/Content.png",
    content: [
      "Edwin Allen dismissed their rivals to win the Penn Relays Championship of America 4×100-metre relays in a new meet record, delivering one of the most memorable performances in the history of the competition.",
      "The team's blistering run shattered the previous record and sent the crowd at Franklin Field into a frenzy, with Jamaican supporters celebrating what many are calling one of the greatest relay performances in Penn Relays history.",
      "Team Jamaica Bickle was on hand to support the Edwin Allen athletes throughout the competition, providing the logistical and emotional support that has become the hallmark of the organization's presence at the Penn Relays.",
      "\"This is what we work for,\" said a TJB representative. \"Seeing these young athletes achieve their dreams on the biggest stage — it's why we do what we do.\"",
      "The victory adds to Edwin Allen's storied legacy at the Penn Relays and reinforces Jamaica's position as a global powerhouse in track and field.",
    ],
    relatedSlugs: ["hibbert-wins-long-jump-penn", "tjb-30-years-supporting-athletes", "dajour-raymond-wins-high-jump-penn-relays-1"],
  },
  "hibbert-wins-long-jump-penn": {
    category: "Featured",
    date: "April 30, 2022",
    readTime: "2 min read",
    title: "HIBBERT WINS LONG JUMP AT PENN",
    subtitle: "Kingston College star overcomes injury to claim gold",
    image: "/Content.png",
    content: [
      "Despite competing with an injured ankle, Kingston College's Jaydon Hibbert still managed to outclass his rivals to claim the long jump title at the Penn Relays, in a performance that will be remembered for years to come.",
      "Hibbert's determination and mental toughness were on full display as he pushed through the pain to deliver a winning jump that left the crowd at Franklin Field in awe.",
      "Team Jamaica Bickle's medical support team played a crucial role in ensuring Hibbert was able to compete, providing treatment and monitoring throughout the competition.",
      "\"Jaydon's performance today is a testament to the spirit of Jamaican athletics,\" said a TJB spokesperson. \"We're incredibly proud of him and grateful that our medical team could help him get to the start line.\"",
      "The victory is a reminder of why TJB's medical support program is so vital — giving athletes the care they need to compete safely and at their best.",
    ],
    relatedSlugs: ["edwin-allen-4x100-record", "tjb-30-years-supporting-athletes", "dajour-raymond-wins-high-jump-penn-relays-1"],
  },
};

const allArticles = [
  { slug: "dajour-raymond-wins-high-jump-penn-relays-1", category: "Penn Relays", date: "April 28, 2024", title: "Dajour Raymond wins High Jump at the Penn Relays", image: "/Content.png" },
  { slug: "dajour-raymond-wins-high-jump-penn-relays-2", category: "Penn Relays", date: "April 28, 2024", title: "Dajour Raymond wins High Jump at the Penn Relays", image: "/Content.png" },
  { slug: "tjb-30-years-supporting-athletes", category: "News", date: "March 2, 2024", title: "Team Jamaica Bickle, after 30 years, continuing to put athletes' welfare first", image: "/Content.png" },
  { slug: "resorts-world-supports-tjb", category: "News", date: "March 24, 2023", title: "Resorts World New York City Proudly Supports Team Jamaica Bickle", image: "/Content.png" },
  { slug: "edwin-allen-4x100-record", category: "Featured", date: "April 30, 2022", title: "Edwin Allen smash 4×100 record, claim 4×800 title", image: "/Content.png" },
  { slug: "hibbert-wins-long-jump-penn", category: "Featured", date: "April 30, 2022", title: "HIBBERT WINS LONG JUMP AT PENN", image: "/Content.png" },
];

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = articles[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link href="/news">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  const related = allArticles.filter((a) => post.relatedSlugs.includes(a.slug)).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-6">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-lg text-gray-500 mb-8">{post.subtitle}</p>
        )}

        {/* Hero image */}
        <div className="relative w-full rounded-xl overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Body */}
        <div className="prose prose-gray max-w-none">
          {post.content.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-5 text-base">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-green-50 rounded-xl border border-green-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Support Team Jamaica Bickle</h3>
          <p className="text-sm text-gray-500 mb-5">
            Help us continue supporting athletes from Jamaica and across the Caribbean.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-semibold">
            <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">
              Donate Now
            </Link>
          </Button>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium text-green-600 mb-1">{a.category}</p>
                    <p className="text-xs text-gray-400 mb-2">{a.date}</p>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
