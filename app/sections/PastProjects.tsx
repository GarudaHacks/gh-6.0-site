"use client";

import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../data/data";

function PastProjects() {
  const [projectsPerPage, setProjectsPerPage] = useState<number | null>(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 350;
  const cardGap = 24;

  // Update projectsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setProjectsPerPage(3);
      } else if (window.innerWidth >= 800) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hydration fix: Only render content when projectsPerPage is set
  if (projectsPerPage === null) {
    return null; 
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const totalPages = projects.length;

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="past-projects" className="w-full py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Past Projects
        </h2>

        <div className="relative">
          {/* Center container with fixed width */}
          <div
            className="mx-auto"
            style={{
              width: `${
                cardWidth * projectsPerPage + cardGap * (projectsPerPage - 1)
              }px`,
              maxWidth: "100%",
            }}
          >
            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 text-white hover:text-[#FF0068] transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 text-white hover:text-[#FF0068] transition-colors"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Projects Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500"
                style={{
                  transform: `translateX(-${
                    currentIndex * (cardWidth + cardGap)
                  }px)`,
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      width: `${cardWidth}px`,
                      flexShrink: 0,
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Page dots */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-[#FF0068]"
                      : "bg-white opacity-50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Move ProjectCard outside of the main component
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="relative h-full overflow-hidden rounded-lg border border-white bg-gradient-to-b from-[rgba(177,177,177,0.20)] to-[rgba(127,127,127,0.60)] backdrop-blur-sm group hover:border-[#FF0068] transition-all duration-300">
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={350}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white group-hover:text-[#FF0068] transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mt-2 h-[60px] overflow-hidden">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-[#FF0068] text-white font-semibold rounded-md hover:bg-opacity-90 transition"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default PastProjects;
