"use client";

import { motion } from "framer-motion";
import { tracksData } from "../data/data";
import Container from "../components/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";

const theme =
  "Garuda Hacks 6.0 challenges participants to build solutions that bring Indonesia's ideals closer to its lived reality. Whether through sustainability, cultural preservation, or civic engagement, this hackathon is about transforming narratives into tangible impact.";

const Tracks = () => {
  return (
    <section id="tracks">
      <Container>
        <div className="flex flex-col items-center py-10 px-5 mb-[10vh]">
          <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Identity
              </h3>
              <div className="text-xl w-[20vh] flex items-center justify-center translate-y-[9px] italic font-serif">through</div>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Innovation
              </h3>
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">{theme}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {tracksData.map((track, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-start p-6 text-white overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                style={{
                  borderRadius: "15px",
                  border: "1px solid #FFF",
                  background:
                    "linear-gradient(180deg, rgba(177, 177, 177, 0.20) 0%, rgba(127, 127, 127, 0.60) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-16 h-16 mx-2">
                    <LazyLoadImage
                      src={track.icon}
                      alt={track.title}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {track.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {track.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default Tracks;
