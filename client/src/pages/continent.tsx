import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { getContinentBySlug, getCountriesByContinent } from "@/lib/static-data";
import { getBackgroundImage } from "@/lib/background-images";
import type { Continent, Country } from "@/lib/static-data";

export default function ContinentPage() {
  const { continentSlug } = useParams<{ continentSlug: string }>();

  if (!continentSlug) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Continent non trouvé</div>
      </div>
    );
  }

  const continent = getContinentBySlug(continentSlug);
  const countries = continent ? getCountriesByContinent(continent.id) : [];

  if (!continent) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Continent non trouvé</div>
      </div>
    );
  }

  // Use continent image as background
  const backgroundImage = continent.imageUrl;

  return (
    <div 
      className="min-h-screen text-neon-cyan font-mono relative"
      style={{
        background: backgroundImage 
          ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${backgroundImage}) center/cover fixed`
          : '#000000'
      }}
    >
      {/* Simple navigation */}
      <div className="p-4 border-b border-neon-cyan">
        <Link href="/">
          <button className="text-neon-cyan hover:text-neon-purple transition-colors">
            ← Retour à l'accueil
          </button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{continent.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-12">
            {continent.description}
          </p>

          {/* Continent Hero Image */}
          <div className="mb-16">
            <div className="w-full max-w-4xl mx-auto h-64 md:h-80 overflow-hidden border-2 border-neon-cyan rounded-xl neon-glow">
              <img 
                src={continent.imageUrl}
                alt={`Paysage représentatif de ${continent.name}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-neon-cyan opacity-70" />
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-shimmer">
            Pays à découvrir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {countries.map((country: Country) => (
              <Card key={country.id} className="bg-transparent border-2 border-neon-cyan neon-glow group hover:border-neon-purple transition-all duration-300">
                <CardContent className="p-0">
                  {/* Country Image */}
                  <Link href={`/${continentSlug}/${country.slug}`}>
                    <div className="h-48 overflow-hidden cursor-pointer">
                      <img 
                        src={country.imageUrl}
                        alt={`Paysage de ${country.name}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  
                  {/* Country Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {country.description}
                    </p>
                    
                    {/* Country Details */}
                    <div className="space-y-2 mb-4 text-xs">
                      {country.capital && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Capitale:</span>
                          <span className="text-gray-300">{country.capital}</span>
                        </div>
                      )}
                      {country.language && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Langue:</span>
                          <span className="text-gray-300">{country.language}</span>
                        </div>
                      )}
                      {country.currency && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Monnaie:</span>
                          <span className="text-gray-300">{country.currency}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Visit Button */}
                    <Link href={`/${continentSlug}/${country.slug}`}>
                      <button className="w-full neon-button py-2 text-sm neon-glow-hover">
                        Explorer {country.name}
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}