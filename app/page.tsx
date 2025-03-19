import ComingSoon from "./components/ComingSoon";
import About from "./sections/About";
import Countdown from "./sections/Countdown";
import Hero from "./sections/Hero";
import Team from "./sections/Team";

const targetDate = "2025-06-20T00:00:00"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 md:p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start">
        <Hero />
        <Countdown targetDate={targetDate}/>
        <About />
        {/*
        <Stats />
        <Stories />
        <Tracks />
        <Judges />
        <Sponsors />
        <FAQ /> */}
        <Team /> 
        {/* <ComingSoon /> */}
      </main>
    </div>
  );
}
