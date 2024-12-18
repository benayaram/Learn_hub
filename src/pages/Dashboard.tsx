import React from 'react';
import { Link } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';

export function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Career Roadmaps
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapsData.roadmaps.map((roadmap) => (
          <div
            key={roadmap.id}
            className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center"
          >
            <img
              src={roadmap.image}
              alt={roadmap.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {roadmap.title}
            </h2>
            <p className="text-gray-600 mb-4">{roadmap.description}</p>
            <Link
              to={`/roadmap/${roadmap.id}`}
              className="text-blue-500 font-medium hover:text-blue-700 transition-all duration-300"
            >
              View Roadmap
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
