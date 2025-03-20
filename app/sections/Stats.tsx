import React from 'react';
import StatsBox from '../components/StatsBox';
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoTrophyOutline } from "react-icons/io5";
import { Stat } from '../types/types';

const stats: Stat[] = [
  { icon: HiOutlineUserGroup, heading: "564", subtitle: "Participants" },
  { icon: AiOutlineCheckCircle, heading: "105", subtitle: "Project Submissions" },
  { icon: IoTrophyOutline, heading: "13", subtitle: "Winning Groups" },
];

function Stats() {
  return (
    <section className="py-12 text-white">
      <h2 className="text-center text-2xl font-semibold mb-6">
        From Garuda Hacks 5.0, we’ve had...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {stats.map((stat, index) => (
          <StatsBox key={index} icon={stat.icon} heading={stat.heading} subtitle={stat.subtitle} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
