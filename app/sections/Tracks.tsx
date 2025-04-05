"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { tracksData } from "../data/data";
import Container from "../components/Container";

const theme =
  "Garuda Hacks 6.0 challenges participants to build solutions that bring Indonesia's ideals closer to its lived reality. Whether through sustainability, cultural preservation, or civic engagement, this hackathon is about transforming narratives into tangible impact.";

const Tracks = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="flex flex-col items-center py-10 px-5">

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Column - Theme */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                identity
              </h3>
              <p className="text-xl">through</p>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                innovation
              </h3>
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">{theme}</p>
            </div>
          </div>

          {/* Right Column - Track Cards */}
          <div className="flex flex-col gap-6">
          {/* <h2 className="text-3xl font-bold text-white ">OUR TRACKS</h2> */}
            {tracksData.map((track, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-start p-6 text-white cursor-pointer overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  borderRadius: "15px",
                  border: "1px solid #FFF",
                  background:
                    "linear-gradient(180deg, rgba(177, 177, 177, 0.20) 0%, rgba(127, 127, 127, 0.60) 100%)",
                  backdropFilter: "blur(2px)",
                }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {track.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {track.description}
                    </p>
                  </div>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Tracks;
