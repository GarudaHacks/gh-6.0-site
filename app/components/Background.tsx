"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden hidden md:block">
      {/* Reduced number of gradients and optimized blur effects */}
      <div className="absolute -top-[30vh] -left-[20vw] w-[80vh] h-[80vh] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
      <div className="absolute top-[40vh] -left-[10vw] w-[70vh] h-[70vh] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl" />
      <div className="absolute top-[150vh] -left-[20vw] w-[80vh] h-[80vh] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
      <div className="absolute top-[240vh] -left-[10vw] w-[70vh] h-[70vh] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl" />

      {/* Optimized image loading with priority and proper sizing */}
      <LazyLoadImage
        src={"/assets/curve1.svg"}
        width={500}
        height={500}
        className="absolute top-[65vh] scale-75 md:scale-0 md:top-[50vh] -right-20 md:right-0"
        effect="opacity"
        threshold={100}
      />
      <LazyLoadImage
        src={"/assets/curve2.svg"}
        width={500}
        height={500}
        className="absolute top-[100vh] scale-75 md:scale-0 md:top-[100vh] -left-60 md:left-0"
        effect="opacity"
        threshold={100}
      />
      <LazyLoadImage
        src={"/assets/curve3.svg"}
        width={800}
        height={800}
        className="absolute top-[220vh] -right-[25rem] hidden md:block"
        effect="opacity"
        threshold={100}
      />
      <LazyLoadImage
        src={"/assets/curve3.svg"}
        width={700}
        height={700}
        className="absolute top-[270vh] -left-[24rem]"
        effect="opacity"
        threshold={100}
      />
      <LazyLoadImage
        src={"/assets/curve2.svg"}
        width={500}
        height={500}
        className="absolute top-[360vh] md:scale-0 md:top-[390vh] -left-60 md:left-0"
        effect="opacity"
        threshold={100}
      />
    </div>
  );
}
