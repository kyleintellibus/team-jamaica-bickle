"use client";

import { useState } from "react";

const allEvents: Record<string, { date: string; title: string; location: string }[]> = {
  "2026": [
    { date: "APRIL 24, 2026", title: "Penn Relays Carnival 2026", location: "Franklin Field Stadium, Philadelphia" },
    { date: "APRIL 2026", title: "Labor of Love Luncheon Gala", location: "Crest Hollow Country Club, Woodbury, New York" },
    { date: "AUGUST 6, 2026", title: "Jamaica 64th Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 6, 2026", title: "Jamaica 64th Independence Celebration", location: "The National Stadium, Kingston, Jamaica" },
    { date: "AUGUST 6, 2026", title: "Jamaica 64th Independence Celebration", location: "Trinidad and Tobago" },
  ],
  "2025": [
    { date: "APRIL 25, 2025", title: "Penn Relays Carnival 2025", location: "Franklin Field Stadium, Philadelphia" },
    { date: "APRIL 13, 2025", title: "Labor of Love Luncheon Gala", location: "Crest Hollow Country Club, Woodbury, New York" },
    { date: "OCTOBER 14, 2025", title: "Defibrillator Handover Ceremony", location: "University of Technology, Kingston, Jamaica" },
    { date: "AUGUST 6, 2025", title: "Jamaica 63rd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 6, 2025", title: "Jamaica 63rd Independence Celebration", location: "The National Stadium, Kingston, Jamaica" },
  ],
  "2024": [
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "The National Stadium, Kingston, Jamaica" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Trinidad and Tobago" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
    { date: "AUGUST 10, 2024", title: "Jamaica 62nd Independence Celebration", location: "Philadelphia" },
  ],
};

const years = ["2026", "2025", "2024"];

export default function EventsPage() {
  const [activeYear, setActiveYear] = useState("2026");
  const events = allEvents[activeYear] ?? [];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Page header */}
      <div className="px-8 pt-24 pb-4 flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
          </svg>
          All times in the schedule are in local time to You (EST: GMT -5:00).
        </span>
      </div>

      {/* Year tabs — full width, evenly distributed */}
      <div className="flex border-b border-gray-200 overflow-visible">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setActiveYear(y)}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative overflow-visible ${
              activeYear === y
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {y}
            {activeYear === y && (
              <span className="absolute left-0 right-0 h-0.5 bg-yellow-400" style={{ bottom: "-1px" }} />
            )}
          </button>
        ))}
      </div>

      {/* Event rows — full width */}
      <div className="w-full">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-8 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-xs font-semibold bg-gray-900 text-white rounded px-2.5 py-1 shrink-0 whitespace-nowrap">
              {e.date}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">{e.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{e.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
