import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stellarisdev.com"),
  title: "Stellaris Dev Solutions | Desarrollo Web, E-Commerce & Sistemas a Medida",
  description:
    "Agencia de desarrollo web de alto rendimiento. Creamos Landing Pages de alta conversión, Sitios Web Corporativos, E-Commerce y Sistemas/Apps a Medida. We Build. You Grow.",
  keywords: [
    "desarrollo web",
    "landing pages",
    "ecommerce",
    "sistemas a medida",
    "software development",
    "Next.js",
    "Tailwind CSS",
    "Stellaris Dev Solutions",
  ],
  openGraph: {
    title: "Stellaris Dev Solutions | High-End Web Development",
    description: "Desarrollo de software de alto impacto. Landing Pages, E-commerce y Web Apps.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060913] text-slate-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
