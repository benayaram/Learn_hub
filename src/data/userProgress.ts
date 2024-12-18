import { UserProfile, ActivityLog, DailyProgress } from '../types/user';

// Mock data - In a real app, this would come from a backend
export const currentUser: UserProfile = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  joinedAt: '2024-01-01',
  completedPhases: ['networking-basics'],
  completedCourses: ['react-fundamentals'],
  currentStreak: 5,
  longestStreak: 12,
  lastActivityDate: new Date().toISOString()
};

export const activityLogs: ActivityLog[] = [
  {
    id: 'log1',
    userId: 'user1',
    type: 'phase_completed',
    itemId: 'networking-basics',
    timestamp: '2024-03-15T10:30:00Z'
  }
];

export const dailyProgress: DailyProgress[] = Array.from({ length: 365 }, (_, i) => ({
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  completedItems: Math.floor(Math.random() * 5),
  minutesSpent: Math.floor(Math.random() * 120)
}));