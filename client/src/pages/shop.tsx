import { useState, useRef } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

import galaImg from "@assets/generated_images/glamorous_woman_in_evening_gown_at_palm_beach_gala.png";
import yachtImg from "@assets/generated_images/chic_woman_on_luxury_yacht.png";
import whitePartyImg from "@assets/generated_images/elegant_woman_in_all-white_dress_at_garden_party.png";
import teaImg from "@assets/generated_images/sophisticated_woman_at_tea_luncheon.png";
import cocktailImg from "@assets/cocktailpng_1766116580224.png";
import everydayImg from "@assets/generated_images/woman_shopping_on_worth_avenue.png";
import dayEveningImg from "@assets/pink_1766590053851.png";
import accessoriesImg from "@assets/polo_1766591118336.png";

interface Lifestyle {
  id: number;
  title: string;
  image: string;
  link: string;
}

const lifestyles: Lifestyle[] = [
  { id: 1, title: "Gala & Black Tie", image: galaImg, link: "/shop/gala" },
  { id: 2, title: "Resort and Yacht Party", image: yachtImg, link: "/shop/yacht" },
  { id: 3, title: "White Party", image: whitePartyImg, link: "/shop/whiteparty" },
  { id: 4, title: "Tea & Luncheons", image: teaImg, link: "/shop/tea" },
  { id: 5, title: "Cocktail", image: cocktailImg, link: "/shop/cocktail" },
  { id: 6, title: "Day into Evening", image: dayEveningImg, link: "/shop/dayevening" },
  { id: 7, title: "Accessories", image: accessoriesImg, link: "/shop/accessories" },
];

export default function Shop() {
  const [selectedLifestyle, setSelectedLifestyle] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  const handleCardClick = (lifestyle: Lifestyle) => {
    if (lifestyle.link === "/shop/accessories" || lifestyle.link === "/shop/yacht" || lifestyle.link === "/shop/cocktail" || lifestyle.link === "/shop/tea" || lifestyle.link === "/shop/whiteparty" || lifestyle.link === "/shop/gala" || lifestyle.link === "/shop/dayevening") {
      setLocation(lifestyle.link);
    } else {
      setSelectedLifestyle(lifestyle.id === selectedLifestyle ? null : lifestyle.id);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="py-12 md:py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 text-center">
            <span className="text-blush uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Discover Your Style</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
              Shop by Lifestyle
            </h1>
          </div>
        </section>

        {/* Lifestyle Slider */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110 bg-[#f8f4ed]"
                data-testid="slider-left"
              >
                <ChevronLeft className="w-6 h-6 text-espresso" />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110 bg-[#f8f4ed]"
                data-testid="slider-right"
              >
                <ChevronRight className="w-6 h-6 text-espresso" />
              </button>

              {/* Slider Container */}
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {lifestyles.map((lifestyle) => (
                  <div
                    key={lifestyle.id}
                    onClick={() => handleCardClick(lifestyle)}
                    className={`flex-shrink-0 w-72 h-96 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden ${
                      selectedLifestyle === lifestyle.id ? "ring-4 ring-gold-beige scale-105" : ""
                    }`}
                    data-testid={`lifestyle-card-${lifestyle.id}`}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={lifestyle.image} 
                        alt={lifestyle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="font-serif text-xl text-white text-center py-2 px-4 bg-[#ffffff7a]">
                          {lifestyle.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {lifestyles.map((lifestyle) => (
                <button
                  key={lifestyle.id}
                  onClick={() => {
                    setSelectedLifestyle(lifestyle.id);
                    if (sliderRef.current) {
                      sliderRef.current.scrollTo({ left: (lifestyle.id - 1) * 320, behavior: "smooth" });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    selectedLifestyle === lifestyle.id ? "bg-espresso w-6" : "bg-espresso/30"
                  }`}
                  data-testid={`indicator-${lifestyle.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Selected Lifestyle Details */}
        {selectedLifestyle && (
          <section className="py-16 bg-[#f6f3e8]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
                {lifestyles.find(l => l.id === selectedLifestyle)?.title}
              </h2>
              <p className="font-serif text-xl text-espresso/60 italic">
                Collection coming soon...
              </p>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-4 italic">
              Visit our boutique for the full experience
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our stylists are ready to help you find the perfect pieces for every occasion in your Palm Beach lifestyle.
            </p>
            <a
              href="/visit"
              className="inline-block bg-espresso text-white px-8 py-3 font-serif tracking-wide hover:bg-blush transition-colors"
              data-testid="link-visit-boutique"
            >
              Plan Your Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
