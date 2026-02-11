import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ingenueLogoImg from "@assets/Ingenue_new_logo_-4_1766438169213.png";

import Ingenue_new_logo__4_removebg_preview from "@assets/Ingenue_new_logo_-4-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const allNavLinks = [
    { name: "Shop by Lifestyle", href: "/shop" },
    { name: "Designers", href: "/designers" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Visit Us", href: "/visit" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6 text-espresso" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background border-r border-border">
              <div className="flex flex-col gap-8 mt-10">
                {allNavLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-espresso hover:text-blush transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - Logo centered, items spread on each side */}
        <div className="hidden md:flex w-full items-center">
          {/* Left Side - takes half width, items evenly spaced */}
          <div className="flex-1 flex items-center justify-evenly">
            <Link 
              href="/shop" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors whitespace-nowrap"
            >
              Shop by Lifestyle
            </Link>
            <Link 
              href="/designers" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors"
            >
              Designers
            </Link>
            <Link 
              href="/lookbook" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors"
            >
              Lookbook
            </Link>
          </div>

          {/* Logo - Center */}
          <Link href="/" className="flex-shrink-0 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-2xl lg:text-3xl xl:text-4xl tracking-widest text-espresso leading-none whitespace-nowrap" data-testid="logo-ingenue">
              INGÉNUE
            </span>
            <span className="font-sans text-[9px] lg:text-[10px] xl:text-xs tracking-[0.15em] lg:tracking-[0.2em] text-espresso mt-1 leading-none uppercase whitespace-nowrap">
              BY CRISTINA MARULANDA
            </span>
          </Link>

          {/* Right Side - takes half width, items evenly spaced */}
          <div className="flex-1 flex items-center justify-evenly">
            <Link 
              href="/events" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors"
            >
              Events
            </Link>
            <Link 
              href="/about" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors"
            >
              About
            </Link>
            <Link 
              href="/visit" 
              className="text-sm lg:text-base uppercase tracking-widest font-medium text-espresso hover:text-blush transition-colors whitespace-nowrap"
            >
              Visit Us
            </Link>
            <img 
              src={Ingenue_new_logo__4_removebg_preview} 
              alt="Ingénue Logo" 
              className="h-12 w-auto"
              data-testid="logo-icon"
            />
          </div>
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="md:hidden absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-center">
          <span className="font-serif text-2xl tracking-widest text-espresso leading-none" data-testid="logo-ingenue-mobile">
            INGÉNUE
          </span>
          <span className="font-sans text-[8px] tracking-[0.15em] text-espresso mt-0.5 leading-none uppercase">
            BY CRISTINA MARULANDA
          </span>
        </Link>
      </div>
    </nav>
  );
}
