import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import bannerImg from "@assets/Gemini_Generated_Image_4dm5qa4dm5qa4dm5_1766485052287.png";
import dress1 from "@assets/image_1766483920803.png";
import dress2 from "@assets/image_1766484340826.png";
import dress3 from "@assets/image_1766484377638.png";
import dress4 from "@assets/image_1766484418553.png";
import dress5 from "@assets/image_1766484467904.png";
import dress6 from "@assets/image_1766484518646.png";
import dress7 from "@assets/image_1766484710929.png";
import dress8 from "@assets/image_1766484755088.png";
import dress9 from "@assets/image_1766484830938.png";
import dress10 from "@assets/image_1766484894346.png";
import dress11 from "@assets/image_1766484950476.png";

interface Product {
  id: number;
  designer: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, designer: "", name: "MARAGOGI MAXI DRESS - Off White", image: dress1 },
  { id: 2, designer: "", name: "BÚZIOS CROPPED TOP - White", image: dress2 },
  { id: 3, designer: "", name: "BÚZIOS MAXI SKIRT - White", image: dress3 },
  { id: 4, designer: "", name: "PARATY MINI DRESS - Off White", image: dress4 },
  { id: 5, designer: "", name: "IBITIPOCA CROPPED TOP - Off White", image: dress5 },
  { id: 6, designer: "", name: "OURO PRETO MINI DRESS - Black", image: dress6 },
  { id: 7, designer: "", name: "ESMERALDA DRESS", image: dress7 },
  { id: 8, designer: "", name: "ESMERALDA DRESS", image: dress8 },
  { id: 9, designer: "", name: "TRANCOSO CROPPED TOP - Black and White", image: dress9 },
  { id: 10, designer: "BACCIO BY ALTAMIRANO", name: "Anna Green Bell Sleeve Mosaic Print Hi Low Dress", image: dress10 },
  { id: 11, designer: "BACCIO BY ALTAMIRANO", name: "Dalila Long Dress – Tiffany Lace Flowers", image: dress11 },
];

export default function Yacht() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[40vh] w-full overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Yacht Party Collection" 
            className="w-full h-full object-cover"
            data-testid="img-yacht-banner"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg italic bg-[#fafafaa1] font-medium px-8 py-6">
              YACHT PARTY
            </h1>
            <p className="text-white/90 mt-4 text-lg italic bg-[#ffffffa1] px-4 py-2">
              Breezy linens and sophisticated silhouettes for the open sea.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso text-center mb-12 italic">
              RESORT & YACHT PARTY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group"
                  data-testid={`yacht-product-${product.id}`}
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
