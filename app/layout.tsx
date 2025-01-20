import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garuda Hacks 6.0",
  description: "Landing page for GH 6.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`h-full flex flex-col overflow-hidden antialiased ${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
      >
        <div id="root" className="flex flex-col h-full">
          <Navbar />

          <div className="flex-1 flex flex-col justify-center overflow-hidden">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
