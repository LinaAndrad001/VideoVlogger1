import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Adventure } from "@shared/schema";

interface AdventureCardProps {
  adventure: Adventure;
}

export default function AdventureCard({ adventure }: AdventureCardProps) {
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - d.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Il y a 1 jour";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 14) return "Il y a 1 semaine";
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaines`;
    return `Il y a ${Math.floor(diffDays / 30)} mois`;
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={adventure.imageUrl}
        alt={adventure.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-sunset-orange mr-2" />
          <span className="text-sm text-gray-500">Aventure #{adventure.id}</span>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-2">{adventure.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {adventure.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {formatDate(adventure.publishedAt)}
          </span>
          <Button variant="link" className="text-ocean-blue hover:underline text-sm font-medium p-0">
            Voir plus
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
