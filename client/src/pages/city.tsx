import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { getContinentBySlug, getCountryBySlug, getCityBySlug, getPlacesByCity } from "@/lib/static-data";
import type { Place } from "@/lib/static-data";

export default function CityPage() {
  const { continentSlug, countrySlug, citySlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
    citySlug: string; 
  }>();

  if (!continentSlug || !countrySlug || !citySlug) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Ville non trouvée</div>
      </div>
    );
  }

  const continent = getContinentBySlug(continentSlug);
  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(citySlug);
  const places = city ? getPlacesByCity(city.id) : [];

  if (!continent || !country || !city) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Ville non trouvée</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-black text-neon-cyan font-mono">
      {/* Simple navigation */}
      <div className="p-4 border-b border-neon-cyan">
        <div className="flex items-center space-x-4 flex-wrap">
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
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/${continentSlug}/${countrySlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {country.name}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Simple Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 neon-shimmer">{city.name}</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-gray-300 mb-8">
            {city.description}
          </p>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-shimmer">
            Lieux à visiter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {places.map((place: Place) => (
              <Card key={place.id} className="bg-transparent border-2 border-neon-cyan neon-glow group hover:border-neon-purple transition-all duration-300">
                <CardContent className="p-0">
                  {/* Place Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={place.imageUrl}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Place Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {place.description}
                    </p>
                    
                    {/* Place Details */}
                    <div className="space-y-2 mb-4 text-xs">
                      {place.bestTime && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3 text-neon-cyan" />
                          <span className="text-gray-300">Meilleur moment: {place.bestTime}</span>
                        </div>
                      )}
                      {place.coordinates && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3 h-3 text-neon-cyan" />
                          <span className="text-gray-300">{place.coordinates}</span>
                        </div>
                      )}
                      {place.activities && place.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {place.activities.map((activity, index) => (
                            <span key={index} className="px-2 py-1 bg-neon-cyan bg-opacity-10 text-neon-cyan text-xs rounded border border-neon-cyan">
                              {activity}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Visit Button */}
                    <Link href={`/${continentSlug}/${countrySlug}/${citySlug}/${place.slug}`}>
                      <button className="w-full neon-button py-2 text-sm neon-glow-hover">
                        Visiter {place.name}
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