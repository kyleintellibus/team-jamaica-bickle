import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DefibrillatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Programs</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Defibrillator Program
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        The Team Jamaica Bickle "Defibrillator to Schools Program" was initiated in 2014 after the loss of St. Jago High School athlete Cavahn McKenzie at a cross-country meet in Tobago — a tragedy that highlighted the lack of emergency resources in Jamaican schools.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        That year, an Automated External Defibrillator (AED) unit was donated to St. Jago High School at the Penn Relays. A Medical Pavilion in his honour was erected in the TJB Village where athletes could receive medical and dental information and be trained in CPR.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        In 2016, another athlete, Dominique James of St. Georges' College, tragically lost his life during a Manning Cup game. This spurred TJB to ramp up CPR training and AED donations to better prepare schools for emergencies.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 my-10">
        {[
          { stat: "130+", label: "AED units donated to schools" },
          { stat: "250+", label: "Staff trained in CPR" },
          { stat: "2014", label: "Year the program launched" },
        ].map((s) => (
          <div key={s.stat} className="bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">{s.stat}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 leading-relaxed mb-10">
        The program has received support from the Ministry of Education, Government Agencies, ISSA, Corporate Jamaica, and the Diaspora. The goal is to outfit every high school across Jamaica with an AED unit.
      </p>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Support this program</Link>
      </Button>
    </div>
  );
}
