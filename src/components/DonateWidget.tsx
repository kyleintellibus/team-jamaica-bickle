"use client";

import { useEffect } from "react";

export default function DonateWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://secure.givelively.org/widgets/branded_donation/team-jamaica-bickle-inc.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="donate" className="bg-white py-20 px-6 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <div
          data-widget-src="https://secure.givelively.org/donate/team-jamaica-bickle-inc?ref=sd_widget"
          id="give-lively-widget"
          className="gl-branded-donation-widget"
        />
      </div>
    </section>
  );
}
