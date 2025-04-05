"use client";

import React from "react";
import Container from "../components/Container";

const content = {
  tagline:
    "Garuda Hacks is Southeast Asia's largest hackathon, with over 6000 total participants.",
  description:
    "We are a 501c3 nonprofit dedicated to empowering young Indonesians with the skills and motivation to solve the country's most urgent issues. Despite their skill and ideas, many talented programmers lack the resources to succeed in the job market- as a result, we began our organization in 2020, launching our first hackathon online. Since then, we have hosted SEA's largest hackathons for five years consecutively and have helped thousands of students develop in both computer science and entrepreneurship.",
};

// This section contains information regarding Garuda Hacks' core mission and values
// Particularly, what hackers can expect from GH 6.0, and pictures from previous years
function About() {
  return (
    <section id="about" className="min-h-[70vh] py-20">
      <Container>
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-bold text-white">
              What is <i>Garuda Hacks</i>?
            </h2>
            {/* Tagline */}
            <div className="text-center">
              <p className="text-2xl font-semibold text-[#FF0068]">
                {content.tagline}
              </p>
            </div>
            <p className="text-md font-normal text-gray-300 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
