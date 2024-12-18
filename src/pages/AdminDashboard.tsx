import React, { useState } from 'react';
import { Layout } from './Layout';
import { Course } from '../types';
import coursesData from '../data/courses.json';
import { Plus, Save } from 'lucide-react';

export function AdminDashboard() {
  const [courses, setCourses] = useState<Course[]>(coursesData.courses);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const handleSave = (course: Course) => {
    if (editingCourse) {
      setCourses(courses.map(c => c.id === course.id ? course : c));
    } else {
      setCourses([...courses, { ...course, id: Date.now().toString() }]);
    }
    setEditingCourse(null);
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Course Management</h1>
          <button
            onClick={() => setEditingCourse({
              id: '',
              title: '',
              description: '',
              image: '',
              category: '',
              milestones: []
            })}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <Plus className="h-5 w-5" />
            Add Course
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                onClick={() => setEditingCourse(course)}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
              >
                <Save className="h-4 w-4" />
                Edit Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}