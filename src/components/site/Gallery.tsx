import { motion } from "framer-motion";
import { useState } from "react";
import hero from "@/assets/hero-exterior.png";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import pool from "@/assets/pool.png";
import { X } from "lucide-react";

const images = [
  { src: hero, span: "md:col-span-2 md:row-span-2", alt: "Hotel exterior" },
  { src: room1, span: "", alt: "Signature suite" },
  { src: pool, span: "md:row-span-2", alt: "Swimming pool" },
  { src: room2, span: "", alt: "Classic deluxe" },
  { src: room3, span: "md:col-span-2", alt: "Executive suite" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Gallery</div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Moments from <span className="italic text-gradient-gold">Allan Keri.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onClick={() => setOpen(img.src)}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 text-left text-foreground text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {img.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] glass-strong flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-foreground p-2 hover:text-primary" onClick={() => setOpen(null)}>
            <X />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl gold-glow object-contain" />
        </div>
      )}
    </section>
  );
}