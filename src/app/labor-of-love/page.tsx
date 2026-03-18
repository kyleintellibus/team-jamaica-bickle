import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LaborOfLovePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Fundraising</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Labor of Love</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        The Labor of Love series is Team Jamaica Bickle's flagship fundraising initiative — a celebration of community, culture, and commitment to Jamaican and Caribbean youth athletes.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        Headlined by the annual "Labor of Love Luncheon – Black Tie & Sneakers Gala," the event brings together supporters, sponsors, athletes, and community members to raise funds that directly support TJB's programs at the Penn Relays and beyond.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Past events have been held at the Crest Hollow Country Club in Woodbury, New York, and have featured award presentations, live entertainment, and recognition of outstanding contributions to Jamaican athletics and community service.
      </p>
      <div className="bg-gray-50 rounded-xl p-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Labor of Love Luncheon Gala</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Join us each year for an evening of celebration, community, and giving. All proceeds go directly toward supporting Jamaican and Caribbean youth athletes competing internationally.
        </p>
      </div>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
      </Button>
    </div>
  );
}
