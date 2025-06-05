import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import AdventureCard from "@/components/adventure-card";
import type { Continent, Country, City, Place, Adventure } from "@shared/schema";

export default function PlacePage() {
  const { continentSlug, countrySlug, citySlug, placeSlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
    citySlug: string; 
    placeSlug: string; 
  }>();

  const { data: continent } = useQuery<Continent>({
    queryKey: [`/api/continents/${continentSlug}`],
  });

  const { data: country } = useQuery<Country>({
    queryKey: [`/api/countries/${countrySlug}`],
  });

  const { data: city } = useQuery<City>({
    queryKey: [`/api/cities/${citySlug}`],
  });

  const { data: place, isLoading: placeLoading } = useQuery<Place>({
    queryKey: [`/api/places/${placeSlug}`],
  });

  const { data: adventures, isLoading: adventuresLoading } = useQuery<Adventure[]>({
    queryKey: [`/api/places/${placeSlug}/adventures`],
    enabled: !!placeSlug,
  });

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: continent?.name || continentSlug || "", href: `/continent/${continentSlug}` },
    { label: country?.name || countrySlug || "", href: `/continent/${continentSlug}/country/${countrySlug}` },
    { label: city?.name || citySlug || "", href: `/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}` },
    { label: place?.name || placeSlug || "", href: `/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}/place/${placeSlug}` }
  ];

  const formatDate = (date: Date | string | null) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              {continent?.name}
            </button>
          </Link>
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/continent/${continentSlug}/country/${countrySlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {country?.name}
            </button>
          </Link>
          <span className="text-neon-cyan opacity-50">→</span>
          <Link href={`/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}`}>
            <button className="text-neon-cyan hover:text-neon-purple transition-colors">
              {city?.name}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          {placeLoading ? (
            <div className="neon-shimmer text-4xl mb-8">
              Chargement...
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{place?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-4">
                {place?.description}
              </p>
              {place?.visitDate && (
                <div className="flex items-center justify-center text-lg text-neon-cyan opacity-80">
                  <Calendar className="h-5 w-5 mr-2" />
                  Visité le {formatDate(place.visitDate)}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {placeLoading ? (
              <div className="space-y-4">
                <div className="h-6 bg-neon-cyan opacity-20 rounded"></div>
                <div className="h-6 bg-neon-cyan opacity-20 rounded w-5/6"></div>
                <div className="h-6 bg-neon-cyan opacity-20 rounded w-4/5"></div>
                <div className="h-6 bg-neon-cyan opacity-20 rounded"></div>
                <div className="h-6 bg-neon-cyan opacity-20 rounded w-3/4"></div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg text-neon-cyan leading-relaxed mb-8">
                  {place?.content}
                </p>
                
                {place?.videoUrl && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-neon-cyan mb-6 neon-shimmer">Vidéo</h3>
                    <div className="aspect-video border border-neon-cyan rounded-lg flex items-center justify-center neon-glow">
                      <p className="text-neon-cyan">Vidéo : {place.videoUrl}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Adventures Section */}
      {adventures && adventures.length > 0 && (
        <section className="py-16 border-t border-neon-cyan">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neon-cyan mb-4 neon-shimmer">Mes Aventures Ici</h2>
              <p className="text-xl text-neon-cyan">
                Découvrez mes expériences à {place?.name}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {adventuresLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-6 border border-neon-cyan rounded-xl neon-glow">
                    <div className="text-neon-cyan">Chargement...</div>
                  </div>
                ))
              ) : (
                adventures?.map((adventure) => (
                  <div key={adventure.id} className="bg-pure-black border border-neon-cyan rounded-xl p-6 neon-glow">
                    <h3 className="text-xl font-semibold text-neon-cyan mb-2">{adventure.title}</h3>
                    <p className="text-neon-cyan text-sm mb-4 opacity-80">
                      {adventure.description}
                    </p>
                    <div className="text-xs text-neon-cyan opacity-60">
                      {formatDate(adventure.publishedAt)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
