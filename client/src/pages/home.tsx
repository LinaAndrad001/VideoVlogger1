import { useQuery } from "@tanstack/react-query";
import { Globe, Play, User, ChevronDown, Landmark, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AdventureCard from "@/components/adventure-card";
import type { Continent, Adventure } from "@shared/schema";

export default function Home() {
  const { data: continents, isLoading: continentsLoading } = useQuery<Continent[]>({
    queryKey: ["/api/continents"],
  });

  const { data: recentAdventures, isLoading: adventuresLoading } = useQuery<Adventure[]>({
    queryKey: ["/api/adventures"],
  });

  const scrollToContent = () => {
    document.querySelector('#continents')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Portrait du voyageur"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bonjour, je suis <span className="text-sunset-orange">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Explorez le monde à travers mes aventures. De l'Europe mystique à l'Asie fascinante, 
            découvrez des destinations extraordinaires et des cultures uniques.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContent}
              className="bg-sunset-orange hover:bg-sunset-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Commencer l'Aventure
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent"
            >
              <User className="mr-2 h-5 w-5" />
              En Savoir Plus
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Main Content Navigation */}
      <section id="continents" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Explorez les Continents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez votre destination et découvrez mes aventures à travers le monde
            </p>
          </div>
          
          {/* Continent Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {continentsLoading ? (
              <>
                <Card>
                  <Skeleton className="w-full h-64" />
                  <CardContent className="p-8">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-6" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <Skeleton className="w-full h-64" />
                  <CardContent className="p-8">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-6" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              continents?.map((continent) => (
                <Link key={continent.id} href={`/continent/${continent.slug}`}>
                  <Card className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={continent.imageUrl}
                      alt={continent.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {continent.slug === 'europe' ? (
                          <Landmark className="text-ocean-blue h-6 w-6 mr-3" />
                        ) : (
                          <MapPin className="text-forest-green h-6 w-6 mr-3" />
                        )}
                        <h3 className="text-2xl font-bold text-charcoal">{continent.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {continent.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {continent.countryCount} Pays • {continent.cityCount} Villes
                        </span>
                        <div className={`flex items-center ${continent.slug === 'europe' ? 'text-ocean-blue' : 'text-forest-green'}`}>
                          <span className="mr-2">Explorer</span>
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Recent Adventures Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Dernières Aventures</h2>
            <p className="text-xl text-gray-600">Les destinations les plus récentes de mon voyage</p>
          </div>
          
          {/* Adventure Grid */}
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
              recentAdventures?.map((adventure) => (
                <AdventureCard key={adventure.id} adventure={adventure} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* About Content */}
              <div>
                <h2 className="text-4xl font-bold text-charcoal mb-6">Mon Histoire</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Passionné de voyage depuis mon plus jeune âge, j'ai décidé de transformer ma passion 
                  en aventure permanente. À travers ce vlog, je partage mes découvertes, mes rencontres 
                  et les moments magiques que j'ai la chance de vivre aux quatre coins du monde.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Chaque destination raconte une histoire unique, chaque culture apporte sa richesse, 
                  et chaque aventure me permet de grandir et de vous faire découvrir la beauté 
                  de notre planète.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ocean-blue">20</div>
                    <div className="text-sm text-gray-500">Pays Visités</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sunset-orange">77</div>
                    <div className="text-sm text-gray-500">Villes Explorées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-forest-green">156</div>
                    <div className="text-sm text-gray-500">Vidéos Créées</div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* About Image */}
              <div className="lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Blogueur de voyage avec appareil photo"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
