import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import LifestyleGrid from "@/components/home/lifestyle-grid";
import DesignerSpotlight from "@/components/home/designer-spotlight";
import BoutiqueSection from "@/components/home/boutique-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LifestyleGrid />
        <DesignerSpotlight />
        <BoutiqueSection />
      </main>
      <Footer />
    </div>
  );
}
