import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import bannerImg from "@assets/Gemini_Generated_Image_e4lfn8e4lfn8e4lf_1766456825520.png";
import buranoBag from "@assets/image_1766456097562.png";
import cristalloBag from "@assets/image_1766456242470.png";
import cristalloBuzios from "@assets/image_1766456257295.png";
import miniStella from "@assets/image_1766456291761.png";
import stellaSombrero from "@assets/image_1766456321436.png";
import mediumCapadocia from "@assets/image_1766456369767.png";
import greekEyeSombrero from "@assets/image_1766456399536.png";
import calleClutchBlue from "@assets/image_1766456439006.png";
import bagMare from "@assets/image_1766456477231.png";
import calleClutchPink from "@assets/image_1766456503143.png";
import lilleBamboo from "@assets/image_1766456578847.png";
import kikiPlumasBeige from "@assets/image_1766456616983.png";
import kikiPlumasBlack from "@assets/image_1766456636470.png";
import kikiFringeBlack from "@assets/image_1766456661631.png";
import kikiStrassSilver from "@assets/image_1766456681703.png";
import kikiStrassGolden from "@assets/image_1766456709435.png";
import kikiCherryBlack from "@assets/image_1766456738641.png";
import kikiBuziosMint from "@assets/image_1766456783524.png";

interface Accessory {
  id: number;
  name: string;
  image: string;
}

const accessories: Accessory[] = [
  { id: 1, name: "Burano Bag", image: buranoBag },
  { id: 2, name: "Cristallo Bag", image: cristalloBag },
  { id: 3, name: "Bag Cristallo Buzios", image: cristalloBuzios },
  { id: 4, name: "Bag Mini Stella", image: miniStella },
  { id: 5, name: "Stella Sombrero", image: stellaSombrero },
  { id: 6, name: "Bag Medium Capadocia", image: mediumCapadocia },
  { id: 7, name: "Greek Eye Sombrero", image: greekEyeSombrero },
  { id: 8, name: "Bag Calle Clutch Blue", image: calleClutchBlue },
  { id: 9, name: "Bag Mare", image: bagMare },
  { id: 10, name: "Bag Calle Clutch Pink", image: calleClutchPink },
  { id: 11, name: "Bag Lille Bamboo", image: lilleBamboo },
  { id: 12, name: "Bag Kiki Plumas Beige", image: kikiPlumasBeige },
  { id: 13, name: "Bag Kiki Plumas Black", image: kikiPlumasBlack },
  { id: 14, name: "Bag Kiki Fringe Black", image: kikiFringeBlack },
  { id: 15, name: "Bag Kiki Strass Silver", image: kikiStrassSilver },
  { id: 16, name: "Bag Kiki Strass Golden", image: kikiStrassGolden },
  { id: 17, name: "Bag Kiki Cherry Black", image: kikiCherryBlack },
  { id: 18, name: "Bag Kiki Buzios Mint", image: kikiBuziosMint },
];

export default function Accessories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[40vh] w-full overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Accessories Collection" 
            className="w-full h-full object-cover"
            data-testid="img-accessories-banner"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg italic bg-[#fafafaa1] font-medium px-8 py-6">
              Accessories
            </h1>
            <p className="text-white/90 mt-4 text-lg italic bg-[#ffffffa1]">
              Sophisticated styles for every social occasion.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {accessories.map((accessory) => (
                <div 
                  key={accessory.id} 
                  className="group"
                  data-testid={`accessory-card-${accessory.id}`}
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xl text-espresso">
                      {accessory.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="font-serif text-xl md:text-2xl text-espresso italic">
              Love these looks? Visit us at 410 Evernia St to try them on.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
