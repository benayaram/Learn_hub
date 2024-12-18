import React from 'react';
import { useParams } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';

export function PhaseDetail() {
  const { roadmapId, phaseId } = useParams<{
    roadmapId: string;
    phaseId: string;
  }>();
  const roadmap = roadmapsData.roadmaps.find((r) => r.id === roadmapId);
  const phase = roadmap?.phases.find((p) => p.id === phaseId);

  if (!roadmap || !phase) {
    return (
      <div className="text-center text-red-600 font-bold text-2xl">
        Phase not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          {phase.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          {phase.description}
        </p>

        <ul className="space-y-6">
          {phase.courses.map((course) => (
            <li
              key={course.title}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {course.title}
              </h2>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
              >
                Start Course
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
