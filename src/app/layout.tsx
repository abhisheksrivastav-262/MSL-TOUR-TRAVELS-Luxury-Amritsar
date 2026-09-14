import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Car Rental in Amritsar | MSL TOUR AND TRAVELS",
  description:
    "Book premium taxi and luxury car rental in Amritsar. Airport transfers, Golden Temple sightseeing, Wagah Border tours, outstation cabs and wedding cars.",
  keywords: [
    "car rental Amritsar",
    "taxi Amritsar",
    "Amritsar airport taxi",
    "Golden Temple cab",
    "Wagah border tour",
    "Innova Crysta Amritsar",
    "wedding cars Amritsar",
  ],
  openGraph: {
    title: "Luxury Car Rental in Amritsar | MSL TOUR AND TRAVELS",
    description:
      "Airport transfers, Golden Temple sightseeing, Wagah Border tours, outstation cabs and wedding cars — 24×7 premium chauffeurs.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://msltourandtravels.in"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="grain min-h-full bg-[#050505] font-[var(--font-body)] text-white antialiased">
        <Preloader />
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "MSL TOUR AND TRAVELS",
              address: "Sultanwind, Amritsar, Punjab, India",
              openingHours: "Mo-Su 00:00-23:59",
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1240" },
            }),
          }}
        />
      </body>
    </html>
  );
}
