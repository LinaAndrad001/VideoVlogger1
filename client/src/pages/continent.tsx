import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import type { Continent, Country } from "@shared/schema";

export default function ContinentPage() {
  const { continentSlug } = useParams<{ continentSlug: string }>();

  const { data: continent, isLoading: continentLoading } = useQuery<Continent>({
    queryKey: [`/api/continents/${continentSlug}`],
  });

  const { data: countries, isLoading: countriesLoading } = useQuery<Country[]>({
    queryKey: [`/api/continents/${continentSlug}/countries`],
    enabled: !!continentSlug,
  });

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: continent?.name || continentSlug || "", href: `/continent/${continentSlug}` }
  ];

  return (
    <div className="min-h-screen bg-pure-black text-neon-cyan font-mono">
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
          {continentLoading ? (
            <div className="neon-shimmer text-4xl mb-8">
              Chargement...
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-shimmer">{continent?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-12">
                {continent?.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neon-cyan mb-4">Pays à Explorer</h2>
            <p className="text-xl text-neon-cyan">
              Découvrez les destinations fascinantes de {continent?.name}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {countriesLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-6 border border-neon-cyan rounded-xl neon-glow">
                  <div className="text-neon-cyan">Chargement...</div>
                </div>
              ))
            ) : (
              countries?.map((country) => (
                <Link 
                  key={country.id} 
                  href={`/continent/${continentSlug}/country/${country.slug}`}
                >
                  <div className="group cursor-pointer bg-pure-black border border-neon-cyan rounded-xl p-6 neon-glow hover:neon-glow-hover transition-all duration-300">
                    <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-purple transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-neon-cyan mb-4 text-sm opacity-80">
                      {country.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neon-cyan opacity-60">
                        {country.cityCount} {country.cityCount === 1 ? 'Ville' : 'Villes'}
                      </span>
                      <div className="flex items-center text-neon-cyan group-hover:text-neon-purple transition-colors">
                        <span className="mr-2 text-sm">Découvrir →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          
          {countries && countries.length === 0 && !countriesLoading && (
            <div className="text-center py-12">
              <p className="text-neon-cyan text-lg opacity-60">
                Aucun pays disponible pour le moment dans cette région.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
