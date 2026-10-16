export const PORTFOLIO_CATEGORIES = [
  "All",
  "Wedding Coverage",
  "Best Friends",
  "Event Photography",
  "Kids Photography",
  "Outdoor Home Sessions",
  "Picture Enlargement",
  "Product Photography",
  "Real Estate Photography",
  "The Elegant Lady",
  "The Expectant Parents",
  "The Happy Family",
  "The Perfect Gentleman",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];
type CollectionCategory = Exclude<PortfolioCategory, "All">;

export interface PortfolioItem {
  id: string;
  title: string;
  category: CollectionCategory;
  src: string;
  story: string;
  featured?: boolean;
}

const collections: {
  category: CollectionCategory;
  folder: string;
  files: string[];
}[] = [
  {
    category: "Wedding Coverage",
    folder: "Wedding coverage",
    files: [
      "IAS_8166.jpg",
      "IAS_8180.jpg",
      "IAS_3709.jpg",
      "IAS_3745.jpg",
      "IAS_3853.jpg",
      "standard.jpg",
    ],
  },
  {
    category: "Best Friends",
    folder: "BEST FRIENDS",
    files: [
      "IAS_1110.jpg",
      "IAS_1126.jpg",
      "IAS_7169.jpg",
      "IAS_7247.jpg",
      "IAS_7643.jpg",
      "IAS_9479.jpg",
      "IMG-20260729-WA0006.jpg",
    ],
  },
  {
    category: "Event Photography",
    folder: "EVENT PHOTOGRAPHY",
    files: ["IMG-20260729-WA0005.jpg"],
  },
  {
    category: "Kids Photography",
    folder: "KIDS PHOTOGRAPHY",
    files: [
      "IAS_6717.jpg",
      "IAS_7904.jpg",
      "IAS_8451.jpg",
      "IAS_8863.jpg",
      "IAS_8870.jpg",
      "IAS_8871.jpg",
      "IMG-20260729-WA0024.jpg",
    ],
  },
  {
    category: "Outdoor Home Sessions",
    folder: "OUTDOOR- HOME SESSIONS",
    files: ["IMG-20260729-WA0009.jpg"],
  },
  {
    category: "Picture Enlargement",
    folder: "PICTURE ENLARGEMENT",
    files: ["IMG-20260729-WA0010.jpg"],
  },
  {
    category: "Product Photography",
    folder: "PRODUCT PHOTOGRAPHY",
    files: ["IMG-20260729-WA0008.jpg"],
  },
  {
    category: "Real Estate Photography",
    folder: "REAL ESTATE PHOTOGRAPHY",
    files: ["IMG-20260729-WA0011.jpg"],
  },
  {
    category: "The Elegant Lady",
    folder: "THE ELEGANT LADY",
    files: [
      "IAS_2786.jpg",
      "IAS_5021.jpg",
      "IAS_6742.jpg",
      "IAS_8329 CAT.jpg",
    ],
  },
  {
    category: "The Expectant Parents",
    folder: "THE EXPECTANT PARENTS",
    files: ["IMG-20260729-WA0007.jpg"],
  },
  {
    category: "The Happy Family",
    folder: "THE HAPPY FAMILY",
    files: [
      "IAS_1119.jpg",
      "IAS_7921.jpg",
      "IAS_8329-CAT-Recovered.jpg",
      "IAS_9639.jpg",
      "IAS_9644.jpg",
    ],
  },
  {
    category: "The Perfect Gentleman",
    folder: "THE PERFECT GENTLEMAN",
    files: ["IAS_8329-CAT-MEN.jpg"],
  },
];

export const portfolioItems: PortfolioItem[] = collections.flatMap(
  ({ category, folder, files }) =>
    files.map((file, index) => {
      const title = file.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ");

      return {
        id: `${category.toLowerCase().replaceAll(" ", "-")}-${index + 1}`,
        title,
        category,
        src: `/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        story: `A photograph from the ${category.toLowerCase()} collection.`,
        featured: folder === "Wedding coverage" && file === "IAS_8166.jpg",
      };
    }),
);
