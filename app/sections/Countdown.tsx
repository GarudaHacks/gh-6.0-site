"use client";

import React, { useState, useEffect } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type CountdownProps = {
  targetDate: string;
};

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    ),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0"
    ),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    ),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
};

const CountdownDisplay = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex flex-col items-center">
    <div
      className="relative bg-primary/20 p-6 md:p-10 sm:p-6 text-white 
      text-6xl md:text-8xl sm:text-2xl font-bold md:w-36 sm:w-16 
      md:h-40 sm:h-16 flex items-center justify-center rounded-lg
      backdrop-blur-sm border border-white/10
      shadow-[0_0_15px_rgba(255,0,104,0.3)]
      hover:shadow-[0_0_25px_rgba(255,0,104,0.5)]
      transition-all duration-200"
    >
      {value}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent" />
    </div>
    <div className="text-xs md:text-md font-semibold sm:text-sm uppercase mt-2 text-gray-300">
      {label}
    </div>
  </div>
);

function Countdown({ targetDate }: CountdownProps) {
  // Initialize with empty values to match SSR
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center text-white py-8 px-4 min-h-screen md:min-h-[70vh]">
      {/* Countdown Timer */}
      <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <CountdownDisplay
            key={index}
            value={isClient ? value : "--"}
            label={label}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="mt-6 text-2xl md:text-3xl sm:text-sm font-semibold text-gray-200 text-center">
        until registrations open
      </p>
    </div>
  );
}

export default Countdown;
