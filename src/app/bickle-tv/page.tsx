export default function BickleTVPage() {
  const videos = [
    { title: "Labor of Love Luncheon 2024 Highlights", duration: "4:32" },
    { title: "TJB Village at Penn Relays 2023", duration: "6:15" },
    { title: "Defibrillator Handover Ceremony 2023", duration: "3:48" },
    { title: "30 Years of Team Jamaica Bickle", duration: "8:20" },
    { title: "Interview with Irwine Clare Sr. — Founder", duration: "12:05" },
    { title: "Athletes at the Penn Relays 2022", duration: "5:10" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm text-green-600 font-medium mb-2">Media</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Bickle TV</h1>
      <p className="text-gray-500 mb-12 leading-relaxed">
        Watch highlights, interviews, and stories from Team Jamaica Bickle events and programs.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="group cursor-pointer">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-3" style={{ aspectRatio: "16/9" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{v.title}</p>
            <p className="text-xs text-gray-400 mt-1">{v.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
