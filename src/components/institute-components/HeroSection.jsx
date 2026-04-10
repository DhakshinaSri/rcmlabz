import { motion } from "framer-motion";
import Button from "@/components/common-components/Button";
import heroImage from "@/assets/HeroImg2.png"; // replace with your image

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-30 py-20 bg-white overflow-hidden">
      
      {/* Left side - Text content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        
        {/* Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-[#3AA7C2]"
        >
          Target Institutions & Programs
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-gray-600 text-base md:text-lg max-w-lg text-justify"
        >
          We are proud to present RCM NextGen Labz — a next-generation Center of Excellence (CoE) 
          initiative established in collaboration with ISHAI (International Society for Healthcare 
          & AI Innovators) across leading educational institutions. <br /> <br />
          This initiative is specifically designed for multidisciplinary academic ecosystems, 
          creating a powerful bridge between education and the rapidly evolving healthcare industry.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Button text="View Opportunities" variant="gotobutton" to="/targetprograms" />
        </motion.div>
      </div>

      {/* Right side - Image and decorations */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.3, once: true }}
        className="flex-1 flex justify-center mt-12 md:mt-0 relative"
      >
        <img
  src={heroImage}
  alt="AI Innovator"
  className="w-full max-w-[500px] h-auto object-cover mx-auto"
/>
      </motion.div>
    </section>
  );
}
