import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import videoBg from "@assets/Josephine_Dress_-_Champagne_1765078240719.mp4";
import leftImg from "@assets/Josephina_Dress-Champagne-Front_1766616491197.jpg";
import rightImg from "@assets/Josephina_Dress-Champagne-Back_(1)_1766616485551.jpg";

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 flex">
        {/* Left Image - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block lg:w-1/4 h-full">
          <img 
            src={leftImg} 
            alt="Josephina Dress Front" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Video - Full width on mobile, centered on larger screens */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-black">
          <video
            className="h-full w-auto max-w-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        
        {/* Right Image - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block lg:w-1/4 h-full">
          <img 
            src={rightImg} 
            alt="Josephina Dress Back" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif max-w-4xl leading-tight mb-8 drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000">Curated for Palm Beach and Loved Globally</h1>
        
        <Link href="/shop">
          <Button 
            size="lg" 
            className="bg-gold-beige text-[#fff7f7] hover:bg-white hover:text-espresso text-lg px-8 py-6 rounded-none font-serif tracking-wide transition-all duration-300 transform hover:scale-105"
          >
            Shop the Collection
          </Button>
        </Link>
      </div>
    </div>
  );
}
