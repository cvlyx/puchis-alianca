import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0F1F3D] to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#D4A853]/50 bg-[#D4A853]/10 text-[#D4A853] text-sm font-medium tracking-wide mb-6">
            Our People
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Key Management Team
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A diverse team of professionals with different backgrounds, including individuals with more than 20 years of experience within the field of procurement and supply chain.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,43,1360,48L1440,53L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

const team = [
  {
    name: "Andrew C. Puleni",
    role: "Director of Business Operations",
    bio: "Responsible for overseeing the objectives and implementation of all business operations. Extensive expertise in projects management, business operations & strategy, key partnership development, high-stake negotiations, forward thinking & calculated risk management. Holds a Bachelors Degree of Business Administration from the University of Malawi (the Polytechnic) and a Master of Science Degree in Supply Chain Management from the University of Bolton (UK).",
    image: "/images/team-1.webp",
  },
  {
    name: "Dennis Chirundu",
    role: "Director of Commercial Services",
    bio: "Dedicated Agricultural Economist and Monitoring & Evaluation professional with practical experience in project monitoring, data analysis, community engagement, and evidence-based program implementation. Skilled in designing M&E frameworks and utilizing digital data management platforms. Holds a BSc in Agricultural Economics from Lilongwe University of Agriculture and Natural Resources.",
    image: "/images/team-3.webp",
  },
  {
    name: "Grant Beni",
    role: "Director of Finance",
    bio: "Results-driven finance executive with over 18 years of progressive experience in corporate finance, accounting, financial management, and strategic leadership. Currently serving as Group Chief Financial Officer at HCJ Group of Companies. Adept at capital structuring, investment analysis, audit coordination, and strengthening internal control systems.",
    image: "/images/team-2.webp",
  },
  {
    name: "John Daka",
    role: "Consultant",
    bio: "Skilled Software Engineer and Full Stack Systems Developer with experience in developing, implementing, and supporting enterprise applications, web platforms, and mobile solutions. Proficient in Node.js, React, JavaScript, MySQL, Odoo ERP, and RESTful APIs. Currently ICT Systems Developer at ESCOM Malawi Limited.",
    image: "/images/team-4.webp",
  },
  {
    name: "Misheck Khonje",
    role: "Consultant",
    bio: "Procurement, contracts, and administration professional with over seven years of experience in procurement management, project coordination, contract administration, and stakeholder engagement. CIPS qualified and member of the Malawi Institute of Procurement and Supply (MIPS). Currently serving as Administration and Contracts Manager.",
    image: "/images/team-5.webp",
  },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      <PageHero />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-md"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredMember === index ? "scale-105" : "scale-100"}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-[#0F1F3D]/50 to-transparent transition-opacity duration-300 ${hoveredMember === index ? "opacity-90" : "opacity-80"}`}></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full pointer-events-none">
                    <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-[#D4A853] font-medium text-sm">{member.role}</p>
                  </div>

                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 p-6 pt-12 flex flex-col justify-start bg-[#0F1F3D]/95 backdrop-blur-sm"
                      >
                        <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                        <p className="text-[#D4A853] font-medium text-sm mb-4">{member.role}</p>
                        <p className="text-white/80 text-sm leading-relaxed overflow-y-auto pr-2 custom-scrollbar">{member.bio}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-opacity duration-300 border border-white/20 ${hoveredMember === index ? "opacity-0" : "opacity-100"}`}>
                    View Bio
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
