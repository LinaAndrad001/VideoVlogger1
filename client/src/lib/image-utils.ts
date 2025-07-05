// Utility functions for handling images across different environments

export function getBaseUrl(): string {
  // In browser environment
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // Fallback for SSR or build time
  return '';
}

export function getImageUrl(imagePath: string): string {
  // If the path already starts with http/https, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Ensure the path starts with /
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // In development or production, use the current origin
  let baseUrl = getBaseUrl();
  
  // Force HTTPS for Replit URLs (mobile security requirement)
  if (baseUrl.includes('replit.co') || baseUrl.includes('repl.co')) {
    baseUrl = baseUrl.replace('http://', 'https://');
  }
  
  const finalUrl = `${baseUrl}${cleanPath}`;
  
  // Debug logging for mobile troubleshooting (only if needed)
  if (window.location.search.includes('debug')) {
    console.log('🖼️ Image URL Debug:', {
      input: imagePath,
      cleanPath: cleanPath,
      baseUrl: baseUrl,
      finalUrl: finalUrl
    });
  }
  
  return finalUrl;
}

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}