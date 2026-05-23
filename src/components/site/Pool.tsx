import { motion } from "framer-motion";
import pool from "@/assets/pool.png";
import { Waves } from "lucide-react";

export function Pool() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-3">
            <Waves className="h-4 w-4" /> Aquatic Sanctuary
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] mb-6">
            Relaxation<br />
            <span className="italic text-gradient-gold">Redefined.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Slip into shimmering azure waters surrounded by curated landscaping and
            ambient golden light. Our pool is a quiet escape — a place to slow down,
            unwind, and breathe in the moment.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="font-display text-3xl text-primary">25M</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Heated Pool</div>
            </div>
            <div>
              <div className="font-display text-3xl text-primary">24/7</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Pool Access</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden gold-glow">
            <img src={pool} alt="Swimming pool" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 max-w-xs hidden md:block">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Sunrise Swim</div>
            <div className="text-foreground/80 text-sm">Open from 6:00 AM with curated towel service and refreshments.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}