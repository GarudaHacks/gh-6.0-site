import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garuda Hacks 6.0",
  description: "Garuda Hacks 6.0 - Indonesia's Premier Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full overflow-x-hidden overflow-y-scroll flex flex-col bg-background antialiased ${montserrat.variable}`}
      >
        <Background />
        <Navbar />
        <main className="relative flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
