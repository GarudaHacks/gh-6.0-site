"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StatsBox from "../components/StatsBox";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import { Stat } from "../types/types";
import Container from "../components/Container";

const stats: Stat[] = [
  { icon: HiOutlineUserGroup, 
    heading: "6408", 
    subtitle: "Total Participants" 
  },
  {
    icon: IoTrophyOutline,
    heading: "100",
    subheading: "million IDR",
    subtitle: "GH 6.0 Total Prize Pool",
  },
  {
    icon: AiOutlineCheckCircle,
    heading: "629",
    subtitle: "Projects Submitted",
  },
];

function Stats() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentCounts, setCurrentCounts] = useState<{ [key: string]: number }>(
    {
      "6408": 0,
      "629": 0,
      "100": 0,
    }
  );
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hasScrolled) {
      const duration = 6000;
      const steps = 200;
      const interval = duration / steps;

      const timers = stats.map((stat) => {
        const finalValue = parseInt(stat.heading);
        const step = finalValue / steps;
        let currentStep = 0;

        return setInterval(() => {
          currentStep++;
          setCurrentCounts((prev) => ({
            ...prev,
            [stat.heading]: Math.min(
              Math.floor(step * currentStep),
              finalValue
            ),
          }));

          if (currentStep >= steps) {
            clearInterval(timers[stats.indexOf(stat)]);
          }
        }, interval);
      });

      return () => {
        timers.forEach((timer) => clearInterval(timer));
      };
    }
  }, [hasScrolled]);

  return (
    <section id="stats" className="py-20 -translate-x-8 md:translate-x-0">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
          Garuda Hacks by the{" "}
          <span className="text-md font-semibold italic">numbers</span>
        </h2>
        <div
          ref={statsRef}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.heading}
              initial={{ opacity: 0, y: 50 }}
              animate={
                hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <StatsBox
                icon={stat.icon}
                heading={currentCounts[stat.heading].toString()}
                subheading={stat.subheading}
                subtitle={stat.subtitle}
                isPrize={index === 1}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;

