import { useQuery } from "@tanstack/react-query";
import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { travelerInfo } from "@/lib/travel-data";
import type { Continent } from "@shared/schema";

export default function Home() {
  const { data: continents } = useQuery<Continent[]>({
    queryKey: ["/api/continents"],
  });

  return (
    <div className="min-h-screen bg-pure-black text-neon-cyan font-mono">
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-pure-black py-4 border-b border-neon-cyan">
        <div className="marquee text-neon-cyan text-lg">
          ✈️ Voyager, c'est vivre mille vies en une seule ✈️
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center px-8 py-16">
        
        {/* Instagram Section */}
        <div className="mb-16">
          <p className="text-xl mb-6">
            <strong>Suivez mes aventures en images :</strong>
          </p>
          <a 
            href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME || 'fpt.smlal.fpt'}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
            title="Voir mon compte Instagram"
          >
            <img 
              src="https://www.cmonsite.fr/creer-un-site/wp-content/uploads/2021/06/new-instagram-logo-png-transparent-300x300.png" 
              alt="Logo Instagram" 
              className="w-16 h-16 border-2 border-neon-cyan rounded-xl p-1 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Personal Introduction */}
        <div className="neon-shimmer text-lg leading-relaxed mb-16 max-w-4xl mx-auto">
          Moi, c'est {travelerInfo.name}. Voyager, c'est plus qu'un loisir — c'est ma passion.<br/><br/>
          Depuis toute petite, je parcours le monde avec ma famille. Chaque pays visité m'a offert des cultures uniques, des expériences inoubliables.<br/><br/>
          J'ai rencontré des personnes incroyables que je ne reverrai peut-être jamais, mais chaque moment partagé m'a appris quelque chose de précieux.<br/><br/>
          Ce que j'aime, c'est m'immerger dans de nouveaux milieux, observer, écouter et apprendre.<br/><br/>
          Voyager, ce n'est pas juste partir — c'est grandir, s'ouvrir, comprendre. Et ça, j'adore.
        </div>

        {/* Blog Description */}
        <div className="neon-shimmer text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
          Sur ce blog, je partage mes coups de cœur, mes avis, et quelques conseils<br/>
          sur les endroits qui m'ont marquée... ou pas.<br/>
          Les lieux à voir absolument — et ceux qu'on peut éviter aussi ! 😉
        </div>

        {/* Continent Selection */}
        <div className="mb-12">
          <p className="text-neon-cyan text-xl mb-8">
            <strong>Veuillez cliquer sur le continent de votre choix :</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {continents?.map((continent) => (
              <Link key={continent.id} href={`/continent/${continent.slug}`}>
                <button className="neon-button px-8 py-4 text-lg neon-glow-hover">
                  {continent.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Small fly gif (optional decoration) */}
        <div className="mt-16">
          <img 
            src="https://linablogvoyages.files.wordpress.com/2022/02/mouche-gif.gif?w=240" 
            alt="Decoration" 
            className="w-10 h-14 mx-auto opacity-70"
          />
        </div>
        
      </div>
    </div>
  );
}
