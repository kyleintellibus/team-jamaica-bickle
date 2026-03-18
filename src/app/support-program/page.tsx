import Link from "next/link";
import { Button } from "@/components/ui/button";

const programs = [
  { name: "Athlete Meals Program", desc: "Fund daily meals for athletes and coaches at the Penn Relays.", href: "/athlete-meals" },
  { name: "Medical Support Services", desc: "Support on-site medical and physiotherapy care for competing athletes.", href: "/medical-support" },
  { name: "TJB Village", desc: "Help maintain the TJB Village — the home base for all athletes at Penn Relays.", href: "/tjb-village" },
  { name: "Defibrillator Program", desc: "Fund AED units and CPR training for schools across Jamaica.", href: "/defibrillator-program" },
  { name: "Labor of Love", desc: "Support TJB's annual fundraising gala and community events.", href: "/labor-of-love" },
];

export default function SupportProgramPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Get Involved</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Support a Program</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-12">
        Every program TJB runs is funded by the generosity of donors and supporters. Choose a program below to direct your support where it matters most.
      </p>
      <div className="space-y-4">
        {programs.map((p) => (
          <div key={p.name} className="flex items-center justify-between border border-gray-200 rounded-xl p-6 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full shrink-0">
              <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Donate</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
