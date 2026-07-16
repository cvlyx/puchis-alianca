import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Reach out today to discuss how we can help optimize your procurement and supply chain operations.
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

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero />

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
    </div>
  );
}
