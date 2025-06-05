import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { getContinentBySlug, getCountryBySlug, getCitiesByCountry } from "@/lib/static-data";
import type { Continent, Country, City } from "@/lib/static-data";

export default function CountryPage() {
  const { continentSlug, countrySlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
  }>();

  if (!continentSlug || !countrySlug) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Pays non trouvé</div>
      </div>
    );
  }

  const continent = getContinentBySlug(continentSlug);
  const country = getCountryBySlug(countrySlug);
  const cities = country ? getCitiesByCountry(country.id) : [];

  if (!continent || !country) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Pays non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-black text-neon-cyan font-mono">
      {/* Simple navigation */}
      <div className="p-4 border-b border-neon-cyan">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              🏠 Accueil
            </button>
          </Link>
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/continent/${continentSlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {continent.name}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{country.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-12">
            {country.description}
          </p>

          {/* Country Hero Image */}
          <div className="mb-16">
            <div className="w-full max-w-4xl mx-auto h-64 md:h-80 overflow-hidden border-2 border-neon-cyan rounded-xl neon-glow">
              <img 
                src={country.imageUrl}
                alt={`Paysage représentatif de ${country.name}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Country Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {country.capital && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <div className="text-2xl font-bold text-neon-purple">{country.capital}</div>
                <div className="text-sm text-gray-400">Capitale</div>
              </div>
            )}
            {country.language && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <div className="text-2xl font-bold text-neon-purple">{country.language}</div>
                <div className="text-sm text-gray-400">Langue</div>
              </div>
            )}
            {country.currency && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <div className="text-2xl font-bold text-neon-purple">{country.currency}</div>
                <div className="text-sm text-gray-400">Monnaie</div>
              </div>
            )}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-neon-cyan opacity-70" />
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-shimmer">
            Villes à visiter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cities.map((city: City) => (
              <Card key={city.id} className="bg-transparent border-2 border-neon-cyan neon-glow group hover:border-neon-purple transition-all duration-300">
                <CardContent className="p-0">
                  {/* City Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={city.imageUrl}
                      alt={`Vue de ${city.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* City Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {city.description}
                    </p>
                    
                    {/* City Details */}
                    <div className="space-y-2 mb-4 text-xs">
                      {city.population && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Population:</span>
                          <span className="text-gray-300">{city.population.toLocaleString()}</span>
                        </div>
                      )}
                      {city.founded && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Fondée:</span>
                          <span className="text-gray-300">{city.founded}</span>
                        </div>
                      )}
                      {city.climate && (
                        <div className="flex justify-between">
                          <span className="text-neon-cyan opacity-70">Climat:</span>
                          <span className="text-gray-300">{city.climate}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Visit Button */}
                    <Link href={`/continent/${continentSlug}/country/${countrySlug}/city/${city.slug}`}>
                      <button className="w-full neon-button py-2 text-sm neon-glow-hover">
                        Découvrir {city.name}
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