"use client";

import React from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";

const content = {
  description:
    "We are a 501c3 nonprofit dedicated to empowering young Indonesians with the skills and motivation to solve the country's most urgent issues. Despite their skill and ideas, many talented programmers lack the resources to succeed in the job market – as a result, we began our organization in 2020, launching our first hackathon online. Since then, we have hosted SEA's largest hackathons for five years consecutively and have helped thousands of students develop in both computer science and entrepreneurship.",
};

// Garuda Hacks' core mission and values
function About() {
  return (
    <section id="about" className="min-h-[70vh] py-20 -translate-x-8 md:translate-x-0">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="min-w-1/2">
            <motion.img
              src="/assets/garudie.png"
              alt="Garuda Hacks Logo"
              className="w-[25vw] md:w-[16vw] object-cover"
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="max-w-3xl px-10 space-y-20">
            <div className="text-left space-y-6">
              {/* Tagline */}
              <div>
                <p className="text-lg md:text-3xl font-semibold text-[#ffa7ca]">
                  Garuda Hacks is Southeast Asia&apos;s largest hackathon, with over <span className="font-medium italic font-serif">6000</span> total participants.
                </p>
              </div>
              <p className="text-sm md:text-md font-normal text-gray-300 leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
