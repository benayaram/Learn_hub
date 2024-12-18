import React from 'react';
import { Card } from './ui/Card';
import { Course } from '../types';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <Card
      onClick={() => onClick(course)}
      className="cursor-pointer transition-transform hover:scale-105"
    >
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <BookOpen className="h-5 w-5 text-blue-500" />
        </div>
        <p className="mt-2 text-gray-600">{course.description}</p>
        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
          {course.category}
        </span>
      </div>
    </Card>
  );
}