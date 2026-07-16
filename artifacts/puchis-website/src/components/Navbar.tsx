import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Truck,
  ShieldCheck,
  Wrench,
  Cog,
  Leaf,
  BookOpen,
  FileText,
  ClipboardList,
  Search,
  Gavel,
  Handshake,
  Target,
  Lightbulb,
  Users,
  Award,
  Headphones,
  Briefcase,
  ShoppingBag,
  Info,
  Phone,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const products = [
    { icon: Monitor, name: "Office Supplies", description: "Furniture, stationery, tech & more", href: "/products#office-supplies" },
    { icon: Truck, name: "Plant & Vehicle Hire", description: "Heavy equipment & fleet solutions", href: "/products#plant-hire" },
    { icon: ShieldCheck, name: "Industrial Safety PPE", description: "Gloves, boots, masks & suits", href: "/products#ppe" },
    { icon: Wrench, name: "Hardware & General Supplies", description: "Building materials & tools", href: "/products#hardware" },
    { icon: Cog, name: "Plant & Machinery", description: "Generators, industrial & farming", href: "/products#machinery" },
    { icon: Leaf, name: "Agricultural Commodities", description: "Livestock, grains & foodstuffs", href: "/products#commodities" },
  ];

  const services = [
    {
      category: "Procurement Consultancy",
      items: [
        { icon: BookOpen, name: "Procurement Trainings", href: "/services#trainings" },
        { icon: FileText, name: "Procurement Policies", href: "/services#policies" },
        { icon: ClipboardList, name: "Procurement Plans", href: "/services#plans" },
        { icon: Search, name: "Procurement Audits", href: "/services#audits" },
        { icon: Gavel, name: "Bidding Management", href: "/services#bidding" },
        { icon: Handshake, name: "Procurement Outsourcing", href: "/services#outsourcing" },
        { icon: Monitor, name: "E-Procurement Services", href: "/services#eprocurement" },
      ],
    },
    {
      category: "General Trading",
      items: [
        { icon: ShoppingBag, name: "Office Equipment Supply", href: "/products#office-supplies" },
        { icon: Truck, name: "Plant & Vehicle Hire", href: "/products#plant-hire" },
        { icon: ShieldCheck, name: "PPE Supply", href: "/products#ppe" },
        { icon: Wrench, name: "Hardware & Construction", href: "/products#hardware" },
        { icon: Cog, name: "Machinery Supply", href: "/products#machinery" },
        { icon: Leaf, name: "Agricultural Trading", href: "/products#commodities" },
      ],
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true, dropdown: "products" },
    { name: "Services", href: "/services", hasDropdown: true, dropdown: "services" },
    { name: "Team", href: "/team" },
  ];

  const isActive = (href: string) => location === href;
  const isHome = location === "/";
  const navTextColor = !isScrolled && !isHome ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary";
  const logoColor = !isScrolled && !isHome ? "text-white" : "text-primary";
  const activeLinkColor = !isScrolled && !isHome ? "text-white bg-white/10" : "text-primary bg-primary/5";
  const inactiveLinkColor = !isScrolled && !isHome ? "text-white/80 hover:text-white hover:bg-white/10" : "text-foreground/70 hover:text-primary hover:bg-primary/5";

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-primary to-[#D4A853] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <img src="/images/logo.png" alt="Puchis Limited" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.dropdown!)}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.href) ? activeLinkColor : inactiveLinkColor
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.dropdown ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Products Dropdown */}
                  {link.hasDropdown && link.dropdown === "products" && (
                    <AnimatePresence>
                      {activeDropdown === "products" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          onMouseEnter={() => handleMouseEnter("products")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-6 w-[520px]">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                              <ShoppingBag size={18} className="text-primary" />
                              <span className="font-bold text-[#0F1F3D]">Our Products</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {products.map((product) => (
                                <Link
                                  key={product.name}
                                  href={product.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F8F5EE] transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                                    <product.icon size={20} />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-[#0F1F3D] group-hover:text-primary transition-colors">
                                      {product.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {product.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-3 border-t border-border/50">
                              <Link
                                href="/products"
                                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                              >
                                View all products <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Services Dropdown */}
                  {link.hasDropdown && link.dropdown === "services" && (
                    <AnimatePresence>
                      {activeDropdown === "services" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          onMouseEnter={() => handleMouseEnter("services")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-6 w-[700px]">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                              <Briefcase size={18} className="text-primary" />
                              <span className="font-bold text-[#0F1F3D]">Our Services</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((group) => (
                                <div key={group.category}>
                                  <p className="text-xs font-bold uppercase tracking-wider text-[#D4A853] mb-3">
                                    {group.category}
                                  </p>
                                  <div className="space-y-1">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F8F5EE] transition-colors group"
                                      >
                                        <item.icon size={16} className="text-primary shrink-0" />
                                        <span className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
                                          {item.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 pt-3 border-t border-border/50">
                              <Link
                                href="/services"
                                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                              >
                                View all services <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className={`${!isScrolled && !isHome ? "bg-white text-[#0F1F3D] hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90"} font-medium rounded-full px-6 transition-colors duration-300`}>
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-300 ${!isScrolled && !isHome ? "text-white" : "text-foreground"}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border/50 shadow-lg overflow-hidden"
            >
              <div className="py-4 px-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-6 space-y-1">
                        {link.dropdown === "products" &&
                          products.map((p) => (
                            <Link
                              key={p.name}
                              href={p.href}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <p.icon size={14} />
                              {p.name}
                            </Link>
                          ))}
                        {link.dropdown === "services" &&
                          services.map((group) => (
                            <div key={group.category}>
                              <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#D4A853]">
                                {group.category}
                              </p>
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  <item.icon size={14} />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 px-4">
                  <Link href="/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
