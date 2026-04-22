"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BedDouble,
  Bus,
  CalendarDays,
  HeartPulse,
  MapPin,
  Plane,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  complete: boolean;
};

const TARGET_DATE = new Date("2026-04-24T00:00:00-04:00").getTime();

function getCountdownState(): CountdownState {
  const now = Date.now();
  const distance = TARGET_DATE - now;

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      complete: true,
    };
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    complete: false,
  };
}

const supportCards = [
  {
    title: "Meals",
    description: "2,000+ traditional Caribbean meals served daily",
    icon: UtensilsCrossed,
  },
  {
    title: "Transportation",
    description: "Airport transfers, hotel-to-stadium shuttles",
    icon: Bus,
  },
  {
    title: "Medical care",
    description: "Physical therapy, chiropractic, on-site medical services",
    icon: HeartPulse,
  },
  {
    title: "Accommodations",
    description: "Subsidized hotel rates for delegations",
    icon: BedDouble,
  },
  {
    title: "Airfare Support",
    description: "Subsidized travel for student-athletes",
    icon: Plane,
  },
  {
    title: "Mentorship",
    description: "Guidance from professionals and former athletes",
    icon: Users,
  },
];

export default function PennRelaysPage() {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdownState());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f1f3f4]">
      <section className="relative isolate min-h-[680px] overflow-hidden md:min-h-[760px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/a566401332902d93a97687ebe8a0e7fee3071986.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1300px] flex-col justify-end gap-6 px-5 pb-8 pt-28 md:min-h-[760px] md:gap-8 md:pb-10 md:pt-32 lg:flex-row lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl">
              Team Jamaica Bickle
              <br />
              5K Run/Walk
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:mt-7 md:text-xl lg:text-2xl">
              Lace up for a cause. Our community 5K brings together runners of all
              ages, with top finishers earning entry to Jamaica&apos;s Reggae Marathon.
            </p>
            <Button
              asChild
              className="mt-6 h-11 rounded-2xl bg-[#12ba39] px-6 text-base font-semibold text-white hover:bg-[#0fa133] md:mt-8 md:h-14 md:px-8 md:text-xl"
            >
              <Link href="/events">Register for the 5K</Link>
            </Button>
          </div>

          <div className="w-full max-w-[460px] rounded-3xl border border-[#d8dde4] bg-white p-5 shadow-[0_20px_50px_rgba(8,19,38,0.25)] md:p-10">
            <div className="mb-4 flex flex-wrap gap-2 md:mb-6 md:gap-3">
              <span className="rounded-full border-2 border-[#0a9f2d] bg-[#f6d607] px-3 py-1.5 text-xs font-semibold text-[#203046] md:px-5 md:py-2 md:text-base">
                The Penn Relays 2026
              </span>
              <span className="rounded-full border-2 border-[#0a9f2d] bg-[#f6d607] px-3 py-1.5 text-xs font-semibold text-[#203046] md:px-5 md:py-2 md:text-base">
                Fundraising
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-[1.05] text-[#1b2a44] md:text-5xl">
              Penn Relays 2026
            </h2>
            <div className="mt-5 space-y-4 text-[#1d2940] md:mt-7 md:space-y-5">
              <div className="flex items-start gap-3 md:gap-4">
                <CalendarDays className="mt-1 h-6 w-6 md:h-8 md:w-8" />
                <div>
                  <p className="text-sm text-[#68707d] md:text-xl">Dates</p>
                  <p className="text-2xl font-semibold leading-tight md:text-4xl">April 24-26, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="mt-1 h-6 w-6 md:h-8 md:w-8" />
                <div>
                  <p className="text-sm text-[#68707d] md:text-xl">Location</p>
                  <p className="text-xl font-semibold leading-tight md:text-3xl">
                    Franklin Field, University of Pennsylvania, Philadelphia
                  </p>
                </div>
              </div>
            </div>
            <Button
              asChild
              className="mt-6 h-11 w-full rounded-2xl bg-[#12ba39] text-lg font-semibold text-white hover:bg-[#0fa133] md:mt-8 md:h-14 md:text-2xl"
            >
              <Link
                href="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Our Athletes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#041c18] py-14 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,80,0.14),rgba(0,0,0,0))]" />
        <div className="relative mx-auto w-full max-w-[1300px] px-5">
          <h2 className="text-center text-3xl font-semibold text-[#f1f6f2] md:text-6xl lg:text-7xl">
            &quot;PENN RELAYS&quot; 2026 Countdown
          </h2>
          <div className="mt-8 grid gap-3 md:mt-16 md:gap-5 md:grid-cols-4">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#3f6a58] bg-[linear-gradient(180deg,rgba(2,79,39,0.84),rgba(2,54,34,0.84))] p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-10"
              >
                <p className="text-6xl font-light text-[#f5f9f6] sm:text-7xl md:text-8xl">{item.value}</p>
                <p className="mt-3 text-2xl font-medium uppercase tracking-[0.08em] text-[#0fd04c] md:mt-4 md:text-4xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          {countdown.complete && (
            <p className="mx-auto mt-8 w-fit rounded-2xl border border-[#7350b7] bg-[#33234c] px-5 py-2.5 text-base text-[#d8cef0] md:mt-10 md:px-9 md:py-4 md:text-2xl">
              The countdown has ended!
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-5">
          <div className="mx-auto w-full max-w-[1040px]">
            <h2 className="max-w-[700px] text-3xl font-semibold leading-[1.12] text-[#141d35] md:text-5xl lg:text-7xl">
              The World&apos;s Longest Uninterrupted Collegiate Track Meet
            </h2>
            <div className="mt-6 max-w-[860px] space-y-5 text-base leading-[1.55] text-[#374256] md:mt-8 md:space-y-6 md:text-xl">
              <p>
                The Penn Relays Carnival is more than a track meet, it&apos;s a pilgrimage.
                Held annually since 1895 at the University of Pennsylvania, it draws over
                22,000 athletes and up to 125,000 spectators across three days.
              </p>
              <p>
                For Caribbean nations, Penn Relays is the world stage before the world
                stage. It&apos;s where future Olympians are discovered, where schools compete
                for national pride, and where diaspora communities reunite.
              </p>
              <p>
                Estimates suggest 50-70% of Penn Relays spectators are Jamaican or
                Caribbean, making Franklin Field feel like home, 1,500 miles from
                Kingston.
              </p>
            </div>

            <div className="mt-8 grid gap-0 md:mt-10 md:grid-cols-3">
              <Image
                src="/Container-10.png"
                alt="Jamaican student-athletes at the Penn Relays."
                width={800}
                height={1000}
                className="h-[280px] w-full object-cover md:h-[560px]"
              />
              <Image
                src="/Container-11.png"
                alt="Jamaican women sprinters celebrating together."
                width={800}
                height={1000}
                className="h-[280px] w-full object-cover md:h-[560px]"
              />
              <Image
                src="/Container-12.png"
                alt="Jamaican discus athlete competing in a stadium."
                width={800}
                height={1000}
                className="h-[280px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="mt-12 md:mt-16">
              <h3 className="text-3xl font-semibold text-[#141d35] md:text-5xl lg:text-7xl">
                How We Support Our Athletes
              </h3>
              <p className="mt-5 max-w-[900px] text-xl leading-[1.35] text-[#128b34] md:mt-6 md:text-3xl">
                In 1994, a group of Jamaicans in New York noticed something: young
                athletes were arriving in Philadelphia with talent to spare, but little
                else. No hot meals. No reliable transportation. No support system.
              </p>
              <div className="mt-5 max-w-[920px] space-y-5 text-base leading-[1.55] text-[#374256] md:mt-6 md:space-y-6 md:text-xl">
                <p>
                  So they did what Jamaicans do. They cooked. They cared. They showed up.
                </p>
                <p>
                  Today, Team Jamaica Bickle provides comprehensive hospitality to 650+
                  student-athletes and coaches from across the Caribbean, ensuring they can
                  focus on one thing: competing at their best.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3">
              {supportCards.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-[#d7ebda] p-5 md:min-h-[260px] md:p-7"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-2xl font-semibold text-[#1b2a27] md:text-4xl">{title}</h4>
                    <Icon className="h-8 w-8 text-black md:h-10 md:w-10" />
                  </div>
                  <p className="text-base leading-[1.45] text-[#2e3f3b] md:text-2xl md:leading-[1.35]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
