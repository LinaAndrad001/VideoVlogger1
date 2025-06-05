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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-24">
        {place && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${place.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        )}
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {placeLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4 mx-auto bg-white/20" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-white/20" />
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{place?.name}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-4">
                {place?.description}
              </p>
              {place?.visitDate && (
                <div className="flex items-center justify-center text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Visité le {formatDate(place.visitDate)}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {placeLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-4/5" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {place?.content}
                </p>
                
                {place?.videoUrl && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Vidéo</h3>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Vidéo : {place.videoUrl}</p>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Mes Aventures Ici</h2>
              <p className="text-xl text-gray-600">
                Découvrez mes expériences à {place?.name}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {adventuresLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i}>
                    <Skeleton className="w-full h-48" />
                    <CardContent className="p-6">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-5/6 mb-4" />
                      <div className="flex justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                adventures?.map((adventure) => (
                  <AdventureCard key={adventure.id} adventure={adventure} />
                ))
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
