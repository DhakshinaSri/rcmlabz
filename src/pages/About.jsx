import HeroSec from "@/components/about-components/AboutHero";
import MakeSection2 from "@/components/about-components/MainSection2";
import Differ from "@/components/about-components/Differ";
import VisionMission from "@/components/about-components/VisionMission";
import GoalsCarousel from "@/components/about-components/GoalsCarousel";

export default function About() {
  return (
    <div className="pt-20">
        <HeroSec />
        <MakeSection2 />
        <Differ />
        <VisionMission />
        <GoalsCarousel />
    </div>
  );
}