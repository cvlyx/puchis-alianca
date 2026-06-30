import { motion } from "framer-motion";
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
  Building 
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
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Expert Procurement Consultancy for <span className="text-primary">Modern Organizations</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Helping advance Malawi's supply chain through expert knowledge, innovative solutions, and proven expertise since 2018.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button 
                onClick={() => scrollTo("services")}
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base rounded-full px-8 h-14"
              >
                Explore Our Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/images/hero.png" 
              alt="Procurement Professional" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-border/50"
            />
          </motion.div>
        </div>
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
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Why Choose Puchis Limited?</h2>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium text-white/90">
              Procurement's role within organizations has evolved. Today, the procurement department is expected to work together with top management as strategic business partners and trusted advisors to create competitive advantage, mitigate risks, and fuel organizational growth.
            </p>
            <p className="mt-4 text-white/80">
              With our wide knowledge and strong expertise, we guide organizations towards a new operating model — one where strategy, technology, and operations combine to deliver game-changing outcomes.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-white mb-2">7+</div>
              <div className="text-accent font-medium">Years of Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-white mb-2">5</div>
              <div className="text-accent font-medium">Expert Consultants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-white mb-2">2</div>
              <div className="text-accent font-medium">Sectors Served (Public & Private)</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
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
    </section>
  );
}

function Services() {
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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Comprehensive procurement solutions tailored to your organisation's needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300 border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img 
                src="/images/services.png" 
                alt="Procurement Professionals Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Transforming Operations</h3>
                  <p className="max-w-2xl text-white/90 text-lg">Partner with us to build resilient, efficient, and transparent procurement processes that drive your organization forward.</p>
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
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Management Team
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              A diverse team with over 20 years of combined experience in procurement and supply chain.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-5 pb-0">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-5 pt-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
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
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to transform your organisation's procurement?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Partner with Malawi's leading procurement consultancy.
          </p>
          <Button 
            onClick={() => scrollTo("contact")}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg rounded-full px-10 h-14 font-semibold shadow-xl"
          >
            Contact Us Today
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
      description: "We provide new and customer-based solutions by focusing on research and development and observing global trends."
    },
    {
      icon: Users,
      title: "Team Work",
      description: "We work together across boundaries to meet the needs of our customers and every stakeholder we interact with."
    },
    {
      icon: Award,
      title: "Leadership",
      description: "We lead the way in the field of Supply Chain by setting new standards and ways of doing things."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full text-center border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-primary">
                      <value.icon size={32} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Contact us today to discuss how we can help optimize your procurement and supply chain operations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Dabwisa House, Along Kidney Crescent Road<br/>Blantyre, Malawi</p>
                  <p className="text-muted-foreground mt-1">P.O. BOX 2471, Blantyre</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+265 881 311 613</p>
                  <p className="text-muted-foreground">+265 999 558 180</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">andrewpuleni@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-6">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Company Info</h4>
                  <p className="text-muted-foreground">Registration: COY-PLUE55A</p>
                  <p className="text-muted-foreground">MRA TPIN: 71242798</p>
                  <p className="text-muted-foreground mt-2 text-sm">Directors: Andrew C. Puleni, Luwiza Soko</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={5} 
                      required 
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
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
