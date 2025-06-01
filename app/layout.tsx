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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
      </head>
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
