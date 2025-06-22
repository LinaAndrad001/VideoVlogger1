import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { getContinentBySlug, getCountryBySlug, getCitiesByCountry } from "@/lib/static-data";
import type { City } from "@/lib/static-data";

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
          <Link href={`/${continentSlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {continent.name}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Simple Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 neon-shimmer">{country.name}</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-gray-300 mb-8">
            {country.description}
          </p>
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
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {city.description}
                    </p>
                    
                    {/* Visit Button */}
                    <Link href={`/${continentSlug}/${countrySlug}/${city.slug}`}>
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