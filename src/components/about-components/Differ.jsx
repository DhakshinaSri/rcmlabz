import {
  FaHospital,        // CoE / Healthcare
  FaProjectDiagram,  // Workflows
  FaRobot,           // AI tools
  FaCertificate,     // Certification
  FaUserMd           // Career / Placement
} from "react-icons/fa";

export default function Differ() {

  const strengths = [
    {
      icon: <FaHospital />,
      title: "Fully Functional Healthcare CoE",
      desc: "A complete Center of Excellence established within campus for hands-on learning.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Real-Time Industry Exposure",
      desc: "Students gain exposure to real-world workflows and healthcare processes.",
    },
    {
      icon: <FaRobot />,
      title: "AI-Driven Learning",
      desc: "Integration of AI tools and future technologies into healthcare training.",
    },
    {
      icon: <FaCertificate />,
      title: "Certification-Oriented Training",
      desc: "Programs aligned with global standards and industry-recognized certifications.",
    },
    {
      icon: <FaUserMd />,
      title: "Career & Placement Focus",
      desc: "Strong emphasis on employability, career readiness, and placement support.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#F6F6F6]">

      {/* Top Layout */}
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-lg">
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            What Makes Us{" "} <br />
            <span className="text-[#3AA7C2]">
              Unique{" "}
            </span>
            Different
          </h2>

          {/* Underline */}
          <div className="w-20 h-1 bg-[#3AA7C2] rounded mt-4 mb-6"></div>

          <p className="text-gray-600 leading-relaxed text-lg">
            Our approach is designed to bridge the gap between education and real-world healthcare careers.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-5 max-w-xl mx-auto lg:mx-0">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-4"
            >
              {/* Icon */}
              <div className="text-2xl text-[#3AA7C2]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Statement */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 font-medium text-xl lg:text-2xl leading-relaxed">
          We don’t just prepare students for exams — we prepare them for real careers.
        </p>
        <div className="w-24 h-1 bg-[#3AA7C2] rounded mt-6 mx-auto"></div>
      </div>

    </section>
  );
}