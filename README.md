# Travel Blog

Un blog de voyage interactif construit avec React, Express et TypeScript.

## Fonctionnalités

- Navigation par continents, pays, villes et lieux
- Interface moderne avec design néon cyberpunk
- Galeries de photos pour chaque lieu
- Informations détaillées sur les destinations
- Responsive design

## Technologies utilisées

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **UI Components**: Radix UI, Shadcn/ui
- **Routing**: Wouter
- **State Management**: TanStack Query

## Installation

1. Clonez le repository
```bash
git clone https://github.com/LinaAndrad001/travel-blog.git
cd travel-blog
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez l'application
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5000`

## Structure du projet

- `client/` - Application React frontend
- `server/` - API Express backend
- `shared/` - Types et schémas partagés
- `client/src/components/` - Composants React réutilisables
- `client/src/pages/` - Pages de l'application
- `client/src/lib/` - Utilitaires et données statiques

## Développement

Le projet utilise:
- Hot reloading avec Vite
- TypeScript pour la sécurité des types
- Tailwind CSS pour le styling
- ESLint pour la qualité du code

## Déploiement

Pour construire le projet pour la production:

```bash
npm run build
npm start
```