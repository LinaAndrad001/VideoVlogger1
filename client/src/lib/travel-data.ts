// This file contains static travel data and utility functions
// for the travel vlog application

export interface TravelStats {
  countriesVisited: number;
  citiesExplored: number;
  videosCreated: number;
}

export const travelStats: TravelStats = {
  countriesVisited: 20,
  citiesExplored: 77,
  videosCreated: 156,
};

export const socialLinks = {
  instagram: process.env.VITE_INSTAGRAM_USERNAME || 'monvlog',
  youtube: process.env.VITE_YOUTUBE_USERNAME || 'monvlog',
  facebook: process.env.VITE_FACEBOOK_USERNAME || 'monvlog',
};

export const contactInfo = {
  email: process.env.VITE_CONTACT_EMAIL || 'contact@monvlog.com',
  phone: process.env.VITE_CONTACT_PHONE || '+33 1 23 45 67 89',
  location: process.env.VITE_CONTACT_LOCATION || 'Paris, France',
};

export const travelerInfo = {
  name: process.env.VITE_TRAVELER_NAME || 'Alex',
  bio: 'Passionné de voyage depuis mon plus jeune âge, j\'ai décidé de transformer ma passion en aventure permanente. À travers ce vlog, je partage mes découvertes, mes rencontres et les moments magiques que j\'ai la chance de vivre aux quatre coins du monde.',
  profileImage: process.env.VITE_PROFILE_IMAGE || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
  aboutImage: process.env.VITE_ABOUT_IMAGE || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
};

export function formatDate(date: Date | string | null, format: 'relative' | 'full' = 'relative'): string {
  if (!date) return "";
  
  const d = new Date(date);
  
  if (format === 'full') {
    return d.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Relative format
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - d.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return "Il y a 1 jour";
  if (diffDays < 7) return `Il y a ${diffDays} jours`;
  if (diffDays < 14) return "Il y a 1 semaine";
  if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaines`;
  return `Il y a ${Math.floor(diffDays / 30)} mois`;
}
