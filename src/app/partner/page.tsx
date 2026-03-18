import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PartnerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Get Involved</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Partner With Us</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        Partnering with Team Jamaica Bickle connects your organization to a passionate community of Jamaican and Caribbean athletes, families, and supporters — and directly funds programs that change lives.
      </p>
      <p className="text-gray-500 leading-relaxed mb-12">
        Our partners gain visibility at the Penn Relays, one of the most attended track and field events in the world, as well as recognition across our digital channels, events, and community programs.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {[
          { tier: "Community Partner", desc: "Logo placement and recognition at TJB events and digital channels." },
          { tier: "Gold Partner", desc: "Premium visibility at the TJB Village, Penn Relays, and all major events." },
          { tier: "Title Sponsor", desc: "Exclusive naming rights and top-tier visibility across all TJB programs and events." },
        ].map((t) => (
          <div key={t.tier} className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{t.tier}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  );
}
