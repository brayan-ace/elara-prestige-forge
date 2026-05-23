import { motion } from "framer-motion";
import {
  Waves, BedDouble, Wifi, Wind, UtensilsCrossed, CalendarRange,
  ConciergeBell, Tv, ShieldCheck, Car, Clock4, Shirt
} from "lucide-react";

const items = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: BedDouble, label: "Luxury Suites" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: CalendarRange, label: "Event Spaces" },
  { icon: ConciergeBell, label: "Room Service" },
  { icon: Tv, label: "Smart TVs" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Car, label: "Secure Parking" },
  { icon: Clock4, label: "24/7 Reception" },
  { icon: Shirt, label: "Laundry Services" },
];

export function Amenities() {
  return (
    <section id="amenities" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Amenities</div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Every detail, <span className="italic text-gradient-gold">considered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:gold-glow transition-all">
                <it.icon className="h-6 w-6" />
              </div>
              <div className="text-foreground font-medium">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}