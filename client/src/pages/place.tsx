import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Play } from "lucide-react";
import { getContinentBySlug, getCountryBySlug, getCityBySlug, getPlaceBySlug, getAdventuresByPlace, formatDate } from "@/lib/static-data";
import type { Continent, Country, City, Place, Adventure } from "@/lib/static-data";

export default function PlacePage() {
  const { continentSlug, countrySlug, citySlug, placeSlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
    citySlug: string; 
    placeSlug: string; 
  }>();

  if (!continentSlug || !countrySlug || !citySlug || !placeSlug) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Lieu non trouvé</div>
      </div>
    );
  }

  const continent = getContinentBySlug(continentSlug);
  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(citySlug);
  const place = getPlaceBySlug(placeSlug);
  const adventures = place ? getAdventuresByPlace(place.id) : [];

  if (!continent || !country || !city || !place) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="text-red-400 text-xl">Lieu non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-black text-neon-cyan font-mono">
      {/* Simple navigation */}
      <div className="p-4 border-b border-neon-cyan">
        <div className="flex items-center space-x-4 flex-wrap text-sm">
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
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/continent/${continentSlug}/country/${countrySlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {country.name}
            </button>
          </Link>
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {city.name}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-shimmer">{place.name}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light mb-12">
            {place.description}
          </p>

          {/* Place Hero Image */}
          <div className="mb-16">
            <div className="w-full max-w-4xl mx-auto h-64 md:h-96 overflow-hidden border-2 border-neon-cyan rounded-xl neon-glow">
              <img 
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Place Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {place.bestTime && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <Calendar className="w-6 h-6 mx-auto mb-2 text-neon-purple" />
                <div className="text-lg font-bold text-neon-purple">{place.bestTime}</div>
                <div className="text-sm text-gray-400">Meilleur moment</div>
              </div>
            )}
            {place.coordinates && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-neon-purple" />
                <div className="text-lg font-bold text-neon-purple">{place.coordinates}</div>
                <div className="text-sm text-gray-400">Coordonnées</div>
              </div>
            )}
            {place.activities && place.activities.length > 0 && (
              <div className="text-center p-4 border border-neon-cyan rounded-lg neon-glow">
                <Play className="w-6 h-6 mx-auto mb-2 text-neon-purple" />
                <div className="text-lg font-bold text-neon-purple">{place.activities.length}</div>
                <div className="text-sm text-gray-400">Activités</div>
              </div>
            )}
          </div>

          {/* Activities */}
          {place.activities && place.activities.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 neon-shimmer">Activités disponibles</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {place.activities.map((activity, index) => (
                  <span key={index} className="px-4 py-2 bg-neon-cyan bg-opacity-10 text-neon-cyan rounded-lg border border-neon-cyan neon-glow">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Adventures Section */}
      {adventures.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-shimmer">
              Mes aventures ici
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {adventures.map((adventure: Adventure) => (
                <Card key={adventure.id} className="bg-transparent border-2 border-neon-cyan neon-glow group hover:border-neon-purple transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Adventure Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={adventure.imageUrl}
                        alt={adventure.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Adventure Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                        {adventure.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {adventure.description}
                      </p>
                      
                      {/* Adventure Date */}
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(adventure.date, 'full')}</span>
                      </div>
                      
                      {/* Video Button (if video available) */}
                      {adventure.videoUrl && (
                        <div className="mt-4">
                          <a 
                            href={adventure.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 neon-button py-2 px-4 text-sm neon-glow-hover"
                          >
                            <Play className="w-4 h-4" />
                            <span>Voir la vidéo</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}