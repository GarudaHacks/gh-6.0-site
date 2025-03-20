import React from 'react';
import { Stat } from '../types/types';

function StatsBox({ icon: Icon, heading, subtitle }: Stat) {
  return (
    <div className="flex flex-col items-start justify-center text-center h-full w-[20vw] p-6 py-12 rounded-lg border border-gray-600 bg-opacity-10 bg-white/5 backdrop-blur-md shadow-md">
      <Icon className="w-12 h-12 text-white mb-4" />
      <div className="font-bold text-5xl text-white">{heading}</div>
      <div className="text-gray-200 text-md ">{subtitle}</div>
    </div>
  );
}

export default StatsBox;

