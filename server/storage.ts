import { 
  users, 
  continents, 
  countries, 
  cities, 
  places, 
  adventures,
  type User, 
  type InsertUser,
  type Continent,
  type InsertContinent,
  type Country,
  type InsertCountry,
  type City,
  type InsertCity,
  type Place,
  type InsertPlace,
  type Adventure,
  type InsertAdventure
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Continents
  getContinents(): Promise<Continent[]>;
  getContinentBySlug(slug: string): Promise<Continent | undefined>;
  
  // Countries
  getCountriesByContinent(continentId: number): Promise<Country[]>;
  getCountryBySlug(slug: string): Promise<Country | undefined>;
  
  // Cities
  getCitiesByCountry(countryId: number): Promise<City[]>;
  getCityBySlug(slug: string): Promise<City | undefined>;
  
  // Places
  getPlacesByCity(cityId: number): Promise<Place[]>;
  getPlaceBySlug(slug: string): Promise<Place | undefined>;
  
  // Adventures
  getRecentAdventures(limit?: number): Promise<Adventure[]>;
  getAdventuresByPlace(placeId: number): Promise<Adventure[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private continents: Map<number, Continent>;
  private countries: Map<number, Country>;
  private cities: Map<number, City>;
  private places: Map<number, Place>;
  private adventures: Map<number, Adventure>;
  private currentUserId: number;
  private currentContinentId: number;
  private currentCountryId: number;
  private currentCityId: number;
  private currentPlaceId: number;
  private currentAdventureId: number;

  constructor() {
    this.users = new Map();
    this.continents = new Map();
    this.countries = new Map();
    this.cities = new Map();
    this.places = new Map();
    this.adventures = new Map();
    this.currentUserId = 1;
    this.currentContinentId = 1;
    this.currentCountryId = 1;
    this.currentCityId = 1;
    this.currentPlaceId = 1;
    this.currentAdventureId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed continents
    const europe: Continent = {
      id: this.currentContinentId++,
      name: "Europe",
      slug: "europe",
      description: "Découvrez l'histoire, l'art et la culture européenne à travers mes voyages en France, Italie, Espagne et bien d'autres destinations magiques.",
      imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      countryCount: 3,
      cityCount: 8
    };
    
    const asia: Continent = {
      id: this.currentContinentId++,
      name: "Asie",
      slug: "asie",
      description: "Plongez dans la spiritualité, la modernité et les traditions millénaires du Japon, de la Thaïlande, du Vietnam et d'autres perles asiatiques.",
      imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      countryCount: 3,
      cityCount: 6
    };
    
    this.continents.set(europe.id, europe);
    this.continents.set(asia.id, asia);

    // Seed countries
    const france: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "France",
      slug: "france",
      description: "De Paris romantique aux châteaux de la Loire, découvrez la richesse culturelle française.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 3
    };

    const italy: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Italie",
      slug: "italie",
      description: "Art, gastronomie et histoire dans la péninsule italienne.",
      imageUrl: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 2
    };

    const greece: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Grèce",
      slug: "grece",
      description: "Îles paradisiaques et berceau de la civilisation occidentale.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 3
    };

    const japan: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Japon",
      slug: "japon",
      description: "Tradition et modernité dans l'archipel du soleil levant.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 2
    };

    const thailand: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Thaïlande",
      slug: "thailande",
      description: "Temples dorés, plages paradisiaques et cuisine savoureuse.",
      imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 2
    };

    const indonesia: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Indonésie",
      slug: "indonesie",
      description: "Archipel aux mille îles, entre volcans et cultures diverses.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      cityCount: 2
    };

    this.countries.set(france.id, france);
    this.countries.set(italy.id, italy);
    this.countries.set(greece.id, greece);
    this.countries.set(japan.id, japan);
    this.countries.set(thailand.id, thailand);
    this.countries.set(indonesia.id, indonesia);

    // Seed cities
    const paris: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Paris",
      slug: "paris",
      description: "La Ville Lumière et ses monuments emblématiques.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 3
    };

    const kyoto: City = {
      id: this.currentCityId++,
      countryId: japan.id,
      name: "Kyoto",
      slug: "kyoto",
      description: "Ancienne capitale impériale aux mille temples.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
    };

    const santorini: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Santorin",
      slug: "santorin",
      description: "Île volcanique aux couchers de soleil légendaires.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
    };

    const ubud: City = {
      id: this.currentCityId++,
      countryId: indonesia.id,
      name: "Ubud",
      slug: "ubud",
      description: "Centre spirituel et culturel de Bali.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
    };

    this.cities.set(paris.id, paris);
    this.cities.set(kyoto.id, kyoto);
    this.cities.set(santorini.id, santorini);
    this.cities.set(ubud.id, ubud);

    // Seed places
    const eiffelTower: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Tour Eiffel",
      slug: "tour-eiffel",
      description: "Le symbole de Paris et de la France.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Tour Eiffel, monument emblématique de Paris...",
      videoUrl: null,
      visitDate: new Date('2024-01-15')
    };

    const kinkakuji: Place = {
      id: this.currentPlaceId++,
      cityId: kyoto.id,
      name: "Kinkaku-ji",
      slug: "kinkaku-ji",
      description: "Le Pavillon d'Or, temple zen emblématique.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Kinkaku-ji ou Pavillon d'Or est l'un des temples les plus célèbres du Japon...",
      videoUrl: null,
      visitDate: new Date('2024-02-10')
    };

    const oia: Place = {
      id: this.currentPlaceId++,
      cityId: santorini.id,
      name: "Oia",
      slug: "oia",
      description: "Village aux maisons blanches et couchers de soleil magiques.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Oia est un village pittoresque perché sur les falaises de Santorin...",
      videoUrl: null,
      visitDate: new Date('2024-03-05')
    };

    const tegallalang: Place = {
      id: this.currentPlaceId++,
      cityId: ubud.id,
      name: "Rizières de Tegallalang",
      slug: "rizieres-tegallalang",
      description: "Terrasses de riz spectaculaires au cœur de Bali.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les rizières en terrasses de Tegallalang offrent un paysage à couper le souffle...",
      videoUrl: null,
      visitDate: new Date('2024-03-20')
    };

    this.places.set(eiffelTower.id, eiffelTower);
    this.places.set(kinkakuji.id, kinkakuji);
    this.places.set(oia.id, oia);
    this.places.set(tegallalang.id, tegallalang);

    // Seed adventures
    const adventure1: Adventure = {
      id: this.currentAdventureId++,
      placeId: kinkakuji.id,
      title: "Temples et Jardins Zen",
      description: "Une immersion spirituelle dans les temples traditionnels et les jardins zen de l'ancienne capitale japonaise.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      content: "Mon voyage au Kinkaku-ji a été une expérience transformatrice...",
      publishedAt: new Date('2024-02-12')
    };

    const adventure2: Adventure = {
      id: this.currentAdventureId++,
      placeId: oia.id,
      title: "Couchers de Soleil Magiques",
      description: "Des couchers de soleil à couper le souffle sur les falaises volcaniques de cette île grecque emblématique.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      content: "Oia à Santorin offre probablement les plus beaux couchers de soleil du monde...",
      publishedAt: new Date('2024-03-07')
    };

    const adventure3: Adventure = {
      id: this.currentAdventureId++,
      placeId: tegallalang.id,
      title: "Rizières et Spiritualité",
      description: "Exploration des rizières en terrasses et découverte de la culture balinaise authentique.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      content: "Les rizières de Tegallalang m'ont permis de comprendre la relation profonde entre les Balinais et leur terre...",
      publishedAt: new Date('2024-03-22')
    };

    this.adventures.set(adventure1.id, adventure1);
    this.adventures.set(adventure2.id, adventure2);
    this.adventures.set(adventure3.id, adventure3);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Continent methods
  async getContinents(): Promise<Continent[]> {
    return Array.from(this.continents.values());
  }

  async getContinentBySlug(slug: string): Promise<Continent | undefined> {
    return Array.from(this.continents.values()).find(c => c.slug === slug);
  }

  // Country methods
  async getCountriesByContinent(continentId: number): Promise<Country[]> {
    return Array.from(this.countries.values()).filter(c => c.continentId === continentId);
  }

  async getCountryBySlug(slug: string): Promise<Country | undefined> {
    return Array.from(this.countries.values()).find(c => c.slug === slug);
  }

  // City methods
  async getCitiesByCountry(countryId: number): Promise<City[]> {
    return Array.from(this.cities.values()).filter(c => c.countryId === countryId);
  }

  async getCityBySlug(slug: string): Promise<City | undefined> {
    return Array.from(this.cities.values()).find(c => c.slug === slug);
  }

  // Place methods
  async getPlacesByCity(cityId: number): Promise<Place[]> {
    return Array.from(this.places.values()).filter(p => p.cityId === cityId);
  }

  async getPlaceBySlug(slug: string): Promise<Place | undefined> {
    return Array.from(this.places.values()).find(p => p.slug === slug);
  }

  // Adventure methods
  async getRecentAdventures(limit: number = 3): Promise<Adventure[]> {
    return Array.from(this.adventures.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit);
  }

  async getAdventuresByPlace(placeId: number): Promise<Adventure[]> {
    return Array.from(this.adventures.values()).filter(a => a.placeId === placeId);
  }
}

export const storage = new MemStorage();
