import boutiqueBg from "@assets/WhatsApp_Image_2025-12-24_at_1.12.25_PM_1766612331411.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BoutiqueSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${boutiqueBg})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>
      {/* Content Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm p-12 md:p-16 max-w-2xl text-center mx-4 border border-gold-beige">
        <span className="text-espresso uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Visit Us</span>
        <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6">The Boutique Experience</h2>
        <p className="text-lg mb-8 font-medium text-[#ffffff]">
          Immerse yourself in the world of Ingénue at our West Palm Beach location. Experience the fabrics, try on the collections, and let us style your perfect look.
        </p>
        <Link href="/visit">
          <Button 
            className="bg-espresso text-white hover:bg-gold-beige hover:text-espresso rounded-none px-8 py-6 text-base tracking-widest font-serif transition-colors"
          >
            Visit in West Palm Beach
          </Button>
        </Link>
      </div>
    </section>
  );
}
