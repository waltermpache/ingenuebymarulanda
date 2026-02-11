import { Link } from "wouter";
import palmLogo from "@assets/Ingenue_new_logo_-4_1766308680125.png";
import goldPalmLogo from "@assets/Ingenue_new_logo_-4-removebg-preview_1766438653705.png";

export default function Footer() {
  return (
    <footer className="bg-espresso text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center text-center pt-[80px] pb-[80px]">
            <img 
              src={goldPalmLogo} 
              alt="Ingénue Palm" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-gold-beige/80 font-light text-sm leading-relaxed max-w-xs">Curated for Palm Beach and Loved Globally</p>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-gold-beige">Shop</h4>
            <ul className="space-y-3 text-sm font-light text-white/80">
              <li><Link href="/shop/gala" className="hover:text-gold-beige transition-colors">Gala & Black Tie</Link></li>
              <li><Link href="/shop/yacht" className="hover:text-gold-beige transition-colors">Resort and Yacht Party</Link></li>
              <li><Link href="/shop/whiteparty" className="hover:text-gold-beige transition-colors">White Party</Link></li>
              <li><Link href="/shop/tea" className="hover:text-gold-beige transition-colors">Tea & Luncheons</Link></li>
              <li><Link href="/shop/cocktail" className="hover:text-gold-beige transition-colors">Cocktail</Link></li>
              <li><Link href="/shop/dayevening" className="hover:text-gold-beige transition-colors">Day into Evening</Link></li>
              <li><Link href="/shop/accessories" className="hover:text-gold-beige transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-gold-beige">Company</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><Link href="/about" className="hover:text-gold-beige transition-colors">About Ingénue</Link></li>
              <li><Link href="/designers" className="hover:text-gold-beige transition-colors">Our Designers</Link></li>
              <li><Link href="/visit" className="hover:text-gold-beige transition-colors">Visit the Boutique</Link></li>
              <li><Link href="/contact" className="hover:text-gold-beige transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-gold-beige">Contact</h4>
            <div className="space-y-4 text-sm font-light text-white/80 text-center md:text-left">
              <p>410 Evernia St #111<br />West Palm Beach, FL</p>
              <p>infodressmechic@gmail.com</p>
              <p>+1 (201) 240-9268</p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="https://www.instagram.com/ingenuepalmbeach?igsh=NWpuZWVzZjAzbGQw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-beige hover:text-gold-beige cursor-pointer transition-colors">IG</a>
                <a href="https://www.facebook.com/share/1H9ektPmQn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-beige hover:text-gold-beige cursor-pointer transition-colors">FB</a>
              </div>
            </div>
          </div>

        </div>

        {/* Centered Palm Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={palmLogo} 
            alt="Ingénue Palm" 
            className="h-16 w-auto opacity-80"
            style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }}
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Ingénue. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
