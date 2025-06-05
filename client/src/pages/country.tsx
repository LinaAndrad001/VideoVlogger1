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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-24">
        {country && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${country.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        )}
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {countryLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4 mx-auto bg-white/20" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-white/20" />
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{country?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
                {country?.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Villes à Découvrir</h2>
            <p className="text-xl text-gray-600">
              Explorez les merveilles de {country?.name}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {citiesLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              cities?.map((city) => (
                <Link 
                  key={city.id} 
                  href={`/continent/${continentSlug}/country/${countrySlug}/city/${city.slug}`}
                >
                  <Card className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-3">{city.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {city.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {city.placeCount} {city.placeCount === 1 ? 'Lieu' : 'Lieux'}
                        </span>
                        <div className="flex items-center text-forest-green">
                          <span className="mr-2 text-sm">Explorer</span>
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
          
          {cities && cities.length === 0 && !citiesLoading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucune ville disponible pour le moment dans ce pays.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
