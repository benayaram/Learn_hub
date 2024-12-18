import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';
import { ModuleCard } from '../components/course/ModuleCard';
import coursesData from '../data/courses.json';

export function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.courses.find(c => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600">{course.description}</p>
          <div className="flex gap-4 mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {course.level}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
              {course.duration}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {course.modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </Layout>
  );
}