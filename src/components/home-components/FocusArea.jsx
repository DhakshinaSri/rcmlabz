import {
  FaUserGraduate,   // Students
  FaBriefcase,      // Careers
  FaHeartbeat,      // Healthcare
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function IndustriesSection() {

  const industries = [
    { name: "Empowering Students", icon: <FaUserGraduate /> },
    { name: "Enabling Careers", icon: <FaBriefcase /> },
    { name: "Transforming Healthcare Education", icon: <FaHeartbeat /> },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition"
          >

            {/* Icon */}
            <div className="bg-[#3AA7C2] p-4 rounded-xl shadow-sm mb-4 text-3xl text-white">
              {industry.icon}
            </div>

            <h3 className="font-bold text-gray-800 text-lg lg:text-xl leading-snug">
              {industry.name}
            </h3>

          </motion.div>
        ))}
      </div>
    </section>
  );
}