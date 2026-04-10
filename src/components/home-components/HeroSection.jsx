import HeroImg from "@/assets/heroimage1.png";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white">
  
  <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
    
    {/* LEFT CONTENT */}
    <div className="px-6 md:px-16 py-12">
      <p className="text-black text-sm md:text-lg mb-3 font-bold">
        Welcome to <span className="text-[#27C2AA] font-bold">RCM NextGen Labz</span>
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        A Premier <span className="text-[#27C2AA]">Center of{" "}</span>
        <span className="text-[#27C2AA]">Excellence</span> by <span className="text-[#27C2AA]"></span> ISHAI
      </h1>

      <p className="text-gray-600 mt-6 text-sm md:text-lg leading-relaxed max-w-lg">
        We are proud to present RCM NextGen Labz — a next-generation Center of Excellence (CoE) 
        initiative established in collaboration with ISHAI (International Society for Healthcare 
        & AI Innovators) across leading educational institutions. <br /> <br />
        This initiative represents a powerful step toward transforming healthcare education by 
        seamlessly connecting academic learning with real-world industry practices.
      </p>
    </div>

    {/* RIGHT IMAGE FULL COVER */}
    <div className="relative w-full h-[400px] md:h-screen">
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>

</section>
  );
}