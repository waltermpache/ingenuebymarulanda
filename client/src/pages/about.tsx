import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import boutiqueImg from "@assets/28_C6483_1766308983392.JPG";
import cristinaImg from "@assets/WhatsApp_Image_2025-12-17_at_6.14.06_PM_1766308932853.jpeg";
import outsideImg from "@assets/outsidermv_1766309114624.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Cristina's Story Section - Now at the top */}
        <section className="py-16 md:py-24 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-8">The Story of Cristina Marulanda</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img 
                  src={cristinaImg} 
                  alt="Cristina Marulanda" 
                  className="w-full aspect-[3/4] object-cover pt-[0px] pb-[0px] mt-[70px] mb-[70px]"
                  data-testid="img-cristina"
                />
              </div>
              
              <div className="space-y-6">
                <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-[#7a6352] text-justify pt-[200px] pb-[200px]">
                  Cristina Marulanda has built her career at the intersection of style, craftsmanship, and global cultural influence. Her journey began as a fashion stylist within Ecuador's leading television network, where she developed an early appreciation for elegance, image, and visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#f7f3ec]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Title and Image */}
              <div>
                <img 
                  src={boutiqueImg} 
                  alt="Ingénue Boutique Interior" 
                  className="w-full aspect-square object-cover"
                  data-testid="img-boutique"
                />
              </div>
              
              {/* Right side - Welcome Text */}
              <div className="flex items-center h-full">
                <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-justify mt-[0px] mb-[0px] pt-[0px] pb-[0px] text-[#7a6352]">She later expanded her creative path in New York, contributing her refined aesthetic to distinctive fashion and lifestyle brands. Arriving in the city in the early 1990s, Cristina cultivated a multifaceted fashion career spanning sales, designer representation, bridal and eveningwear merchandising, and creative product development—building a deep understanding of both design and the global fashion marketplace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <div className="text-center lg:text-left">
                <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-[#7a6352]">In 2005, she founded Dress Me Chic, a bespoke buying and fashion consulting platform created to serve Spanish- and Portuguese-speaking wholesale buyers across the United States, South America, and Spain. Through this platform, Cristina became known for bridging cultures, markets, and style with a distinctly international perspective.</p>
              </div>
              
              {/* Right side - Outside Image */}
              <div>
                <img 
                  src={outsideImg} 
                  alt="Ingénue Boutique Exterior" 
                  className="w-full aspect-[4/3] object-cover"
                  data-testid="img-exterior"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center bg-[#f7f3ec]">
            <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-[#7a6352] mb-8">
              Today, that global vision continues through Ingenue by Cristina Marulanda, where Latin American, American, and global designers are thoughtfully curated for the woman who carries the Palm Beach lifestyle wherever she lives and travels.
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-[#7a6352] mb-8">
              Ingenue brings together vibrant creativity and timeless elegance, tailored to the relaxed yet refined lifestyle of the Palm Beaches.
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-[#7a6352] mb-8">
              But Ingenue is more than a boutique—it is a cultural and philanthropic platform. Cristina actively supports creative communities, emerging talent, and meaningful initiatives that celebrate diversity, artistic expression, and global connection.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
