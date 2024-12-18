// Progress tracking utilities
export interface Progress {
  completedModules: string[];
  completedPhases: string[];
}

const STORAGE_KEY = 'learning_progress';

export function getProgress(): Progress {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : { completedModules: [], completedPhases: [] };
}

export function markModuleComplete(moduleId: string) {
  const progress = getProgress();
  if (!progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}

export function markPhaseComplete(phaseId: string) {
  const progress = getProgress();
  if (!progress.completedPhases.includes(phaseId)) {
    progress.completedPhases.push(phaseId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}

export function isModuleComplete(moduleId: string): boolean {
  const progress = getProgress();
  return progress.completedModules.includes(moduleId);
}

export function isPhaseComplete(phaseId: string): boolean {
  const progress = getProgress();
  return progress.completedPhases.includes(phaseId);
}