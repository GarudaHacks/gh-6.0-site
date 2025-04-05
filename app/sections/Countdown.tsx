"use client";

import React, { useState, useEffect } from "react";

type CountdownProps = {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
};

function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div className="text-white text-lg">...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center text-white py-8 px-4 min-h-[70vh]">
      {/* Countdown Timer */}
      <div className="flex space-x-6 md:space-x-6 sm:space-x-1 mt-4">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative bg-primary p-6 md:p-10 sm:p-6 text-white 
              text-6xl md:text-8xl sm:text-2xl font-bold md:w-36 sm:w-16 
              md:h-40 sm:h-16 flex items-center justify-center rounded-lg shadow-md">
              {value}
            </div>
            <div className="text-xs md:text-md font-semibold sm:text-sm uppercase mt-2 text-gray-300">
              {label}
            </div>

          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="mt-4 text-base md:text-2xl sm:text-sm font-semibold text-gray-200 text-center">
        until registrations open
      </p>
    </div>
  );
}

export default Countdown;
