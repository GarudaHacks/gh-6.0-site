import React from 'react';
import { Stat } from '../types/types';

function StatsBox({ icon: Icon, heading, subtitle }: Stat) {
  return (
    <div className="flex flex-row md:flex-col items-start justify-between md:justify-center text-center w-[70vw] md:h-full md:w-[20vw] p-6 py-12 rounded-lg border border-gray-600 bg-opacity-10 bg-white/5 backdrop-blur-md shadow-md">
      <Icon className="w-16 h-16 md:w-12 md:h-12 text-white mb-4" />
      <div className="flex flex-col items-end md:items-start">
        <div className="font-bold text-6xl md:text-5xl text-white ">{heading}</div>
        <div className="text-gray-200 text-md ">{subtitle}</div>
      </div>
    </div>
  );
}

export default StatsBox;

