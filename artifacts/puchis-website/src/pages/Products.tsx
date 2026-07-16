import { motion } from "framer-motion";
import { Monitor, Truck, ShieldCheck, Wrench, Cog, Leaf, CheckCircle2 } from "lucide-react";
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
            General Trading
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Our Products
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive range of quality products and supplies for private and public institutions across Malawi.
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

const productCategories = [
  {
    id: "office-supplies",
    icon: Monitor,
    title: "Office Supplies",
    description: "We supply a wide variety of office technology, electrical equipment and consumables.",
    items: [
      "Furniture",
      "Internet Connection",
      "Kitchen Supplies",
      "Telephone Systems",
      "Photocopiers & Printers",
      "Computer Software",
      "Stationery",
      "Storage Equipment",
      "Collaboration Tools",
      "Office Waste & Recycling Tools",
    ],
    color: "border-t-primary",
    textColor: "text-primary",
  },
  {
    id: "plant-hire",
    icon: Truck,
    title: "Plant, Machinery & Vehicle Hire",
    description: "A comprehensive, modern fleet of plant and commercial vehicles tailored to meet evolving demands.",
    items: [
      "Heavy Plant & Earthmoving Equipment",
      "Commercial Vehicle & Logistics Fleet Hire",
      "Access & Lifting Solutions",
      "Specialized Tool & Compact Plant Hire",
      "Managed Services & Operator Provision",
    ],
    color: "border-t-[#D4A853]",
    textColor: "text-[#D4A853]",
  },
  {
    id: "ppe",
    icon: ShieldCheck,
    title: "Industrial Safety PPE",
    description: "We provide quality Industrial Personal Protective Equipment for workplace safety.",
    items: [
      "Gloves",
      "Work Suits",
      "Disposable Dust Masks",
      "PVC Twin Half Masks",
      "Welding Goggles",
      "Safety Boots",
    ],
    color: "border-t-[#2E8B8B]",
    textColor: "text-[#2E8B8B]",
  },
  {
    id: "hardware",
    icon: Wrench,
    title: "Hardware & General Supplies",
    description: "Wide variety of hardware, building materials, and general supplies for construction and maintenance.",
    items: [
      "Building Materials",
      "Hand Tools",
      "Power Tools",
      "Electrical Supplies",
      "Plumbing Materials",
      "General Hardware",
    ],
    color: "border-t-[#FF7F50]",
    textColor: "text-[#FF7F50]",
  },
  {
    id: "machinery",
    icon: Cog,
    title: "Plant & Machinery",
    description: "Supply of wide variety of processing plant and machinery and related spare parts.",
    items: [
      "Generators & Power Back-up Systems",
      "Industrial Plant & Machinery",
      "Construction Plant & Machinery",
      "Manufacturing Plant Machinery",
      "Farming Plant & Machinery",
    ],
    color: "border-t-[#0F1F3D]",
    textColor: "text-[#0F1F3D]",
  },
  {
    id: "commodities",
    icon: Leaf,
    title: "Agricultural Commodities",
    description: "Supply of wide variety of commodities and animals for agricultural and food needs.",
    items: [
      "Livestock: Goats, Cattle, Fowls, Sheep",
      "Soybeans",
      "Pulses & Peas",
      "Assorted Grains (Groundnuts, Maize, Rice)",
      "Meat",
      "Oils",
    ],
    color: "border-t-[#FFBF00]",
    textColor: "text-[#FFBF00]",
  },
];

export default function Products() {
  return (
    <div className="flex flex-col w-full">
      <PageHero />

      <section className="py-24 bg-[#F8F5EE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div key={index} variants={fadeUp} id={category.id}>
                    <Card className={`h-full border-t-4 ${category.color} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group`}>
                      <CardHeader>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-[360deg] ${category.textColor}`} style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                          <Icon size={28} />
                        </div>
                        <CardTitle className="text-xl text-[#0F1F3D] group-hover:text-primary transition-colors">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
