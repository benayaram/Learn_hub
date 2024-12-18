export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'documentation' | 'exercise';
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  estimatedHours: number;
  skills: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  instructor: {
    name: string;
    avatar: string;
  };
  milestones: Milestone[];
  tags: string[];
  rating: number;
  enrolledCount: number;
}