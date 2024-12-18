import React from 'react';
import { Phase } from '../../types/roadmap';
import { UserProfile } from '../../types/user';
import { Check, Lock } from 'lucide-react';

interface PhaseProgressProps {
  phase: Phase;
  isCompleted: boolean;
  isLocked: boolean;
  onComplete: (phaseId: string) => void;
}

export function PhaseProgress({ phase, isCompleted, isLocked, onComplete }: PhaseProgressProps) {
  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Progress</h4>
        {isLocked ? (
          <span className="flex items-center text-gray-500">
            <Lock className="w-4 h-4 mr-1" />
            Locked
          </span>
        ) : isCompleted ? (
          <span className="flex items-center text-green-600">
            <Check className="w-4 h-4 mr-1" />
            Completed
          </span>
        ) : (
          <button
            onClick={() => onComplete(phase.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}