import { useParams, Link } from "wouter";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Play, X } from "lucide-react";
import { getContinentBySlug, getCountryBySlug, getCityBySlug, getPlaceBySlug, getAdventuresByPlace, formatDate } from "@/lib/static-data";
import { getImageUrl } from "@/lib/image-utils";
import type { Adventure } from "@/lib/static-data";

export default function PlacePage() {
  const { continentSlug, countrySlug, citySlug, placeSlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
    citySlug: string; 
    placeSlug: string; 
  }>();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageError = (imageUrl: string) => {
    console.log('Image error:', imageUrl);
    console.log('Current origin:', window.location.origin);
    console.log('Full URL would be:', getImageUrl(imageUrl));
  };

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
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/${continentSlug}/${countrySlug}/${citySlug}`}>
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



          {/* Detailed Information */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="text-left space-y-6 text-gray-300 leading-relaxed">
              {place.bestTime && (
                <p className="text-lg">
                  <span className="text-neon-cyan font-semibold">Meilleur moment pour visiter :</span> {place.bestTime}. 
                  C'est la période idéale pour profiter pleinement de votre visite et découvrir ce lieu dans les meilleures conditions.
                </p>
              )}
              
              {place.coordinates && (
                <p className="text-lg">
                  <span className="text-neon-cyan font-semibold">Localisation :</span> Vous trouverez ce magnifique lieu aux coordonnées {place.coordinates}. 
                  Un endroit facilement accessible qui vous permettra de vivre une expérience inoubliable.
                </p>
              )}
              
              {place.activities && place.activities.length > 0 && (
                <p className="text-lg">
                  <span className="text-neon-cyan font-semibold">Activités recommandées :</span> Ce lieu offre de nombreuses possibilités d'exploration. 
                  Parmi les activités les plus populaires, vous pourrez profiter de {place.activities.join(', ')}. 
                  Chaque activité vous permettra de découvrir une facette unique de cet endroit extraordinaire.
                </p>
              )}
              
              <p className="text-lg text-neon-purple font-medium">
                Un lieu d'exception qui mérite d'être découvert et qui vous laissera des souvenirs mémorables de votre voyage.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Gallery Section for places with photos */}
      {place.gallery && place.gallery.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-shimmer">
              Mes photos de {place.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {place.gallery.map((imageUrl: string, index: number) => (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(imageUrl)}>
                  <div className="border-2 border-neon-cyan neon-glow overflow-hidden group-hover:border-neon-purple transition-all duration-300 bg-black">
                    <img 
                      src={getImageUrl(imageUrl)}
                      alt={`${place.name} - Photo ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = 'transparent';
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        handleImageError(target.src);
                        target.style.border = '2px solid red';
                        target.style.backgroundColor = 'red';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[70vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 text-neon-cyan hover:text-neon-purple transition-colors z-10 bg-black border border-neon-cyan rounded-full p-2"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <img
              src={getImageUrl(selectedImage)}
              alt="Image agrandie"
              className="w-full h-auto object-contain border-2 border-neon-cyan neon-glow rounded"
              onClick={(e) => e.stopPropagation()}
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                handleImageError(target.src);
              }}
            />
          </div>
        </div>
      )}

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
                    <div className="aspect-video overflow-hidden cursor-pointer bg-black" onClick={() => setSelectedImage(adventure.imageUrl)}>
                      <img 
                        src={getImageUrl(adventure.imageUrl)}
                        alt={adventure.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = 'transparent';
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          handleImageError(target.src);
                          target.style.border = '2px solid red';
                          target.style.backgroundColor = 'red';
                        }}
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