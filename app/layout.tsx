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
        <div className="inset-0 -z-10 overflow-hidden">
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

          {/* Top right gradient */}
          <div className="absolute top-[160vh] -right-[20vw] w-[60vh] h-[60vh] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl" />

          {/* Middle left gradient */}
          <div className="absolute top-[240vh] -left-[10vw] w-[70vh] h-[70vh] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />

          {/* Bottom right gradient */}
          <div className="absolute top-[320vh] -right-[20vw] w-[90vh] h-[90vh] rounded-full bg-gradient-radial from-primary/25 to-transparent blur-3xl" />

          {/* Keep existing curve images */}
          <img
            src={"assets/curve1.svg"}
            width={500}
            height={500}
            className="absolute top-[50vh] right-0"
          />
          <img
            src={"assets/curve2.svg"}
            width={500}
            height={500}
            className="absolute top-[100vh] -left-60"
          />
          <img
            src={"assets/curve3.svg"}
            width={800}
            height={800}
            className="absolute top-[220vh] -right-[25rem]"
          />
          <img
            src={"assets/curve3.svg"}
            width={700}
            height={700}
            className="absolute top-[270vh] -left-[24rem]"
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
