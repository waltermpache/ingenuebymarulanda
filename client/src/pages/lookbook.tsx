import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import bookBgImg from "@assets/image_1766613767878.png";
import heroImg from "@assets/image_1766315893610.png";
import img1 from "@assets/image_1766619004079.png";
import img2 from "@assets/image_1766618306508.png";
import img3 from "@assets/image_1766618320706.png";
import img4 from "@assets/image_1766618335576.png";
import look2img1 from "@assets/A91xuzem4_aj3igk_rn8_1766441996943.png";
import look2img2 from "@assets/A9ll6wxu_aj3igi_rn8_1766441996943.png";
import look2img3 from "@assets/A919qo66t_aj3igg_rn8_1766441996943.png";
import look2img4 from "@assets/A91n17755_aj3ige_rn8_1766441996944.png";
import look2img5 from "@assets/A916w5fqw_aj3ig2_rn8_1766441996944.png";
import look2img6 from "@assets/A9bg61hs_aj3ifc_rn8_1766441996944.png";
import look2img7 from "@assets/A9z16krn_aj3igm_rn8_1766441996945.png";
import vickyImg1 from "@assets/PENELOPEROSACAFE_.JPG5_1766446094244.webp";
import vickyImg2 from "@assets/PENELOPENEGRO_.JPG5_1766446094244.webp";
import vickyImg3 from "@assets/GAELLENEGROACQUA_.JPG3_1766446094244.webp";
import vickyImg4 from "@assets/GAELLENEGROACQUA_.JPG7_1766446094245.webp";
import vickyImg5 from "@assets/ALYSSEAAZUL__JPG_1766446094245.webp";
import vickyImg6 from "@assets/OPHELIAFLORESVINOTINTO_.JPG2_1766446094245.webp";

export default function Lookbook() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Header with Book Background */}
        <section 
          className="relative py-16 md:py-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${bookBgImg})` }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block px-8 py-6 bg-[#fcfcfca1]">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso italic tracking-wide mb-4">
                LOOKBOOK
              </h1>
              <p className="font-serif text-lg md:text-xl text-espresso/80 italic">
                Get a glimpse of our collections
              </p>
            </div>
          </div>
        </section>

        {/* Designer & Product Info */}
        <section className="bg-[#f6f3e8] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-2">ACCESORIES</h2>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-[#f6f3e8] py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <img
                  src={img1}
                  alt="Ray Hat Collection"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook-1"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={img2}
                  alt="Gia Hat Collection"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook-2"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={img3}
                  alt="Nova Hat Collection"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook-3"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={img4}
                  alt="Nimbus Hat Collection"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook-4"
                />
              </div>
            </div>

            
          </div>
        </section>

        {/* Second Collection - Nature Collection */}
        <section className="bg-[#f8f4ed] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-2">WHITE PARTY</h2>
          </div>
        </section>

        {/* Second Collection Gallery */}
        <section className="bg-[#f8f4ed] py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <img
                  src={look2img1}
                  alt="Fringe Collection - View 1"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-1"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={look2img2}
                  alt="Fringe Collection - View 2"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-2"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={look2img3}
                  alt="Fringe Collection - View 3"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-3"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={look2img4}
                  alt="Fringe Collection - View 4"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-4"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={look2img5}
                  alt="Fringe Collection - View 5"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-5"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={look2img6}
                  alt="Fringe Collection - View 6"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-6"
                />
              </div>
              <div className="overflow-hidden col-span-2 md:col-span-1 lg:col-span-2">
                <img
                  src={look2img7}
                  alt="Fringe Collection - View 7"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook2-7"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Third Collection - Elegant Day by Vicky Tcherassi */}
        <section className="bg-[#f6f3e8] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-2">DAY INTO EVENING</h2>
          </div>
        </section>

        {/* Third Collection Gallery */}
        <section className="bg-[#f6f3e8] py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="overflow-hidden">
                <img
                  src={vickyImg1}
                  alt="Elegant Day - View 1"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-1"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={vickyImg2}
                  alt="Elegant Day - View 2"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-2"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={vickyImg3}
                  alt="Elegant Day - View 3"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-3"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={vickyImg4}
                  alt="Elegant Day - View 4"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-4"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={vickyImg5}
                  alt="Elegant Day - View 5"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-5"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={vickyImg6}
                  alt="Elegant Day - View 6"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid="img-lookbook3-6"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
