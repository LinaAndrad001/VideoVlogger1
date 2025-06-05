import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import type { Continent, Country, City } from "@shared/schema";

export default function CountryPage() {
  const { continentSlug, countrySlug } = useParams<{ 
    continentSlug: string; 
    countrySlug: string; 
  }>();

  const { data: continent } = useQuery<Continent>({
    queryKey: [`/api/continents/${continentSlug}`],
  });

  const { data: country, isLoading: countryLoading } = useQuery<Country>({
    queryKey: [`/api/countries/${countrySlug}`],
  });

  const { data: cities, isLoading: citiesLoading } = useQuery<City[]>({
    queryKey: [`/api/countries/${countrySlug}/cities`],
    enabled: !!countrySlug,
  });

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: continent?.name || continentSlug || "", href: `/continent/${continentSlug}` },
    { label: country?.name || countrySlug || "", href: `/continent/${continentSlug}/country/${countrySlug}` }
  ];

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
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          {countryLoading ? (
            <div className="neon-shimmer text-4xl mb-8">
              Chargement...
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{country?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-12">
                {country?.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neon-cyan mb-4">Villes à Découvrir</h2>
            <p className="text-xl text-neon-cyan">
              Explorez les merveilles de {country?.name}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {citiesLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-6 border border-neon-cyan rounded-xl neon-glow">
                  <div className="text-neon-cyan">Chargement...</div>
                </div>
              ))
            ) : (
              cities?.map((city) => (
                <Link 
                  key={city.id} 
                  href={`/continent/${continentSlug}/country/${countrySlug}/city/${city.slug}`}
                >
                  <div className="group cursor-pointer bg-pure-black border border-neon-cyan rounded-xl overflow-hidden neon-glow hover:neon-glow-hover transition-all duration-300">
                    {/* Image de la ville */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={city.imageUrl}
                        alt={city.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-purple transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-neon-cyan mb-4 text-sm opacity-80">
                        {city.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neon-cyan opacity-60">
                          {city.placeCount} {city.placeCount === 1 ? 'Lieu' : 'Lieux'}
                        </span>
                        <div className="flex items-center text-neon-cyan group-hover:text-neon-purple transition-colors">
                          <span className="mr-2 text-sm">Explorer →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          
          {cities && cities.length === 0 && !citiesLoading && (
            <div className="text-center py-12">
              <p className="text-neon-cyan text-lg opacity-60">
                Aucune ville disponible pour le moment dans ce pays.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
