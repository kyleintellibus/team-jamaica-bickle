"use client";

import { useState, type FormEvent } from "react";
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
import { Send, MapPin, Phone } from "lucide-react";

const interests = [
  "Volunteering Opportunities",
  "Partnerships And Sponsorships",
  "Donation Inquiries",
  "Health And Wellness Initiatives",
  "Environmental Projects",
  "Other",
];

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const toggleInterest = (interest: string, checked: boolean) => {
    setSelectedInterests((current) => {
      if (checked) {
        if (current.includes(interest)) return current;
        return [...current, interest];
      }
      return current.filter((item) => item !== interest);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@teamjamaicabickle.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Team Jamaica Bickle Contact Form Submission",
          _cc: "teamjamaicabickle@gmail.com",
          _captcha: "false",
          first_name: firstName,
          last_name: lastName,
          email,
          phone_country: phoneCountry,
          phone_number: phoneNumber,
          interests: selectedInterests.length > 0 ? selectedInterests.join(", ") : "Not specified",
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error("Unable to send message right now.");
      }

      setSubmitStatus({
        type: "success",
        message: "Thanks for reaching out. Your message was sent to Team Jamaica Bickle.",
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneCountry("US");
      setPhoneNumber("");
      setMessage("");
      setSelectedInterests([]);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "We couldn't send your message right now. Please email info@teamjamaicabickle.org directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Connect With Us Today</h1>
        <p className="text-gray-500 mb-10">We&apos;re here to answer questions and help you.</p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form card */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label>Phone number</Label>
              <div className="flex gap-2">
                <Select value={phoneCountry} onValueChange={(value) => setPhoneCountry(value ?? "US")}>
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
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="flex-1"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Leave us a message..."
                rows={5}
                className="resize-none"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>

            {submitStatus && (
              <p
                className={`text-sm ${
                  submitStatus.type === "success" ? "text-green-700" : "text-red-600"
                }`}
              >
                {submitStatus.message}
              </p>
            )}

            <div className="space-y-2 pt-1">
              <Label>Interest</Label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {interests.map((item, index) => {
                  const id = `interest-${index}`;
                  return (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={selectedInterests.includes(item)}
                      onCheckedChange={(checked) => toggleInterest(item, checked === true)}
                    />
                    <Label htmlFor={id} className="font-normal text-sm text-gray-600 cursor-pointer">
                      {item}
                    </Label>
                  </div>
                  );
                })}
              </div>
            </div>
          </form>

          {/* Contact info */}
          <div className="space-y-8 pt-2">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-500 mb-4">
                Reach Team Jamaica Bickle, Inc using the details below.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Address</h3>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span>
                  Team Jamaica Bickle, Inc<br />
                  242-14 Merrick Blvd<br />
                  Rosedale, NY 11422
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Email</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700">
                  <Send className="w-4 h-4 text-gray-400" />
                  <a href="mailto:info@teamjamaicabickle.org" className="hover:underline">
                    info@teamjamaicabickle.org
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Send className="w-4 h-4 text-gray-400" />
                  <a href="mailto:teamjamaicabickle@gmail.com" className="hover:underline">
                    teamjamaicabickle@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Telephone</h3>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+17185232861" className="hover:underline">718 523-2861</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
