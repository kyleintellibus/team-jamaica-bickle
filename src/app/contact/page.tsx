export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Connect With Us Today</h1>
      <p className="text-gray-500 mb-12">We&apos;re here to answer questions and help you.</p>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left — Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>US</option>
                <option>JM</option>
                <option>GB</option>
                <option>CA</option>
              </select>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Leave us a message..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Interest checkboxes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Volunteering Opportunities",
                "Partnerships and Sponsorships",
                "Donation Inquiries",
                "Health and Wellness Initiatives",
                "Environmental Projects",
                "Other",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="accent-green-600" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition-colors text-sm"
          >
            Send message
          </button>
        </form>

        {/* Right — Contact info */}
        <div className="space-y-10">
          {/* Chat */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">Chat With us</h3>
            <p className="text-sm text-gray-500 mb-3">
              Interested in volunteering? Speak to our friendly team.
            </p>
            <ul className="space-y-2 text-sm text-green-600">
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>💬</span> Start a live chat
                  <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">Easy</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@teamjamaicabickle.org" className="hover:underline flex items-center gap-2">
                  <span>✉️</span> Shoot us an email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>𝕏</span> Message us on X
                </a>
              </li>
            </ul>
          </div>

          {/* Call */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Call us</h3>
            <p className="text-sm text-gray-500 mb-3">Mon – Fri, 9:00 AM – 5:00 PM (UTC/GMT +00:00)</p>
            <ul className="space-y-1 text-sm text-green-600">
              <li><a href="tel:+13006750000" className="hover:underline">📞 +1 300 675 000</a></li>
              <li><a href="tel:+18629775000" className="hover:underline">📞 +1 862 977 500</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">United States</h3>
            <p className="text-sm text-gray-500 mb-3">
              Visit our office Mon – Fri, 9:00 AM – 5:00 PM
            </p>
            <p className="text-sm text-gray-600 flex items-start gap-2">
              <span>📍</span>
              <span>99 Flowers Clay Street<br />Kierland NSW 3000, Brooklyn, New York</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
