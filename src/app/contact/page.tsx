"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send, MapPin, Phone } from "lucide-react";

const interests = [
  "Volunteering Opportunities",
  "Partnerships And Sponsorships",
  "Donation Inquiries",
  "Health And Wellness Initiatives",
  "Environmental Projects",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Connect With Us Today</h1>
        <p className="text-gray-500 mb-10">We&apos;re here to answer questions and help you.</p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div className="space-y-1.5">
              <Label>Phone number</Label>
              <div className="flex gap-2">
                <Select defaultValue="US">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">US</SelectItem>
                    <SelectItem value="JM">JM</SelectItem>
                    <SelectItem value="GB">GB</SelectItem>
                    <SelectItem value="CA">CA</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="tel" placeholder="+1 (555) 000-0000" className="flex-1" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Leave us a message..." rows={5} className="resize-none" />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Send message
            </Button>

            <div className="space-y-2 pt-1">
              <Label>Interest</Label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {interests.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox id={item} />
                    <Label htmlFor={item} className="font-normal text-sm text-gray-600 cursor-pointer">
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8 pt-2">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Chat With us</h3>
              <p className="text-sm text-gray-500 mb-3">
                Interested In Volunteering? Speak To Our Friendly Team.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                  <a href="#" className="hover:underline">Start A Live Chat</a>
                  <span className="flex items-center gap-1 bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online
                  </span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Send className="w-4 h-4 text-gray-400" />
                  <a href="mailto:info@teamjamaicabickle.org" className="hover:underline">
                    Shoot Us An Email
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <a href="#" className="hover:underline">Message Us On X</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Call us</h3>
              <p className="text-sm text-gray-500 mb-3">
                Mon - Fri, 9:00 AM - 5:00 PM (UTC/GMT +10:00).
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href="tel:+13006759000" className="hover:underline">1300 675 900</a>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href="tel:+628776520071" className="hover:underline">+62 877 652 0071</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">United states</h3>
              <p className="text-sm text-gray-500 mb-3">
                Visit Our Office Mon - Fri, 9:00 AM - 5:00 PM
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span>
                  90 Edelweis Clay Street,<br />
                  Kinderland NSW 3000 Brooklyn, New York
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
