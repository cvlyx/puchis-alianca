import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
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
    <footer className="bg-foreground text-background py-16 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <span className="font-sans font-bold text-2xl tracking-tight text-white block mb-4">
              PUCHIS LIMITED
            </span>
            <p className="text-muted-foreground max-w-sm">
              Leading Procurement Consultancy in Malawi. Helping modernize supply chain operations across public and private sectors.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>Dabwisa House, Along Kidney Crescent Road, Blantyre, Malawi</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>+265 881 311 613</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>andrewpuleni@yahoo.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Puchis Limited. All rights reserved.
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
