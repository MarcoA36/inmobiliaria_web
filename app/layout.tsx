// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Playfair_Display } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import "./globals.css"

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   display: "swap",
// })

// export const metadata: Metadata = {
//   title: "Inmobiliaria Premium - Propiedades de Lujo",
//   description: "Encuentra tu propiedad ideal con nosotros",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="es">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }

import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/topbar";
import { WhatsAppButton } from "@/components/whatsapp-button";

import "./globals.css";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inmobiliaria Premium - Propiedades de Lujo",
  description: "Encuentra tu propiedad ideal con nosotros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        <TopBar />
        <Navbar />

        <Suspense fallback={null}>{children}</Suspense>
        
        <ContactForm />
        <WhatsAppButton />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
