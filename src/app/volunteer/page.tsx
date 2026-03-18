import Link from "next/link";
import { Button } from "@/components/ui/button";

const roles = [
  { title: "Meals & Hospitality", desc: "Help prepare and serve meals to athletes and coaches at the TJB Village during the Penn Relays." },
  { title: "Medical Support", desc: "Assist medical professionals and physiotherapists in the TJB Medical Pavilion." },
  { title: "Logistics & Transportation", desc: "Help coordinate athlete transportation and logistics throughout the Penn Relays weekend." },
  { title: "Community Outreach", desc: "Support TJB's community programs and events throughout the year." },
];

export default function VolunteerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Get Involved</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Volunteer With Us</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-12">
        Team Jamaica Bickle runs entirely on the dedication of volunteers. Whether you're in Philadelphia for the Penn Relays or want to support year-round, there's a place for you on our team.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {roles.map((r) => (
          <div key={r.title} className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{r.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="/contact">Apply to volunteer</Link>
      </Button>
    </div>
  );
}
