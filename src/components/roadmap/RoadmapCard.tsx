import React from 'react';
import { Card } from '../ui/Card';
import { Map, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoadmapCardProps {
  roadmap: {
    id: string;
    title: string;
    description: string;
    image: string;
    phases: Array<{
      title: string;
      duration: string;
    }>;
  };
}

export function RoadmapCard({ roadmap }: RoadmapCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={roadmap.image}
        alt={roadmap.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Map className="w-5 h-5 text-blue-500" />
          <h3 className="text-xl font-semibold">{roadmap.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{roadmap.description}</p>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <span>{roadmap.phases.length} phases</span>
        </div>
        <Link
          to={`/roadmap/${roadmap.id}`}
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600"
        >
          View Roadmap
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
}