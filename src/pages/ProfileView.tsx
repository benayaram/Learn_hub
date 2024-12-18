import React from 'react';
import { Layout } from './Layout';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ActivityCalendar } from '../components/profile/ActivityCalendar';
import { currentUser, dailyProgress } from '../data/userProgress';

export function ProfileView() {
  return (
    <Layout>
      <div className="p-6">
        <ProfileHeader user={currentUser} />
        <ActivityCalendar data={dailyProgress} />
      </div>
    </Layout>
  );
}