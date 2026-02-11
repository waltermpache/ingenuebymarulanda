import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import galaImg from "@assets/generated_images/glamorous_woman_in_evening_gown_at_palm_beach_gala.png";
import yachtImg from "@assets/generated_images/chic_woman_on_luxury_yacht.png";
import whitePartyImg from "@assets/generated_images/elegant_woman_in_all-white_dress_at_garden_party.png";
import teaImg from "@assets/generated_images/sophisticated_woman_at_tea_luncheon.png";
import cocktailImg from "@assets/cocktailpng_1766116580224.png";
import everydayImg from "@assets/generated_images/woman_shopping_on_worth_avenue.png";
import dayEveningImg from "@assets/pink_1766590053851.png";
import accessoriesImg from "@assets/polo_1766591118336.png";

const lifestyles = [
  { id: 1, title: "Gala & Black Tie", image: galaImg, link: "/shop/gala" },
  { id: 2, title: "Resort and Yacht Party", image: yachtImg, link: "/shop/yacht" },
  { id: 3, title: "White Party", image: whitePartyImg, link: "/shop/whiteparty" },
  { id: 4, title: "Tea & Luncheons", image: teaImg, link: "/shop/tea" },
  { id: 5, title: "Cocktail", image: cocktailImg, link: "/shop/cocktail" },
  { id: 6, title: "Day into Evening", image: dayEveningImg, link: "/shop/dayevening" },
  { id: 7, title: "Accessories", image: accessoriesImg, link: "/shop/accessories" },
];

export default function LifestyleGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blush uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Discover Your Style</span>
          <h2 className="text-4xl md:text-5xl font-serif text-espresso">Shop by Lifestyle</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifestyles.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="group relative cursor-pointer overflow-hidden aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl font-serif mb-2 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-2 drop-shadow-md bg-[#ffffff75] text-center text-[#000000]">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm tracking-widest uppercase opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-[#ffffff75] text-[#000000] text-right pl-[125px] pr-[125px]">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
