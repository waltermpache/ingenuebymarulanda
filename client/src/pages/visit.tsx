import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import boutiqueImg from "@assets/28_C6483_1766310212511.JPG";
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "@assets/1_1766617824759.png";
import slide2 from "@assets/2_1766617824759.png";
import slide3 from "@assets/3_1766617824759.png";
import slide4 from "@assets/4_1766617824760.png";
import slide5 from "@assets/5_1766617824760.png";
import slide6 from "@assets/6_1766617824760.png";
import slide7 from "@assets/7_1766617824760.png";
import slide8 from "@assets/8_1766617824760.png";
import slide9 from "@assets/9_1766617824761.png";
import slide10 from "@assets/10_1766617824761.png";
import slide11 from "@assets/11_1766617824761.png";
import slide12 from "@assets/12_1766617824762.png";

const storeImages = [
  { src: slide1, alt: "Ingénue storefront" },
  { src: slide2, alt: "Designer dress display" },
  { src: slide3, alt: "Store interior with chandelier" },
  { src: slide4, alt: "Red dress collection" },
  { src: slide5, alt: "Store decor with peacock painting" },
  { src: slide6, alt: "Fashion racks" },
  { src: slide7, alt: "Leopard print dress on mannequin" },
  { src: slide8, alt: "Jewelry display" },
  { src: slide9, alt: "Mannequin with hat" },
  { src: slide10, alt: "Pink bench seating area" },
  { src: slide11, alt: "Stairs and clothing racks" },
  { src: slide12, alt: "Gold feather gown display" },
];

export default function Visit() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storeImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + storeImages.length) % storeImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % storeImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img 
            src={boutiqueImg} 
            alt="Ingénue Boutique Interior" 
            className="w-full h-full object-cover"
            data-testid="img-visit-hero"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-8 py-6 text-center max-w-xl mx-4 bg-[#ffffffcc]">
              <p className="font-serif text-lg md:text-xl text-espresso italic text-center">Private fashion styling with Cristina Marulanda.                To book your appointment, text (201)240-9268</p>
            </div>
          </div>
        </section>

        {/* Store Image Slider Section */}
        <section className="py-16 md:py-24 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso text-center mb-12">
              Take a look around our store
            </h2>
            <div className="relative w-full h-[70vh] overflow-hidden rounded bg-[#e8e4dc] flex items-center justify-center">
              {storeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                    data-testid={`slide-store-${index}`}
                  />
                </div>
              ))}
              
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                data-testid="btn-slide-prev"
              >
                <ChevronLeft className="w-6 h-6 text-espresso" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                data-testid="btn-slide-next"
              >
                <ChevronRight className="w-6 h-6 text-espresso" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {storeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    data-testid={`dot-slide-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Location */}
        <section className="py-16 md:py-24 bg-[#f6f2e9]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso text-center mb-12">
              Contact Information & Location
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              {/* Contact Details */}
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blush flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-2">Located in</h3>
                    <p className="text-muted-foreground">The Whitney West Palm Beach</p>
                    <p className="text-muted-foreground">410 Evernia St Store #111</p>
                    <p className="text-muted-foreground">West Palm Beach, FL 33401</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blush flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-2">Phone</h3>
                    <a href="tel:+15615848957" className="text-muted-foreground hover:text-blush transition-colors">
                      (561) 584-8957
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blush flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-4">Hours</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                      <span>Sunday</span>
                      <span>Closed</span>
                      <span>Monday</span>
                      <span>11 AM – 6 PM</span>
                      <span>Tuesday</span>
                      <span>11 AM – 6 PM</span>
                      <span>Wednesday</span>
                      <span>11 AM – 6 PM</span>
                      <span>Thursday</span>
                      <span>11 AM – 6 PM</span>
                      <span>Friday</span>
                      <span>11 AM – 6 PM</span>
                      <span>Saturday</span>
                      <span>11 AM – 6 PM</span>
                    </div>
                    <p className="text-muted-foreground mt-4 italic">
                      Outside of Hours by Text Appointment - <a href="tel:+12012409268" className="hover:text-blush transition-colors">+1 (201) 240-9268</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[400px] bg-muted rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8892635987383!2d-80.05534292378797!3d26.711562376778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d6b8d7b8c8c5%3A0x7b1c1c1c1c1c1c1c!2s410%20Evernia%20St%20%23111%2C%20West%20Palm%20Beach%2C%20FL%2033401!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ingénue Boutique Location"
                  data-testid="map-location"
                ></iframe>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="text-center mt-12">
              <a 
                href="https://maps.app.goo.gl/abps3NrzVSdhvWJv5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-espresso text-white px-8 py-3 font-serif tracking-wide hover:bg-blush transition-colors"
                data-testid="link-directions"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
