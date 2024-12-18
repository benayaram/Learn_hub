import React, { useState } from 'react';
import { CourseCard } from '../components/CourseCard';
import { ContributionGraph } from '../components/ContributionGraph';
import coursesData from '../data/courses.json';
import { Course } from '../types';
import { Layout } from './Layout';

export function UserDashboard() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const contributionData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
    count: Math.floor(Math.random() * 8),
  }));

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Your Learning Journey</h1>
        
        <ContributionGraph data={contributionData} />
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={setSelectedCourse}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}