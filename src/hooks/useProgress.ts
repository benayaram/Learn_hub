import { useState, useEffect } from 'react';
import { getProgress, markModuleComplete, markPhaseComplete } from '../utils/progress';
import type { Progress } from '../types/progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(getProgress());

  const updateProgress = (newProgress: Progress) => {
    setProgress(newProgress);
    localStorage.setItem('learning_progress', JSON.stringify(newProgress));
  };

  const completeModule = (moduleId: string) => {
    const newProgress = {
      ...progress,
      completedModules: [...progress.completedModules, moduleId]
    };
    updateProgress(newProgress);
  };

  const completePhase = (phaseId: string) => {
    const newProgress = {
      ...progress,
      completedPhases: [...progress.completedPhases, phaseId]
    };
    updateProgress(newProgress);
  };

  const isModuleComplete = (moduleId: string) => 
    progress.completedModules.includes(moduleId);

  const isPhaseComplete = (phaseId: string) => 
    progress.completedPhases.includes(phaseId);

  return {
    progress,
    completeModule,
    completePhase,
    isModuleComplete,
    isPhaseComplete
  };
}