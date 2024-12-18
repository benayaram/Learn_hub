import React from 'react';
import { Progress } from '../ui/Progress';

interface RoadmapProgressProps {
  currentPhase: number;
  totalPhases: number;
}

export function RoadmapProgress({ currentPhase, totalPhases }: RoadmapProgressProps) {
  const progress = (currentPhase / totalPhases) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Phase {currentPhase} of {totalPhases}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <Progress value={progress} />
    </div>
  );
}