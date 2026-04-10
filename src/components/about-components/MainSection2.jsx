import { motion } from "framer-motion";
import TargetImg from "@/assets/target.png"; // use your image path

export default function MakeSection2() {
  return (
    <motion.section
      className="w-full px-6 md:px-20 lg:px-32 py-20 bg-[#348CD7]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "linear" }}
        viewport={{ amount: 0.3, once: true }}
      >
        {/* Left Description */}
        <div className="flex-1">
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            In strategic collaboration with ISHAI, we are establishing state-of-the-art Centers of 
            Excellence within colleges, bringing industry directly into the academic environment. <br /><br />
            Our goal is to ensure that every student gains practical exposure, technical expertise, 
            and global-level competency before stepping into the professional world.

          </p>
        </div>

        {/* Right Description */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6">

          {/* Target Image */}
          <img
            src={TargetImg}
            alt="Target Goal"
            className="w-36 sm:w-40 md:w-32 lg:w-36 h-auto"
          />

          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Our curriculum and training methodology are inspired by globally recognized standards such 
            as AAPC and AHIMA, enabling students to confidently pursue international certifications and 
            career opportunities.
          </p>

        </div>
      </motion.div>
    </motion.section>
  );
}