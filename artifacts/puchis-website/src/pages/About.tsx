import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award, Headphones, Shield, ShieldAlert, TrendingDown, TrendingUp, Quote, Building, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            About Puchis Limited
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Who We Are
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Founded in 2018, Puchis Limited has grown to become a trusted provider of quality products and expert procurement consultancy across Malawi.
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

function CompanyDescription() {
  return (
    <section className="py-24 bg-[#F8F5EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <img src="/images/services.webp" alt="Puchis Limited" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-sm font-bold tracking-widest uppercase text-[#D4A853] mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-6">Puchis Limited</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Puchis Limited provides various goods and related services to private and public institutions and individuals within Malawi. The company was established with the aim of providing quality and price competitive products and services to our customers so as to achieve value for money.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our products range includes; Office Equipment and Supplies, Plant and Machinery, Hardware and Construction Materials, Personal Protective Equipment, Agri-Business and General Supplies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The company was founded in 2018 and works with different organisations within and outside Malawi and has its Head Office in Blantyre, Malawi.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F1F3D] to-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-20 right-10 text-white/5 pointer-events-none">
        <Quote size={400} className="transform rotate-12" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Our Purpose</motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full"></motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A853]/20 rounded-xl flex items-center justify-center text-[#D4A853]"><Target size={24} /></div>
                <h3 className="text-xl font-bold text-[#D4A853]">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed">To become the most trusted and reliable trading company in Malawi and beyond by offering quality products and services to our customers.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A853]/20 rounded-xl flex items-center justify-center text-[#D4A853]"><Lightbulb size={24} /></div>
                <h3 className="text-xl font-bold text-[#D4A853]">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">Helping our customers meet their business needs and goals by offering them innovative and quality products at affordable and competitive prices so as to achieve value for money.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,48C160,64,320,96,480,101.3C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: Target, title: "Integrity", description: "We uphold the highest standards of integrity in all our actions." },
    { icon: Lightbulb, title: "Innovation", description: "We provide new and customer-based solutions by focusing more on research and development and observing global trends." },
    { icon: Users, title: "Team Work", description: "We work together across boundaries to meet the needs of our customers and every stakeholder we interact with to help our company win." },
    { icon: Award, title: "Leadership", description: "We lead the way in the field of Supply Chain by setting new standards and ways of doing things." },
    { icon: Headphones, title: "After-Sales Services", description: "We are committed to providing reliable support and assistance to our clients even after delivery, ensuring customer satisfaction through timely responses, maintenance support, product guidance, and long-term business relationships." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Our Core Values</motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full"></motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full text-center border-border/50 border-b-4 border-b-[#D4A853] hover:shadow-xl transition-all duration-300 bg-[#F8F5EE]/50 hover:bg-white group">
                  <CardHeader className="pb-2">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#0F1F3D] to-primary rounded-2xl shadow-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={36} />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0F1F3D]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { icon: Award, title: "Extensive Experience & Professionalism", description: "We have over 5 years of experience within the trading industry. This has accorded us valuable insight into the unique levels of service and care expected by our customers, resulting in us being flexible and able to adapt to individual customer needs with confidence." },
    { icon: Users, title: "Customer Focused", description: "Our approach aims to foster long-term relationships with our customers and our priority is to ensure that our customers receive the best service and product support possible. Our customer care team is always ready to provide any clarification or address any queries." },
    { icon: Shield, title: "Quality Assurance", description: "All Equipment, consumables and supplies are supplied by reputable suppliers that have been meticulously selected and verified by relevant regulatory authorities to ensure that expected quality standards are met before delivery to our customers." },
    { icon: Clock, title: "Timely Delivery & After-Sale Services", description: "We always ensure that all unnecessary delays within our processes are completely eliminated and that our lead times are properly calculated, meaning goods are delivered timely and cost effectively. We are constantly aware of the goods' whereabouts while in transit." },
  ];

  return (
    <section className="py-24 bg-[#F8F5EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-6">Key Benefits</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">Why organizations choose to work with Puchis Limited.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-l-4 border-l-[#D4A853] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#0F1F3D]/10 rounded-2xl flex items-center justify-center mb-4 text-[#0F1F3D] group-hover:bg-[#0F1F3D] group-hover:text-white transition-all duration-300">
                      <benefit.icon size={28} />
                    </div>
                    <CardTitle className="text-xl text-[#0F1F3D] group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyDetails() {
  const details = [
    { label: "Business Scope", value: "General Trading" },
    { label: "Established", value: "20 December 2018" },
    { label: "Registration No.", value: "COY-PLUE55A" },
    { label: "MRA TPIN", value: "71242798" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Company Details</motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full"></motion.div>
          </div>
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
            <Card className="border-none shadow-xl bg-[#F8F5EE] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A853] to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building size={24} className="text-[#D4A853]" />
                  <h3 className="text-xl font-bold text-[#0F1F3D]">Puchis Limited</h3>
                </div>
                <div className="space-y-4">
                  {details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground text-sm">{detail.label}</span>
                      <span className="text-[#0F1F3D] font-semibold text-sm">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#D4A853] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#0F1F3D] text-sm">Dabwisa House, Along Kidney Crescent Road, Blantyre</p>
                      <p className="text-muted-foreground text-sm mt-1">P.O. BOX 2471, Blantyre</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <PageHero />
      <CompanyDescription />
      <VisionMission />
      <Values />
      <Benefits />
      <CompanyDetails />
    </div>
  );
}
