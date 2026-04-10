import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 text-center lg:text-left">
          
          {/* First Paragraph (Now Smaller Style) */}
          <p className="lg:w-1/2 text-lg md:text-lg lg:text-lg font-semibold text-gray-800 leading-relaxed text-justify">
            In today’s rapidly evolving healthcare ecosystem, there is a growing demand for 
            professionals who are not only knowledgeable but also industry-ready from day one. 
            RCM NextGen Labz is designed to meet this demand by equipping students with hands-on 
            expertise in Revenue Cycle Management (RCM), Medical Coding, Billing, and AI-enabled 
            healthcare technologies.
          </p>

          {/* Second Paragraph (Now Large Style) */}
          <p className="lg:w-1/2 text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 leading-snug text-justify">
            At RCM NextGen Labz, we go beyond traditional training. We create an immersive 
            learning experience where students engage with real-time workflows, industry 
            tools, and practical case scenarios.
          </p>

        </div>

      </motion.div>

    </section>
  );
}