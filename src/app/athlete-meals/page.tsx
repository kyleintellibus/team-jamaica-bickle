import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AthleteMealsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Programs</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Athlete Meals Program</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        During the Penn Relays, Team Jamaica Bickle prepares and serves nearly 2,000 traditional Jamaican and Caribbean meals daily to athletes, coaches, and staff — ensuring every competitor is properly fueled to perform at their best.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        Athletes are served a sumptuous fare each day: Ackee Saltfish, Callaloo, Jerk Chicken, Fish, Curry Goat, Banana, Hardough bread, Yam, and more. Roti and other Caribbean dishes have been added to the menu as the program has grown to serve athletes from across the Caribbean.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Maintaining a proper diet is vital to optimal athletic performance. TJB ensures athletes don't have to adjust to unfamiliar food while competing abroad — a small but meaningful advantage that makes a real difference.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-3xl font-bold text-green-600 mb-2">2,000+</p>
          <p className="text-sm text-gray-500">Meals served daily during Penn Relays</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-3xl font-bold text-green-600 mb-2">30+</p>
          <p className="text-sm text-gray-500">Years of feeding athletes at the Penn Relays</p>
        </div>
      </div>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Support this program</Link>
      </Button>
    </div>
  );
}
