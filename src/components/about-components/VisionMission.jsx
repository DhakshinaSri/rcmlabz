export default function VisionMission() {
  return (
    <section className="w-full px-6 md:px-20 lg:px-32 pt-15 pb-10">
      <div className="flex flex-col md:flex-row gap-12">

        {/* Mission */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#3AA7C2]"> Mission</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg text-justify">
            To build a highly skilled, globally competitive healthcare workforce by delivering 
            training that is practical, industry-aligned, and enhanced with AI-driven innovations 
            in Revenue Cycle Management and medical coding.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#3AA7C2]"> Vision</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg text-justify">
            To revolutionize healthcare education by establishing Centers of Excellence 
            in institutions across the country, enabling students to access world-class 
            training, global certifications, and sustainable career opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}