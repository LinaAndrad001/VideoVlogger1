// Background images for destinations - high quality scenic images
export const backgroundImages = {
  // France
  paris: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop&q=80", // Eiffel Tower view
  bordeaux: "https://images.unsplash.com/photo-1580492516014-4a28466d55df?w=1920&h=1080&fit=crop&q=80", // Bordeaux vineyards
  ecluzelles: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80", // French countryside river
  chartres: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&q=80", // Gothic cathedral
  
  // Italie
  rome: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&h=1080&fit=crop&q=80", // Colosseum at sunset
  venise: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1920&h=1080&fit=crop&q=80", // Venice canals
  
  // Grèce
  athenes: "https://images.unsplash.com/photo-1555993539-1732b0258095?w=1920&h=1080&fit=crop&q=80", // Acropolis view
  santorin: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&h=1080&fit=crop&q=80", // Santorini sunset
  mykonos: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&h=1080&fit=crop&q=80", // Mykonos windmills
  
  // Portugal
  lisbonne: "https://images.unsplash.com/photo-1526404227981-2b36326bd9ba?w=1920&h=1080&fit=crop&q=80", // Lisbon trams
  porto: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&h=1080&fit=crop&q=80", // Porto riverfront
  
  // Turquie
  istanbul: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920&h=1080&fit=crop&q=80", // Istanbul skyline
  antalya: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&h=1080&fit=crop&q=80", // Turkish riviera
  kas: "https://images.unsplash.com/photo-1567202188976-47abde93a85e?w=1920&h=1080&fit=crop&q=80", // Turkish coastal town
  patara: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&q=80", // Ancient ruins
};

export function getBackgroundImage(citySlug: string): string {
  return backgroundImages[citySlug as keyof typeof backgroundImages] || "";
}