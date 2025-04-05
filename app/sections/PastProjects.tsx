import React from "react";
import Container from "../components/Container";
import Image from "next/image";

const projects = [
  {
    title: "HijauKita",
    description: "HijauKita is an app designed to encourage community participation in sustainability activities in Indonesia. It addresses environmental and social challenges by providing information on SDGs activities like tree planting and waste collection.",
    image: "/assets/projects/hijaukita.png",
    link: "https://devpost.com/software/hijaukita?_gl=1*o9r3wd*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzAxODkuMC4wLjA.",
  },
  {
    title: "Aspiring AI",
    description: "Aspiring AI is an AI-powered platform that helps students create a compelling tech portfolio in 15 minutes, giving them a better chance to land their dream tech internship. It uses AI to write the portfolio text and convert profiles into professional pages",
    image: "/assets/projects/aspiringAI.png",
    link: "https://devpost.com/software/p-lbraso?_gl=1*8furrd*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzAyNTAuMC4wLjA.",
  },
  {
    title: "Jendela",
    description: "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners, providing skills like cooking, makeup, and barista, offering a new start.",
    image: "/assets/projects/jendela.png",
    link: "https://devpost.com/software/jendela?_gl=1*837o5i*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzA2NTEuMC4wLjA.",
  },
  {
    title: "JalanKami",
    description: "JalanKami is a platform improving urban walkability by providing tools like an interactive map, a forum for reporting infrastructure issues, an area summarizer for insights, and a sidewalk detection tool for gauging accessibility",
    image: "/assets/projects/jalankami.jpg",
    link: "https://devpost.com/software/jalankami",
  },
];

function PastProjects() {
  return (
    <section id="past-projects" className="w-full py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Garuda Hacks Past Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-white bg-gradient-to-b from-[rgba(177,177,177,0.20)] to-[rgba(127,127,127,0.60)] backdrop-blur-sm"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-[#FF0068] text-white font-semibold rounded-md hover:bg-opacity-90 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF0068]"></span>
            <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PastProjects;
