import { Globe, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="text-sunset-orange h-8 w-8" />
              <h3 className="text-xl font-bold">Mon Vlog</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Explorez le monde à travers mes aventures et découvrez des destinations extraordinaires.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME || 'monvlog'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sunset-orange transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={`https://youtube.com/@${import.meta.env.VITE_YOUTUBE_USERNAME || 'monvlog'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sunset-orange transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href={`https://facebook.com/${import.meta.env.VITE_FACEBOOK_USERNAME || 'monvlog'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sunset-orange transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-sunset-orange transition-colors">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/continent/europe">
                  <a className="text-gray-300 hover:text-sunset-orange transition-colors">
                    Europe
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/continent/asie">
                  <a className="text-gray-300 hover:text-sunset-orange transition-colors">
                    Asie
                  </a>
                </Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-sunset-orange transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  À Propos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {import.meta.env.VITE_CONTACT_EMAIL || 'contact@monvlog.com'}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {import.meta.env.VITE_CONTACT_PHONE || '+33 1 23 45 67 89'}
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {import.meta.env.VITE_CONTACT_LOCATION || 'Paris, France'}
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mon Vlog. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
