import React from 'react';
import { Layout } from './Layout';
import { RoadmapCard } from '../components/roadmap/RoadmapCard';
import roadmapsData from '../data/roadmaps.json';

export function RoadmapList() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Career Roadmaps</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapsData.roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </Layout>
  );
}