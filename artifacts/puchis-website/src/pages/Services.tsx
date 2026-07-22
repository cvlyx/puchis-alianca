import { motion } from "framer-motion";
import { BookOpen, FileText, ClipboardList, Search, Gavel, Handshake, Monitor, ShoppingBag, Truck, ShieldCheck, Wrench, Cog, Leaf, ChevronRight } from "lucide-react";
import { Link } from "wouter";

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
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Our Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Two core service lines: Supply Chain Consultancy and General Trading, delivering value to organizations across Malawi.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#F8F5EE" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,43,1360,48L1440,53L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

const consultancyServices = [
  {
    id: "trainings",
    icon: BookOpen,
    title: "Supply Chain Trainings",
    description: "Employee development trainings in public supply chain management, donor-funded procurements, and tailor-made trainings for private institutions to improve performance and effectiveness of management teams, supply chain professionals, evaluation teams, stores professionals, and bidders.",
  },
  {
    id: "policies",
    icon: FileText,
    title: "Supply Chain Policies",
    description: "Formulation of clear, well-written supply chain management policies and procedures for transparency, accountability, uniformity and stability. Including establishment of efficient Supply Chain Units, Internal Supply Chain Committees, evaluation committees, and liaison with PPDA.",
  },
  {
    id: "plans",
    icon: ClipboardList,
    title: "Supply Chain Plans",
    description: "Sound supply chain planning that defines requirements, budgets, rules, packaging, procurement method selection, and scheduling to help Procuring Entities decide where and when to procure.",
  },
  {
    id: "audits",
    icon: Search,
    title: "Supply Chain Audits",
    description: "Unprecedented visibility into expenditures to better manage spend portfolios. Testing process effectiveness, evaluating operational efficiency, verifying asset protection, checking data security, detecting failures and non-conformities, and providing recommendations.",
  },
  {
    id: "bidding",
    icon: Gavel,
    title: "Bidding Process Management",
    description: "Full management of the bidding process for Goods, Works, Consultancy Services, and Non-Consultancy Services. Including strategy development, specifications, TORs, bidding documents, bid receipt and opening, evaluation team training, evaluation, and award.",
  },
  {
    id: "outsourcing",
    icon: Handshake,
    title: "Supply Chain Outsourcing",
    description: "Manage your supply chain function to focus on strategic activities and enjoy economies of scale through consolidation leading to cost reduction. Methods include National and International Competitive Bidding, Minor, Plant and Vehicles, and Request for Quotations.",
  },
  {
    id: "eprocurement",
    icon: Monitor,
    title: "E-Procurement Services",
    description: "Modern technological tools to improve your supply chain including E-sourcing/E-procurement, MRP/CRP Systems, Digitalisation, Cloud and Mobile Solutions, and Artificial Intelligence (AI).",
  },
];

const tradingServices = [
  { icon: ShoppingBag, name: "Office Equipment Supply", description: "Furniture, stationery, technology and more" },
  { icon: Truck, name: "Plant & Vehicle Hire", description: "Heavy equipment and fleet solutions" },
  { icon: ShieldCheck, name: "PPE Supply", description: "Industrial safety equipment" },
  { icon: Wrench, name: "Hardware & Construction", description: "Building materials and tools" },
  { icon: Cog, name: "Machinery Supply", description: "Industrial and farming machinery" },
  { icon: Leaf, name: "Agricultural Trading", description: "Livestock, grains and foodstuffs" },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <PageHero />

      {/* Supply Chain Consultancy */}
      <section className="py-24 bg-[#F8F5EE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div variants={fadeUp} className="flex justify-center mb-4">
                <span className="px-4 py-1.5 rounded-full bg-white text-[#0F1F3D] font-bold text-sm tracking-widest uppercase shadow-sm border border-border/50">
                  Service Line 1
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-6">
                Supply Chain Consultancy
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
                Expert supply chain management solutions tailored to your organisation's unique challenges and strategic goals.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              {consultancyServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div key={index} variants={fadeUp} id={service.id} className="group">
                    <div className={`flex items-start gap-6 py-8 ${index !== 0 ? "border-t border-border/50" : ""}`}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 text-primary" style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                        <Icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0F1F3D] group-hover:text-primary transition-colors mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <ChevronRight size={20} className="text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0 hidden sm:block" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* General Trading */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div variants={fadeUp} className="flex justify-center mb-4">
                <span className="px-4 py-1.5 rounded-full bg-[#0F1F3D] text-white font-bold text-sm tracking-widest uppercase shadow-sm">
                  Service Line 2
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-6">
                General Trading
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
                Quality products and supplies across multiple categories for all your business needs.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              {tradingServices.map((service, index) => (
                <motion.div key={index} variants={fadeUp} className="group">
                  <div className={`flex items-start gap-6 py-8 ${index !== 0 ? "border-t border-border/50" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 text-[#D4A853]" style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                      <service.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F1F3D] group-hover:text-primary transition-colors mb-2">{service.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <ChevronRight size={20} className="text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0 hidden sm:block" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <Link href="/products">
                <span className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer">
                  View all products &rarr;
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="py-24 bg-[#F8F5EE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img src="/images/services.webp" alt="Partnership" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-[#0F1F3D]/60 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white w-full max-w-4xl">
                  <span className="text-[#D4A853] font-bold tracking-widest text-sm uppercase mb-2 block">Partnership</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Transforming Operations</h3>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed">Partner with us to build resilient, efficient, and transparent supply chain processes that drive your organization forward.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
