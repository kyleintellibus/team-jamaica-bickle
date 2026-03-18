import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PennRelaysPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">The Penn Relays</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        The Penn Relays Experience
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        The Penn Relays Carnival, held annually at Franklin Field Stadium at the University of Pennsylvania in Philadelphia, is the oldest and largest track and field competition in the United States. For Jamaican and Caribbean athletes, it is the premier stage to compete internationally.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        Since 1994, Team Jamaica Bickle has been the backbone of support for these athletes — providing meals, medical care, transportation, and a home-away-from-home through the TJB Village. What began as a small volunteer effort has grown into one of the most recognized support organizations at the Penn Relays.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Each year, hundreds of student-athletes from Jamaica and across the Caribbean arrive in Philadelphia to compete. TJB ensures they are fed, cared for, and celebrated — so they can focus entirely on performing at their best.
      </p>
      <div className="flex gap-4">
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
          <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate now</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
