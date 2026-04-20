export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  bio?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dwight-clarke",
    name: "Dwight O. Clarke",
    role: "Director",
    image: "/team/dwight-clarke.jpeg",
    summary:
      "Accomplished architect and senior project manager with 20+ years of experience delivering educational facilities.",
    bio: [
      "Dwight O. Clarke is an architect and senior project manager with over two decades of experience in construction planning and project management for educational environments.",
      "He currently serves with the New York City School Construction Authority and is a Director of Team Jamaica Bickle, bringing leadership rooted in service, discipline, and long-term community impact.",
    ],
  },
  {
    slug: "irwine-clare",
    name: "Irwine G. Clare Sr.",
    role: "Founder / Executive Director",
    image: "/team/irwine-clare.jpg",
    summary:
      "Founder of Team Jamaica Bickle and longtime advocate for Jamaican and Caribbean student-athletes at Penn Relays.",
    bio: [
      "Irwine G. Clare Sr. founded Team Jamaica Bickle over 30 years ago to ensure Jamaican athletes competing at Penn Relays had proper hospitality, medical support, and care.",
      "Under his leadership, TJB has grown into a comprehensive athlete support organization centered on the guiding principle: Our Athletes, Our Ambassadors.",
    ],
  },
  {
    slug: "vincent-heath",
    name: "Vincent Heath",
    role: "Team Member",
    image: "/team/vincent-heath.jpg",
    summary: "Biography details coming soon.",
  },
  {
    slug: "dwayne-montaque",
    name: "Dwayne Montaque, CPA",
    role: "Team Member",
    image: "/team/dwayne-montaque.jpg",
    summary:
      "Finance executive with 20+ years in nonprofit and public accounting, focused on mission-driven organizations.",
    bio: [
      "Dwayne Montaque is Vice President, Finance and RF Catalytic Capital at The Rockefeller Foundation, where he oversees accounting, reporting, treasury, donor management, and grantmaking operations.",
      "He brings over 20 years of finance experience across foundations and public accounting, and also serves in community leadership through board service.",
    ],
  },
  {
    slug: "tashell-jenkins",
    name: "Tashell Jenkins",
    role: "Team Member",
    image: "/team/tashell-jenkins.jpg",
    summary: "Biography details coming soon.",
  },
  {
    slug: "oswald-brown",
    name: "Oswald C. Brown",
    role: "Team Member",
    image: "/team/oswald-brown.jpg",
    summary:
      "Longstanding volunteer and service-focused leader who has supported Team Jamaica Bickle operations for decades.",
    bio: [
      "Oswald C. Brown has served Team Jamaica Bickle for many years, first inspired by TJB's support for school teams at Penn Relays and later joining as a volunteer helping coordinate transportation for athletes.",
      "A graduate of Mercy College with an MBA in Organizational Leadership, he combines nonprofit commitment with deep community service values.",
    ],
  },
];
