import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Sponsors from "./sections/Sponsors";
import Stories from "./sections/Stories";
import Judges from "./sections/Judges";
import Tracks from "./sections/Tracks";
import Countdown from "./sections/Countdown";
import About from "./sections/About";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start">
        <Hero />
        <About />
        <Stats />
        <Stories />
        <Tracks />
        <Judges />
        <Sponsors />
        <Countdown />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
