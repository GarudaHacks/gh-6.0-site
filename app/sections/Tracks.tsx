"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { tracksData } from "../data/data";
import Container from "../components/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";

const theme =
  "Garuda Hacks 6.0 challenges participants to build solutions that bring Indonesia's ideals closer to its lived reality. Whether through sustainability, cultural preservation, or civic engagement, this hackathon is about transforming narratives into tangible impact.";

const TrackCard = React.memo(
  ({ track, index }: { track: (typeof tracksData)[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -100px 0px",
    });

    return (
      <motion.div
        ref={ref}
        className="relative flex flex-col items-start p-6 text-white overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.1,
        }}
        style={{
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(177, 177, 177, 0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <div className="flex items-center gap-4 w-full">
          <div className="w-16 h-16 mx-2">
            <LazyLoadImage
              src={track.icon}
              alt={track.title}
              width={64}
              height={64}
              effect="opacity"
              threshold={100}
              wrapperClassName="w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{track.title}</h3>
            <p className="text-sm text-gray-200 mt-1">{track.description}</p>
          </div>
        </div>
      </motion.div>
    );
  }
);

TrackCard.displayName = "TrackCard";

const Tracks = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const isRightInView = useInView(rightRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const tracksList = useMemo(
    () =>
      tracksData.map((track, index) => (
        <TrackCard key={index} track={track} index={index} />
      )),
    []
  );

  const leftContent = useMemo(
    () => (
      <motion.div
        ref={leftRef}
        className="flex flex-col justify-center space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Identity
          </h3>
          <div className="text-xl md:w-[20vh] flex items-center justify-center translate-y-[5px] md:translate-y-[9px] italic font-serif">
            through
          </div>
          <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Innovation
          </h3>
        </div>
        <div>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            {theme}
          </p>
        </div>
      </motion.div>
    ),
    [isLeftInView]
  );

  const rightContent = useMemo(
    () => (
      <motion.div
        ref={rightRef}
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 50 }}
        animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {tracksList}
      </motion.div>
    ),
    [isRightInView, tracksList]
  );

  return (
    <section id="tracks" className="max-w-[100%]">
      <Container>
        <div className="flex flex-col items-center py-10 px-5 mb-[10vh]">
          <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
            {leftContent}
            {rightContent}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Tracks);
