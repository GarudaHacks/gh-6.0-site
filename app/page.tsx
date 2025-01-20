import ComingSoon from "./components/ComingSoon";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start">
        {
          /* <Hero />
        <About />
        <Stats />
        <Stories />
        <Tracks />
        <Judges />
        <Sponsors />
        <Countdown />
        <FAQ />
        <Footer /> */
          <ComingSoon />
        }
      </main>
    </div>
  );
}
