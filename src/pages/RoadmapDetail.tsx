import React from 'react';
import { useParams, Link } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';

export function RoadmapDetail() {
  const { id } = useParams<{ id: string }>();
  const roadmap = roadmapsData.roadmaps.find((r) => r.id === id);

  if (!roadmap) {
    return (
      <div className="text-center text-red-600 font-bold">
        Roadmap not found
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          {roadmap.title}
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          {roadmap.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmap.phases.map((phase) => (
            <div
              key={phase.id}
              className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {phase.title}
              </h2>
              <p className="text-gray-600 mb-4">{phase.description}</p>

              <Link
                to={`/phase/${roadmap.id}/${phase.id}`}
                className="inline-block text-blue-500 font-semibold hover:text-blue-700 transition duration-300 mt-auto"
              >
                Start This Module
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
