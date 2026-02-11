import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import marinaNacchitiImg from "@assets/WhatsApp_Image_2025-04-22_at_16.31_edited_1766312209955.webp";
import dress1Img from "@assets/A9rxt209_aj3ifa_rn8_1766312982275.png";
import dress2Img from "@assets/A9bg61hs_aj3ifc_rn8_1766312982275.png";
import clothBgImg from "@assets/cloth_1766313377870.png";
import vickyTcherassiImg from "@assets/475461045_1111128564359419_295632252192369700_n_1766314804460.jpg";
import vickyDress1Img from "@assets/LANTANAMINIVERDEOSC_.JPG3_1766314804459.webp";
import vickyDress2Img from "@assets/VESTIDOALISSEAMINIROJO_.JPG3_1766314804459.webp";
import faustoImg from "@assets/fausto_1766441626398.jpg";
import baccioDress1Img from "@assets/SheerSilkFeatherLongDressBlackFrontBCBA-1024x1536_1766441704457.webp";
import baccioDress2Img from "@assets/DSC00378-1024x1536_1766441706928.jpg";
import makiPalmataImg from "@assets/image_1766614255083.png";
import makiHat1Img from "@assets/image_1766614454290.png";
import makiHat2Img from "@assets/image_1766614477406.png";

interface Designer {
  id: number;
  name: string;
  country: string;
  bio: string;
  image: string;
  dressImages: string[];
}

const designers: Designer[] = [
  {
    id: 1,
    name: "Marina Nacchiti",
    country: "Brazil",
    bio: "Marina Nacchiti is a Brazilian fashion house born in Brasil — a traditional eveningwear factory with over 40 years of expertise in haute couture. Rooted in craftsmanship, quality, and purpose, Marina Nacchiti was created to elevate women through unique, handmade pieces.",
    image: marinaNacchitiImg,
    dressImages: [dress1Img, dress2Img],
  },
  {
    id: 2,
    name: "Vicky Tcherassi",
    country: "Colombia",
    bio: "We are a womenswear brand focused in empowering women through a unique fashion style that is bright and colorful, yet elegant and sophisticated. Founded in 1990 in the city of Barranquilla, Colombia, the brand shares with the world its one of a kind pieces made of exclusive prints, delicate silhouettes and smooth textures.",
    image: vickyTcherassiImg,
    dressImages: [vickyDress1Img, vickyDress2Img],
  },
  {
    id: 3,
    name: "Fausto Altamirano",
    country: "Ecuador",
    bio: "Fausto Altamirano is the visionary behind Baccio Couture, where art, fashion, and soul converge. More than a designer, Fausto is a creator with a purpose—one who believes clothing should not only enhance beauty, but also inspire confidence, self-expression, and connection.",
    image: faustoImg,
    dressImages: [baccioDress1Img, baccioDress2Img],
  },
  {
    id: 4,
    name: "Maki Palmata",
    country: "Ecuador",
    bio: "Unique hats, apparel and accessories for the modern woman, designed in Miami and ethically handmade in Ecuador with the premium materials and traditional craftsmanship.",
    image: makiPalmataImg,
    dressImages: [makiHat1Img, makiHat2Img],
  },
];

export default function Designers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Header */}
        <section 
          className="relative py-16 md:py-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${clothBgImg})` }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso italic tracking-wide bg-[#ffffffa1] pl-[0px] pr-[0px] ml-[210px] mr-[210px] mt-[0px] mb-[0px] pt-[10px] pb-[10px]">
              ARTISANS OF THE AMERICAS
            </h1>
          </div>
        </section>

        {/* Designers List */}
        <section className="py-16 md:py-24 bg-[#f6f3e8]">
          <div className="container mx-auto px-4">
            {designers.map((designer) => (
              <div key={designer.id} className="mb-20 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Designer Photo with Gold Border */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="border-4 border-gold-beige p-1">
                        <img
                          src={designer.image}
                          alt={designer.name}
                          className="w-64 h-80 object-cover grayscale"
                          data-testid={`img-designer-${designer.id}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Designer Info */}
                  <div className="lg:col-span-4 text-center lg:text-left font-bold text-[22px]">
                    <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-2">
                      {designer.name.toUpperCase()}
                    </h2>
                    <p className="mb-4 text-[#ae9465] font-bold">{designer.country}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {designer.bio}
                    </p>
                  </div>

                  {/* Dress Images */}
                  <div className="lg:col-span-5 flex gap-4 justify-center lg:justify-end">
                    {designer.dressImages.map((dressImg, index) => (
                      <div key={index} className="border-4 border-gold-beige p-1">
                        <div className="w-56 h-76 overflow-hidden">
                          <img
                            src={dressImg}
                            alt={`${designer.name} Design ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            data-testid={`img-dress-${designer.id}-${index}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
