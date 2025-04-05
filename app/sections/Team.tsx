"use client";

import React, { useState } from "react";
import teamData from "../data/team.json";
import Image from "next/image";

type Member = {
  name: string;
  title: string;
  profile: string;
};

function bgColorOnTitle(title: string) {
  if (title.includes("Tech & Hack")) {
    return { bg: "bg-sky-800", border: "border-sky-900" };
  } else if (title.includes("Logistics")) {
    return { bg: "bg-green-600", border: "border-green-700" };
  } else if (title.includes("Marketing")) {
    return { bg: "bg-yellow-700", border: "border-yellow-800" };
  } else if (title.includes("Managing Director")) {
    return { bg: "bg-red-800", border: "border-red-800" };
  } else if (title.includes("Partnerships")) {
    return { bg: "bg-purple-600", border: "border-purple-700" };
  }
}

// Component to display GH team members' profile pictures, names, and their roles
// Dynamically scrolls from left to right and pauses upon hover
function Team() {
  // Set state of all team members
  const [hoveredMember, setHoveredMember] = useState<Member | null>(null);

  // Flat map to properties
  const allMembers: Member[] = teamData.teams.flatMap((team) =>
    team.executives.map((exec) => ({
      name: exec.name,
      title: exec.title,
      profile: exec.profile,
    }))
  );

  return (
    <div className="relative max-w-[100vw] flex flex-col items-center justify-center pb-12 my-[20vh]">
      <div className="mb-[6vh] font-normal">
        Brought to you with 🤍 by the{" "}
        <span className="font-bold">Garuda Hacks</span> team
      </div>

      <div className="flex gap-[2rem] animate-teamScroll w-[200%] hover:pause group">
        {[...allMembers, ...allMembers].map((member, index) => (
          <Image
            src={`/profiles/${member.profile}`}
            alt={member.name}
            width={100}
            height={100}
            key={index}
            className="!aspect-square object-cover rounded-lg cursor-pointer hover:border-white hover:border-[2px] hover:!opacity-100 group-hover:opacity-50"
            onMouseEnter={() => setHoveredMember(member)}
            onMouseLeave={() => setHoveredMember(null)}
          />
        ))}
      </div>

      {hoveredMember && (
        <div className="absolute top-[12rem] flex flex-col items-center gap-2 rounded-lg text-center p-4 transition-all duration-200">
          <div className="font-semibold text-md">{hoveredMember.name}</div>
          <div
            className={`text-sm text-neutral-200 max-w-fit rounded-full py-2 px-4 border-[1px] ${
              bgColorOnTitle(hoveredMember.title)?.bg
            } ${bgColorOnTitle(hoveredMember.title)?.border}`}
          >
            {hoveredMember.title}
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
