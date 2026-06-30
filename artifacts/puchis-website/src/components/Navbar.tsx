import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = ["home", "about", "services", "team", "contact"].map(id => document.getElementById(id));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Team", href: "team" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-primary to-gold transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="font-sans font-bold text-2xl tracking-tight text-primary">
              PUCHIS LIMITED
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`group relative text-sm font-medium transition-colors ${
                  activeSection === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                    activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-border/50 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-base font-medium text-foreground hover:text-primary py-2"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contact")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
    </>
  );
}
