import { motion } from "framer-motion";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import { Bed, Wifi, Wind, Tv, ArrowUpRight } from "lucide-react";

const suites = [
  {
    img: room1,
    name: "Signature Suite",
    tag: "Most Popular",
    desc: "An ambient retreat with mood lighting, plush king bed and curated finishes for the perfect night's stay.",
    price: "₦85,000",
    amenities: ["King Bed", "Smart TV", "AC", "Fast WiFi"],
  },
  {
    img: room2,
    name: "Classic Deluxe",
    tag: "Comfort",
    desc: "Soft tones, generous space and serene styling — a refined sanctuary designed for restful escapes.",
    price: "₦65,000",
    amenities: ["King Bed", "Smart TV", "AC", "Fast WiFi"],
  },
  {
    img: room3,
    name: "Executive Suite",
    tag: "Premium",
    desc: "Sophisticated interiors with bespoke art, premium linens, and curated detail for the discerning traveler.",
    price: "₦110,000",
    amenities: ["King Bed", "Smart TV", "AC", "Fast WiFi"],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "King Bed": Bed,
  "Smart TV": Tv,
  AC: Wind,
  "Fast WiFi": Wifi,
};

export function Suites() {
  return (
    <section id="suites" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 ambient-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Suites</div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight max-w-2xl">
              Spaces designed for
              <span className="italic text-gradient-gold"> quiet luxury.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Every suite is a private sanctuary — meticulously crafted with bespoke
            interiors, premium textiles, and immersive lighting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {suites.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] text-primary">
                  {s.tag}
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl text-foreground">{s.name}</h3>
                  <div className="text-right">
                    <div className="text-primary font-semibold">{s.price}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">per night</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {s.amenities.map((a) => {
                    const Icon = iconMap[a];
                    return (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary/50 px-3 py-1.5 rounded-full"
                      >
                        <Icon className="h-3 w-3 text-primary" />
                        {a}
                      </span>
                    );
                  })}
                </div>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Book Suite
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}