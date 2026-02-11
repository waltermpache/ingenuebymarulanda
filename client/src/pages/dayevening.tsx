import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import bannerImg from "@assets/Gemini_Generated_Image_4bxzw84bxzw84bxz_1766492812842.png";
import dress1 from "@assets/image_1766492015075.png";
import dress2 from "@assets/image_1766492039720.png";
import dress3 from "@assets/image_1766492076817.png";
import dress4 from "@assets/image_1766492101316.png";
import dress5 from "@assets/image_1766492122561.png";
import dress6 from "@assets/image_1766492687335.png";
import dress7 from "@assets/image_1766492795139.png";

interface Product {
  id: number;
  designer: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, designer: "VICKY TCHERASSI", name: "OPHELIA DRESS", image: dress1 },
  { id: 2, designer: "VICKY TCHERASSI", name: "PENELOPE DRESS", image: dress2 },
  { id: 3, designer: "VICKY TCHERASSI", name: "STELLA DRESS", image: dress3 },
  { id: 4, designer: "MARINA NACCHITI", name: "AMAPÁ FRINGE MAXI DRESS - Black", image: dress4 },
  { id: 5, designer: "MARINA NACCHITI", name: "CATANIA DRESS - Blush Pink", image: dress5 },
  { id: 6, designer: "BACCIO BY ALTAMIRANO", name: "Luna Crepe Crystal Long Dress - Black", image: dress6 },
  { id: 7, designer: "BACCIO BY ALTAMIRANO", name: "Vanessa Long Dress – French Lace & Italian Silk in Blush", image: dress7 },
];

export default function DayEvening() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[40vh] w-full overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Day into Evening Collection" 
            className="w-full h-full object-cover"
            data-testid="img-dayevening-banner"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg italic bg-[#fafafaa1] font-medium px-8 py-6">
              DAY INTO EVENING
            </h1>
            <p className="text-white/90 mt-4 text-lg italic bg-[#ffffffa1] px-4 py-2">
              Versatile pieces that transition seamlessly from sunset to soirée.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group"
                  data-testid={`dayevening-product-${product.id}`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    {product.designer && (
                      <p className="text-sm text-[#ae9465] font-medium tracking-wide mb-1">
                        {product.designer}
                      </p>
                    )}
                    <h3 className="font-serif text-xl text-espresso">
                      {product.name}
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
