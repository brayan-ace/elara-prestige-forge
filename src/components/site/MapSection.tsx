import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Find Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05] mb-6">
              Effortless to <span className="italic text-gradient-gold">arrive.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Conveniently located with secure parking and 24/7 concierge to welcome you on arrival.
            </p>
            <a
              href="https://maps.app.goo.gl/gT3msimRjKykkMF57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:gold-glow transition-all duration-500 hover:scale-105"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="rounded-[2rem] overflow-hidden glass p-2 gold-glow">
              <iframe
                title="Allan Keri Hotel & Suites location"
                src="https://www.google.com/maps?q=Allan+Keri+Hotel+and+Suites+Nigeria&output=embed"
                width="100%"
                height="460"
                style={{ border: 0, borderRadius: "1.5rem", filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}