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
    imageUrl: "/images/IMG_20240721_142441.jpg",
    countries: 4
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
    imageUrl: "https://images.unsplash.com/photo-1597149405940-64b3dc2ce4a7?w=800&h=600&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
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
    description: "Monument emblématique de Paris et de la France",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop",
    coordinates: "48.8584, 2.2945",
    bestTime: "Coucher de soleil",
    activities: ["Photos", "Restaurant", "Ascension"],
    gallery: null
  },
  {
    id: 2,
    cityId: 1,
    name: "Musée du Louvre",
    slug: "musee-louvre",
    description: "Plus grand musée du monde et palais historique",
    imageUrl: "/attached_assets/IMG_20250603_145401_1750596752254.jpg",
    coordinates: "48.8606, 2.3376",
    bestTime: "Matinée",
    activities: ["Visite culturelle", "Art", "Histoire"],
    gallery: [
      "/attached_assets/IMG_20250603_145401_1750596752254.jpg",
      "/attached_assets/IMG_20250603_154848_1750596752254.jpg", 
      "/attached_assets/IMG_20250603_204014_1750596752254.jpg",
      "/attached_assets/IMG_20250603_204042_1750596752254.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.35_564e5695_1750596752254.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.39_e3f2383f_1750596752254.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.42_d8056c8a_1750596752254.jpg"
    ]
  },
  {
    id: 50,
    cityId: 1,
    name: "Sacré-Cœur",
    slug: "sacre-coeur",
    description: "Basilique emblématique de Montmartre offrant une vue panoramique sur Paris",
    imageUrl: "/attached_assets/IMG_20250516_164453_1750598866707.jpg",
    coordinates: "48.8867, 2.3431",
    bestTime: "Fin d'après-midi",
    activities: ["Visite religieuse", "Vue panoramique", "Montmartre"],
    gallery: [
      "/attached_assets/IMG_20250516_164453_1750598866707.jpg",
      "/attached_assets/SL-5927_29_31_1750598866707.jpg",
      "/attached_assets/AirBrush_20250516185456_1750598866707.jpg"
    ]
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
    imageUrl: "/images/IMG_20240721_134557.jpg",
    coordinates: "48.9167, 1.6833",
    bestTime: "Matinée",
    activities: ["Nature", "Promenade", "Détente"],
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
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    coordinates: "36.2021, 29.6417",
    bestTime: "Coucher de soleil",
    activities: ["Port", "Restaurants", "Plongée"],
    gallery: null
  },
  {
    id: 17,
    cityId: 11,
    name: "Île de Kekova",
    slug: "ile-kekova",
    description: "Site archéologique submergé unique",
    imageUrl: "https://images.unsplash.com/photo-1597149405940-64b3dc2ce4a7?w=800&h=600&fit=crop",
    coordinates: "36.1833, 29.8667",
    bestTime: "Journée",
    activities: ["Kayak", "Archéologie", "Snorkeling"],
    gallery: null
  },
  // Patara
  {
    id: 18,
    cityId: 12,
    name: "Plage de Patara",
    slug: "plage-patara",
    description: "Plage de sable infinie et protégée",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    coordinates: "36.2667, 29.3167",
    bestTime: "Journée",
    activities: ["Plage", "Nature", "Tortues de mer"],
    gallery: null
  },
  {
    id: 19,
    cityId: 12,
    name: "Ruines de Patara",
    slug: "ruines-patara",
    description: "Cité antique lycienne bien préservée",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    coordinates: "36.2683, 29.3175",
    bestTime: "Matinée",
    activities: ["Archéologie", "Histoire", "Photos"],
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
    imageUrl: "/attached_assets/IMG_20250603_145401_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 27,
    placeId: 2,
    title: "Cour Napoléon et ses environs",
    description: "Promenade dans les cours extérieures du palais royal",
    imageUrl: "/attached_assets/IMG_20250603_154848_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 28,
    placeId: 2,
    title: "Le Louvre au coucher du soleil",
    description: "Magnifique façade du Louvre illuminée par les derniers rayons du jour",
    imageUrl: "/attached_assets/IMG_20250603_204014_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 29,
    placeId: 2,
    title: "Architecture classique du Louvre",
    description: "Détails de l'architecture française classique du palais",
    imageUrl: "/attached_assets/IMG_20250603_204042_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 30,
    placeId: 2,
    title: "Le Sacre de Napoléon par David",
    description: "Chef-d'œuvre de Jacques-Louis David représentant le couronnement de Napoléon",
    imageUrl: "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.35_564e5695_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 31,
    placeId: 2,
    title: "Plafonds dorés des salles d'apparat",
    description: "Somptueux plafonds peints et dorés des appartements royaux",
    imageUrl: "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.39_e3f2383f_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  {
    id: 32,
    placeId: 2,
    title: "Collections antiques du Louvre",
    description: "Sculptures antiques dans les galeries de marbre du musée",
    imageUrl: "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.42_d8056c8a_1750596752254.jpg",
    videoUrl: null,
    date: "2025-06-03"
  },
  // Aventures au Sacré-Cœur
  {
    id: 33,
    placeId: 50,
    title: "Basilique du Sacré-Cœur et ses visiteurs",
    description: "Vue emblématique de la basilique avec la foule sur les marches de Montmartre",
    imageUrl: "/attached_assets/IMG_20250516_164453_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
  },
  {
    id: 34,
    placeId: 50,
    title: "Intérieur somptueux du Sacré-Cœur",
    description: "Architecture intérieure magnifique avec ses colonnes et vitraux colorés",
    imageUrl: "/attached_assets/SL-5927_29_31_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
  },
  {
    id: 35,
    placeId: 50,
    title: "Moment personnel au Sacré-Cœur",
    description: "Pause détente devant la basilique emblématique de Montmartre",
    imageUrl: "/attached_assets/AirBrush_20250516185456_1750598866707.jpg",
    videoUrl: null,
    date: "2025-05-16"
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