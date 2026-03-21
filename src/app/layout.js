import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotificationBar from "@/components/NotificationBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { clinic, medicalBusinessSchema, websiteSchema } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: `${clinic.name} | ${clinic.tagline}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "dental clinic",
    "dentist in Kanpur",
    "cosmetic dentist",
    "family dentistry",
    "emergency dental care",
    "root canal treatment",
  ],
  authors: [{ name: clinic.name }],
  creator: clinic.name,
  publisher: clinic.name,
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clinic.url,
    siteName: clinic.name,
    title: `${clinic.name} | ${clinic.tagline}`,
    description: clinic.description,
    images: [
      {
        url: "/banner-img.png",
        width: 1200,
        height: 630,
        alt: `${clinic.name} dental care team`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | ${clinic.tagline}`,
    description: clinic.description,
    images: ["/banner-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData data={medicalBusinessSchema()} />
        <StructuredData data={websiteSchema()} />
        <NotificationBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
