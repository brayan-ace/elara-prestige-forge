import { MessageCircle } from "lucide-react";

export function FloatingBook() {
  const msg = encodeURIComponent("Hello Allan Keri Hotel & Suites, I would like to book a room.");
  return (
    <a
      href={`https://wa.me/2349137938082?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition-all animate-shimmer" />
      <span className="relative flex items-center gap-2 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full font-medium shadow-2xl hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm">Book on WhatsApp</span>
      </span>
    </a>
  );
}