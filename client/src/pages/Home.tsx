import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, LogIn } from "lucide-react";

interface Sprite {
  id: string;
  name: string;
  type: string;
  variants: string[];
  imageUrls: { [key: string]: string };
}

interface SpriteState {
  [key: string]: boolean;
}

const SPRITES: Sprite[] = [
  {
    id: "water",
    name: "Água",
    type: "water",
    variants: ["normal", "gummy", "gold", "galaxy", "gem", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/water",
      gummy: "https://addi.yt/api/sprites/img/gummy_water",
      gold: "https://addi.yt/api/sprites/img/gold_water",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_water",
      gem: "https://addi.yt/api/sprites/img/gem_water",
      holo: "https://addi.yt/api/sprites/img/holofoil_water",
    },
  },
  {
    id: "earth",
    name: "Terra",
    type: "earth",
    variants: ["normal", "gummy", "gold", "galaxy", "gem"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/earth",
      gummy: "https://addi.yt/api/sprites/img/gummy_earth",
      gold: "https://addi.yt/api/sprites/img/gold_earth",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_earth",
      gem: "https://addi.yt/api/sprites/img/gem_earth",
    },
  },
  {
    id: "fire",
    name: "Fogo",
    type: "fire",
    variants: ["normal", "gummy", "gold", "galaxy", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/fire",
      gummy: "https://addi.yt/api/sprites/img/gummy_fire",
      gold: "https://addi.yt/api/sprites/img/gold_fire",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_fire",
      holo: "https://addi.yt/api/sprites/img/holofoil_fire",
    },
  },
  {
    id: "duck",
    name: "Pato",
    type: "duck",
    variants: ["normal", "gummy", "gold", "galaxy", "gem"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/duck",
      gummy: "https://addi.yt/api/sprites/img/gummy_duck",
      gold: "https://addi.yt/api/sprites/img/gold_duck",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_duck",
      gem: "https://addi.yt/api/sprites/img/gem_duck",
    },
  },
  {
    id: "ghost",
    name: "Fantasma",
    type: "ghost",
    variants: ["normal", "gummy", "gold", "galaxy", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/ghost",
      gummy: "https://addi.yt/api/sprites/img/gummy_ghost",
      gold: "https://addi.yt/api/sprites/img/gold_ghost",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_ghost",
      holo: "https://addi.yt/api/sprites/img/holofoil_ghost",
    },
  },
  {
    id: "dream",
    name: "Sonho",
    type: "dream",
    variants: ["normal", "gummy", "gold", "galaxy"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/dream",
      gummy: "https://addi.yt/api/sprites/img/gummy_dream",
      gold: "https://addi.yt/api/sprites/img/gold_dream",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_dream",
    },
  },
  {
    id: "punk",
    name: "Punk",
    type: "punk",
    variants: ["normal", "gummy", "gold", "galaxy", "gem"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/punk",
      gummy: "https://addi.yt/api/sprites/img/gummy_punk",
      gold: "https://addi.yt/api/sprites/img/gold_punk",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_punk",
      gem: "https://addi.yt/api/sprites/img/gem_punk",
    },
  },
  {
    id: "king",
    name: "Rei",
    type: "king",
    variants: ["normal", "gummy", "gold", "galaxy", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/king",
      gummy: "https://addi.yt/api/sprites/img/gummy_king",
      gold: "https://addi.yt/api/sprites/img/gold_king",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_king",
      holo: "https://addi.yt/api/sprites/img/holofoil_king",
    },
  },
  {
    id: "demon",
    name: "Demônio",
    type: "demon",
    variants: ["normal", "gummy", "gold", "galaxy", "gem"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/demon",
      gummy: "https://addi.yt/api/sprites/img/gummy_demon",
      gold: "https://addi.yt/api/sprites/img/gold_demon",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_demon",
      gem: "https://addi.yt/api/sprites/img/gem_demon",
    },
  },
  {
    id: "zero_point",
    name: "Ponto Zero",
    type: "zero_point",
    variants: ["normal", "gummy", "gold", "galaxy", "gem", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/zero_point",
      gummy: "https://addi.yt/api/sprites/img/gummy_zero_point",
      gold: "https://addi.yt/api/sprites/img/gold_zero_point",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_zero_point",
      gem: "https://addi.yt/api/sprites/img/gem_zero_point",
      holo: "https://addi.yt/api/sprites/img/holofoil_zero_point",
    },
  },
  {
    id: "striker",
    name: "Atacante",
    type: "striker",
    variants: ["normal", "gummy", "gold", "galaxy", "holo"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/striker",
      gummy: "https://addi.yt/api/sprites/img/gummy_striker",
      gold: "https://addi.yt/api/sprites/img/gold_striker",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_striker",
      holo: "https://addi.yt/api/sprites/img/holofoil_striker",
    },
  },
  {
    id: "fishy",
    name: "Peixe",
    type: "fishy",
    variants: ["normal", "gummy", "gold", "galaxy"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/fishy",
      gummy: "https://addi.yt/api/sprites/img/gummy_fishy",
      gold: "https://addi.yt/api/sprites/img/gold_fishy",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_fishy",
    },
  },
  {
    id: "aura",
    name: "Aura",
    type: "aura",
    variants: ["normal", "gummy", "gold", "galaxy", "gem"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/aura",
      gummy: "https://addi.yt/api/sprites/img/gummy_aura",
      gold: "https://addi.yt/api/sprites/img/gold_aura",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_aura",
      gem: "https://addi.yt/api/sprites/img/gem_aura",
    },
  },
  {
    id: "boss",
    name: "Chefe",
    type: "boss",
    variants: ["normal", "gummy", "gold", "galaxy"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/boss",
      gummy: "https://addi.yt/api/sprites/img/gummy_boss",
      gold: "https://addi.yt/api/sprites/img/gold_boss",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_boss",
    },
  },
  {
    id: "grim_reaper",
    name: "Ceifador",
    type: "grim_reaper",
    variants: ["normal", "gummy", "gold", "galaxy"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/grim_reaper",
      gummy: "https://addi.yt/api/sprites/img/gummy_grim_reaper",
      gold: "https://addi.yt/api/sprites/img/gold_grim_reaper",
      galaxy: "https://addi.yt/api/sprites/img/galaxy_grim_reaper",
    },
  },
  {
    id: "burnt_peanut",
    name: "Amendoim Queimado",
    type: "burnt_peanut",
    variants: ["normal"],
    imageUrls: {
      normal: "https://addi.yt/api/sprites/img/burnt_peanut",
    },
  },
];

const VARIANT_LABELS: { [key: string]: string } = {
  normal: "Normal",
  gummy: "Gummi",
  gold: "Ouro",
  galaxy: "Galáxia",
  gem: "Gema",
  holo: "Holo",
};

export default function Home() {
  const [spriteState, setSpriteState] = useState<SpriteState>({});
  const [selectedVariant, setSelectedVariant] = useState<string>("normal");
  const [filterStatus, setFilterStatus] = useState<"all" | "collected" | "missing">("all");
  const [username, setUsername] = useState<string>("");

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("spriteState");
    if (saved) {
      setSpriteState(JSON.parse(saved));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("spriteState", JSON.stringify(spriteState));
  }, [spriteState]);

  const toggleSprite = (spriteId: string, variant: string) => {
    const key = `${spriteId}-${variant}`;
    setSpriteState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getTotalSprites = () => {
    let total = 0;
    SPRITES.forEach((sprite) => {
      total += sprite.variants.length;
    });
    return total;
  };

  const getCollectedCount = () => {
    return Object.values(spriteState).filter((v) => v).length;
  };

  const filteredSprites = SPRITES.filter((sprite) => {
    if (filterStatus === "all") return true;
    const isCollected = sprite.variants.some(
      (variant) => spriteState[`${sprite.id}-${variant}`]
    );
    return filterStatus === "collected" ? isCollected : !isCollected;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-lg"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
                Sprite Checklist
              </h1>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <LogIn className="w-4 h-4" />
              Entrar
            </Button>
          </div>

          {/* Progress and Username */}
          <div className="flex items-center gap-4 mb-4">
            <Input
              placeholder="Seu nome de Fortnite (opcional)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="max-w-xs bg-slate-800 border-slate-700"
            />
            <div className="text-sm text-cyan-400 font-semibold">
              {getCollectedCount()} / {getTotalSprites()} coletados
            </div>
            <Button variant="outline" size="sm" className="gap-2 ml-auto">
              <Download className="w-4 h-4" />
              Baixar como Imagem
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Tabs */}
        <div className="mb-8">
          <Tabs value={selectedVariant} onValueChange={setSelectedVariant}>
            <TabsList className="bg-slate-800 border border-slate-700">
              <TabsTrigger value="normal">Normal</TabsTrigger>
              <TabsTrigger value="gummy">Gummi</TabsTrigger>
              <TabsTrigger value="gold">Ouro</TabsTrigger>
              <TabsTrigger value="galaxy">Galáxia</TabsTrigger>
              <TabsTrigger value="gem">Gema</TabsTrigger>
              <TabsTrigger value="holo">Holo</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Status Filter */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={filterStatus === "all" ? "default" : "outline"}
            onClick={() => setFilterStatus("all")}
            className={filterStatus === "all" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
          >
            Todos
          </Button>
          <Button
            variant={filterStatus === "collected" ? "default" : "outline"}
            onClick={() => setFilterStatus("collected")}
            className={filterStatus === "collected" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
          >
            Coletados
          </Button>
          <Button
            variant={filterStatus === "missing" ? "default" : "outline"}
            onClick={() => setFilterStatus("missing")}
            className={filterStatus === "missing" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
          >
            Faltando
          </Button>
        </div>

        {/* Sprites Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSprites.map((sprite) => {
            const imageUrl = sprite.imageUrls[selectedVariant];
            if (!imageUrl) return null;

            const spriteKey = `${sprite.id}-${selectedVariant}`;
            const isCollected = spriteState[spriteKey] || false;

            return (
              <div
                key={spriteKey}
                onClick={() => toggleSprite(sprite.id, selectedVariant)}
                className={`relative group cursor-pointer transition-all duration-200 ${
                  isCollected ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    isCollected
                      ? "border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "border-slate-700 hover:border-cyan-400/50"
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={sprite.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23374151' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='12' fill='%239CA3AF' text-anchor='middle' dominant-baseline='middle'%3ECarregando...%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                {isCollected && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cyan-400/10 rounded-lg">
                    <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    </div>
                  </div>
                )}
                <p className="text-xs text-slate-400 mt-2 text-center group-hover:text-cyan-400 transition-colors">
                  {sprite.name}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          <p>Ferramenta não oficial. Fortnite é marca registrada da Epic Games, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
