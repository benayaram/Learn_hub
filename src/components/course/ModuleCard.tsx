import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ChevronDown, ChevronUp, Video, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { markModuleComplete, isModuleComplete } from '../../utils/progress';

interface ModuleCardProps {
  module: {
    id: string;
    title: string;
    description: string;
    resources: Array<{
      id: string;
      title: string;
      url: string;
      type: string;
    }>;
  };
}

export function ModuleCard({ module }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [completed, setCompleted] = useState(isModuleComplete(module.id));

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    markModuleComplete(module.id);
    setCompleted(true);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <Card className={`overflow-hidden ${completed ? 'border-green-500 border-2' : ''}`}>
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 flex-1">
          <h3 className="text-lg font-semibold">{module.title}</h3>
          {completed && <CheckCircle className="w-5 h-5 text-green-500" />}
        </div>
        {!completed && (
          <button
            onClick={handleComplete}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
          >
            Mark Complete
          </button>
        )}
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {isExpanded && (
        <div className="p-4 pt-0 border-t">
          <p className="text-gray-600 mb-4">{module.description}</p>
          <div className="space-y-2">
            {module.resources.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50"
              >
                {getResourceIcon(resource.type)}
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}