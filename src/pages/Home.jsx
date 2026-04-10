import HeroSection from "@/components/home-components/HeroSection";
import TargetDivider from "@/components/home-components/TargetDivider";
import MainSection from "@/components/home-components/mainsection";
import AboutSection from "@/components/home-components/AboutSection";
import HighlightSection from "@/components/home-components/HighlightSection";
import IndustriesSection from "@/components/home-components/FocusArea";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <TargetDivider />
      <MainSection />
      <HighlightSection />
      <IndustriesSection />
      <AboutSection />
    </div>
  );
}