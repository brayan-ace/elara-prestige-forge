import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Suites } from "@/components/site/Suites";
import { Pool } from "@/components/site/Pool";
import { Amenities } from "@/components/site/Amenities";
import { Experience } from "@/components/site/Experience";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { FloatingBook } from "@/components/site/FloatingBook";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Suites />
        <Pool />
        <Amenities />
        <Experience />
        <Gallery />
        <Testimonials />
        <Booking />
        <MapSection />
      </main>
      <Footer />
      <FloatingBook />
    </div>
  );
}
