import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import bannerImg from "@assets/Gemini_Generated_Image_fibsrbfibsrbfibs_1766491231686.png";
import dress1 from "@assets/image_1766490592968.png";
import dress2 from "@assets/image_1766490616782.png";
import dress3 from "@assets/image_1766490709339.png";
import dress4 from "@assets/image_1766490736916.png";
import dress5 from "@assets/image_1766490853603.png";
import dress6 from "@assets/image_1766490905745.png";
import dress7 from "@assets/image_1766491031036.png";
import dress8 from "@assets/image_1766491059357.png";

interface Product {
  id: number;
  designer: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, designer: "MARINA NACCHITI", name: "BARI DRESS - Mint Green", image: dress1 },
  { id: 2, designer: "MARINA NACCHITI", name: "MADRID DRESS - Mint Green", image: dress2 },
  { id: 3, designer: "MARINA NACCHITI", name: "BEYNAC DRESS - Mint Green", image: dress3 },
  { id: 4, designer: "VICKY TCHERASSI", name: "LANTANA DRESS", image: dress4 },
  { id: 5, designer: "VICKY TCHERASSI", name: "FREYA DRESS", image: dress5 },
  { id: 6, designer: "BACCIO BY ALTAMIRANO", name: "Naylet Strappy Crystallized Navy Blue French Lace Long Dress", image: dress6 },
  { id: 7, designer: "BACCIO BY ALTAMIRANO", name: "Luciana One Shoulder Crystallized Black Gold French Lace Long Dress", image: dress7 },
  { id: 8, designer: "VICKY TCHERASSI", name: "CASSANDRA DRESS", image: dress8 },
];

export default function Gala() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[40vh] w-full overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Gala & Black Tie Collection" 
            className="w-full h-full object-cover"
            data-testid="img-gala-banner"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg italic bg-[#fafafaa1] font-medium px-8 py-6">
              GALA & BLACK TIE
            </h1>
            <p className="text-white/90 mt-4 text-lg italic bg-[#ffffffa1] px-4 py-2">
              Statement gowns for the most distinguished occasions.
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
                  data-testid={`gala-product-${product.id}`}
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
