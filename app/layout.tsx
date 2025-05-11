"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full overflow-x-hidden overflow-y-scroll flex flex-col bg-background antialiased ${montserrat.variable}`}
      >
        {/* TODO: Background assets problematic in mobile */}
        <div className="inset-0 -z-10 overflow-hidden hidden md:block">
          {/* Top left gradient */}
          <div className="absolute -top-[30vh] -left-[20vw] w-[80vh] h-[80vh] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl" />

          {/* Top right gradient */}
          <div className="absolute -top-[10vh] right-[10vw] w-[60vh] h-[60vh] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl" />

          {/* Middle left gradient */}
          <div className="absolute top-[40vh] -left-[10vw] w-[70vh] h-[70vh] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />

          {/* Bottom right gradient */}
          <div className="absolute top-[80vh] right-[5vw] w-[90vh] h-[90vh] rounded-full bg-gradient-radial from-primary/25 to-transparent blur-3xl" />

          {/* Top left gradient */}
          <div className="absolute top-[150vh] -left-[20vw] w-[80vh] h-[80vh] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl" />

          {/* Top right gradient*/}
          <div className="absolute top-[160vh] -right-[20vw] w-[60vh] h-[60vh] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl" />

          {/* Middle left gradient */}
          <div className="absolute top-[240vh] -left-[10vw] w-[70vh] h-[70vh] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />

          {/* Bottom right gradient*/}
          <div className="absolute top-[320vh] -right-[20vw] w-[90vh] h-[90vh] rounded-full bg-gradient-radial from-primary/25 to-transparent blur-3xl" />

          <LazyLoadImage
            src={"assets/curve1.svg"}
            width={500}
            height={500}
            className="absolute top-[65vh] scale-75 md:scale-0 md:top-[50vh] -right-20 md:right-0"
          />
          <LazyLoadImage
            src={"assets/curve2.svg"}
            width={500}
            height={500}
            className="absolute top-[100vh] scale-75 md:scale-0 md:top-[100vh] -left-60 md:left-0"
          />
          <LazyLoadImage
            src={"assets/curve3.svg"}
            width={800}
            height={800}
            className="absolute top-[220vh] -right-[25rem] hidden md:block"
          />
          <LazyLoadImage
            src={"assets/curve3.svg"}
            width={700}
            height={700}
            className="absolute top-[270vh] -left-[24rem]"
          />
          <LazyLoadImage
            src={"assets/curve2.svg"}
            width={500}
            height={500}
            className="absolute top-[360vh] md:scale-0 md:top-[390vh] -left-60 md:left-0"
          />
        </div>

        <Navbar />
        <div id="root" className="relative min-h-screen">
          <div className="grow flex flex-col z-10">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
