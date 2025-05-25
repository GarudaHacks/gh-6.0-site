import React from "react";
import { Stat } from "../types/types";

function StatsBox({
  icon: Icon,
  heading,
  subheading,
  subtitle,
  isPrize,
}: Stat & { isPrize?: boolean }) {
  return (
    <div
      className={`flex flex-row md:flex-col items-start justify-between md:justify-center text-center w-[70vw] md:h-full md:w-[20vw] p-6 py-12 rounded-lg border ${
        isPrize ? "border-primary/50 bg-primary/5" : "border-gray-600 bg-white/5"
      } backdrop-blur-md shadow-md ${
        isPrize ? "shadow-[0_0_25px_rgba(255,0,104,0.5)]" : ""
      } transition-all duration-200`}
    >
      <Icon className={`w-16 h-16 md:w-12 md:h-12 ${isPrize ? "text-primary/90" : "text-white"} mb-4`}/>
      <div className="flex flex-col w-[80%] md:w-auto items-end md:items-start">
        <div className={`font-bold font-mono text-6xl md:text-5xl ${ isPrize ? "text-primary/90" : "text-white"}`}
        >
          {heading}
          <span
            className={`${
              isPrize ? "text-primary" : "text-gray-200"
            } text-lg block md:block-inline ml-2`}
          >
            {subheading}
          </span>
        </div>
        <div
          className={`${isPrize ? "text-primary" : "text-gray-200"} text-md`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default StatsBox;
