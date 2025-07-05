# Travel Blog Vlog System

## Overview

This is a full-stack travel blog application designed as a vlog platform with a distinctive cyberpunk neon aesthetic. The application allows users to navigate through continents, countries, cities, and specific places with detailed travel content including images, descriptions, and adventure stories. The system is built with a modern tech stack and can be deployed as a static site or with a full backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom cyberpunk neon theme (pure black backgrounds with cyan/purple neon accents)
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Font**: Courier New monospace for cyberpunk aesthetic

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout
- **Database**: PostgreSQL with Drizzle ORM (configurable)
- **Storage**: Dual implementation - in-memory storage for development/static deployment, PostgreSQL for production
- **Sessions**: PostgreSQL-backed sessions when database is available

### Data Structure
The application follows a hierarchical content structure:
- **Continents** → **Countries** → **Cities** → **Places** → **Adventures**
- Each level contains detailed information, images, and navigation capabilities
- Static data implementation allows for database-free deployment

## Key Components

### Content Management
- Hierarchical navigation system (Continent → Country → City → Place)
- Static data implementation with full travel content for Europe and Asia
- Adventure/story system for detailed place-specific content
- Image galleries and video integration support

### Design System
- **Theme**: Pure black (#000000) backgrounds with neon cyan (#00ffff) and purple (#9d4edd) accents
- **Typography**: Monospace fonts for cyberpunk aesthetic
- **Effects**: CSS neon glow effects, shimmer animations, and hover states
- **Responsive**: Mobile-first design with desktop enhancements

### Static Content
The application includes pre-populated content covering:
- **Europe**: France (Paris, Lyon, Nice), Italy (Rome, Venice), Greece (Athens, Santorini, Mykonos)
- **Asia**: Japan (Tokyo, Kyoto), Thailand (Bangkok, Chiang Mai), Indonesia (Bali, Jakarta)
- 21 total destinations with detailed descriptions and representative images

## Data Flow

### Static Deployment Flow
1. Static data loaded from `client/src/lib/static-data.ts`
2. React components render content directly from static data
3. Navigation handled client-side with Wouter
4. No API calls required for content delivery

### Full-Stack Flow (when backend is active)
1. Client makes API requests to Express server
2. Server queries PostgreSQL database via Drizzle ORM
3. Data returned as JSON to React components
4. TanStack Query handles caching and state management

### Navigation Flow
- Home page displays continent selection
- Breadcrumb navigation maintains user location context
- Deep linking supported for all content levels
- Smooth scrolling and responsive design throughout

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React-DOM, TypeScript support
- **UI Framework**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Routing**: Wouter for client-side routing
- **Database**: Drizzle ORM, PostgreSQL adapter (Neon serverless)
- **Utilities**: Class-variance-authority, clsx, tailwind-merge

### Development Dependencies
- **Build Tools**: Vite, ESBuild for server bundling
- **Development**: TSX for TypeScript execution
- **Replit Integration**: Replit-specific Vite plugins for development environment

## Deployment Strategy

### Static Deployment (Recommended)
- **Target Platforms**: Vercel, Netlify, GitHub Pages
- **Build Command**: `cd client && npm run build`
- **Output Directory**: `client/dist`
- **Features**: Fully static, no server required, permanent free hosting
- **Configuration**: Includes `vercel.json` for seamless Vercel deployment

### Full-Stack Deployment
- **Platform**: Any Node.js hosting with PostgreSQL support
- **Database**: Neon serverless PostgreSQL or any PostgreSQL instance
- **Environment Variables**: `DATABASE_URL` for database connection
- **Build Process**: Client and server built separately, server bundles with ESBuild

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Port Configuration**: Client on port 5000, proxied through Express server
- **Hot Reload**: Vite HMR with Replit-specific plugins
- **Database**: Falls back to in-memory storage when DATABASE_URL not provided

## Changelog

```
Changelog:
- July 05, 2025. Migration completed from Replit Agent to Replit environment
  - Successfully migrated travel blog application to Replit environment
  - Enhanced image serving security with path validation and proper headers
  - Updated Opera Garnier section with 12 new personal photos from user's visit
  - Organized all attached assets into proper directory structure
  - Applied robust security practices with client/server separation
  - Fixed image loading issues and improved mobile compatibility
- July 01, 2025. Added Opera Garnier section to Paris with 12 personal photos
  - Created new place "Opera Garnier" with comprehensive photo documentation
  - Added 12 adventures documenting 2020 visit to the Palais de l'Opéra
  - Photos capture facade, interior architecture, grand staircase, sculptures, and personal moments
  - Includes unique COVID-era photos showing visit during mask period
  - Showcases the neo-baroque architecture and Second Empire grandeur
- July 01, 2025. Added personal photos to Bord de Seine section in Paris
  - Added 7 personal photos from July 21, 2020 Seine boat trip and December 19, 2023 Bercy sunset
  - Created 7 new adventures documenting Seine experiences with authentic photos
  - Photos include boat perspectives, elegant portraits, bridge architecture, and Tour Eiffel views
  - Organized photos chronologically from 2020 summer boat trip to 2023 golden hour at Bercy
- July 01, 2025. Added personal photos to Patara section
  - Added 6 personal photos from December 30, 2023 visit to Patara dunes
  - Created 6 new adventures documenting the dune experience with authentic photos
  - Updated Patara Beach place with new gallery and personal photo as main image
  - Photos show the magnificent sand dunes, family moments, and natural landscape
- January 01, 2025. Removed duplicate galleries from all sections
  - Eliminated all gallery sections to prevent duplicate photo display
  - Kept only adventures with their individual photos
  - Clean interface without redundant image sections
  - Users now see each photo only once in its corresponding adventure
- January 01, 2025. Added Musée Aquarium section to Paris
  - Created new place "Musée Aquarium" with 10 high-quality photos
  - Added 10 detailed adventures documenting the museum visit experience
  - Photos show both architectural beauty and marine exhibits
- January 01, 2025. Major expansion of European destinations
  - Added 9 new European countries: Espagne, Allemagne, Suisse, Autriche, Croatie, Slovénie, Serbie, Bulgarie, Roumanie
  - Added 2 new French cities for Bretagne region: Brest, Rennes
  - Updated Europe continent count from 4 to 13 countries
  - Added background images for all new destinations with authentic scenic views
  - Expanded travel coverage to include Balkans, Alpine regions, and Eastern Europe
- June 24, 2025. Added personal photo to Japanese restaurant section
  - Added user's portrait photo to Restaurant japonais parisien gallery
  - Photo integrated as new adventure with proper date and description
- June 24, 2025. Enhanced visual experience with destination backgrounds
  - Added dynamic background images for all destinations in Europe and Asia sections
  - Implemented specialized background system with high-quality scenic images
  - Updated Europe continent background to show European architectural landscape
  - Each city and country now displays contextual background imagery
  - Maintained cyberpunk aesthetic with dark overlay for text readability
  - Updated specific backgrounds: Bordeaux (authentic street photo), Ecluzelles (authentic user photo), Asia (authentic Kas Mediterranean sea photo), Kas (coastal), Patara (authentic user photo of dunes)
- June 24, 2025. Enhanced visual experience with background images
  - Added dynamic background images for all destinations in Europe and Asia
  - Created background-images.ts with high-quality scenic images for each city
  - Implemented overlay system with 85% opacity for content readability
  - Applied background images to continent, country, and city pages
  - Used fixed background attachment for immersive scrolling experience
- June 23, 2025. Migration completed from Replit Agent to Replit environment
  - Fixed image serving configuration and security issues
  - Added gallery display functionality to place pages
  - Integrated user's personal travel photos (21 photos total):
    * 10 photos added to Bordeaux Place de la Comédie gallery
    * 6 photos added to Ecluzelles Bord de l'Eure gallery  
    * 5 photos added to new Institut de France section in Paris
  - Consolidated image serving to single secure /images/ route
  - Applied robust security practices with proper client/server separation
  - Optimized photo display to fill cyan frames perfectly with object-cover
  - Restored gallery section for places with photos (Institut de France, Bordeaux, etc.)
  - Kept adventures with click-to-enlarge modal for all images
  - Optimized modal sizing for mobile viewing (smaller, appropriate size)
  - Made all images clickable with same functionality as their corresponding buttons across all sections
- June 22, 2025. Migration completed from Replit Agent to Replit environment
  - Fixed image serving configuration for Louvre and Sacré-Cœur photos
  - Added Express static middleware for /images/ route
  - Corrected all image paths from /attached_assets/ to /images/
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```