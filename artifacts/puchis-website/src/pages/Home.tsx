import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  ShieldAlert, 
  TrendingDown, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  ClipboardList, 
  Search, 
  Gavel, 
  Handshake, 
  Monitor, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Building,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Briefcase,
  Globe2,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function CountUp({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{end >= 7 ? '+' : ''}</span>;
}

function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F8F5EE] to-white">
      {/* Decorative Blobs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#D4A853]/50 bg-[#D4A853]/10 text-primary text-sm font-medium tracking-wide">
                Est. 2018 &middot; Blantyre, Malawi
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6"
            >
              Expert Procurement Consultancy for <span className="text-primary relative whitespace-nowrap">
                <span className="relative z-10">Modern Organizations</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D4A853]/30 -z-10 transform -rotate-1"></span>
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              Helping advance Malawi's supply chain through expert knowledge, innovative solutions, and proven expertise.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollTo("services")}
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base rounded-full px-8 h-14 shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1"
              >
                Explore Our Services
              </Button>
              <Button 
                onClick={() => scrollTo("about")}
                variant="outline"
                size="lg" 
                className="text-primary border-primary/20 hover:bg-primary/5 hover:text-primary text-base rounded-full px-8 h-14 transition-transform hover:-translate-y-1"
              >
                Learn About Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A853]/30 to-primary/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 blur-sm"></div>
            <img 
              src="/images/hero.png" 
              alt="Procurement Professional" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/50"
            />
            
            {/* Floating UI Element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-border/50"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Proven Results</p>
                <p className="text-xs text-muted-foreground">In Public & Private Sectors</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 pt-10 border-t border-border/50"
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by Public & Private Sector Organisations across Malawi
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]"><Landmark className="text-[#D4A853]"/> Government Ministries</div>
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]"><Globe2 className="text-[#D4A853]"/> NGOs & Donors</div>
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]"><Briefcase className="text-[#D4A853]"/> Private Companies</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#0F1F3D" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,43,1360,48L1440,53L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

function About() {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Anticipate and safeguard businesses from procurement risks. Ensure efficiency and productivity."
    },
    {
      icon: ShieldAlert,
      title: "Prevent Corruption",
      description: "Corruption adds up to 25% of procurement costs in developing countries. We help prevent and detect fraud within your organisation."
    },
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description: "Organisations spend more than two thirds of revenue on procurement. We help achieve better spend control without compromising quality."
    },
    {
      icon: TrendingUp,
      title: "Improved Performance",
      description: "Equip your team with the right knowledge and tools, improving your procurement function and your organisation's bottom line."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#0F1F3D] to-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-20 right-10 text-white/5 pointer-events-none">
        <Quote size={400} className="transform rotate-12" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#D4A853] mb-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-[#D4A853]"></span>
              Why Choose Puchis Limited
              <span className="w-12 h-px bg-[#D4A853]"></span>
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-semibold text-white">
              Procurement's role has evolved. It's time to transform operations to deliver game-changing outcomes.
            </p>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              With our wide knowledge and strong expertise, we guide organizations towards a new operating model as strategic business partners and trusted advisors.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 hidden md:block"></div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-4 border-[#D4A853] opacity-20"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-[#D4A853] transform -rotate-45"></div>
                <div className="text-4xl font-bold text-white"><CountUp end={7} /></div>
              </div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Years of Experience</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-4 border-[#D4A853] opacity-20"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-[#D4A853] transform rotate-45"></div>
                <div className="text-4xl font-bold text-white"><CountUp end={5} /></div>
              </div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Expert Consultants</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-4 border-[#D4A853] opacity-20"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-[#D4A853] transform rotate-180"></div>
                <div className="text-4xl font-bold text-white"><CountUp end={2} duration={1} /></div>
              </div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Sectors Served</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 border-l-4 border-l-[#D4A853] text-white h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-[#D4A853]">
                      <benefit.icon size={24} />
                    </div>
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#F8F5EE" fillOpacity="1" d="M0,32L80,48C160,64,320,96,480,101.3C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

function Services() {
  const borderColors = [
    "border-t-primary",
    "border-t-[#D4A853]",
    "border-t-[#0F1F3D]",
    "border-t-[#2E8B8B]",
    "border-t-[#FF7F50]",
    "border-t-[#FFBF00]",
    "border-t-slate-600"
  ];
  
  const textColors = [
    "text-primary",
    "text-[#D4A853]",
    "text-[#0F1F3D]",
    "text-[#2E8B8B]",
    "text-[#FF7F50]",
    "text-[#FFBF00]",
    "text-slate-600"
  ];

  const shadowColors = [
    "hover:shadow-primary/20",
    "hover:shadow-[#D4A853]/20",
    "hover:shadow-[#0F1F3D]/20",
    "hover:shadow-[#2E8B8B]/20",
    "hover:shadow-[#FF7F50]/20",
    "hover:shadow-[#FFBF00]/20",
    "hover:shadow-slate-600/20"
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Procurement Trainings",
      description: "Employee development trainings in public procurement, donor-funded procurements, and tailor-made procurements for private institutions."
    },
    {
      icon: FileText,
      title: "Procurement Policies",
      description: "Formulation of clear, well-written procurement policies and procedures for transparency, accountability, uniformity and stability."
    },
    {
      icon: ClipboardList,
      title: "Procurement Plans",
      description: "Sound procurement planning that defines requirements, budgets, rules, packaging, procurement method, and scheduling."
    },
    {
      icon: Search,
      title: "Procurement Audits",
      description: "Unprecedented visibility into expenditures to manage spend portfolios and evaluate operational efficiency of processes."
    },
    {
      icon: Gavel,
      title: "Bidding Process Management",
      description: "Full management of the bidding process for Goods, Works, Consultancy Services, and Non-Consultancy Services."
    },
    {
      icon: Handshake,
      title: "Procurement Outsourcing",
      description: "Manage your procurement function to focus on strategic activities and enjoy economies of scale through consolidation."
    },
    {
      icon: Monitor,
      title: "E-Procurement Services",
      description: "Modern technological tools including E-sourcing, MRP/CRP Systems, Digitalisation, Cloud and Mobile Solutions, and AI."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F8F5EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div variants={fadeUp} className="flex justify-center mb-4">
              <span className="px-4 py-1.5 rounded-full bg-white text-[#0F1F3D] font-bold text-sm tracking-widest uppercase shadow-sm border border-border/50">
                What We Do
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-6">
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Comprehensive procurement solutions tailored to your organisation's unique challenges and strategic goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const colorIdx = index % borderColors.length;
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Card className={`h-full border-t-4 ${borderColors[colorIdx]} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group ${shadowColors[colorIdx]}`}>
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-[360deg] ${textColors[colorIdx]}`} style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                        <Icon size={28} />
                      </div>
                      <CardTitle className="text-xl text-[#0F1F3D] group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img 
                src="/images/services.png" 
                alt="Procurement Professionals Meeting" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-[#0F1F3D]/60 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white w-full max-w-4xl">
                  <span className="text-[#D4A853] font-bold tracking-widest text-sm uppercase mb-2 block">Partnership</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Transforming Operations</h3>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed">Partner with us to build resilient, efficient, and transparent procurement processes that drive your organization forward in an ever-changing landscape.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: "Andrew C. Puleni",
      role: "Lead Partner",
      bio: "Oversees business operations and implementation. Expertise in project management, business strategy, key partnerships, and high-stake negotiations. BSc Business Administration (University of Malawi), MSc Supply Chain Management (University of Bolton, UK).",
      image: "/images/team-1.png"
    },
    {
      name: "Grant Beni",
      role: "Consultant",
      bio: "Results-driven finance executive with over 18 years of experience in corporate finance, accounting, financial management, and strategic leadership. Currently Group CFO at HCJ Group of Companies.",
      image: "/images/team-2.png"
    },
    {
      name: "Dennis Chirundu",
      role: "Consultant",
      bio: "Agricultural Economist and M&E professional. Expert in project monitoring, data analysis, community engagement, and digital data management tools.",
      image: "/images/team-3.png"
    },
    {
      name: "John Daka",
      role: "Consultant",
      bio: "Full Stack Systems Developer with expertise in Node.js, React, MySQL, Odoo ERP, and RESTful APIs. Currently ICT Systems Developer at ESCOM Malawi Limited.",
      image: "/images/team-4.png"
    },
    {
      name: "Misheck Khonje",
      role: "Consultant",
      bio: "Procurement and contracts professional with 7+ years of experience. CIPS qualified, member of Malawi Institute of Procurement and Supply (MIPS).",
      image: "/images/team-5.png"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-4">
              Key Management Team
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              A diverse team with over 20 years of combined experience in procurement, finance, IT and supply chain.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-md"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredMember === index ? 'scale-105' : 'scale-100'}`}
                />
                
                {/* Default Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-[#0F1F3D]/50 to-transparent transition-opacity duration-300 ${hoveredMember === index ? 'opacity-90' : 'opacity-80'}`}></div>

                {/* Always visible Name & Role */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full pointer-events-none">
                  <h3 className="text-white font-bold text-xl mb-1 translate-y-0 transition-transform duration-300">{member.name}</h3>
                  <p className="text-[#D4A853] font-medium text-sm">{member.role}</p>
                </div>

                {/* Hover Reveal Bio Panel */}
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
                      <p className="text-white/80 text-sm leading-relaxed overflow-y-auto pr-2 custom-scrollbar">
                        {member.bio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* View Bio Chip */}
                <div className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-opacity duration-300 border border-white/20 ${hoveredMember === index ? 'opacity-0' : 'opacity-100'}`}>
                  View Bio
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Multi-stop diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D] via-primary to-[#2E8B8B]"></div>
      
      {/* Animated rotating ring and particles */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] border-2 border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>
      
      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-[#D4A853]/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to transform your <span className="text-[#D4A853]">organisation's procurement?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with Malawi's leading procurement consultancy for strategic, efficient, and transparent solutions.
          </p>
          <Button 
            onClick={() => scrollTo("contact")}
            size="lg" 
            className="bg-white text-[#0F1F3D] hover:bg-[#F8F5EE] hover:text-primary text-lg rounded-full px-10 h-16 font-bold shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Today <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We provide new and customer-based solutions by focusing on research and development."
    },
    {
      icon: Users,
      title: "Team Work",
      description: "We work together across boundaries to meet the needs of our customers and stakeholders."
    },
    {
      icon: Award,
      title: "Leadership",
      description: "We lead the way in the field of Supply Chain by setting new standards."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-4">
              Our Core Values
            </motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full"></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
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

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message. We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5EE] relative overflow-hidden">
      {/* Background Map SVG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F1F3D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Reach out today to discuss how we can help optimize your procurement and supply chain operations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="mt-1 w-14 h-14 bg-[#D4A853]/20 rounded-full flex items-center justify-center text-[#D4A853] shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F1F3D] mb-2">Location</h4>
                  <p className="text-muted-foreground">Dabwisa House, Along Kidney Crescent Road<br/>Blantyre, Malawi</p>
                  <p className="text-muted-foreground mt-1">P.O. BOX 2471, Blantyre</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-1 w-14 h-14 bg-[#2E8B8B]/20 rounded-full flex items-center justify-center text-[#2E8B8B] shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F1F3D] mb-2">Phone</h4>
                  <p className="text-muted-foreground font-medium hover:text-primary transition-colors cursor-pointer">+265 881 311 613</p>
                  <p className="text-muted-foreground font-medium hover:text-primary transition-colors cursor-pointer">+265 999 558 180</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-1 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F1F3D] mb-2">Email</h4>
                  <a href="mailto:andrewpuleni@yahoo.com" className="text-muted-foreground font-medium hover:text-primary transition-colors">andrewpuleni@yahoo.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-1 w-14 h-14 bg-[#0F1F3D]/20 rounded-full flex items-center justify-center text-[#0F1F3D] shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F1F3D] mb-2">Company Info</h4>
                  <p className="text-muted-foreground">Registration: COY-PLUE55A</p>
                  <p className="text-muted-foreground">MRA TPIN: 71242798</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="border-none shadow-2xl bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A853] to-transparent"></div>
              <CardHeader className="bg-white pb-4 pt-10 px-8">
                <CardTitle className="text-3xl font-bold text-[#0F1F3D]">Send a Message</CardTitle>
                <CardDescription className="text-base">We typically respond within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0F1F3D] font-semibold">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-[#F8F5EE] border-none h-12 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F1F3D] font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-[#F8F5EE] border-none h-12 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#0F1F3D] font-semibold">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required className="bg-[#F8F5EE] border-none h-12 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0F1F3D] font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      className="min-h-[150px] bg-[#F8F5EE] border-none resize-none focus-visible:ring-primary" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0F1F3D] hover:bg-primary text-white h-14 text-lg rounded-xl transition-colors">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Services />
      <Team />
      <CtaBanner />
      <Values />
      <Contact />
    </div>
  );
}
