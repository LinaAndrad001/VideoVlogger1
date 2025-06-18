import { User, InsertUser, Continent, Country, City, Place, Adventure } from "@shared/schema";

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
      description: "Le continent européen avec sa riche histoire et ses cultures diverses."
    };

    const asia: Continent = {
      id: this.currentContinentId++,
      name: "Asie",
      slug: "asie",
      description: "Le plus grand continent du monde, riche en diversité culturelle."
    };

    this.continents.set(europe.id, europe);
    this.continents.set(asia.id, asia);

    // Seed countries
    const france: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "France",
      slug: "france",
      description: "Le pays de l'art de vivre et de la gastronomie."
    };

    const italy: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Italie",
      slug: "italie",
      description: "Le berceau de la Renaissance et de la cuisine méditerranéenne."
    };

    const greece: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Grèce",
      slug: "grece",
      description: "Le berceau de la démocratie et de la philosophie occidentale."
    };

    const japan: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Japon",
      slug: "japon",
      description: "L'harmonie entre tradition et modernité."
    };

    const thailand: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Thaïlande",
      slug: "thailande",
      description: "Le pays du sourire aux temples dorés."
    };

    const indonesia: Country = {
      id: this.currentCountryId++,
      continentId: asia.id,
      name: "Indonésie",
      slug: "indonesie",
      description: "L'archipel aux mille îles tropicales."
    };

    const portugal: Country = {
      id: this.currentCountryId++,
      continentId: europe.id,
      name: "Portugal",
      slug: "portugal",
      description: "Le pays des navigateurs et des azulejos."
    };

    this.countries.set(france.id, france);
    this.countries.set(italy.id, italy);
    this.countries.set(greece.id, greece);
    this.countries.set(japan.id, japan);
    this.countries.set(thailand.id, thailand);
    this.countries.set(indonesia.id, indonesia);
    this.countries.set(portugal.id, portugal);

    // Seed cities
    const paris: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Paris",
      slug: "paris",
      description: "La Ville Lumière, capitale de l'amour et des arts."
    };

    const bordeaux: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Bordeaux",
      slug: "bordeaux",
      description: "La perle d'Aquitaine, capitale mondiale du vin."
    };

    const ecluzelles: City = {
      id: this.currentCityId++,
      countryId: france.id,
      name: "Ecluzelles",
      slug: "ecluzelles",
      description: "Charmant village français au bord de l'Eure."
    };

    const rome: City = {
      id: this.currentCityId++,
      countryId: italy.id,
      name: "Rome",
      slug: "rome",
      description: "La Ville Éternelle, cœur de l'Empire romain."
    };

    const venice: City = {
      id: this.currentCityId++,
      countryId: italy.id,
      name: "Venise",
      slug: "venise",
      description: "La Sérénissime, cité des canaux et des gondoles."
    };

    const athens: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Athènes",
      slug: "athenes",
      description: "Le berceau de la démocratie et de la philosophie."
    };

    const santorini: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Santorin",
      slug: "santorin",
      description: "L'île volcanique aux couchers de soleil légendaires."
    };

    const mykonos: City = {
      id: this.currentCityId++,
      countryId: greece.id,
      name: "Mykonos",
      slug: "mykonos",
      description: "L'île cosmopolite aux moulins à vent."
    };

    const tokyo: City = {
      id: this.currentCityId++,
      countryId: japan.id,
      name: "Tokyo",
      slug: "tokyo",
      description: "La mégalopole futuriste aux traditions millénaires."
    };

    const kyoto: City = {
      id: this.currentCityId++,
      countryId: japan.id,
      name: "Kyoto",
      slug: "kyoto",
      description: "L'ancienne capitale impériale aux temples sacrés."
    };

    const bangkok: City = {
      id: this.currentCityId++,
      countryId: thailand.id,
      name: "Bangkok",
      slug: "bangkok",
      description: "La capitale vibrante aux temples dorés."
    };

    const phuket: City = {
      id: this.currentCityId++,
      countryId: thailand.id,
      name: "Phuket",
      slug: "phuket",
      description: "L'île paradisiaque aux plages de rêve."
    };

    const ubud: City = {
      id: this.currentCityId++,
      countryId: indonesia.id,
      name: "Ubud",
      slug: "ubud",
      description: "Le cœur spirituel de Bali entouré de rizières."
    };

    const jakarta: City = {
      id: this.currentCityId++,
      countryId: indonesia.id,
      name: "Jakarta",
      slug: "jakarta",
      description: "La capitale dynamique de l'archipel indonésien."
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
      visitDate: new Date('2024-01-15'),
      gallery: null
    };

    const louvre: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Musée du Louvre",
      slug: "musee-louvre",
      description: "Le plus grand musée d'art au monde.",
      imageUrl: "@assets/IMG_20250603_145401_1750251391847.jpg",
      content: "Le Louvre abrite des œuvres d'art inestimables, dont la Joconde et la Vénus de Milo. Une journée complète de découverte dans ce palais royal transformé en musée.",
      videoUrl: null,
      visitDate: new Date('2025-06-03'),
      gallery: [
        "@assets/IMG_20250603_145401_1750251391847.jpg",
        "@assets/IMG_20250603_154848_1750251391847.jpg", 
        "@assets/IMG_20250603_204014_1750251391847.jpg",
        "@assets/IMG_20250603_204042_1750251391846.jpg",
        "@assets/WhatsApp Image 2025-06-18 à 14.19.35_564e5695_1750251391847.jpg",
        "@assets/WhatsApp Image 2025-06-18 à 14.19.39_e3f2383f_1750251391847.jpg",
        "@assets/WhatsApp Image 2025-06-18 à 14.19.42_d8056c8a_1750251391847.jpg"
      ]
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
      visitDate: new Date('2024-01-17'),
      gallery: null
    };

    const tourDuo: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Tour Duo",
      slug: "tour-duo",
      description: "Gratte-ciel moderne symbolisant le Paris contemporain.",
      imageUrl: "/images/IMG_20231114_002800_619.jpg",
      content: "Les Tours Duo représentent l'architecture moderne de Paris, illuminées dans la nuit urbaine.",
      videoUrl: null,
      visitDate: new Date('2024-01-20'),
      gallery: null
    };

    const citesSciences: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Cité des Sciences",
      slug: "cite-sciences",
      description: "Centre de découverte scientifique et technologique de Paris.",
      imageUrl: "/images/IMG_20241224_100259.jpg",
      content: "La Cité des Sciences offre une expérience immersive dans le monde de la science et de la technologie.",
      videoUrl: null,
      visitDate: new Date('2024-12-24'),
      gallery: [
        "/images/IMG_20241224_100259.jpg",
        "/images/IMG_20241224_100657.jpg", 
        "/images/IMG_20241224_101709.jpg",
        "/images/IMG_20241224_105300.jpg",
        "/images/IMG_20241224_105939.jpg",
        "/images/IMG_20241224_111050.jpg",
        "/images/IMG_20241224_095722.jpg"
      ]
    };

    const ruesParis: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Rues de Paris",
      slug: "rues-paris",
      description: "Découverte des rues authentiques et de l'ambiance parisienne.",
      imageUrl: "/images/IMG_20231202_081038.jpg",
      content: "Les rues de Paris révèlent l'âme de la capitale, entre architecture historique et vie quotidienne.",
      videoUrl: null,
      visitDate: new Date('2023-12-02'),
      gallery: [
        "/images/IMG_20231202_081038.jpg",
        "/images/IMG_20231202_090529.jpg",
        "/images/IMG_20231202_091844.jpg",
        "/images/IMG_20231202_120332.jpg",
        "/images/IMG_20231202_120339.jpg",
        "/images/IMG_20231202_175052.jpg",
        "/images/IMG_20231126_101926.jpg",
        "/images/IMG_20240804_111629.jpg",
        "/images/IMG_20240901_174257.jpg",
        "/images/IMG_20240919_150619.jpg",
        "/images/IMG_20241117_200216.jpg",
        "/images/bordeauxrue02.jpg"
      ]
    };

    const hippodromeParis: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Hippodrome de Paris",
      slug: "hippodrome-paris",
      description: "Lieu emblématique des courses hippiques parisiennes.",
      imageUrl: "/images/IMG_20231202_180547.jpg",
      content: "L'hippodrome de Paris offre le spectacle des courses de chevaux dans un cadre prestigieux.",
      videoUrl: null,
      visitDate: new Date('2024-02-15'),
      gallery: [
        "/images/IMG_20231202_180547.jpg",
        "/images/IMG_20231202_180851.jpg",
        "/images/IMG_20231228_141336.jpg"
      ]
    };

    const bordSeine: Place = {
      id: this.currentPlaceId++,
      cityId: paris.id,
      name: "Bord de Seine",
      slug: "bord-seine",
      description: "Promenades romantiques le long des quais de Seine.",
      imageUrl: "/images/IMG_20231231_150357.jpg",
      content: "Les berges de la Seine offrent une perspective unique sur les monuments parisiens et l'architecture de la ville.",
      videoUrl: null,
      visitDate: new Date('2024-01-21'),
      gallery: [
        "/images/IMG_20231231_150357.jpg",
        "/images/IMG_20240721_134557.jpg",
        "/images/IMG_20240721_142441.jpg",
        "/images/IMG_20250125_132103.jpg",
        "/images/IMG_20250228_175111.jpg",
        "/images/IMG_20250330_163612.jpg"
      ]
    };

    // Bordeaux place
    const placeComedieBordeaux: Place = {
      id: this.currentPlaceId++,
      cityId: bordeaux.id,
      name: "Place de la Comédie",
      slug: "place-comedie-bordeaux",
      description: "Le cœur culturel de Bordeaux avec son Grand Théâtre.",
      imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Place de la Comédie est le centre névralgique de Bordeaux, dominée par son magnifique Grand Théâtre.",
      videoUrl: null,
      visitDate: new Date('2024-01-18'),
      gallery: null
    };

    // Ecluzelles place
    const bordEure: Place = {
      id: this.currentPlaceId++,
      cityId: ecluzelles.id,
      name: "Bords de l'Eure",
      slug: "bords-eure",
      description: "Paisibles rives de l'Eure dans le charmant village d'Ecluzelles.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les bords de l'Eure offrent un cadre bucolique parfait pour une promenade contemplative.",
      videoUrl: null,
      visitDate: new Date('2024-01-19'),
      gallery: null
    };

    // Rome places
    const colosseum: Place = {
      id: this.currentPlaceId++,
      cityId: rome.id,
      name: "Colisée",
      slug: "colisee",
      description: "L'amphithéâtre le plus célèbre de l'Empire romain.",
      imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Colisée de Rome, symbole de la grandeur de l'Empire romain, témoigne de l'ingéniosité architecturale antique.",
      videoUrl: null,
      visitDate: new Date('2024-03-01'),
      gallery: null
    };

    const vatican: Place = {
      id: this.currentPlaceId++,
      cityId: rome.id,
      name: "Vatican",
      slug: "vatican",
      description: "Le plus petit État du monde, siège de l'Église catholique.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Vatican abrite la Chapelle Sixtine et les Musées du Vatican, trésors inestimables de l'art religieux.",
      videoUrl: null,
      visitDate: new Date('2024-03-02'),
      gallery: null
    };

    // Venice place
    const stMarks: Place = {
      id: this.currentPlaceId++,
      cityId: venice.id,
      name: "Place Saint-Marc",
      slug: "place-saint-marc",
      description: "Le salon de l'Europe selon Napoléon.",
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Place Saint-Marc est le cœur battant de Venise, entourée de merveilles architecturales byzantines.",
      videoUrl: null,
      visitDate: new Date('2024-03-10'),
      gallery: null
    };

    // Athens place
    const acropolis: Place = {
      id: this.currentPlaceId++,
      cityId: athens.id,
      name: "Acropole",
      slug: "acropole",
      description: "La citadelle sacrée dominant Athènes.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "L'Acropole d'Athènes, couronnée par le Parthénon, est le symbole de la civilisation grecque antique.",
      videoUrl: null,
      visitDate: new Date('2024-03-15'),
      gallery: null
    };

    // Santorini places
    const oia: Place = {
      id: this.currentPlaceId++,
      cityId: santorini.id,
      name: "Oia",
      slug: "oia",
      description: "Village aux maisons blanches et bleues face au coucher de soleil.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Oia offre les plus beaux couchers de soleil de la Méditerranée avec ses maisons cycladiques emblématiques.",
      videoUrl: null,
      visitDate: new Date('2024-03-05'),
      gallery: null
    };

    const fira: Place = {
      id: this.currentPlaceId++,
      cityId: santorini.id,
      name: "Fira",
      slug: "fira",
      description: "Capitale de Santorin perchée sur la caldeira.",
      imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Fira, capitale de Santorin, offre une vue spectaculaire sur la caldeira volcanique.",
      videoUrl: null,
      visitDate: new Date('2024-03-06'),
      gallery: null
    };

    // Mykonos place
    const mykonosBeach: Place = {
      id: this.currentPlaceId++,
      cityId: mykonos.id,
      name: "Plages de Mykonos",
      slug: "plages-mykonos",
      description: "Plages dorées de l'île cosmopolite.",
      imageUrl: "https://images.unsplash.com/photo-1601581875039-89ceb8c1b611?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les plages de Mykonos combinent détente méditerranéenne et ambiance festive internationale.",
      videoUrl: null,
      visitDate: new Date('2024-03-18'),
      gallery: null
    };

    // Tokyo places
    const sensoji: Place = {
      id: this.currentPlaceId++,
      cityId: tokyo.id,
      name: "Temple Sensoji",
      slug: "temple-sensoji",
      description: "Le plus ancien temple bouddhiste de Tokyo.",
      imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le temple Sensoji, dans le quartier d'Asakusa, est un havre de paix traditionnel au cœur de Tokyo moderne.",
      videoUrl: null,
      visitDate: new Date('2024-02-08'),
      gallery: null
    };

    const shibuya: Place = {
      id: this.currentPlaceId++,
      cityId: tokyo.id,
      name: "Carrefour de Shibuya",
      slug: "carrefour-shibuya",
      description: "Le carrefour le plus fréquenté au monde.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le carrefour de Shibuya symbolise l'énergie frénétique de Tokyo avec ses milliers de piétons.",
      videoUrl: null,
      visitDate: new Date('2024-02-09'),
      gallery: null
    };

    // Kyoto places
    const kinkakuji: Place = {
      id: this.currentPlaceId++,
      cityId: kyoto.id,
      name: "Kinkaku-ji",
      slug: "kinkaku-ji",
      description: "Le Pavillon d'Or, temple zen recouvert de feuilles d'or.",
      imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Kinkaku-ji, le Pavillon d'Or, est l'un des temples les plus photographiés du Japon.",
      videoUrl: null,
      visitDate: new Date('2024-02-10'),
      gallery: null
    };

    const bambooGrove: Place = {
      id: this.currentPlaceId++,
      cityId: kyoto.id,
      name: "Forêt de Bambous d'Arashiyama",
      slug: "foret-bambous-arashiyama",
      description: "Sentier mystique à travers une forêt de bambous géants.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La forêt de bambous d'Arashiyama offre une expérience zen unique dans un tunnel naturel.",
      videoUrl: null,
      visitDate: new Date('2024-02-11'),
      gallery: null
    };

    // Bangkok places
    const grandPalace: Place = {
      id: this.currentPlaceId++,
      cityId: bangkok.id,
      name: "Grand Palais",
      slug: "grand-palais",
      description: "Complexe royal somptueux au cœur de Bangkok.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Grand Palais de Bangkok éblouit par ses toits dorés et son architecture thaïlandaise traditionnelle.",
      videoUrl: null,
      visitDate: new Date('2024-04-01'),
      gallery: null
    };

    const watPho: Place = {
      id: this.currentPlaceId++,
      cityId: bangkok.id,
      name: "Wat Pho",
      slug: "wat-pho",
      description: "Temple du Bouddha couché et école de massage traditionnel.",
      imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Wat Pho abrite le plus grand Bouddha couché de Thaïlande et l'école de massage la plus réputée.",
      videoUrl: null,
      visitDate: new Date('2024-04-02'),
      gallery: null
    };

    // Phuket place
    const phuketBeach: Place = {
      id: this.currentPlaceId++,
      cityId: phuket.id,
      name: "Plages de Phuket",
      slug: "plages-phuket",
      description: "Plages paradisiaques aux eaux cristallines.",
      imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les plages de Phuket offrent un paradis tropical avec leurs eaux turquoise et leur sable blanc.",
      videoUrl: null,
      visitDate: new Date('2024-04-10'),
      gallery: null
    };

    // Ubud places
    const tegallalang: Place = {
      id: this.currentPlaceId++,
      cityId: ubud.id,
      name: "Rizières de Tegallalang",
      slug: "rizieres-tegallalang",
      description: "Terrasses de riz verdoyantes sculptées dans les collines.",
      imageUrl: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Les rizières en terrasses de Tegallalang offrent un paysage agricole d'une beauté époustouflante.",
      videoUrl: null,
      visitDate: new Date('2024-03-20'),
      gallery: null
    };

    const monkeyForest: Place = {
      id: this.currentPlaceId++,
      cityId: ubud.id,
      name: "Forêt des Singes",
      slug: "foret-singes",
      description: "Sanctuaire naturel au cœur d'Ubud.",
      imageUrl: "https://images.unsplash.com/photo-1580478354055-4091f4a2b5f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "La Forêt des Singes d'Ubud est un espace sacré où nature et spiritualité se rencontrent.",
      videoUrl: null,
      visitDate: new Date('2024-03-21'),
      gallery: null
    };

    // Jakarta place
    const monas: Place = {
      id: this.currentPlaceId++,
      cityId: jakarta.id,
      name: "Monument National (Monas)",
      slug: "monument-national",
      description: "Symbole de l'indépendance indonésienne.",
      imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      content: "Le Monument National de Jakarta symbolise la lutte pour l'indépendance de l'Indonésie.",
      videoUrl: null,
      visitDate: new Date('2024-04-15'),
      gallery: null
    };

    // Store all places
    this.places.set(eiffelTower.id, eiffelTower);
    this.places.set(louvre.id, louvre);
    this.places.set(sacreCoeur.id, sacreCoeur);
    this.places.set(tourDuo.id, tourDuo);
    this.places.set(citesSciences.id, citesSciences);
    this.places.set(ruesParis.id, ruesParis);
    this.places.set(hippodromeParis.id, hippodromeParis);
    this.places.set(bordSeine.id, bordSeine);
    this.places.set(placeComedieBordeaux.id, placeComedieBordeaux);
    this.places.set(bordEure.id, bordEure);
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
      placeId: eiffelTower.id,
      title: "Montée au sommet de la Tour Eiffel",
      content: "Une ascension inoubliable jusqu'au sommet de la Dame de Fer, avec une vue panoramique sur tout Paris. L'émotion est intense lorsqu'on découvre la capitale française depuis cette hauteur mythique.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      slug: "montee-tour-eiffel",
      publishedAt: new Date('2024-01-15')
    };

    const adventure2: Adventure = {
      id: this.currentAdventureId++,
      placeId: louvre.id,
      title: "À la découverte de la Joconde",
      content: "Rencontre avec le sourire le plus célèbre du monde au cœur du Louvre. Une expérience artistique unique dans les couloirs chargés d'histoire du plus grand musée du monde.",
      imageUrl: "/images/IMG_20250603_151423.jpg",
      slug: "decouverte-joconde-louvre",
      publishedAt: new Date('2024-01-16')
    };

    const adventure3: Adventure = {
      id: this.currentAdventureId++,
      placeId: sacreCoeur.id,
      title: "Lever de soleil depuis Montmartre",
      content: "Un réveil aux aurores pour admirer Paris qui s'éveille depuis les marches du Sacré-Cœur. Les premiers rayons du soleil illuminent la ville dans une atmosphère magique et paisible.",
      imageUrl: "/images/IMG_20250516_164453.jpg",
      slug: "lever-soleil-montmartre",
      publishedAt: new Date('2024-01-17')
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
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
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
    for (const continent of this.continents.values()) {
      if (continent.slug === slug) {
        return continent;
      }
    }
    return undefined;
  }

  // Country methods
  async getCountriesByContinent(continentId: number): Promise<Country[]> {
    return Array.from(this.countries.values()).filter(
      country => country.continentId === continentId
    );
  }

  async getCountryBySlug(slug: string): Promise<Country | undefined> {
    for (const country of this.countries.values()) {
      if (country.slug === slug) {
        return country;
      }
    }
    return undefined;
  }

  // City methods
  async getCitiesByCountry(countryId: number): Promise<City[]> {
    return Array.from(this.cities.values()).filter(
      city => city.countryId === countryId
    );
  }

  async getCityBySlug(slug: string): Promise<City | undefined> {
    for (const city of this.cities.values()) {
      if (city.slug === slug) {
        return city;
      }
    }
    return undefined;
  }

  // Place methods
  async getPlacesByCity(cityId: number): Promise<Place[]> {
    return Array.from(this.places.values()).filter(
      place => place.cityId === cityId
    );
  }

  async getPlaceBySlug(slug: string): Promise<Place | undefined> {
    for (const place of this.places.values()) {
      if (place.slug === slug) {
        return place;
      }
    }
    return undefined;
  }

  // Adventure methods
  async getRecentAdventures(limit: number = 3): Promise<Adventure[]> {
    return Array.from(this.adventures.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit);
  }

  async getAdventuresByPlace(placeId: number): Promise<Adventure[]> {
    return Array.from(this.adventures.values()).filter(
      adventure => adventure.placeId === placeId
    );
  }
}

export const storage = new MemStorage();