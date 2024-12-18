import React from 'react';
import { UserProfile } from '../../types/user';
import { Award, Calendar, Clock } from 'lucide-react';

interface ProfileHeaderProps {
  user: UserProfile;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-4 h-4" />
              Joined {new Date(user.joinedAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Award className="w-4 h-4" />
              {user.currentStreak} day streak
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <Clock className="w-4 h-4" />
              {user.completedPhases.length} phases completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}