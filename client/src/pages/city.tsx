import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import type { Continent, Country, City, Place } from "@shared/schema";

export default function CityPage() {
  const { continentSlug, countrySlug, citySlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
    citySlug: string; 
  }>();

  const { data: continent } = useQuery<Continent>({
    queryKey: [`/api/continents/${continentSlug}`],
  });

  const { data: country } = useQuery<Country>({
    queryKey: [`/api/countries/${countrySlug}`],
  });

  const { data: city, isLoading: cityLoading } = useQuery<City>({
    queryKey: [`/api/cities/${citySlug}`],
  });

  const { data: places, isLoading: placesLoading } = useQuery<Place[]>({
    queryKey: [`/api/cities/${citySlug}/places`],
    enabled: !!citySlug,
  });

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: continent?.name || continentSlug || "", href: `/continent/${continentSlug}` },
    { label: country?.name || countrySlug || "", href: `/continent/${continentSlug}/country/${countrySlug}` },
    { label: city?.name || citySlug || "", href: `/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}` }
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
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          {cityLoading ? (
            <div className="neon-shimmer text-4xl mb-8">
              Chargement...
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{city?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-12">
                {city?.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neon-cyan mb-4">Lieux d'Intérêt</h2>
            <p className="text-xl text-neon-cyan">
              Découvrez les trésors cachés de {city?.name}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {placesLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-6 border border-neon-cyan rounded-xl neon-glow">
                  <div className="text-neon-cyan">Chargement...</div>
                </div>
              ))
            ) : (
              places?.map((place) => (
                <Link 
                  key={place.id} 
                  href={`/continent/${continentSlug}/country/${countrySlug}/city/${citySlug}/place/${place.slug}`}
                >
                  <div className="group cursor-pointer bg-pure-black border border-neon-cyan rounded-xl p-6 neon-glow hover:neon-glow-hover transition-all duration-300">
                    <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-purple transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-neon-cyan mb-4 text-sm opacity-80">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neon-cyan opacity-60">
                        <Calendar className="h-4 w-4 mr-1" />
                        {place.visitDate ? formatDate(place.visitDate) : 'À venir'}
                      </div>
                      <div className="flex items-center text-neon-cyan group-hover:text-neon-purple transition-colors">
                        <span className="mr-2 text-sm">Visiter →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          
          {places && places.length === 0 && !placesLoading && (
            <div className="text-center py-12">
              <p className="text-neon-cyan text-lg opacity-60">
                Aucun lieu disponible pour le moment dans cette ville.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
