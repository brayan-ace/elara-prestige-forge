import logo from "@/assets/logo.png";
import { Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Allan Keri" className="h-12 w-12 rounded-full ring-1 ring-primary/40" />
              <div>
                <div className="font-display text-lg text-foreground">Allan Keri</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Hotel & Suites</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Nigeria's premium hospitality experience — where elegance, comfort, and
              quiet luxury converge.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#suites" className="hover:text-primary">Suites</a></li>
              <li><a href="#amenities" className="hover:text-primary">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
              <li><a href="#experience" className="hover:text-primary">Experience</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Reach Us</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-primary mt-0.5" /> <a href="tel:+2349137938082" className="hover:text-primary">+234 913 793 8082</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> <a href="https://maps.app.goo.gl/gT3msimRjKykkMF57" target="_blank" rel="noopener noreferrer" className="hover:text-primary">View on Google Maps</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Newsletter</div>
            <p className="text-sm text-muted-foreground mb-4">Receive curated offers and seasonal stays.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-secondary/50 border border-border rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button className="bg-primary text-primary-foreground rounded-full px-4 py-2.5 text-sm font-medium hover:gold-glow transition-all">
                Join
              </button>
            </form>
            <div className="flex gap-3 mt-6 text-foreground/60">
              <a href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Allan Keri Hotel & Suites. All rights reserved.</div>
          <div>Crafted with quiet luxury in Nigeria.</div>
        </div>
      </div>
    </footer>
  );
}