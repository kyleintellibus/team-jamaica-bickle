"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leftFaqs = [
  {
    q: "Who does Team Jamaica Bickle support?",
    a: "Team Jamaica Bickle primarily supports youth and student-athletes from Jamaica and across the Caribbean who travel abroad to compete, especially at the Penn Relays in Philadelphia.",
  },
  {
    q: "Does Team Jamaica Bickle support professional athletes?",
    a: "Our focus is on youth and student-athletes. We support high school and collegiate athletes competing at the Penn Relays.",
  },
  {
    q: "What is the TJB Village?",
    a: "The TJB Village is our hospitality hub at the Penn Relays, providing meals, medical care, and a home base for Jamaican and Caribbean athletes.",
  },
  {
    q: "What kind of support does Team Jamaica Bickle provide?",
    a: "We provide meals, medical care, mentorship, transportation assistance, and community support for athletes competing internationally.",
  },
  {
    q: "How many athletes does Team Jamaica Bickle support each year?",
    a: "We support over 650 athletes and coaches each year during the Penn Relays.",
  },
  {
    q: "What is the Defibrillator Program?",
    a: "Our Defibrillator Program places life-saving AED devices in schools across Jamaica to protect student-athletes.",
  },
];

const rightFaqs = [
  {
    q: "How can I support Team Jamaica Bickle?",
    a: "You can donate, volunteer, sponsor an athlete, or partner with us. Visit our Get Involved page to learn more.",
  },
  {
    q: "Can I donate to a specific program?",
    a: "Yes, you can direct your donation to specific programs like the Athlete Meals Program, Defibrillator Program, or TJB Village.",
  },
  {
    q: "Is Team Jamaica Bickle involved only in Penn Relays?",
    a: "While the Penn Relays is our primary focus, we also support athletes competing in other international events.",
  },
  {
    q: "How can I stay updated on Team Jamaica Bickle's work?",
    a: "Follow us on social media and sign up for our newsletter to stay up to date with our latest news and events.",
  },
  {
    q: "Who is eligible to apply?",
    a: "Jamaican and Caribbean youth and student-athletes competing internationally are eligible to apply for support.",
  },
  {
    q: "What documents do I need?",
    a: "Applicants typically need proof of enrollment, competition registration, and a letter from their coach or school.",
  },
];

function FaqAccordion({ items, defaultValue }: { items: typeof leftFaqs; defaultValue?: string }) {
  return (
    <Accordion defaultValue={defaultValue ? [defaultValue] : []}>
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b border-gray-200 data-[state=open]:bg-white data-[state=open]:border data-[state=open]:border-gray-200 data-[state=open]:rounded-lg data-[state=open]:px-4 data-[state=open]:mb-1"
        >
          <AccordionTrigger className="text-sm font-semibold text-gray-900 text-left hover:no-underline py-4">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-500 leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Frequently Asked<br />Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <FaqAccordion items={leftFaqs} defaultValue="item-0" />

          {/* Right column */}
          <div>
            <FaqAccordion items={rightFaqs} />

            <div className="mt-8">
              <p className="text-base font-semibold text-gray-900 mb-1">Still Have Questions?</p>
              <p className="text-sm text-gray-500 mb-4">We&apos;d love to hear from you.</p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                <Link href="/contact">Let&apos;s talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
