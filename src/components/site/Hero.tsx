import { motion } from "framer-motion";
import hero from "@/assets/hero-exterior.png";
import { ArrowRight, Sparkles, Clock, Crown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with cinematic ken-burns */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="Allan Keri Hotel & Suites exterior"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/60" />
      <div className="absolute inset-0 ambient-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-8"
        >
          <Sparkles className="h-3 w-3" />
          Nigeria's Premium Hospitality
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] text-foreground max-w-5xl"
        >
          Where <span className="italic text-gradient-gold">Elegance</span>
          <br />
          Meets Comfort.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed"
        >
          Experience refined luxury in elegantly appointed suites, immersive amenities,
          and bespoke hospitality crafted for the most discerning travelers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:gold-glow transition-all duration-500 hover:scale-105"
          >
            Book Your Stay
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#suites"
            className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full font-medium text-foreground hover:border-primary/50 transition-all duration-300"
          >
            Explore Suites
          </a>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {[
            { icon: Crown, label: "Premium Suites", sub: "Curated for comfort" },
            { icon: Sparkles, label: "Luxury Experience", sub: "Bespoke service" },
            { icon: Clock, label: "24/7 Hospitality", sub: "Always at your service" },
          ].map((b, i) => (
            <div
              key={b.label}
              className="glass rounded-2xl p-5 flex items-center gap-4 animate-float"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{b.label}</div>
                <div className="text-xs text-muted-foreground">{b.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-primary animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}