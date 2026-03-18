import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TJBVillagePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Programs</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">TJB Village</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        The TJB Village is the HUB for all TJB activities at the Penn Relays Carnival. For the athletes, it is "a home-away-from-home" — the drop-off and departure point for the entire contingent each day, where athletes, coaches, and volunteers gather each morning for meals.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        The provision of meals is one that the TJB Team is proud of. Athletes are served a sumptuous fare each day consisting largely of Jamaican food they know and love — Ackee Saltfish, Callaloo, Jerk Chicken, Fish, Curry Goat, Banana, Hardough bread, Yam, and more. Roti and other Caribbean foods have been added as the tent becomes more Caribbean.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        The TJB Village is also the social center, the medical outpost, the physical therapy center, and a focal point for corporate sponsors. It is where national pride reigns supreme as fans gather to revel in the exploits of talented athletes and cheer on their countrymen.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Over the three-day carnival, the atmosphere is dynamic and the buzz is palpable. The colors of the flags, the music, the energy, the vibe, and the people are all reminders of home.
      </p>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
      </Button>
    </div>
  );
}
