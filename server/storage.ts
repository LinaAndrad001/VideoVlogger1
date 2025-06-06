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
      description: "Découvrez l'histoire, l'art et la culture européenne à travers mes voyages en France, Italie, Portugal et bien d'autres destinations magiques.",
      imageUrl: "/images/IMG_20240721_142441.jpg",
      countryCount: 4,
      cityCount: 8
    };
    
    const asia: Continent = {
      id: this.currentContinentId++,
      name: "Asie",
      slug: "asie",
      description: "Plongez dans la spiritualité, la modernité et les traditions millénaires du Japon, de la Thaïlande, du Vietnam et d'autres perles asiatiques.",
      imageUrl: "/images/IMG_20231228_141336.jpg",
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
      imageUrl: "/images/IMG_20250125_132103.jpg",
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

    const portugal: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Portugal",
      slug: "portugal",
      description: "Pays des navigateurs aux paysages authentiques et à l'hospitalité légendaire.",
      imageUrl: "/images/IMG_20240804_111629.jpg",
      cityCount: 1
    };

    this.countries.set(france.id, france);
    this.countries.set(italy.id, italy);
    this.countries.set(greece.id, greece);
    this.countries.set(portugal.id, portugal);
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
      imageUrl: "/images/IMG_20250228_175111.jpg",
      placeCount: 3
    };

    const bordeaux: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Bordeaux",
      slug: "bordeaux",
      description: "Capitale mondiale du vin et joyau architectural.",
      imageUrl: "/images/bordeauxrue02.jpg",
      placeCount: 1
    };

    const ecluzelles: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Ecluzelles",
      slug: "ecluzelles",
      description: "Charmant village au bord de l'eau et nature préservée.",
      imageUrl: "/images/IMG_20240721_134557.jpg",
      placeCount: 1
    };

    const rome: City = {
      id: this.currentCityId++,
      countryId: italy.id,
      name: "Rome",
      slug: "rome",
      description: "La Ville Éternelle et ses trésors antiques.",
      imageUrl: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
    };

    const venice: City = {
      id: this.currentCityId++,
      countryId: italy.id,
      name: "Venise",
      slug: "venise",
      description: "La Sérénissime aux canaux enchanteurs.",
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 1
    };

    const athens: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Athènes",
      slug: "athenes",
      description: "Berceau de la démocratie et de la philosophie.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 1
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

    const mykonos: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Mykonos",
      slug: "mykonos",
      description: "Île festive aux maisons blanches.",
      imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 1
    };

    const tokyo: City = {
      id: this.currentCityId++,
      countryId: japan.id,
      name: "Tokyo",
      slug: "tokyo",
      description: "Métropole futuriste entre tradition et modernité.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
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

    const bangkok: City = {
      id: this.currentCityId++,
      countryId: thailand.id,
      name: "Bangkok",
      slug: "bangkok",
      description: "Capitale dynamique aux temples dorés.",
      imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 2
    };

    const phuket: City = {
      id: this.currentCityId++,
      countryId: thailand.id,
      name: "Phuket",
      slug: "phuket",
      description: "Île paradisiaque aux plages de rêve.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 1
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

    const jakarta: City = {
      id: this.currentCityId++,
      countryId: indonesia.id,
      name: "Jakarta",
      slug: "jakarta",
      description: "Capitale cosmopolite de l'archipel.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-670cf1666ab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      placeCount: 1
    };

    this.cities.set(paris.id, paris);
    this.cities.set(bordeaux.id, bordeaux);
    this.cities.set(ecluzelles.id, ecluzelles);
    this.cities.set(rome.id, rome);
    this.cities.set(venice.id, venice);
    this.cities.set(athens.id, athens);
    this.cities.set(santorini.id, santorini);
    this.cities.set(mykonos.id, mykonos);
    this.cities.set(tokyo.id, tokyo);
    this.cities.set(kyoto.id, kyoto);
    this.cities.set(bangkok.id, bangkok);
    this.cities.set(phuket.id, phuket);
    this.cities.set(ubud.id, ubud);
    this.cities.set(jakarta.id, jakarta);

    // Seed places
    // Paris places
    const eiffelTower: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Tour Eiffel",
      slug: "tour-eiffel",
      description: "Le symbole de Paris et de la France.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Tour Eiffel, monument emblématique de Paris, offre une vue spectaculaire sur la ville lumière.",
      videoUrl: null,
      visitDate: new Date('2024-01-15')
    };

    const louvre: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Musée du Louvre",
      slug: "musee-louvre",
      description: "Le plus grand musée d'art au monde.",
      imageUrl: "/images/IMG_20250603_151423.jpg",
      content: "Le Louvre abrite des œuvres d'art inestimables, dont la Joconde et la Vénus de Milo.",
      videoUrl: null,
      visitDate: new Date('2024-01-16')
    };

    const sacreCoeur: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Sacré-Cœur",
      slug: "sacre-coeur",
      description: "Basilique emblématique de Montmartre offrant une vue panoramique sur Paris.",
      imageUrl: "/images/IMG_20250516_164453.jpg",
      content: "La basilique du Sacré-Cœur domine Paris depuis la butte Montmartre, offrant une vue exceptionnelle sur la capitale.",
      videoUrl: null,
      visitDate: new Date('2024-01-17')
    };

    // Lyon place
    const vieuxLyon: Place = {
      id: this.currentPlaceId++,
      cityId: lyon.id,
      name: "Vieux Lyon",
      slug: "vieux-lyon",
      description: "Quartier Renaissance au patrimoine exceptionnel.",
      imageUrl: "https://images.unsplash.com/photo-1524305533606-0c6cc2bdc1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Vieux Lyon, inscrit au patrimoine mondial de l'UNESCO, révèle l'architecture Renaissance.",
      videoUrl: null,
      visitDate: new Date('2024-02-01')
    };

    // Nice place
    const promenadeAnglais: Place = {
      id: this.currentPlaceId++,
      cityId: nice.id,
      name: "Promenade des Anglais",
      slug: "promenade-anglais",
      description: "Célèbre promenade en bord de mer.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Promenade des Anglais offre une vue magnifique sur la Baie des Anges.",
      videoUrl: null,
      visitDate: new Date('2024-02-15')
    };

    // Rome places
    const colosseum: Place = {
      id: this.currentPlaceId++,
      cityId: rome.id,
      name: "Colisée",
      slug: "colisee",
      description: "Amphithéâtre antique emblématique de Rome.",
      imageUrl: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Colisée, symbole de l'Empire romain, témoigne de la grandeur antique.",
      videoUrl: null,
      visitDate: new Date('2024-03-01')
    };

    const vatican: Place = {
      id: this.currentPlaceId++,
      cityId: rome.id,
      name: "Vatican",
      slug: "vatican",
      description: "État souverain et centre spirituel catholique.",
      imageUrl: "https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Vatican abrite la Chapelle Sixtine et les merveilles artistiques de Michel-Ange.",
      videoUrl: null,
      visitDate: new Date('2024-03-02')
    };

    // Venice place
    const stMarks: Place = {
      id: this.currentPlaceId++,
      cityId: venice.id,
      name: "Place Saint-Marc",
      slug: "place-saint-marc",
      description: "Cœur historique de Venise.",
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Place Saint-Marc, avec sa basilique et son campanile, incarne l'élégance vénitienne.",
      videoUrl: null,
      visitDate: new Date('2024-03-10')
    };

    // Athens place
    const acropolis: Place = {
      id: this.currentPlaceId++,
      cityId: athens.id,
      name: "Acropole",
      slug: "acropole",
      description: "Citadelle antique dominant Athènes.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "L'Acropole et le Parthénon représentent l'apogée de l'art grec classique.",
      videoUrl: null,
      visitDate: new Date('2024-03-15')
    };

    // Santorini places
    const oia: Place = {
      id: this.currentPlaceId++,
      cityId: santorini.id,
      name: "Oia",
      slug: "oia",
      description: "Village aux maisons blanches et couchers de soleil magiques.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Oia est un village pittoresque perché sur les falaises de Santorin, célèbre pour ses couchers de soleil.",
      videoUrl: null,
      visitDate: new Date('2024-03-05')
    };

    const fira: Place = {
      id: this.currentPlaceId++,
      cityId: santorini.id,
      name: "Fira",
      slug: "fira",
      description: "Capitale de Santorin aux vues spectaculaires.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Fira offre des panoramas époustouflants sur la caldeira volcanique.",
      videoUrl: null,
      visitDate: new Date('2024-03-06')
    };

    // Mykonos place
    const mykonosBeach: Place = {
      id: this.currentPlaceId++,
      cityId: mykonos.id,
      name: "Paradise Beach",
      slug: "paradise-beach",
      description: "Plage paradisiaque de Mykonos.",
      imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Paradise Beach, avec ses eaux cristallines, est l'une des plus belles plages de Mykonos.",
      videoUrl: null,
      visitDate: new Date('2024-03-18')
    };

    // Tokyo places
    const sensoji: Place = {
      id: this.currentPlaceId++,
      cityId: tokyo.id,
      name: "Temple Sensō-ji",
      slug: "sensoji",
      description: "Temple bouddhiste le plus ancien de Tokyo.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le temple Sensō-ji, dans le quartier d'Asakusa, est un lieu de spiritualité au cœur de Tokyo.",
      videoUrl: null,
      visitDate: new Date('2024-02-08')
    };

    const shibuya: Place = {
      id: this.currentPlaceId++,
      cityId: tokyo.id,
      name: "Carrefour de Shibuya",
      slug: "shibuya",
      description: "Croisement le plus fréquenté au monde.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le carrefour de Shibuya symbolise l'énergie et le dynamisme de Tokyo moderne.",
      videoUrl: null,
      visitDate: new Date('2024-02-09')
    };

    // Kyoto places
    const kinkakuji: Place = {
      id: this.currentPlaceId++,
      cityId: kyoto.id,
      name: "Kinkaku-ji",
      slug: "kinkaku-ji",
      description: "Le Pavillon d'Or, temple zen emblématique.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Kinkaku-ji ou Pavillon d'Or est l'un des temples les plus célèbres du Japon, reflet parfait de l'art zen.",
      videoUrl: null,
      visitDate: new Date('2024-02-10')
    };

    const bambooGrove: Place = {
      id: this.currentPlaceId++,
      cityId: kyoto.id,
      name: "Forêt de Bambous d'Arashiyama",
      slug: "foret-bambous",
      description: "Forêt enchantée de bambous géants.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La forêt de bambous d'Arashiyama offre une expérience mystique unique au Japon.",
      videoUrl: null,
      visitDate: new Date('2024-02-11')
    };

    // Bangkok places
    const grandPalace: Place = {
      id: this.currentPlaceId++,
      cityId: bangkok.id,
      name: "Grand Palais",
      slug: "grand-palais",
      description: "Complexe royal somptueux de Bangkok.",
      imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Grand Palais de Bangkok éblouit par ses temples dorés et son architecture traditionnelle thaïe.",
      videoUrl: null,
      visitDate: new Date('2024-04-01')
    };

    const watPho: Place = {
      id: this.currentPlaceId++,
      cityId: bangkok.id,
      name: "Wat Pho",
      slug: "wat-pho",
      description: "Temple du Bouddha couché.",
      imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Wat Pho abrite l'impressionnant Bouddha couché et est le berceau du massage thaï traditionnel.",
      videoUrl: null,
      visitDate: new Date('2024-04-02')
    };

    // Phuket place
    const phuketBeach: Place = {
      id: this.currentPlaceId++,
      cityId: phuket.id,
      name: "Plage de Patong",
      slug: "patong-beach",
      description: "Plage animée et populaire de Phuket.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Patong Beach offre des eaux turquoise et une ambiance tropicale authentique.",
      videoUrl: null,
      visitDate: new Date('2024-04-10')
    };

    // Ubud places
    const tegallalang: Place = {
      id: this.currentPlaceId++,
      cityId: ubud.id,
      name: "Rizières de Tegallalang",
      slug: "rizieres-tegallalang",
      description: "Terrasses de riz spectaculaires au cœur de Bali.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les rizières en terrasses de Tegallalang offrent un paysage à couper le souffle, témoin de l'agriculture balinaise.",
      videoUrl: null,
      visitDate: new Date('2024-03-20')
    };

    const monkeyForest: Place = {
      id: this.currentPlaceId++,
      cityId: ubud.id,
      name: "Forêt des Singes",
      slug: "foret-singes",
      description: "Sanctuaire naturel au cœur d'Ubud.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Forêt des Singes d'Ubud est un lieu sacré où nature et spiritualité se rencontrent.",
      videoUrl: null,
      visitDate: new Date('2024-03-21')
    };

    // Jakarta place
    const monas: Place = {
      id: this.currentPlaceId++,
      cityId: jakarta.id,
      name: "Monument National",
      slug: "monas",
      description: "Monument emblématique de l'indépendance indonésienne.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-670cf1666ab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Monas, symbole de l'indépendance, domine le centre de Jakarta.",
      videoUrl: null,
      visitDate: new Date('2024-04-15')
    };

    this.places.set(eiffelTower.id, eiffelTower);
    this.places.set(louvre.id, louvre);
    this.places.set(sacreCoeur.id, sacreCoeur);
    this.places.set(vieuxLyon.id, vieuxLyon);
    this.places.set(promenadeAnglais.id, promenadeAnglais);
    this.places.set(colosseum.id, colosseum);
    this.places.set(vatican.id, vatican);
    this.places.set(stMarks.id, stMarks);
    this.places.set(acropolis.id, acropolis);
    this.places.set(oia.id, oia);
    this.places.set(fira.id, fira);
    this.places.set(mykonosBeach.id, mykonosBeach);
    this.places.set(sensoji.id, sensoji);
    this.places.set(shibuya.id, shibuya);
    this.places.set(kinkakuji.id, kinkakuji);
    this.places.set(bambooGrove.id, bambooGrove);
    this.places.set(grandPalace.id, grandPalace);
    this.places.set(watPho.id, watPho);
    this.places.set(phuketBeach.id, phuketBeach);
    this.places.set(tegallalang.id, tegallalang);
    this.places.set(monkeyForest.id, monkeyForest);
    this.places.set(monas.id, monas);

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
