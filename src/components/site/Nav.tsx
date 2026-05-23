import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#suites", label: "Suites" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Allan Keri" className="h-10 w-10 rounded-full object-cover ring-1 ring-primary/40" />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-wide text-foreground">Allan Keri</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary">Hotel & Suites</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2 group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+2349137938082"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:gold-glow transition-all duration-300 hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-primary/20 mt-3">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/80 hover:text-primary text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+2349137938082"
                className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}