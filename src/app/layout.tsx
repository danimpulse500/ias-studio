import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IAS Studio | Editorial Cinematography & Fine Art Photography Atelier",
  description:
    "An editorial cinematography and photography atelier. Preserving moments, architectural form, high-fashion portraiture, and luxury celebrations with deliberate visual poetry.",
  keywords: [
    "cinematography",
    "architectural photography",
    "editorial portraits",
    "luxury wedding cinema",
    "anamorphic lens",
    "IAS Studio",
    "fine art photography",
  ],
  openGraph: {
    title: "IAS Studio | Editorial Cinematography & Fine Art Photography",
    description:
      "Documenting weddings, architecture, and editorial portraits with deliberate visual poetry, medium-format cameras, and natural light.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased scroll-smooth",
        displayFont.variable,
        sansFont.variable,
        monoFont.variable
      )}
    >
      <head>
        {/* Unregister any stray Service Worker on localhost (e.g. from previous PWA projects) to prevent auto-refresh loops */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var r of registrations) { r.unregister(); }
                });
              }
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#faf8f5] text-[#121214] dark:bg-[#08080a] dark:text-white selection:bg-amber-400/30 selection:text-amber-900 dark:selection:text-amber-200 font-sans tracking-tight transition-colors duration-300"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
