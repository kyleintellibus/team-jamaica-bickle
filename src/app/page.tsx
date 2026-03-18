import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import ImpactGlance from "@/components/ImpactGlance";
import Timeline from "@/components/Timeline";
import SupportingAthletes from "@/components/SupportingAthletes";
import ProgramsCarousel from "@/components/ProgramsCarousel";
import MediaNews from "@/components/MediaNews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <ImpactGlance />
      <Timeline />
      <SupportingAthletes />
      <ProgramsCarousel />
      <MediaNews />
      <FAQ />
    </>
  );
}
