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
    name: "Japon",
    slug: "japon",
    description: "Empire du Soleil Levant, mélange parfait de tradition et modernité",
    imageUrl: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop",
    capital: "Tokyo",
    language: "Japonais",
    currency: "Yen"
  },
  {
    id: 5,
    continentId: 2,
    name: "Thaïlande",
    slug: "thailande",
    description: "Pays du sourire aux temples dorés et plages cristallines",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    capital: "Bangkok",
    language: "Thaï",
    currency: "Baht"
  },
  {
    id: 6,
    continentId: 2,
    name: "Indonésie",
    slug: "indonesie",
    description: "Archipel aux mille îles et cultures diverses",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    capital: "Jakarta",
    language: "Indonésien",
    currency: "Roupie"
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
  // Japon
  {
    id: 9,
    countryId: 4,
    name: "Tokyo",
    slug: "tokyo",
    description: "Mégalopole futuriste entre tradition et modernité",
    imageUrl: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop",
    population: 13960000,
    founded: "1457",
    climate: "Subtropical humide"
  },
  {
    id: 10,
    countryId: 4,
    name: "Kyoto",
    slug: "kyoto",
    description: "Ancienne capitale impériale aux temples millénaires",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    population: 1475183,
    founded: "794",
    climate: "Subtropical humide"
  },
  // Thaïlande
  {
    id: 11,
    countryId: 5,
    name: "Bangkok",
    slug: "bangkok",
    description: "Capitale vibrante aux temples dorés et marchés flottants",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    population: 10539000,
    founded: "1782",
    climate: "Tropical"
  },
  {
    id: 12,
    countryId: 5,
    name: "Phuket",
    slug: "phuket",
    description: "Perle d'Andaman aux plages paradisiaques",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop",
    population: 416582,
    founded: "1er siècle",
    climate: "Tropical"
  },
  // Indonésie
  {
    id: 13,
    countryId: 6,
    name: "Ubud",
    slug: "ubud",
    description: "Cœur spirituel de Bali entre rizières et forêts",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    population: 74320,
    founded: "8e siècle",
    climate: "Tropical équatorial"
  },
  {
    id: 14,
    countryId: 6,
    name: "Jakarta",
    slug: "jakarta",
    description: "Capitale cosmopolite de l'archipel indonésien",
    imageUrl: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&h=600&fit=crop",
    population: 10770000,
    founded: "397",
    climate: "Tropical"
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
    slug: "musee-du-louvre",
    description: "Plus grand musée du monde et palais historique",
    imageUrl: "/images/IMG_20250603_151423.jpg",
    coordinates: "48.8606, 2.3376",
    bestTime: "Matinée",
    activities: ["Visite culturelle", "Art", "Histoire"],
    gallery: [
      "/attached_assets/IMG_20250603_145401_1750249280433.jpg",
      "/attached_assets/IMG_20250603_154848_1750249280433.jpg",
      "/attached_assets/IMG_20250603_204014_1750249280433.jpg",
      "/attached_assets/IMG_20250603_204042_1750249280433.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.35_564e5695_1750249280433.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.39_e3f2383f_1750249280433.jpg",
      "/attached_assets/WhatsApp Image 2025-06-18 à 14.19.42_d8056c8a_1750249280433.jpg"
    ]
  },
  {
    id: 50,
    cityId: 1,
    name: "Sacré-Cœur",
    slug: "sacre-coeur",
    description: "Basilique emblématique de Montmartre offrant une vue panoramique sur Paris",
    imageUrl: "/images/IMG_20250516_164453.jpg",
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
  // Tokyo
  {
    id: 12,
    cityId: 9,
    name: "Temple Sensoji",
    slug: "temple-sensoji",
    description: "Plus ancien temple de Tokyo à Asakusa",
    imageUrl: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop",
    coordinates: "35.7148, 139.7967",
    bestTime: "Matinée",
    activities: ["Temple", "Marché traditionnel", "Culture"],
    gallery: null
  },
  {
    id: 13,
    cityId: 9,
    name: "Shibuya Crossing",
    slug: "shibuya-crossing",
    description: "Carrefour le plus fréquenté du monde",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop",
    coordinates: "35.6598, 139.7006",
    bestTime: "Soirée",
    activities: ["Observation", "Shopping", "Néons"],
    gallery: null
  },
  // Kyoto
  {
    id: 14,
    cityId: 10,
    name: "Kinkaku-ji",
    slug: "kinkaku-ji",
    description: "Pavillon d'Or aux reflets dorés",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    coordinates: "35.0394, 135.7292",
    bestTime: "Matinée",
    activities: ["Temple", "Jardins", "Méditation"],
    gallery: null
  },
  {
    id: 15,
    cityId: 10,
    name: "Forêt de Bambous",
    slug: "foret-bambous",
    description: "Tunnel mystique de bambous géants",
    imageUrl: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=600&fit=crop",
    coordinates: "35.0170, 135.6719",
    bestTime: "Matinée",
    activities: ["Promenade", "Photos", "Nature"],
    gallery: null
  },
  // Bangkok
  {
    id: 16,
    cityId: 11,
    name: "Grand Palais",
    slug: "grand-palais",
    description: "Complexe royal aux temples dorés",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    coordinates: "13.7500, 100.4915",
    bestTime: "Matinée",
    activities: ["Palais royal", "Temples", "Architecture"],
    gallery: null
  },
  {
    id: 17,
    cityId: 11,
    name: "Wat Pho",
    slug: "wat-pho",
    description: "Temple du Bouddha couché et massage traditionnel",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    coordinates: "13.7468, 100.4926",
    bestTime: "Matinée",
    activities: ["Temple", "Massage thaï", "Spiritualité"],
    gallery: null
  },
  // Phuket
  {
    id: 18,
    cityId: 12,
    name: "Plages de Phuket",
    slug: "plages-phuket",
    description: "Plages paradisiaques de la mer d'Andaman",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop",
    coordinates: "7.8804, 98.3923",
    bestTime: "Journée",
    activities: ["Plage", "Plongée", "Massage"],
    gallery: null
  },
  // Ubud
  {
    id: 19,
    cityId: 13,
    name: "Rizières de Tegallalang",
    slug: "rizieres-tegallalang",
    description: "Terrasses de riz verdoyantes en escalier",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    coordinates: "-8.4340, 115.2840",
    bestTime: "Matinée",
    activities: ["Rizières", "Photos", "Balançoire"],
    gallery: null
  },
  {
    id: 20,
    cityId: 13,
    name: "Forêt des Singes",
    slug: "foret-singes",
    description: "Sanctuaire naturel des macaques sacrés",
    imageUrl: "https://images.unsplash.com/photo-1597149756086-c75e5f64ca6d?w=800&h=600&fit=crop",
    coordinates: "-8.5169, 115.2584",
    bestTime: "Matinée",
    activities: ["Faune", "Temple", "Nature"],
    gallery: null
  },
  // Jakarta
  {
    id: 21,
    cityId: 14,
    name: "Monas",
    slug: "monas",
    description: "Monument national symbole de l'indépendance",
    imageUrl: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&h=600&fit=crop",
    coordinates: "-6.1754, 106.8272",
    bestTime: "Soirée",
    activities: ["Monument", "Panorama", "Musée"],
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