export type ProductCategory = "sol" | "graduados" | "desporto";

export type StyleTag =
  | "bold"
  | "classic"
  | "minimal"
  | "sport"
  | "sophisticated"
  | "creative";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  /** All real gallery images available for this model, main image first. */
  images: string[];
  imageWidth: number;
  imageHeight: number;
  styles: StyleTag[];
};

// Prices and descriptions preserved exactly as provided in the source material.
export const products: Product[] = [
  {
    id: "rose-azure",
    name: "NUVOR — Rose Azure",
    category: "sol",
    price: 24.99,
    originalPrice: 39.99,
    description:
      "Armação transparente com detalhes em rose gold, lentes azul claro. Elegância discreta com um toque de cor.",
    image: "/images/products/rose-azure.webp",
    images: ["/images/products/rose-azure.webp"],
    imageWidth: 1206,
    imageHeight: 1210,
    styles: ["sophisticated", "creative"],
  },
  {
    id: "bold-orange",
    name: "NUVOR — Bold Orange",
    category: "sol",
    price: 19.99,
    originalPrice: 32.99,
    description:
      "Armação chunky em acetato preto, lentes laranja bold. Para quem não passa despercebido.",
    image: "/images/products/bold-orange.webp",
    images: ["/images/products/bold-orange.webp"],
    imageWidth: 1206,
    imageHeight: 1196,
    styles: ["bold", "creative"],
  },
  {
    id: "sport-glacier",
    name: "NUVOR — Sport Glacier",
    category: "desporto",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "Máscara desportiva branca, lente espelhada azul-gelo. Contraste limpo, visual de vanguarda.",
    image: "/images/products/sport-glacier.webp",
    images: ["/images/products/sport-glacier.webp"],
    imageWidth: 1206,
    imageHeight: 1196,
    styles: ["sport", "creative"],
  },
  {
    id: "sport-onyx",
    name: "NUVOR — Sport Onyx",
    category: "desporto",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "Máscara desportiva preta total, lente cinza degradê. Aerodinâmica, discreta, feita para o movimento.",
    image: "/images/products/sport-onyx.webp",
    images: ["/images/products/sport-onyx.webp"],
    imageWidth: 1206,
    imageHeight: 1172,
    styles: ["sport", "minimal"],
  },
  {
    id: "sport-rose",
    name: "NUVOR — Sport Rosé",
    category: "desporto",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "Máscara desportiva, armação fosca translúcida, lente espelhada rosé multicolor. Performance com atitude.",
    image: "/images/products/sport-rose.webp",
    images: ["/images/products/sport-rose.webp"],
    imageWidth: 1206,
    imageHeight: 1086,
    styles: ["sport", "bold"],
  },
  {
    id: "optical-noir",
    name: "NUVOR — Optical Noir",
    category: "graduados",
    price: 24.99,
    originalPrice: 39.99,
    description:
      "Armação ótica em acetato preto, detalhe interior azul nas hastes. Presença séria, acabamento discreto.",
    image: "/images/products/optical-noir.webp",
    images: ["/images/products/optical-noir.webp"],
    imageWidth: 1206,
    imageHeight: 1196,
    styles: ["classic", "sophisticated"],
  },
  {
    id: "optical-clear",
    name: "NUVOR — Optical Clear",
    category: "graduados",
    price: 24.99,
    originalPrice: 39.99,
    description:
      "Armação ótica em acetato transparente, lente neutra. Design quadrado, leve, pronta para lente graduada.",
    image: "/images/products/optical-clear.webp",
    images: ["/images/products/optical-clear.webp"],
    imageWidth: 1206,
    imageHeight: 1162,
    styles: ["minimal", "classic"],
  },
  {
    id: "square-navy",
    name: "NUVOR — Square Navy",
    category: "sol",
    price: 19.99,
    originalPrice: 32.99,
    description:
      "Armação quadrada em acetato preto, lentes azul-marinho profundas. Traço firme, olhar direto.",
    image: "/images/products/square-navy.webp",
    images: ["/images/products/square-navy.webp"],
    imageWidth: 1206,
    imageHeight: 1156,
    styles: ["bold", "classic"],
  },
  {
    id: "round-classic-rimless",
    name: "NUVOR — Round Classic",
    category: "sol",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "O clássico redondo em acetato preto, lentes cinza-escuras. Atemporal, discreto, nunca sai de moda.",
    image: "/images/products/round-classic-rimless.webp",
    images: ["/images/products/round-classic-rimless.webp"],
    imageWidth: 1206,
    imageHeight: 1076,
    styles: ["classic", "minimal"],
  },
  {
    id: "rimless-blue",
    name: "NUVOR — Rimless Blue",
    category: "sol",
    price: 19.99,
    originalPrice: 34.99,
    description:
      "Sem aro, hastes castanhas e douradas, lentes castanhas degradê. Combinação quente, atitude fria.",
    image: "/images/products/rimless-blue.webp",
    images: ["/images/products/rimless-blue.webp"],
    imageWidth: 1206,
    imageHeight: 1141,
    styles: ["sophisticated", "minimal"],
  },
  {
    id: "rimless-onyx",
    name: "NUVOR — Rimless Silver",
    category: "desporto",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "Sem aro, hastes pretas, lentes cinza degradê. Minimalismo que não passa despercebido.",
    image: "/images/products/rimless-onyx.webp",
    images: ["/images/products/rimless-onyx.webp"],
    imageWidth: 1206,
    imageHeight: 1153,
    styles: ["sport", "minimal"],
  },
  {
    id: "vintage-gold-tortoise",
    name: "NUVOR — Vintage Gold",
    category: "sol",
    price: 24.99,
    originalPrice: 39.99,
    description:
      "Metal preto e dourado, textura tartaruga, lentes castanhas. Um retrô elevado, feito para durar.",
    image: "/images/products/vintage-gold-tortoise.webp",
    images: ["/images/products/vintage-gold-tortoise.webp"],
    imageWidth: 1196,
    imageHeight: 1147,
    styles: ["sophisticated", "classic"],
  },
  {
    id: "vintage-gold-olive",
    name: "NUVOR — Vintage Gold",
    category: "sol",
    price: 24.99,
    originalPrice: 39.99,
    description:
      "Metal preto e dourado, design recortado, lentes verde-oliva. A peça mais exclusiva da coleção NUVOR. Edição limitada.",
    image: "/images/products/vintage-gold-olive.webp",
    images: ["/images/products/vintage-gold-olive.webp"],
    imageWidth: 1206,
    imageHeight: 1006,
    styles: ["sophisticated", "creative"],
  },
  {
    id: "octagon-crystal-grey",
    name: "NUVOR — Octagon Crystal",
    category: "sol",
    price: 19.99,
    originalPrice: 32.99,
    description:
      "Armação octogonal transparente, lentes azul-claras translúcidas. Leveza visual, presença que não passa despercebida.",
    image: "/images/products/octagon-crystal-grey.webp",
    images: ["/images/products/octagon-crystal-grey.webp"],
    imageWidth: 1206,
    imageHeight: 1155,
    styles: ["creative", "minimal"],
  },
  {
    id: "rimless-silver-premium",
    name: "NUVOR — Rimless Silver",
    category: "sol",
    price: 24.99,
    originalPrice: 42.99,
    description:
      "Sem aro, hastes douradas com acabamento premium, lentes cinza degradê. Minimalismo que impressiona.",
    image: "/images/products/rimless-silver-premium.webp",
    images: ["/images/products/rimless-silver-premium.webp"],
    imageWidth: 1206,
    imageHeight: 1149,
    styles: ["minimal", "sophisticated"],
  },
  {
    id: "round-classic-blue",
    name: "NUVOR — Round Classic",
    category: "sol",
    price: 14.99,
    originalPrice: 27.99,
    description:
      "O clássico redondo que nunca sai de moda. Armação preta, lentes azul/cinza. Simples, atemporal, poderoso.",
    image: "/images/products/round-classic-blue.webp",
    images: ["/images/products/round-classic-blue.webp"],
    imageWidth: 1206,
    imageHeight: 1128,
    styles: ["classic", "bold"],
  },
  {
    id: "square-clear",
    name: "NUVOR — Square Clear",
    category: "sol",
    price: 19.99,
    originalPrice: 32.99,
    description:
      "Armação quadrada em acetato transparente, lentes escuras. O statement piece para quem lidera.",
    image: "/images/products/square-clear.webp",
    images: ["/images/products/square-clear.webp"],
    imageWidth: 1206,
    imageHeight: 1131,
    styles: ["bold", "creative"],
  },
  {
    id: "octagon-crystal-blue",
    name: "NUVOR — Octagon Crystal",
    category: "sol",
    price: 19.99,
    originalPrice: 32.99,
    description:
      "Armação octogonal transparente com lentes azul claro. Geometria perfeita, presença garantida.",
    image: "/images/products/octagon-crystal-blue.webp",
    images: ["/images/products/octagon-crystal-blue.webp"],
    imageWidth: 1206,
    imageHeight: 1163,
    styles: ["creative", "sophisticated"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByStyle(style: StyleTag): Product[] {
  return products.filter((p) => p.styles.includes(style));
}

export const featuredProductIds = [
  "square-navy",
  "vintage-gold-tortoise",
  "sport-onyx",
  "rimless-silver-premium",
  "octagon-crystal-blue",
  "round-classic-blue",
];
