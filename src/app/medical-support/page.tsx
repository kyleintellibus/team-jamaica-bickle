import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MedicalSupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Programs</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Medical and Physiotherapy Care</h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        Team Jamaica Bickle provides on-site medical and physiotherapy services to athletes throughout the Penn Relays, ensuring they receive prompt care for injuries, physical strain, and health concerns while competing abroad.
      </p>
      <p className="text-gray-500 leading-relaxed mb-6">
        The TJB Medical Pavilion — erected in honour of St. Jago athlete Cavahn McKenzie — serves as a dedicated space where athletes can receive medical attention, dental information, and CPR training during the event.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Our team of medical professionals and physiotherapists works around the clock to keep athletes healthy and performing at their best. From muscle recovery to emergency response, TJB's medical team is always on standby.
      </p>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
        <Link href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget" target="_blank" rel="noopener noreferrer">Support this program</Link>
      </Button>
    </div>
  );
}
