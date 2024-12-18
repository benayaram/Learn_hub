import React from 'react';
import { Card } from '../ui/Card';
import { BookOpen, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Phase } from '../../types/roadmap';

interface PhaseCardProps {
  roadmapId: string;
  phase: Phase;
  isLocked: boolean;
  isCompleted: boolean;
}

export function PhaseCard({ roadmapId, phase, isLocked, isCompleted }: PhaseCardProps) {
  const getStatusIcon = () => {
    if (isLocked) return <Shield className="w-5 h-5 text-gray-400" />;
    if (isCompleted) return <Shield className="w-5 h-5 text-green-500" />;
    return <Shield className="w-5 h-5 text-blue-500" />;
  };

  return (
    <Card className={`overflow-hidden ${isLocked ? 'opacity-75' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          {getStatusIcon()}
          <h3 className="text-xl font-semibold flex-1 ml-3">{phase.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{phase.description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-gray-500">
            <Clock className="w-4 h-4" />
            {phase.duration}
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <BookOpen className="w-4 h-4" />
            {phase.courses.length} courses
          </span>
        </div>

        {phase.skills && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {phase.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {!isLocked && (
          <Link
            to={`/phase/${roadmapId}/${phase.id}`}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mt-2"
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </Card>
  );
}