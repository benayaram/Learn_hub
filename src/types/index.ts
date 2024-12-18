export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  milestones: Milestone[];
  category: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  isCompleted?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'documentation';
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedMilestones: string[];
  lastAccessedAt: string;
}