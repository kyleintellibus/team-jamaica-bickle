import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SponsorAthletePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Get Involved</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Sponsor an Athlete</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        Your sponsorship directly supports a Jamaican or Caribbean student-athlete competing at the Penn Relays — covering meals, medical care, transportation, and accommodation support.
      </p>
      <p className="text-gray-500 leading-relaxed mb-12">
        For many of these young athletes, the Penn Relays is their first time competing internationally. Your support ensures they arrive prepared, cared for, and ready to represent their country with pride.
      </p>
      <div className="bg-[#0d3d2a] text-white rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-3">What your sponsorship covers</h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✓ Daily meals at the TJB Village</li>
          <li>✓ Medical and physiotherapy care</li>
          <li>✓ Transportation to and from Franklin Field</li>
          <li>✓ Accommodation support</li>
          <li>✓ Community and mentorship programs</li>
        </ul>
      </div>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Sponsor now</Link>
      </Button>
    </div>
  );
}
