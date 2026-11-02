import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/effects/ThemeProvider";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AmbientLayer } from "@/components/effects/AmbientLayer";
import { GlobalGrid } from "@/components/effects/GlobalGrid";
import { CommandPalette } from "@/components/CommandPalette";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { personal } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Both inlined by next.config.mjs so they track whichever host built this.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chava-sai.github.io/Portfolio";
// Next does not apply basePath to metadata icon URLs, so prefix them here.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} · AI/ML Engineer`,
    template: `%s · ${personal.name}`,
  },
  description: personal.tagline,
  applicationName: `${personal.name} · Portfolio`,
  authors: [{ name: personal.name, url: personal.socials.linkedin }],
  creator: personal.name,
  keywords: [
    "Srinivasa Sai Chava",
    "AI Engineer",
    "Machine Learning Engineer",
    "NLP",
    "Computer Vision",
    "Boston University",
    "Retrieval-Augmented Generation",
    "Code-Mixed NLP",
    "Transformers",
    "PyTorch",
    "QLoRA",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${personal.name} · AI/ML Engineer`,
    description: personal.tagline,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} · AI/ML Engineer`,
    description: personal.tagline,
  },
  robots: { index: true, follow: true },
  manifest: `${BASE_PATH}/manifest.json`,
  icons: {
    icon: [
      { url: `${BASE_PATH}/logo.svg`, type: "image/svg+xml" },
      {
        url: `${BASE_PATH}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${BASE_PATH}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [{ url: `${BASE_PATH}/favicon.ico` }],
    apple: [{ url: `${BASE_PATH}/apple-touch-icon.png`, sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* Person schema — this is what lets a search for the name surface
            the site with an identity panel rather than a bare blue link. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personal.name,
              alternateName: "Sai Chava",
              url: SITE_URL,
              image: `${SITE_URL}/profile.png`,
              jobTitle: "AI/ML Engineer",
              description: personal.tagline,
              email: personal.email,
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Boston University",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Indian Institute of Information Technology Dharwad",
                },
              ],
              knowsAbout: [
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Retrieval-Augmented Generation",
                "Code-Mixed NLP",
                "Deep Learning",
              ],
              sameAs: [
                personal.socials.github,
                personal.socials.linkedin,
                personal.socials.anthology,
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <GlobalGrid />
          <AmbientLayer />
          <CustomCursor />
          <CommandPalette />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
