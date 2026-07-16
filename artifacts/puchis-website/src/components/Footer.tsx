import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Office Supplies", href: "/products#office-supplies" },
    { name: "Plant & Vehicle Hire", href: "/products#plant-hire" },
    { name: "Industrial Safety PPE", href: "/products#ppe" },
    { name: "Hardware & Supplies", href: "/products#hardware" },
    { name: "Plant & Machinery", href: "/products#machinery" },
    { name: "Agricultural Commodities", href: "/products#commodities" },
  ];

  const serviceLinks = [
    { name: "Procurement Trainings", href: "/services#trainings" },
    { name: "Procurement Policies", href: "/services#policies" },
    { name: "Procurement Audits", href: "/services#audits" },
    { name: "Bidding Management", href: "/services#bidding" },
    { name: "Procurement Outsourcing", href: "/services#outsourcing" },
    { name: "E-Procurement", href: "/services#eprocurement" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div className="space-y-4">
            <Link href="/" className="block mb-4">
              <img src="/images/logo.png" alt="Puchis Limited" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Quality products and expert procurement consultancy for public and private institutions in Malawi. General trading and supply chain solutions since 2018.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="mr-2 h-4 w-4 text-primary shrink-0" />
                <span>+265 881 311 613</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-4 w-4 text-primary shrink-0" />
                <span>info@puchisi.org</span>
              </div>
              <div className="flex items-start text-muted-foreground text-sm">
                <MapPin className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Dabwisa House, Along Kidney Crescent Road, Blantyre</span>
              </div>
            </div>
            <div className="pt-2 space-y-1.5">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Reach Us At</p>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-3 w-3 text-primary shrink-0" />
                <span>consultant@puchis.org</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-3 w-3 text-primary shrink-0" />
                <span>sales@puchis.org</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-3 w-3 text-primary shrink-0" />
                <span>info@puchisi.org</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Puchis Limited. All rights reserved.
          </p>
          <div className="text-muted-foreground text-sm flex gap-4">
            <span>COY-PLUE55A</span>
            <span>&bull;</span>
            <span>MRA TPIN: 71242798</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
