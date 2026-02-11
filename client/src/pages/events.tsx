import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import event1 from "@assets/WhatsApp_Image_2025-12-17_at_6.14.06_PM_(3)_1766466390078.jpeg";
import event2 from "@assets/WhatsApp_Image_2025-12-17_at_6.14.06_PM_(2)_1766466390078.jpeg";
import event3 from "@assets/WhatsApp_Image_2025-12-17_at_6.14.06_PM_(1)_1766466390078.jpeg";
import event4 from "@assets/WhatsApp_Image_2025-12-17_at_6.44.42_PM_(2)_1766466390078.jpeg";
import event5 from "@assets/WhatsApp_Image_2025-12-17_at_6.44.42_PM_(1)_1766466390078.jpeg";
import event6 from "@assets/WhatsApp_Image_2025-12-17_at_6.44.42_PM_1766466390079.jpeg";
import event7 from "@assets/WhatsApp_Image_2025-12-17_at_6.48.13_PM_(1)_1766466390079.jpeg";
import event8 from "@assets/WhatsApp_Image_2025-12-17_at_6.48.13_PM_1766466390079.jpeg";
import event9 from "@assets/WhatsApp_Image_2025-12-17_at_6.49.21_PM_1766466390079.jpeg";
import event10 from "@assets/02_C6483_1766466390079.JPG";
import event11 from "@assets/77_C6483_1766466390080.JPG";
import event12 from "@assets/44_C6483_1766466390080.JPG";
import event13 from "@assets/51_C6483_1766466390080.JPG";
import event14 from "@assets/80_C6483_1766466390080.JPG";
import event15 from "@assets/WhatsApp_Image_2025-12-24_at_5.44.34_PM_1766616305088.jpeg";
import event16 from "@assets/WhatsApp_Image_2025-12-17_at_6.08.33_PM_1766466390081.jpeg";
import event17 from "@assets/WhatsApp_Image_2025-12-17_at_6.14.06_PM_(4)_1766466390081.jpeg";
import event18 from "@assets/WhatsApp_Image_2025-12-17_at_6.56.10_PM_1766466940237.jpeg";
import event19 from "@assets/WhatsApp_Image_2025-12-17_at_6.59.14_PM_1766466940238.jpeg";
import event20 from "@assets/WhatsApp_Image_2025-12-22_at_2.06.20_PM_(1)_1766466940238.jpeg";
import event21 from "@assets/WhatsApp_Image_2025-12-22_at_2.06.20_PM_1766466940238.jpeg";
import event22 from "@assets/WhatsApp_Image_2025-12-17_at_6.49.52_PM_1766466940239.jpeg";
import event23 from "@assets/WhatsApp_Image_2025-12-17_at_6.55.00_PM_1766466940239.jpeg";
import event24 from "@assets/WhatsApp_Image_2025-12-17_at_6.55.30_PM_1766466940239.jpeg";
import event25 from "@assets/WhatsApp_Image_2025-12-17_at_6.55.52_PM_1766466940239.jpeg";
import eventNew1 from "@assets/WhatsApp_Image_2025-12-24_at_10.11.13_AM_1766590095505.jpeg";
import eventNew2 from "@assets/WhatsApp_Image_2025-12-24_at_10.12.06_AM_1766590095505.jpeg";
import eventNew3 from "@assets/WhatsApp_Image_2025-12-24_at_10.16.11_AM_1766590095504.jpeg";
import eventNew4 from "@assets/WhatsApp_Image_2025-12-24_at_10.18.36_AM_1766590095504.jpeg";
import eventNew5 from "@assets/WhatsApp_Image_2025-12-24_at_10.20.54_AM_1766590095504.jpeg";
import eventVideo from "@assets/IMG_6216_(1)_1766466390081.MOV";
import eventVideo2 from "@assets/WhatsApp_Video_2025-12-17_at_6.58.04_PM_1766466940238.mp4";

const galleryImages = [
  { id: 1, src: event1, alt: "Store celebration event", position: "center" },
  { id: 2, src: event2, alt: "Hat fashion event", position: "center" },
  { id: 3, src: event3, alt: "In-store gathering", position: "center" },
  { id: 4, src: event4, alt: "Outdoor fashion event", position: "center" },
  { id: 5, src: event5, alt: "Fashion group photo", position: "center" },
  { id: 6, src: event6, alt: "Fashion show", position: "center" },
  { id: 7, src: eventNew1, alt: "Red and black elegance", position: "top" },
  { id: 8, src: eventNew2, alt: "Golden hat styling", position: "top" },
  { id: 9, src: eventNew3, alt: "Glamorous gala gowns", position: "center" },
  { id: 10, src: eventNew4, alt: "Two stunning dresses", position: "top" },
  { id: 11, src: eventNew5, alt: "Pink party gathering", position: "top" },
  { id: 12, src: event7, alt: "Client styling", position: "center" },
  { id: 13, src: event8, alt: "Fashion photoshoot", position: "center" },
  { id: 14, src: event9, alt: "Store event", position: "center" },
  { id: 15, src: event10, alt: "Tea party catering", position: "center" },
  { id: 16, src: event11, alt: "Store guests", position: "center" },
  { id: 17, src: event12, alt: "Fashionable guests", position: "center" },
  { id: 18, src: event13, alt: "Ingenue storefront", position: "center" },
  { id: 19, src: event14, alt: "Store guests styling", position: "center" },
  { id: 20, src: event15, alt: "Evening event", position: "center" },
  { id: 21, src: event16, alt: "Fashion celebration", position: "center" },
  { id: 22, src: event17, alt: "Group selfie", position: "center" },
  { id: 23, src: event18, alt: "Fashion gala models", position: "center" },
  { id: 24, src: event19, alt: "Cristina with Ingenue sign", position: "center" },
  { id: 25, src: event20, alt: "Pink dress celebration", position: "center" },
  { id: 26, src: event21, alt: "Stylish guests gathering", position: "center" },
  { id: 27, src: event22, alt: "Hat garden party", position: "center" },
  { id: 28, src: event23, alt: "Evening gown portrait", position: "center" },
  { id: 29, src: event24, alt: "Three beautiful gowns", position: "top" },
  { id: 30, src: event25, alt: "Elegant trio", position: "top" },
];

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 text-center">
            <span className="text-blush uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Our Community
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso italic mb-6">
              A Year of Style, Community & Celebration
            </h1>
            <p className="font-serif text-xl text-espresso/70 italic max-w-2xl mx-auto">Events, pop-ups, tea gatherings, and charitable moments at 
            Ingénue by Cristina Marulanda</p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video w-full">
                <video 
                  src={eventVideo}
                  controls
                  className="w-full h-full object-cover rounded"
                  data-testid="video-events"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="aspect-video w-full">
                <video 
                  src={eventVideo2}
                  controls
                  className="w-full h-full object-cover rounded"
                  data-testid="video-events-2"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-[#f6f2e9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group overflow-hidden rounded-lg"
                  data-testid={`event-image-${image.id}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${image.position === "top" ? "object-top" : ""}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#f8f4ed]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso italic mb-4">
              Join us at our next event
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Follow us on social media to stay updated on upcoming events, pop-ups, and exclusive gatherings.
            </p>
            <a
              href="/visit"
              className="inline-block bg-espresso text-white px-8 py-3 font-serif tracking-wide hover:bg-blush transition-colors"
              data-testid="link-visit-from-events"
            >
              Visit Our Boutique
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
