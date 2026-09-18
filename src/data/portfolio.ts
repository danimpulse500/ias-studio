export interface PortfolioItem {
  id: string;
  title: string;
  category: "Weddings" | "Architecture" | "Portraits" | "Films" | "Celebrations";
  aspectRatio: "cinema" | "portrait" | "landscape";
  src: string;
  year: string;
  location: string;
  story: string;
  camera?: string;
  lens?: string;
  filmStock?: string;
  featured?: boolean;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Weddings",
  "Architecture",
  "Portraits",
  "Films",
  "Celebrations",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "wed-01",
    title: "Golden Hour in Tuscany",
    category: "Weddings",
    aspectRatio: "cinema",
    src: "/IAS_4484.jpg",
    year: "2025",
    location: "Val d'Orcia, Italy",
    story: "An intimate evening surrounded by family, gentle laughter, and the soft amber glow of late summer.",
    camera: "Arri Alexa Mini LF",
    lens: "Cooke Anamorphic /i 50mm T2.3",
    filmStock: "Kodak Vision3 500T",
    featured: true,
  },
  {
    id: "arch-01",
    title: "Forms of Quiet",
    category: "Architecture",
    aspectRatio: "portrait",
    src: "/IAS_1603.jpg",
    year: "2026",
    location: "London, UK",
    story: "Exploring how natural morning light transforms clean Brutalist lines and textured concrete into visual poetry.",
    camera: "Hasselblad H6D-100c",
    lens: "HC 3,5/50mm II",
    filmStock: "Digital Medium Format Raw",
    featured: true,
  },
  {
    id: "port-01",
    title: "Serenity in Motion",
    category: "Portraits",
    aspectRatio: "portrait",
    src: "/IAS_3900 (2).jpg",
    year: "2026",
    location: "Paris, France",
    story: "A quiet editorial portrait session celebrating individuality, grace, and authentic presence.",
    camera: "Leica M11 Monochrome",
    lens: "Summilux-M 35mm f/1.4 ASPH",
    filmStock: "Monochrome Sensor Archival",
    featured: true,
  },
  {
    id: "film-01",
    title: "A Night to Remember",
    category: "Films",
    aspectRatio: "cinema",
    src: "/IAS_4484.jpg",
    year: "2025",
    location: "Lake Como, Italy",
    story: "A cinematic keepsake capturing heartfelt vows, tearful toasts, and dancing under the stars.",
    camera: "Red V-Raptor 8K",
    lens: "Atlas Orion Anamorphic 40mm",
    filmStock: "Custom Atelier Film LUT",
    featured: true,
  },
  {
    id: "port-02",
    title: "The Sculpted Light",
    category: "Portraits",
    aspectRatio: "landscape",
    src: "/IAS_3900 (2).jpg",
    year: "2025",
    location: "Milan, Italy",
    story: "Capturing character through soft window light and authentic, unposed moments.",
    camera: "Leica SL3",
    lens: "Noctilux-M 50mm f/0.95",
    filmStock: "Kodak Tri-X 400",
    featured: false,
  },
  {
    id: "celeb-01",
    title: "Generations Together",
    category: "Celebrations",
    aspectRatio: "cinema",
    src: "/IAS_1603.jpg",
    year: "2025",
    location: "Cotswolds, UK",
    story: "A milestone family gathering documenting genuine warmth across three generations.",
    camera: "Arri Amira",
    lens: "Zeiss Super Speed 25mm T1.3",
    filmStock: "Kodak Portra 800",
    featured: false,
  },
];
