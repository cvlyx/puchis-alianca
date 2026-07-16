import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Award,
  Users,
  Monitor,
  Target,
  Lightbulb,
  Headphones,
  MapPin,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Briefcase,
  Globe2,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
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
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{end >= 7 ? "+" : ""}</span>;
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F8F5EE] to-white">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
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
              Quality Products & Expert{" "}
              <span className="text-primary relative whitespace-nowrap">
                <span className="relative z-10">Procurement Solutions</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D4A853]/30 -z-10 transform -rotate-1"></span>
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              Providing quality products and innovative procurement consultancy services to private and public institutions across Malawi and beyond.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base rounded-full px-8 h-14 shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border-primary/20 hover:bg-primary/5 hover:text-primary text-base rounded-full px-8 h-14 transition-transform hover:-translate-y-1"
                >
                  Learn About Us
                </Button>
              </Link>
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
              src="/images/hero.webp"
              alt="Procurement Professional"
              loading="eager"
              className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/50"
            />
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
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]">
              <Landmark className="text-[#D4A853]" /> Government Ministries
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]">
              <Globe2 className="text-[#D4A853]" /> NGOs & Donors
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg text-[#0F1F3D]">
              <Briefcase className="text-[#D4A853]" /> Private Companies
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#0F1F3D" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,43,1360,48L1440,53L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F1F3D] to-primary text-primary-foreground relative overflow-hidden">
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
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#D4A853] mb-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-[#D4A853]"></span>
              About Us
              <span className="w-12 h-px bg-[#D4A853]"></span>
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-semibold text-white mb-6">
              Puchis Limited
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Puchis Limited provides various goods and related services to private and public institutions and individuals within Malawi. Our products range includes Office Equipment and Supplies, Plant and Machinery, Hardware and Construction Materials, Personal Protective Equipment, and Agri-Business.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">
              <div className="text-4xl font-bold text-white mb-2"><CountUp end={7} /></div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Years of Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">
              <div className="text-4xl font-bold text-white mb-2"><CountUp end={5} /></div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Expert Consultants</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">
              <div className="text-4xl font-bold text-white mb-2"><CountUp end={2} duration={1} /></div>
              <div className="text-[#D4A853] font-medium tracking-wide uppercase text-sm">Sectors Served</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <Link href="/about">
              <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-8">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#F8F5EE" fillOpacity="1" d="M0,32L80,48C160,64,320,96,480,101.3C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

function ValuesPreview() {
  const values = [
    { icon: Target, title: "Integrity", description: "We uphold the highest standards of integrity in all our actions." },
    { icon: Lightbulb, title: "Innovation", description: "We provide new and customer-based solutions by focusing on research and development." },
    { icon: Users, title: "Team Work", description: "We work together across boundaries to meet the needs of our customers and stakeholders." },
    { icon: Award, title: "Leadership", description: "We lead the way in the field of Supply Chain by setting new standards." },
    { icon: Headphones, title: "After-Sales Services", description: "Reliable support and assistance to our clients even after delivery." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0F1F3D] mb-4">
              Our Core Values
            </motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full"></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full text-center border-border/50 border-b-4 border-b-[#D4A853] hover:shadow-xl transition-all duration-300 bg-[#F8F5EE]/50 hover:bg-white group">
                  <CardHeader className="pb-2">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#0F1F3D] to-primary rounded-2xl shadow-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={28} />
                    </div>
                    <CardTitle className="text-lg font-bold text-[#0F1F3D]">{value.title}</CardTitle>
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

function ServicesPreview() {
  const services = [
    { icon: Monitor, title: "Procurement Consultancy", description: "Expert procurement trainings, policy development, audits, and bidding management for organizations.", color: "border-t-primary", textColor: "text-primary" },
    { icon: Briefcase, title: "General Trading", description: "Quality office supplies, plant & machinery, hardware, PPE, and agricultural commodities.", color: "border-t-[#D4A853]", textColor: "text-[#D4A853]" },
  ];

  return (
    <section className="py-24 bg-[#F8F5EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
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
              Two core service lines tailored to your organisation's unique challenges.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className={`h-full border-t-4 ${service.color} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group`}>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.textColor}`} style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                      <service.icon size={28} />
                    </div>
                    <CardTitle className="text-xl text-[#0F1F3D] group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <Link href="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F3D] via-primary to-[#2E8B8B]"></div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] border-2 border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#D4A853]/40 rounded-full"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `pulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s` }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your <span className="text-[#D4A853]">Organisation?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with Puchis Limited for quality products, reliable supplies, and expert procurement consultancy solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#0F1F3D] hover:bg-[#F8F5EE] hover:text-primary text-lg rounded-full px-10 h-16 font-bold shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Us Today <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-[#F8F5EE] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F1F3D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                  <p className="text-muted-foreground font-medium">+265 881 311 613</p>
                  <p className="text-muted-foreground font-medium">+265 999 558 180</p>
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
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="border-none shadow-2xl bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A853] to-transparent"></div>
              <CardHeader className="bg-white pb-4 pt-10 px-8">
                <CardTitle className="text-3xl font-bold text-[#0F1F3D]">Send a Message</CardTitle>
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
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] bg-[#F8F5EE] border-none resize-none focus-visible:ring-primary" required />
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
      <AboutPreview />
      <ValuesPreview />
      <ServicesPreview />
      <CtaBanner />
      <ContactForm />
    </div>
  );
}
