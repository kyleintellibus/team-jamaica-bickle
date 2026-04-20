import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/teamMembers";

type TeamMemberPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = teamMembers.find((person) => person.slug === slug);

  if (!member || !member.bio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section
        className="pt-36 pb-20 px-6 text-center relative overflow-hidden bg-[#edfaf0]"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: "contain",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">Team Member</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">{member.name}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{member.role}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/5]">
            <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-3">Biography</p>
            <h2 className="text-3xl font-bold text-[#1f3850] mb-4">{member.name}</h2>
            <p className="text-base text-[#4f5b6d] leading-relaxed mb-6">{member.summary}</p>
            <div className="space-y-4">
              {member.bio.map((paragraph) => (
                <p key={paragraph} className="text-base text-[#4f5b6d] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg border border-[#d4e9d7] px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors"
              >
                Back to About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
