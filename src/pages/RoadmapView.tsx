import React, { useState } from 'react';
import { Layout } from './Layout';
import { PhaseCard } from '../components/roadmap/PhaseCard';
import { RoadmapProgress } from '../components/roadmap/RoadmapProgress';
import { PhaseProgress } from '../components/roadmap/PhaseProgress';
import { phases } from '../data/roadmap';
import { currentUser } from '../data/userProgress';
import { Phase } from '../types/roadmap';

export function RoadmapView() {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const currentPhase = currentUser.completedPhases.length + 1;

  const handleCompletePhase = (phaseId: string) => {
    // In a real app, this would update the backend
    console.log('Completing phase:', phaseId);
  };

  const isPhaseCompleted = (phaseId: string) => 
    currentUser.completedPhases.includes(phaseId);

  const isPhaseLocked = (index: number) => 
    index > currentUser.completedPhases.length;

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Networking Career Roadmap</h1>
        <RoadmapProgress currentPhase={currentPhase} totalPhases={phases.length} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div key={phase.id}>
              <PhaseCard
                phase={phase}
                onSelect={setSelectedPhase}
              />
              <PhaseProgress
                phase={phase}
                isCompleted={isPhaseCompleted(phase.id)}
                isLocked={isPhaseLocked(index)}
                onComplete={handleCompletePhase}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}