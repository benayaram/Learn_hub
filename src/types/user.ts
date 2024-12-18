export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedAt: string;
  completedPhases: string[];
  completedCourses: string[];
  currentStreak: number;
  longestStreak: number;
  lastActivityDate?: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  type: 'phase_completed' | 'course_completed' | 'resource_accessed';
  itemId: string;
  timestamp: string;
}

export interface DailyProgress {
  date: string;
  completedItems: number;
  minutesSpent: number;
}