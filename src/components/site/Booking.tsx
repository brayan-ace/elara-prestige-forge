import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const PHONE = "+2349137938082";
const PHONE_DISPLAY = "+234 913 793 8082";
const WHATSAPP_MSG = encodeURIComponent("Hello Allan Keri Hotel & Suites, I would like to book a room.");

export function Booking() {
  return (
    <section id="booking" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 ambient-bg" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative glass rounded-[2.5rem] p-10 md:p-16 overflow-hidden gold-glow"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Reserve</div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
                Your suite is<br />
                <span className="italic text-gradient-gold">waiting.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Speak directly with our reservations team — available around the clock.
              </p>
              <a href={`tel:${PHONE}`} className="inline-block font-display text-2xl text-primary hover:text-accent transition-colors mt-4">
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center justify-between gap-4 bg-primary text-primary-foreground p-5 rounded-2xl font-medium hover:gold-glow transition-all duration-500 hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3"><Phone className="h-5 w-5" /> Call Now</span>
                <span className="text-sm opacity-80">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://wa.me/2349137938082?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 glass p-5 rounded-2xl font-medium text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <span className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /> WhatsApp Booking</span>
                <span className="text-sm text-muted-foreground">Instant reply</span>
              </a>
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center justify-between gap-4 glass p-5 rounded-2xl font-medium text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <span className="flex items-center gap-3"><Calendar className="h-5 w-5 text-primary" /> Reserve Your Stay</span>
                <span className="text-sm text-muted-foreground">Best rates</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}