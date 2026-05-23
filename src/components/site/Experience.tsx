import { motion } from "framer-motion";
import room1 from "@/assets/room-1.png";
import room3 from "@/assets/room-3.png";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 ambient-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 mt-12">
            <div className="rounded-2xl overflow-hidden">
              <img src={room1} alt="Suite ambience" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-[1500ms]" />
            </div>
            <div className="rounded-2xl overflow-hidden glass p-6">
              <div className="font-display text-4xl text-primary">15+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years of Hospitality</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden glass p-6">
              <div className="font-display text-4xl text-primary">98%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Guest Satisfaction</div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={room3} alt="Suite detail" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-[1500ms]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Experience</div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.05] mb-8">
            More than a stay.<br />
            <span className="italic text-gradient-gold">A memory.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Allan Keri, we don't simply offer rooms — we curate moments. From the
            warmth of arrival to the quiet of dusk, every detail is shaped by people
            who genuinely care.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you're arriving for business, a romantic escape, or a family
            gathering, our team anticipates with grace and serves with intention.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              "Personalized Hospitality",
              "Cinematic Spaces",
              "Bespoke Comforts",
              "Discreet Service",
            ].map((p) => (
              <div key={p} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-foreground/80 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}