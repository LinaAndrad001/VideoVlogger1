// Static data for deployment without backend
export interface TravelStats {
  countriesVisited: number;
  citiesExplored: number;
  videosCreated: number;
}

export interface SocialLinks {
  instagram: string;
  youtube: string;
  tiktok: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface TravelerInfo {
  name: string;
  tagline: string;
  bio: string;
  joinDate: string;
}

export interface Adventure {
  id: number;
  placeId: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string | null;
  date: string;
}

export interface Place {
  id: number;
  cityId: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  coordinates: string | null;
  bestTime: string | null;
  activities: string[] | null;
  gallery: string[] | null;
}

export interface City {
  id: number;
  countryId: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  population: number | null;
  founded: string | null;
  climate: string | null;
}

export interface Country {
  id: number;
  continentId: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  capital: string | null;
  language: string | null;
  currency: string | null;
}

export interface Continent {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  countries?: number;
}

// Static data
export const travelStats: TravelStats = {
  countriesVisited: 6,
  citiesExplored: 14,
  videosCreated: 21
};

export const socialLinks: SocialLinks = {
  instagram: "https://instagram.com/voyageur",
  youtube: "https://youtube.com/@voyageur",
  tiktok: "https://tiktok.com/@voyageur"
};

export const contactInfo: ContactInfo = {
  email: "contact@monvlog.com",
  location: "Paris, France"
};

export const travelerInfo: TravelerInfo = {
  name: "Moi, c'est Lina.",
  tagline: "Exploratrice de cultures et créatrice de souvenirs",
  bio: "Passionnée de voyage depuis plus de 5 ans, je parcours le monde pour découvrir de nouvelles cultures, goûter des saveurs authentiques et partager mes aventures avec vous. De l'Europe mystique à l'Asie exotique, chaque destination raconte une histoire unique.",
  joinDate: "2019-03-15"
};

export const continents: Continent[] = [
  {
    id: 1,
    name: "Europe",
    slug: "europe",
    description: "Continent riche en histoire, culture et diversité architecturale",
    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1080&fit=crop&q=80",
    countries: 13
  },
  {
    id: 2,
    name: "Asie",
    slug: "asie",
    description: "Terre de contrastes entre tradition ancestrale et modernité",
    imageUrl: "/images/IMG_20231228_141336.jpg",
    countries: 3
  }
];

export const countries: Country[] = [
  // Europe
  {
    id: 1,
    continentId: 1,
    name: "France",
    slug: "france",
    description: "Pays de l'art de vivre, de la gastronomie et du patrimoine",
    imageUrl: "/images/IMG_20250125_132103.jpg",
    capital: "Paris",
    language: "Français",
    currency: "Euro"
  },
  {
    id: 2,
    continentId: 1,
    name: "Italie",
    slug: "italie",
    description: "Berceau de la Renaissance et de la dolce vita",
    imageUrl: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
    capital: "Rome",
    language: "Italien",
    currency: "Euro"
  },
  {
    id: 3,
    continentId: 1,
    name: "Grèce",
    slug: "grece",
    description: "Pays des dieux antiques et des îles paradisiaques",
    imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258095?w=800&h=600&fit=crop",
    capital: "Athènes",
    language: "Grec",
    currency: "Euro"
  },
  {
    id: 7,
    continentId: 1,
    name: "Portugal",
    slug: "portugal",
    description: "Pays des navigateurs aux paysages authentiques et à l'hospitalité légendaire",
    imageUrl: "/images/IMG_20240804_111629.jpg",
    capital: "Lisbonne",
    language: "Portugais",
    currency: "Euro"
  },
  {
    id: 5,
    continentId: 1,
    name: "Espagne",
    slug: "espagne",
    description: "Terre de flamenco, d'art et de passion méditerranéenne",
    imageUrl: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=800&h=600&fit=crop",
    capital: "Madrid",
    language: "Espagnol",
    currency: "Euro"
  },
  {
    id: 6,
    continentId: 1,
    name: "Allemagne",
    slug: "allemagne",
    description: "Pays de châteaux, de forêts et d'innovation technologique",
    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    capital: "Berlin",
    language: "Allemand",
    currency: "Euro"
  },
  {
    id: 8,
    continentId: 1,
    name: "Suisse",
    slug: "suisse",
    description: "Pays des Alpes, des lacs cristallins et du chocolat",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    capital: "Berne",
    language: "Français/Allemand/Italien",
    currency: "Franc suisse"
  },
  {
    id: 9,
    continentId: 1,
    name: "Autriche",
    slug: "autriche",
    description: "Terre de Mozart, des valses et des paysages alpins",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    capital: "Vienne",
    language: "Allemand",
    currency: "Euro"
  },
  {
    id: 10,
    continentId: 1,
    name: "Croatie",
    slug: "croatie",
    description: "Perle de l'Adriatique aux eaux cristallines",
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
    capital: "Zagreb",
    language: "Croate",
    currency: "Euro"
  },
  {
    id: 11,
    continentId: 1,
    name: "Slovénie",
    slug: "slovenie",
    description: "Joyau alpin entre l'Italie et l'Autriche",
    imageUrl: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=800&h=600&fit=crop",
    capital: "Ljubljana",
    language: "Slovène",
    currency: "Euro"
  },
  {
    id: 12,
    continentId: 1,
    name: "Serbie",
    slug: "serbie",
    description: "Carrefour des Balkans riche en culture slave",
    imageUrl: "https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=800&h=600&fit=crop",
    capital: "Belgrade",
    language: "Serbe",
    currency: "Dinar serbe"
  },
  {
    id: 13,
    continentId: 1,
    name: "Bulgarie",
    slug: "bulgarie",
    description: "Pays des roses et des monastères orthodoxes",
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    capital: "Sofia",
    language: "Bulgare",
    currency: "Lev bulgare"
  },
  {
    id: 14,
    continentId: 1,
    name: "Roumanie",
    slug: "roumanie",
    description: "Terre de Dracula et des Carpates mystérieuses",
    imageUrl: "https://images.unsplash.com/photo-1526404227981-2b36326bd9ba?w=800&h=600&fit=crop",
    capital: "Bucarest",
    language: "Roumain",
    currency: "Leu roumain"
  },
  // Asie
  {
    id: 4,
    continentId: 2,
    name: "Turquie",
    slug: "turquie",
    description: "Pont entre l'Europe et l'Asie, riche patrimoine historique et paysages variés",
    imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    capital: "Ankara",
    language: "Turc",
    currency: "Livre turque"
  }
];

export const cities: City[] = [
  // France
  {
    id: 1,
    countryId: 1,
    name: "Paris",
    slug: "paris",
    description: "Ville Lumière, capitale de l'amour et des arts",
    imageUrl: "/images/IMG_20250228_175111.jpg",
    population: 2161000,
    founded: "IIIe siècle av. J.-C.",
    climate: "Océanique"
  },
  {
    id: 2,
    countryId: 1,
    name: "Bordeaux",
    slug: "bordeaux",
    description: "Capitale mondiale du vin et joyau architectural",
    imageUrl: "/images/bordeauxrue02.jpg",
    population: 257804,
    founded: "IIIe siècle av. J.-C.",
    climate: "Océanique"
  },
  {
    id: 3,
    countryId: 1,
    name: "Ecluzelles",
    slug: "ecluzelles",
    description: "Charmant village au bord de l'eau et nature préservée",
    imageUrl: "/images/IMG_20240721_134557.jpg",
    population: 850,
    founded: "XIe siècle",
    climate: "Océanique"
  },
  {
    id: 15,
    countryId: 1,
    name: "Brest",
    slug: "brest",
    description: "Port de Bretagne face à l'océan Atlantique",
    imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop",
    population: 139456,
    founded: "1240",
    climate: "Océanique"
  },
  {
    id: 16,
    countryId: 1,
    name: "Rennes",
    slug: "rennes",
    description: "Capitale bretonne au patrimoine médiéval",
    imageUrl: "https://images.unsplash.com/photo-1566552788734-36d9b0d1e9ae?w=800&h=600&fit=crop",
    population: 217728,
    founded: "VIe siècle",
    climate: "Océanique"
  },
  {
    id: 13,
    countryId: 1,
    name: "Chartres",
    slug: "chartres",
    description: "Ville historique célèbre pour sa cathédrale gothique",
    imageUrl: "/images/Screenshot_2023-12-19-14-24-58-392_com.google.android.apps.photos_1750605554821.jpg",
    population: 38000,
    founded: "Antiquité",
    climate: "Océanique tempéré"
  },
  // Italie
  {
    id: 4,
    countryId: 2,
    name: "Rome",
    slug: "rome",
    description: "Ville Éternelle aux vestiges de l'Empire romain",
    imageUrl: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
    population: 2870500,
    founded: "753 av. J.-C.",
    climate: "Méditerranéen"
  },
  {
    id: 5,
    countryId: 2,
    name: "Venise",
    slug: "venise",
    description: "Cité des Doges aux canaux romantiques",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
    population: 261905,
    founded: "421",
    climate: "Subtropical humide"
  },
  // Grèce
  {
    id: 6,
    countryId: 3,
    name: "Athènes",
    slug: "athenes",
    description: "Berceau de la démocratie et de la philosophie",
    imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258095?w=800&h=600&fit=crop",
    population: 664046,
    founded: "3000 av. J.-C.",
    climate: "Méditerranéen"
  },
  {
    id: 7,
    countryId: 3,
    name: "Santorin",
    slug: "santorin",
    description: "Île volcanique aux couchers de soleil légendaires",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    population: 15550,
    founded: "1600 av. J.-C.",
    climate: "Méditerranéen"
  },
  {
    id: 8,
    countryId: 3,
    name: "Mykonos",
    slug: "mykonos",
    description: "Île cosmopolite aux maisons blanches et moulins",
    imageUrl: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop",
    population: 10134,
    founded: "Antiquité",
    climate: "Méditerranéen"
  },
  // Turquie
  {
    id: 9,
    countryId: 4,
    name: "Istanbul",
    slug: "istanbul",
    description: "Ville transcontinentale au carrefour de l'Europe et de l'Asie",
    imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    population: 15462452,
    founded: "660 av. J.-C.",
    climate: "Subtropical humide"
  },
  {
    id: 10,
    countryId: 4,
    name: "Antalya",
    slug: "antalya",
    description: "Perle de la Riviera turque aux plages méditerranéennes",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    population: 2548308,
    founded: "150 av. J.-C.",
    climate: "Méditerranéen"
  },
  {
    id: 11,
    countryId: 4,
    name: "Kas",
    slug: "kas",
    description: "Charmant village côtier aux eaux turquoise",
    imageUrl: "/images/IMG_20231225_140022_1750602067266.jpg",
    population: 8000,
    founded: "4e siècle av. J.-C.",
    climate: "Méditerranéen"
  },
  {
    id: 12,
    countryId: 4,
    name: "Patara",
    slug: "patara",
    description: "Site antique avec une plage de sable infinie",
    imageUrl: "/images/IMG_20231230_140744_1750603034996.jpg",
    population: 1000,
    founded: "7e siècle av. J.-C.",
    climate: "Méditerranéen"
  }
];

export const places: Place[] = [
  // Paris
  {
    id: 1,
    cityId: 1,
    name: "Tour Eiffel",
    slug: "tour-eiffel",
    description: "Symbole iconique de Paris et monument le plus visité au monde",
    imageUrl: "/images/IMG_20231202_074800.jpg",
    coordinates: "48.8584, 2.2945",
    bestTime: "Soirée pour l'illumination",
    activities: ["Photos", "Vue panoramique", "Histoire"],
    gallery: null
  },
  {
    id: 2,
    cityId: 1,
    name: "Musée du Louvre",
    slug: "musee-louvre",
    description: "Plus grand musée du monde et palais historique",
    imageUrl: "/images/IMG_20250603_145401_1750596752254.jpg",
    coordinates: "48.8606, 2.3376",
    bestTime: "Matinée",
    activities: ["Visite culturelle", "Art", "Histoire"],
    gallery: null
  },
  {
    id: 50,
    cityId: 1,
    name: "Sacré-Cœur",
    slug: "sacre-coeur",
    description: "Basilique emblématique de Montmartre offrant une vue panoramique sur Paris",
    imageUrl: "/images/IMG_20250516_164453_1750598866707.jpg",
    coordinates: "48.8867, 2.3431",
    bestTime: "Fin d'après-midi",
    activities: ["Visite religieuse", "Vue panoramique", "Montmartre"],
    gallery: null
  },
  {
    id: 51,
    cityId: 1,
    name: "Tour Duo",
    slug: "tour-duo",
    description: "Gratte-ciel moderne symbolisant le Paris contemporain",
    imageUrl: "/images/IMG_20231114_002800_619.jpg",
    coordinates: "48.8294, 2.3677",
    bestTime: "Soirée",
    activities: ["Architecture moderne", "Vue urbaine", "Photos nocturnes"],
    gallery: null
  },
  {
    id: 52,
    cityId: 1,
    name: "Bord de Seine",
    slug: "bord-de-seine",
    description: "Promenade paisible le long des quais de Seine",
    imageUrl: "/images/IMG_20240901_172738.jpg",
    coordinates: "48.8566, 2.3522",
    bestTime: "Matinée",
    activities: ["Promenade", "Détente", "Vue sur les monuments"],
    gallery: null
  },
  {
    id: 91,
    cityId: 1,
    name: "Opera Garnier",
    slug: "opera-garnier",
    description: "Palais de l'Opéra, joyau architectural du Second Empire parisien",
    imageUrl: "/images/IMG_20200721_133005_1751713966685.jpg",
    coordinates: "48.8720, 2.3319",
    bestTime: "Après-midi",
    activities: ["Architecture", "Culture", "Visite guidée", "Photographie"],
    gallery: null
  },
  {
    id: 53,
    cityId: 1,
    name: "Arc de Triomphe",
    slug: "arc-de-triomphe",
    description: "Monument emblématique dédié aux victoires de Napoléon",
    imageUrl: "/images/arc-triomphe-1.jpg",
    coordinates: "48.8738, 2.2950",
    bestTime: "Soirée",
    activities: ["Histoire militaire", "Vue panoramique", "Champs-Élysées"],
    gallery: null
  },
  {
    id: 74,
    cityId: 1,
    name: "Hippodrome de Vincennes",
    slug: "hippodrome-vincennes",
    description: "Temple des courses de trot, moments en famille aux tribunes",
    imageUrl: "/images/Screenshot_2024-02-03-21-02-45-316_com.miui.gallery_1750604037540.jpg",
    coordinates: "48.8205, 2.4377",
    bestTime: "Après-midi",
    activities: ["Courses hippiques", "Famille", "Spectacle sportif"],
    gallery: null
  },
  {
    id: 76,
    cityId: 1,
    name: "Restaurant japonais parisien",
    slug: "restaurant-japonais",
    description: "Découverte de la cuisine japonaise authentique au cœur de Paris",
    imageUrl: "/images/IMG_20240217_193839_1750605743424.jpg",
    coordinates: "48.8566, 2.3522",
    bestTime: "Soirée",
    activities: ["Gastronomie japonaise", "Sushi", "Ramen"],
    gallery: null
  },
  {
    id: 77,
    cityId: 1,
    name: "Musée Aquarium",
    slug: "musee-aquarium",
    description: "Découverte fascinante du monde marin et de l'architecture Art déco",
    imageUrl: "/images/IMG_20250507_150706_1751373924943.jpg",
    coordinates: "48.8584, 2.2945",
    bestTime: "Après-midi",
    activities: ["Visite marine", "Architecture", "Sciences naturelles"],
    gallery: null
  },

  {
    id: 54,
    cityId: 1,
    name: "Conciergerie",
    slug: "conciergerie",
    description: "Ancienne prison royale et témoin de l'histoire de France",
    imageUrl: "/images/conciergerie-1.jpg",
    coordinates: "48.8555, 2.3454",
    bestTime: "Après-midi",
    activities: ["Histoire royale", "Architecture gothique", "Île de la Cité"],
    gallery: null
  },
  {
    id: 55,
    cityId: 1,
    name: "Rues de Paris",
    slug: "rues-de-paris",
    description: "Exploration authentique des quartiers parisiens",
    imageUrl: "/images/rues-paris-1.jpg",
    coordinates: "48.8566, 2.3522",
    bestTime: "Toute la journée",
    activities: ["Promenade urbaine", "Architecture parisienne", "Vie locale"],
    gallery: null
  },
  {
    id: 56,
    cityId: 1,
    name: "Institut de France",
    slug: "institut-de-france",
    description: "Prestigieuse institution française regroupant les cinq Académies",  
    imageUrl: "/images/institut-france-1.jpg",
    coordinates: "48.8570, 2.3376",
    bestTime: "Après-midi",
    activities: ["Architecture classique", "Histoire académique", "Patrimoine français"],
    gallery: null
  },
  // Bordeaux
  {
    id: 3,
    cityId: 2,
    name: "Place de la Comédie",
    slug: "place-de-la-comedie",
    description: "Cœur historique de Bordeaux et son grand théâtre",
    imageUrl: "/images/bordeauxrue02.jpg",
    coordinates: "44.8414, -0.5719",
    bestTime: "Après-midi",
    activities: ["Architecture", "Shopping", "Culture"],
    gallery: null
  },
  // Ecluzelles
  {
    id: 4,
    cityId: 3,
    name: "Bord de l'Eure",
    slug: "bord-de-leure",
    description: "Promenade paisible au bord de la rivière",
    imageUrl: "/images/IMG_20240721_125649_1750606556615.jpg",
    coordinates: "48.9167, 1.6833",
    bestTime: "Matinée",
    activities: ["Nature", "Promenade", "Détente"],
    gallery: null
  },
  // Chartres
  {
    id: 75,
    cityId: 13,
    name: "Campagne de Chartres",
    slug: "campagne-chartres",
    description: "Paysages bucoliques et nature préservée autour de Chartres",
    imageUrl: "/images/Screenshot_2023-12-19-14-24-58-392_com.google.android.apps.photos_1750606521887.jpg",
    coordinates: "48.4469, 1.4879",
    bestTime: "Printemps",
    activities: ["Nature", "Randonnée", "Agriculture"],
    gallery: null
  },
  // Rome
  {
    id: 5,
    cityId: 4,
    name: "Colisée",
    slug: "colisee",
    description: "Amphithéâtre antique symbole de Rome",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    coordinates: "41.8902, 12.4922",
    bestTime: "Matinée",
    activities: ["Visite historique", "Photos", "Gladiateurs"],
    gallery: null
  },
  {
    id: 6,
    cityId: 4,
    name: "Vatican",
    slug: "vatican",
    description: "Cité sainte et ses trésors artistiques",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    coordinates: "41.9029, 12.4534",
    bestTime: "Matinée",
    activities: ["Chapelle Sixtine", "Musées", "Saint-Pierre"],
    gallery: null
  },
  // Venise
  {
    id: 7,
    cityId: 5,
    name: "Place Saint-Marc",
    slug: "place-saint-marc",
    description: "Cœur de Venise et joyau architectural",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
    coordinates: "45.4342, 12.3388",
    bestTime: "Lever du soleil",
    activities: ["Basilique", "Campanile", "Café historique"],
    gallery: null
  },
  // Athènes
  {
    id: 8,
    cityId: 6,
    name: "Acropole",
    slug: "acropole",
    description: "Citadelle antique dominant Athènes",
    imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258095?w=800&h=600&fit=crop",
    coordinates: "37.9755, 23.7348",
    bestTime: "Lever du soleil",
    activities: ["Parthénon", "Histoire antique", "Panorama"],
    gallery: null
  },
  // Santorin
  {
    id: 9,
    cityId: 7,
    name: "Oia",
    slug: "oia",
    description: "Village aux couchers de soleil magiques",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    coordinates: "36.4618, 25.3753",
    bestTime: "Coucher de soleil",
    activities: ["Coucher de soleil", "Photos", "Vin local"],
    gallery: null
  },
  {
    id: 10,
    cityId: 7,
    name: "Fira",
    slug: "fira",
    description: "Capitale perchée sur la caldeira",
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
    coordinates: "36.4138, 25.4318",
    bestTime: "Soirée",
    activities: ["Shopping", "Restaurants", "Musées"],
    gallery: null
  },
  // Mykonos
  {
    id: 11,
    cityId: 8,
    name: "Plages de Mykonos",
    slug: "plages-mykonos",
    description: "Plages cosmopolites aux eaux cristallines",
    imageUrl: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop",
    coordinates: "37.4467, 25.3289",
    bestTime: "Journée",
    activities: ["Plage", "Sports nautiques", "Beach clubs"],
    gallery: null
  },
  // Istanbul
  {
    id: 12,
    cityId: 9,
    name: "Sainte-Sophie",
    slug: "sainte-sophie",
    description: "Joyau architectural byzantin et ottoman",
    imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    coordinates: "41.0086, 28.9802",
    bestTime: "Matinée",
    activities: ["Architecture", "Histoire", "Spiritualité"],
    gallery: null
  },
  {
    id: 13,
    cityId: 9,
    name: "Grand Bazar",
    slug: "grand-bazar",
    description: "Marché couvert historique aux mille boutiques",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    coordinates: "41.0106, 28.9681",
    bestTime: "Après-midi",
    activities: ["Shopping", "Artisanat", "Thé turc"],
    gallery: null
  },
  // Antalya
  {
    id: 14,
    cityId: 10,
    name: "Vieille Ville Kaleiçi",
    slug: "kaleici",
    description: "Centre historique aux ruelles ottomanes",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    coordinates: "36.8841, 30.7056",
    bestTime: "Soirée",
    activities: ["Histoire", "Restaurants", "Port"],
    gallery: null
  },
  {
    id: 15,
    cityId: 10,
    name: "Plages d'Antalya",
    slug: "plages-antalya",
    description: "Côte méditerranéenne aux eaux cristallines",
    imageUrl: "https://images.unsplash.com/photo-1597149405940-64b3dc2ce4a7?w=800&h=600&fit=crop",
    coordinates: "36.8969, 30.7133",
    bestTime: "Journée",
    activities: ["Plage", "Natation", "Sports nautiques"],
    gallery: null
  },
  // Kas
  {
    id: 16,
    cityId: 11,
    name: "Port de Kas",
    slug: "port-kas",
    description: "Charmant port de pêche aux maisons colorées",
    imageUrl: "/images/IMG_20231226_134146_1750602086631.jpg",
    coordinates: "36.2021, 29.6417",
    bestTime: "Coucher de soleil",
    activities: ["Port", "Restaurants", "Plongée"],
    gallery: null
  },
  {
    id: 17,
    cityId: 11,
    name: "Plage de Kas",
    slug: "plage-kas",
    description: "Magnifique plage aux eaux cristallines avec vue sur les îles",
    imageUrl: "/images/IMG_20231228_155645_1750602086631.jpg",
    coordinates: "36.2021, 29.6417",
    bestTime: "Après-midi",
    activities: ["Plage", "Baignade", "Détente"],
    gallery: null
  },
  {
    id: 70,
    cityId: 11,
    name: "Vue panoramique de Kas",
    slug: "vue-panoramique-kas",
    description: "Points de vue spectaculaires sur la côte méditerranéenne",
    imageUrl: "/images/IMG_20231228_105901_1750602086631.jpg",
    coordinates: "36.2021, 29.6417",
    bestTime: "Matin",
    activities: ["Randonnée", "Photos", "Vue panoramique"],
    gallery: null
  },
  {
    id: 72,
    cityId: 11,
    name: "Gastronomie de Kas",
    slug: "gastronomie-kas",
    description: "Découverte des saveurs authentiques de la cuisine turque",
    imageUrl: "/images/IMG_20240101_190146_1750603939969.jpg",
    coordinates: "36.2021, 29.6417",
    bestTime: "Soirée",
    activities: ["Gastronomie", "Restaurants", "Culture locale"],
    gallery: null
  },
  {
    id: 73,
    cityId: 11,
    name: "Vie locale à Kas",
    slug: "vie-locale-kas",
    description: "Moments authentiques de la vie quotidienne dans le village",
    imageUrl: "/images/IMG_20240102_140933_1750603939969.jpg",
    coordinates: "36.2021, 29.6417",
    bestTime: "Journée",
    activities: ["Vie locale", "Détente", "Observation"],
    gallery: null
  },
  // Patara
  {
    id: 18,
    cityId: 12,
    name: "Plage de Patara",
    slug: "plage-patara",
    description: "Plage de sable infinie et protégée, dunes spectaculaires",
    imageUrl: "/images/patara/dunes1.jpg",
    coordinates: "36.2749, 29.3181",
    bestTime: "Après-midi",
    activities: ["Dunes", "Nature", "Plage"],
    gallery: null
  }
];

export const adventures: Adventure[] = [
  // Tour Eiffel - 4 photos
  {
    id: 1,
    placeId: 1,
    title: "Visite de jour à la Tour Eiffel",
    description: "Découverte de la Dame de Fer sous le soleil de Paris",
    imageUrl: "/images/IMG_20231202_120332.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  {
    id: 4,
    placeId: 1,
    title: "Perspective unique Tour Eiffel",
    description: "Un angle différent de la Dame de Fer",
    imageUrl: "/images/IMG_20231202_120339.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  {
    id: 5,
    placeId: 1,
    title: "Selfie à la Tour Eiffel",
    description: "Moment de complicité devant le monument emblématique",
    imageUrl: "/images/Screenshot_2024-02-03-20-57-13-281_com.miui.gallery.jpg",
    videoUrl: null,
    date: "2024-02-03"
  },
  {
    id: 6,
    placeId: 1,
    title: "Souvenirs hivernaux Tour Eiffel",
    description: "Moment précieux en hiver parisien",
    imageUrl: "/images/Screenshot_2024-02-03-20-57-36-247_com.miui.gallery.jpg",
    videoUrl: null,
    date: "2024-02-03"
  },
  // Arc de Triomphe - 2 photos
  {
    id: 7,
    placeId: 53,
    title: "Arc de Triomphe en soirée",
    description: "L'Arc de Triomphe illuminé dans la nuit parisienne",
    imageUrl: "/images/IMG_20231202_180547.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  {
    id: 8,
    placeId: 53,
    title: "Majesté de l'Arc de Triomphe",
    description: "Vue rapprochée du monument aux victoires",
    imageUrl: "/images/IMG_20231202_180851.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  // Conciergerie - 2 photos
  {
    id: 9,
    placeId: 54,
    title: "Architecture de la Conciergerie",
    description: "Découverte de l'ancienne prison royale",
    imageUrl: "/images/IMG_20250125_132103.jpg",
    videoUrl: null,
    date: "2025-01-25"
  },
  {
    id: 10,
    placeId: 54,
    title: "Moment de partage Conciergerie",
    description: "Exploration de l'histoire de France en duo",
    imageUrl: "/images/Screenshot_20231001_224228.jpg",
    videoUrl: null,
    date: "2023-10-01"
  },
  // Rues de Paris - 12 photos
  {
    id: 11,
    placeId: 55,
    title: "Champs-Élysées illuminés",
    description: "Promenade nocturne sur la plus belle avenue du monde",
    imageUrl: "/images/IMG_20231202_175052.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  {
    id: 12,
    placeId: 55,
    title: "Bateau Les Canards de Paris",
    description: "Découverte originale de Paris depuis la Seine",
    imageUrl: "/images/IMG_20240901_174257.jpg",
    videoUrl: null,
    date: "2024-09-01"
  },
  {
    id: 13,
    placeId: 55,
    title: "Quartier résidentiel parisien",
    description: "Exploration des rues authentiques de Paris",
    imageUrl: "/images/IMG_20240919_150619.jpg",
    videoUrl: null,
    date: "2024-09-19"
  },
  {
    id: 14,
    placeId: 55,
    title: "Gastronomie parisienne",
    description: "Dégustation de spécialités dans un restaurant parisien",
    imageUrl: "/images/IMG_20241117_200216.jpg",
    videoUrl: null,
    date: "2024-11-17"
  },
  {
    id: 2,
    placeId: 5,
    title: "Dans l'arène du Colisée",
    description: "Sur les traces des gladiateurs romains",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    videoUrl: null,
    date: "2024-02-20"
  },
  {
    id: 3,
    placeId: 12,
    title: "Méditation au Temple Sensoji",
    description: "Découverte spirituelle au cœur de Tokyo",
    imageUrl: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop",
    videoUrl: null,
    date: "2024-01-10"
  },
  // Aventures au Louvre
  {
    id: 26,
    placeId: 2,
    title: "Découverte de la pyramide du Louvre",
    description: "Vue extérieure iconique du musée du Louvre avec sa célèbre pyramide de verre",
    imageUrl: "/images/IMG_20250603_145401_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 27,
    placeId: 2,
    title: "Cour Napoléon et ses environs",
    description: "Promenade dans les cours extérieures du palais royal",
    imageUrl: "/images/IMG_20250603_154848_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 28,
    placeId: 2,
    title: "Le Louvre au coucher du soleil",
    description: "Magnifique façade du Louvre illuminée par les derniers rayons du jour",
    imageUrl: "/images/IMG_20250603_204014_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 29,
    placeId: 2,
    title: "Architecture classique du Louvre",
    description: "Détails de l'architecture française classique du palais",
    imageUrl: "/images/IMG_20250603_204042_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 30,
    placeId: 2,
    title: "Le Sacre de Napoléon par David",
    description: "Chef-d'œuvre de Jacques-Louis David représentant le couronnement de Napoléon",
    imageUrl: "/images/WhatsApp Image 2025-06-18 à 14.19.35_564e5695_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 31,
    placeId: 2,
    title: "Plafonds dorés des salles d'apparat",
    description: "Somptueux plafonds peints et dorés des appartements royaux",
    imageUrl: "/images/WhatsApp Image 2025-06-18 à 14.19.39_e3f2383f_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 32,
    placeId: 2,
    title: "Collections antiques du Louvre",
    description: "Sculptures antiques dans les galeries de marbre du musée",
    imageUrl: "/images/WhatsApp Image 2025-06-18 à 14.19.42_d8056c8a_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  // Aventures au Sacré-Cœur
  {
    id: 33,
    placeId: 50,
    title: "Basilique du Sacré-Cœur et ses visiteurs",
    description: "Vue emblématique de la basilique avec la foule sur les marches de Montmartre",
    imageUrl: "/images/IMG_20250516_164453_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
  },
  {
    id: 34,
    placeId: 50,
    title: "Intérieur somptueux du Sacré-Cœur",
    description: "Architecture intérieure magnifique avec ses colonnes et vitraux colorés",
    imageUrl: "/images/SL-5927_29_31_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
  },
  {
    id: 35,
    placeId: 50,
    title: "Moment personnel au Sacré-Cœur",
    description: "Pause détente devant la basilique emblématique de Montmartre",
    imageUrl: "/images/AirBrush_20250516185456_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
  },
  // Aventures à Kas
  {
    id: 36,
    placeId: 16,
    title: "Centre animé de Kas",
    description: "Promenade dans les rues du charmant village côtier avec ses boutiques locales",
    imageUrl: "/images/IMG_20231226_134146_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-26"
  },
  {
    id: 37,
    placeId: 16,
    title: "Portrait à Kas",
    description: "Moment personnel dans le décor authentique du village méditerranéen",
    imageUrl: "/images/IMG_20231228_105233_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-28"
  },
  {
    id: 38,
    placeId: 70,
    title: "Vue panoramique sur la côte",
    description: "Point de vue spectaculaire sur la Méditerranée et les montagnes",
    imageUrl: "/images/IMG_20231228_105901_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-28"
  },
  {
    id: 39,
    placeId: 17,
    title: "Moments en famille à la plage",
    description: "Détente et complicité sur la magnifique plage de Kas",
    imageUrl: "/images/IMG_20231228_142307_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-28"
  },
  {
    id: 40,
    placeId: 17,
    title: "Paradis de la plage de Kas",
    description: "Eaux cristallines et plage de sable fin avec vue sur les îles",
    imageUrl: "/images/IMG_20231228_155645_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-28"
  },
  {
    id: 41,
    placeId: 16,
    title: "Saveurs locales de Kas",
    description: "Dégustation de la cuisine turque authentique dans un restaurant local",
    imageUrl: "/images/IMG_20231228_164736_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-28"
  },
  {
    id: 42,
    placeId: 16,
    title: "Site historique près de Kas",
    description: "Exploration des vestiges antiques dans les environs du village",
    imageUrl: "/images/IMG_20231229_180636_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-29"
  },
  {
    id: 43,
    placeId: 16,
    title: "Petit-déjeuner matinal à Kas",
    description: "Moments de partage autour d'un petit-déjeuner turc traditionnel",
    imageUrl: "/images/IMG_20231230_084948_1750602086631.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  // Aventures à Patara
  {
    id: 44,
    placeId: 18,
    title: "Méditation sur les dunes de Patara",
    description: "Moment de détente et de contemplation sur les immenses dunes de sable",
    imageUrl: "/images/patara/dunes1.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  {
    id: 45,
    placeId: 18,
    title: "Complicité familiale sur les dunes",
    description: "Moments de partage en famille sur les dunes dorées de Patara",
    imageUrl: "/images/patara/dunes2.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  {
    id: 46,
    placeId: 18,
    title: "Liberté sur les dunes infinies",
    description: "Expression de joie et de liberté face à l'immensité du paysage",
    imageUrl: "/images/patara/dunes3.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  {
    id: 47,
    placeId: 18,
    title: "Portrait en couple à Patara",
    description: "Moment romantique sur les dunes avec vue sur les montagnes",
    imageUrl: "/images/patara/dunes4.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  {
    id: 48,
    placeId: 18,
    title: "Contemplation depuis les hauteurs",
    description: "Vue paisible sur le paysage naturel préservé de Patara",
    imageUrl: "/images/patara/dunes5.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  {
    id: 49,
    placeId: 18,
    title: "Nature sauvage de Patara",
    description: "Nature préservée avec dunes et végétation méditerranéenne",
    imageUrl: "/images/patara/dunes6.jpg",
    videoUrl: null,
    date: "2023-12-30"
  },
  // Nouvelles aventures pour Vue panoramique de Kas
  {
    id: 50,
    placeId: 70,
    title: "Contemplation face à la Méditerranée",
    description: "Moment de sérénité avec vue panoramique sur les îles turques",
    imageUrl: "/images/IMG_20231231_144651_1750603108151.jpg",
    videoUrl: null,
    date: "2023-12-31"
  },
  {
    id: 51,
    placeId: 70,
    title: "Coucher de soleil depuis Kas",
    description: "Lumière dorée sur la mer Méditerranée et les îles au loin",
    imageUrl: "/images/IMG_20231231_150429(1)_1750603108152.jpg",
    videoUrl: null,
    date: "2023-12-31"
  },
  {
    id: 52,
    placeId: 70,
    title: "Portrait en famille à Kas",
    description: "Moment de bonheur partagé avec vue sur le paysage méditerranéen",
    imageUrl: "/images/IMG_20240103_095825_1750603939969.jpg",
    videoUrl: null,
    date: "2024-01-03"
  },
  // Aventures gastronomiques à Kas
  {
    id: 53,
    placeId: 72,
    title: "Dessert turc traditionnel",
    description: "Dégustation d'un délicieux gâteau au chocolat, spécialité locale",
    imageUrl: "/images/IMG_20240101_190146_1750603939969.jpg",
    videoUrl: null,
    date: "2024-01-01"
  },
  {
    id: 54,
    placeId: 72,
    title: "Repas de famille turc",
    description: "Découverte de la cuisine authentique turque dans un restaurant local",
    imageUrl: "/images/IMG_20240103_133714_1750603939969.jpg",
    videoUrl: null,
    date: "2024-01-03"
  },
  {
    id: 55,
    placeId: 72,
    title: "Moment café en famille",
    description: "Partage d'un moment convivial autour d'un café turc",
    imageUrl: "/images/Screenshot_2024-02-03-20-59-38-180_com.miui.gallery_1750603939969.jpg",
    videoUrl: null,
    date: "2024-02-03"
  },
  // Aventure vie locale à Kas
  {
    id: 56,
    placeId: 73,
    title: "Chien endormi à Kas",
    description: "Scène amusante de la vie quotidienne dans les rues du village",
    imageUrl: "/images/IMG_20240102_140933_1750603939969.jpg",
    videoUrl: null,
    date: "2024-01-02"
  },
  // Aventures à l'Hippodrome de Vincennes
  {
    id: 57,
    placeId: 74,
    title: "Jour de courses à Vincennes",
    description: "Moments en famille aux tribunes de l'hippodrome lors des courses de trot",
    imageUrl: "/images/Screenshot_2024-02-03-21-02-45-316_com.miui.gallery_1750604037540.jpg",
    videoUrl: null,
    date: "2024-02-03"
  },
  {
    id: 58,
    placeId: 74,
    title: "Selfie familial aux courses",
    description: "Souvenir de famille dans l'ambiance festive de l'hippodrome",
    imageUrl: "/images/Screenshot_2024-02-03-21-02-54-610_com.miui.gallery_1750604037540.jpg",
    videoUrl: null,
    date: "2024-02-03"
  },
  // Nouvelles aventures Tour Eiffel
  {
    id: 59,
    placeId: 1,
    title: "Tour Eiffel majestueuse",
    description: "Vue impressionnante de la Dame de Fer dans toute sa splendeur",
    imageUrl: "/images/IMG_20231202_120333_1750605502381.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  {
    id: 60,
    placeId: 1,
    title: "Portrait hivernal près de la Tour Eiffel",
    description: "Moment magique en hiver avec la tour en arrière-plan",
    imageUrl: "/images/IMG_20231202_120936_1750605502381.jpg",
    videoUrl: null,
    date: "2023-12-02"
  },
  // Aventures à Ecluzelles enrichies
  {
    id: 61,
    placeId: 52,
    title: "Promenade dans les rues de Paris",
    description: "Découverte des quartiers authentiques de la capitale",
    imageUrl: "/images/IMG_20240901_174257.jpg",
    videoUrl: null,
    date: "2024-09-01"
  },
  {
    id: 62,
    placeId: 4,
    title: "Village pittoresque d'Ecluzelles",
    description: "Charme authentique du patrimoine rural français",
    imageUrl: "/images/IMG_20240721_134557.jpg",
    videoUrl: null,
    date: "2024-07-21"
  },
  {
    id: 63,
    placeId: 4,
    title: "Portrait au bord de l'Eure",
    description: "Moment de sérénité face aux reflets de la rivière",
    imageUrl: "/images/IMG_20240721_125649_1750606556615.jpg",
    videoUrl: null,
    date: "2024-07-21"
  },
  {
    id: 64,
    placeId: 4,
    title: "Petite fille en robe blanche",
    description: "Innocence et nature se rencontrent au bord de l'eau",
    imageUrl: "/images/IMG_20240721_125659_1750606556615.jpg",
    videoUrl: null,
    date: "2024-07-21"
  },
  {
    id: 65,
    placeId: 4,
    title: "Contemplation familiale",
    description: "Moments de calme partagés dans un cadre naturel préservé",
    imageUrl: "/images/IMG_20240721_140610_1750606556615.jpg",
    videoUrl: null,
    date: "2024-07-21"
  },
  {
    id: 66,
    placeId: 4,
    title: "Photo de famille au bord de l'Eure",
    description: "Souvenir précieux dans ce cadre bucolique d'Ecluzelles",
    imageUrl: "/images/IMG_20240721_142045_1750606556615.jpg",
    videoUrl: null,
    date: "2024-07-21"
  },
  // Aventures dans la campagne de Chartres
  {
    id: 65,
    placeId: 75,
    title: "Champs de colza en fleur",
    description: "Immersion dans les champs dorés de la campagne chartraine",
    imageUrl: "/images/Screenshot_2023-12-19-14-24-58-392_com.google.android.apps.photos_1750605554821.jpg",
    videoUrl: null,
    date: "2023-12-19"
  },
  {
    id: 66,
    placeId: 75,
    title: "Grand-père et l'agneau",
    description: "Moment touchant entre grand-père et son petit compagnon à quatre pattes",
    imageUrl: "/images/Screenshot_2023-12-19-14-25-03-437_com.google.android.apps.photos_1750606521887.jpg",
    videoUrl: null,
    date: "2023-12-19"
  },
  {
    id: 67,
    placeId: 75,
    title: "Petit chevreau blanc",
    description: "Adorable chevreau blanc dans son environnement naturel",
    imageUrl: "/images/IMG_20240714_165754_1750606521887.jpg",
    videoUrl: null,
    date: "2024-07-14"
  },
  // Aventures au restaurant japonais
  {
    id: 70,
    placeId: 76,
    title: "Plateau de sushis artisanaux",
    description: "Dégustation de sushis frais préparés avec art",
    imageUrl: "/images/IMG_20240217_193839_1750605743424.jpg",
    videoUrl: null,
    date: "2024-02-17"
  },
  {
    id: 71,
    placeId: 76,
    title: "Ramen traditionnel",
    description: "Saveurs authentiques du Japon dans un bol fumant",
    imageUrl: "/images/IMG_20240217_193847_1750605743425.jpg",
    videoUrl: null,
    date: "2024-02-17"
  },
  {
    id: 72,
    placeId: 76,
    title: "Assortiment sushi premium",
    description: "Présentation raffinée de spécialités japonaises",
    imageUrl: "/images/IMG_20240323_150312_1750605743425.jpg",
    videoUrl: null,
    date: "2024-03-23"
  },
  {
    id: 73,
    placeId: 76,
    title: "Moment convivial au restaurant",
    description: "Portrait dans l'ambiance chaleureuse du restaurant japonais",
    imageUrl: "/images/Screenshot_2024-05-27-18-57-09-700_com.whatsapp_1750807590931.jpg",
    videoUrl: null,
    date: "2024-05-27"
  },
  // Aventures au Musée Aquarium
  {
    id: 74,
    placeId: 77,
    title: "Façade majestueuse du Musée Aquarium",
    description: "Architecture imposante avec ses colonnes et sculptures détaillées",
    imageUrl: "/images/IMG_20250507_150706_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 75,
    placeId: 77,
    title: "Grande salle aux fresques murales",
    description: "Immense hall orné de fresques colorées représentant la vie marine",
    imageUrl: "/images/IMG_20250507_150937_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 76,
    placeId: 77,
    title: "Perspective panoramique du hall principal",
    description: "Vue d'ensemble de l'architecture intérieure avec visiteurs",
    imageUrl: "/images/IMG_20250507_150939_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 77,
    placeId: 77,
    title: "Salon Art déco aux fresques mythologiques",
    description: "Élégant salon décoré de fresques représentant des scènes mythologiques",
    imageUrl: "/images/IMG_20250507_151158_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 78,
    placeId: 77,
    title: "Autre perspective du salon décoré",
    description: "Vue alternative des fresques murales et de l'aménagement intérieur",
    imageUrl: "/images/IMG_20250507_151203_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 79,
    placeId: 77,
    title: "Section aquarium souterraine",
    description: "Visite des bassins aquatiques dans les fondations du musée",
    imageUrl: "/images/IMG_20250507_151629_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 80,
    placeId: 77,
    title: "Poisson tropical dans son habitat",
    description: "Magnifique poisson aux couleurs vives dans son environnement aquatique",
    imageUrl: "/images/IMG_20250507_152317_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 81,
    placeId: 77,
    title: "Poisson jaune et noir élégant",
    description: "Splendide spécimen aux couleurs contrastées nageant dans les coraux",
    imageUrl: "/images/IMG_20250507_152332_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 82,
    placeId: 77,
    title: "Maquette de navire historique",
    description: "Reproduction détaillée d'un navire d'époque exposé dans le musée",
    imageUrl: "/images/IMG_20250507_160612_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  {
    id: 83,
    placeId: 77,
    title: "Manuscrit ancien maritime",
    description: "Document historique relatant les expéditions maritimes d'époque",
    imageUrl: "/images/IMG_20250507_162337_1751373924943.jpg",
    videoUrl: null,
    date: "2025-05-07"
  },
  // Nouvelles aventures Bord de Seine 2020
  {
    id: 84,
    placeId: 52,
    title: "Bateau-mouche sur la Seine",
    description: "Moment magique observant les bateaux-mouches naviguer sur la Seine",
    imageUrl: "/images/paris/seine/bateau1.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 85,
    placeId: 52,
    title: "Portrait élégant au bord de Seine",
    description: "Portrait en tenue estivale avec la Seine en arrière-plan",
    imageUrl: "/images/paris/seine/portrait1.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 86,
    placeId: 52,
    title: "Architecture des ponts parisiens",
    description: "Vue spectaculaire sur l'architecture métallique des ponts de Paris",
    imageUrl: "/images/paris/seine/pont1.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 87,
    placeId: 52,
    title: "Pont Alexandre III",
    description: "Vue majestueuse sur l'un des plus beaux ponts de Paris",
    imageUrl: "/images/paris/seine/pont2.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 88,
    placeId: 52,
    title: "Perspective depuis les quais",
    description: "Vue panoramique sur les monuments parisiens depuis les berges",
    imageUrl: "/images/paris/seine/pont3.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 89,
    placeId: 52,
    title: "Tour Eiffel depuis la Seine",
    description: "Vue emblématique de la Tour Eiffel depuis un bateau sur la Seine",
    imageUrl: "/images/paris/seine/tour_eiffel.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 90,
    placeId: 52,
    title: "Coucher de soleil à Bercy",
    description: "Ambiance dorée du coucher de soleil sur les quais modernes de Bercy",
    imageUrl: "/images/paris/seine/bercy.jpg",
    videoUrl: null,
    date: "2023-12-19"
  },
  // Opera Garnier - Photos personnelles juillet 2020
  {
    id: 91,
    placeId: 91,
    title: "Façade de l'Opéra Garnier",
    description: "La magnifique façade néo-baroque de l'Opéra Garnier avec ses dorures",
    imageUrl: "/images/paris/opera/facade_complete.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 92,
    placeId: 91,
    title: "Selfie devant l'Opéra",
    description: "Moment de complicité devant ce monument parisien emblématique",
    imageUrl: "/images/paris/opera/selfie_facade.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 93,
    placeId: 91,
    title: "Grand hall d'entrée",
    description: "L'architecture impressionnante du hall principal avec ses colonnes de marbre",
    imageUrl: "/images/paris/opera/hall_principal.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 94,
    placeId: 91,
    title: "Sculpture baroque",
    description: "Détail d'une sculpture ornant les intérieurs somptueux de l'Opéra",
    imageUrl: "/images/paris/opera/sculpture_detail.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 95,
    placeId: 91,
    title: "Portrait avec masque",
    description: "Souvenir unique de cette visite pendant la période COVID-19",
    imageUrl: "/images/paris/opera/selfie_masque.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 96,
    placeId: 91,
    title: "Grand escalier d'honneur",
    description: "Le célèbre escalier de marbre avec ses lustres en cristal",
    imageUrl: "/images/paris/opera/grand_escalier.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 97,
    placeId: 91,
    title: "Plafond peint",
    description: "Plafond richement décoré avec fresques et ornements dorés",
    imageUrl: "/images/paris/opera/plafond_peint.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 98,
    placeId: 91,
    title: "Détail de l'escalier",
    description: "Architecture monumentale et détails sculptés de l'escalier",
    imageUrl: "/images/paris/opera/escalier_detail.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 99,
    placeId: 91,
    title: "Balcons dorés",
    description: "Les balcons ornés et colonnes corinthiennes du grand foyer",
    imageUrl: "/images/paris/opera/balcons_dores.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 100,
    placeId: 91,
    title: "Portrait dans le hall",
    description: "Élégance dans ce cadre architectural exceptionnel",
    imageUrl: "/images/paris/opera/portrait_hall.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 101,
    placeId: 91,
    title: "Dans la salle rouge",
    description: "Moment dans la salle de spectacle aux fauteuils rouge et or",
    imageUrl: "/images/paris/opera/selfie_theatre.jpg",
    videoUrl: null,
    date: "2020-07-21"
  },
  {
    id: 102,
    placeId: 91,
    title: "Selfie dans le Grand Foyer",
    description: "Souvenir dans les somptueux espaces de réception",
    imageUrl: "/images/paris/opera/selfie_grand_foyer.jpg",
    videoUrl: null,
    date: "2020-07-21"
  }
];

// Helper functions
export function formatDate(date: Date | string | null, format: 'relative' | 'full' = 'relative'): string {
  if (!date) return 'Date inconnue';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'full') {
    return dateObj.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Hier";
  if (days < 30) return `Il y a ${days} jours`;
  if (days < 365) return `Il y a ${Math.floor(days / 30)} mois`;
  return `Il y a ${Math.floor(days / 365)} ans`;
}

// Data access functions
export function getContinents(): Continent[] {
  return continents;
}

export function getContinentBySlug(slug: string): Continent | undefined {
  return continents.find(c => c.slug === slug);
}

export function getCountriesByContinent(continentId: number): Country[] {
  return countries.filter(c => c.continentId === continentId);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCitiesByCountry(countryId: number): City[] {
  return cities.filter(c => c.countryId === countryId);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getPlacesByCity(cityId: number): Place[] {
  return places.filter(p => p.cityId === cityId);
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find(p => p.slug === slug);
}

export function getRecentAdventures(limit: number = 3): Adventure[] {
  return adventures
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getAdventuresByPlace(placeId: number): Adventure[] {
  return adventures.filter(a => a.placeId === placeId);
}