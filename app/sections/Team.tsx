"use client";

import React, { useState, useEffect } from "react";
import teamData from "../data/team.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Member = {
  name: string;
  title: string;
  profile: string;
};

function bgColorOnTitle(title: string) {
  if (title.includes("Tech & Hack")) {
    return { bg: "bg-sky-800", border: "border-sky-900" };
  } else if (title.includes("Logistics")) {
    return { bg: "bg-indigo-600", border: "border-indigo-700" };
  } else if (title.includes("Marketing")) {
    return { bg: "bg-purple-700", border: "border-purple-800" };
  } else if (title.includes("Managing Director")) {
    return { bg: "bg-fuchsia-800", border: "border-fuchsia-900" };
  } else if (title.includes("Partnerships")) {
    return { bg: "bg-pink-600", border: "border-pink-700" };
  }
}

// Display GH team members' profile pictures, names, and their roles
function Team() {
  const [hoveredMember, setHoveredMember] = useState<Member | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Flat map to properties
  const allMembers: Member[] = teamData.teams.flatMap((team) =>
    team.executives.map((exec) => ({
      name: exec.name,
      title: exec.title,
      profile: exec.profile,
    }))
  );

  return (
    <div className="relative max-w-[100vw] flex flex-col items-center justify-center md:pb-12 my-[15vh] md:translate-x-0 overflow-x-hidden md:overflow-x-visible">
      <div className="mb-[6vh] font-normal px-16 text-center">
        Brought to you with 🩷 by the{" "}
        <span className="font-bold font-serif text-md italic">
          Garuda Hacks
        </span>{" "}
        team
      </div>

      <div className="flex gap-[1rem] md:gap-[2rem] animate-teamScroll w-[200%] hover:pause group">
        {[...allMembers, ...allMembers].map((member, index) => (
          <LazyLoadImage
            src={`/profiles/${member.profile}`}
            alt={member.name}
            width={isMobile ? 75 : 100}
            height={isMobile ? 75 : 100}
            key={index}
            className="!aspect-square object-cover rounded-lg cursor-pointer hover:border-white hover:border-[2px] hover:!opacity-100 group-hover:opacity-50"
            onMouseEnter={() => setHoveredMember(member)}
            onMouseLeave={() => setHoveredMember(null)}
          />
        ))}
      </div>

      <div
        className={`flex flex-col md:flex-row justify-center w-full items-center gap-4 rounded-lg md:min-h-[80px] min-h-[140px] text-center p-4 transition-all duration-200`}
      >
        <div
          className={`font-semibold text-md ${
            hoveredMember ? "block" : "hidden"
          }`}
        >
          {hoveredMember?.name}
        </div>
        <LazyLoadImage
          src="/assets/icon/star-four.svg"
          alt="star"
          width={16}
          height={16}
          className={`w-4 h-4 ${hoveredMember ? "block" : "hidden"}`}
        />
        <div
          className={`text-sm text-neutral-200 max-w-fit font-medium rounded-full py-1 px-2 border-[1px] ${
            hoveredMember ? "block" : "hidden"
          } ${hoveredMember && bgColorOnTitle(hoveredMember.title)?.bg} ${
            hoveredMember && bgColorOnTitle(hoveredMember.title)?.border
          }`}
        >
          {hoveredMember?.title}
        </div>
      </div>
    </div>
  );
}

export default Team;
