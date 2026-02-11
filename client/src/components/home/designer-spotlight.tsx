import designerImg from "@assets/WhatsApp_Image_2025-12-24_at_2.50.41_PM_1766612141240.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function DesignerSpotlight() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-blush uppercase tracking-[0.2em] text-sm font-medium mb-6 block">Designer Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-8 leading-tight">Featuring Local and Latin American Artisans and Designers</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light mb-10">
              <p>We travel across our community to discover hidden gems—artisans who weave history into every thread and designers who are redefining modern luxury.</p>
              <p>Each piece in our collection tells a story of heritage, craftsmanship, and passion. From the vibrant streets of Cartagena to the textile workshops of Lima, we bring the best talent to Palm Beach.</p>
            </div>
            
            <Link href="/designers">
              <Button 
                variant="outline" 
                size="lg"
                className="border-espresso text-espresso hover:bg-espresso hover:text-white rounded-none px-8 py-6 text-base tracking-widest font-serif"
              >
                Meet the Designers
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden">
               <img 
                src={designerImg} 
                alt="Latin American Designer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold-beige -z-10 hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
