import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header & Navigasi */}
      <Navbar />

      {/* Main Content (6 Sections) */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services />

        {/* Section 3: Schedule */}
        <Schedule />

        {/* Section 4: Testimonials */}
        <Testimonials />

        {/* Section 5: Pricing (Paket Pemeriksaan) */}
        <Pricing />

        {/* Section 6: Location & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
