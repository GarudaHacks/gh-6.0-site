import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en">
      <body
        className={`min-h-screen max-w-screen overflow-x-hidden overflow-y-scroll flex flex-col bg-background antialiased ${montserrat.variable}`}
      >
        {/* Background Effects */}
        <div className="relative inset-0 -z-10">
          {/* <img src={"assets/ellipse2.svg"} width={800} height={800} className="absolute top-[0vh] md:right-20 object-fill"/>
          <img src={"assets/ellipse1.svg"} width={800} height={800} className="absolute top-[30vh] md:-left-50 object-fill"/> */}
          <img src={"assets/curve1.svg"} width={500} height={500} className="absolute top-[50vh] right-0"/>
          <img src={"assets/curve2.svg"} width={500} height={500} className="absolute top-[100vh] -left-60"/>
          <img src={"assets/curve3.svg"} width={800} height={800} className="absolute top-[220vh] -right-[25rem]"/>
          <img src={"assets/curve3.svg"} width={700} height={700} className="absolute top-[270vh] -left-[24rem]"/>
        </div>

        <Navbar />

          <div id="root" className="relative min-h-screen">
            <div className="grow flex flex-col z-10">
              {children}
            </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}