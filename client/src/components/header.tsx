import { Globe, Instagram, Menu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Globe className="text-ocean-blue h-8 w-8" />
              <h1 className="text-2xl font-bold text-charcoal">Mon Vlog</h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-charcoal hover:text-ocean-blue transition-colors font-medium">
                Accueil
              </a>
            </Link>
            <Link href="/continent/europe">
              <a className="text-charcoal hover:text-ocean-blue transition-colors font-medium">
                Europe
              </a>
            </Link>
            <Link href="/continent/asie">
              <a className="text-charcoal hover:text-ocean-blue transition-colors font-medium">
                Asie
              </a>
            </Link>
            <a 
              href="#about" 
              className="text-charcoal hover:text-ocean-blue transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              À Propos
            </a>
          </nav>
          
          {/* Instagram Button */}
          <div className="flex items-center space-x-4">
            <a 
              href={`https://instagram.com/${process.env.VITE_INSTAGRAM_USERNAME || 'monvlog'}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-charcoal">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
