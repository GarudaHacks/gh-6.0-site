import ComingSoon from "./components/ComingSoon";
import Team from "./sections/Team";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 md:p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start">
        {/* <Hero />
        <About />
        <Stats />
        <Stories />
        <Tracks />
        <Judges />
        <Sponsors />
        <Countdown />
        <FAQ /> */}
        <Team /> 
        {/* <ComingSoon /> */}
      </main>
    </div>
  );
}
