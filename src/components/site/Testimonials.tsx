import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Adaeze O.",
    role: "Business Traveler",
    text: "Effortless luxury from arrival to departure. The suite was immaculate and the team genuinely attentive — a standard rare in the region.",
  },
  {
    name: "Michael K.",
    role: "International Guest",
    text: "A cinematic experience. The pool at sunrise was unforgettable, and dining felt like a private chef's table. Easily my favorite stay in Nigeria.",
  },
  {
    name: "The Okafor Family",
    role: "Leisure Guests",
    text: "Spacious, beautifully designed, and impeccably clean. Our children loved the pool and we loved the quiet evenings. Already planning our return.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 ambient-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Guest Stories</div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Loved by <span className="italic text-gradient-gold">discerning travelers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass rounded-3xl p-8 hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex gap-1 text-primary mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-lg text-foreground/90 leading-relaxed mb-8 italic">
                "{r.text}"
              </p>
              <div>
                <div className="text-foreground font-medium">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}