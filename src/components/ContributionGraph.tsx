import React from 'react';

interface ContributionDay {
  date: string;
  count: number;
}

interface ContributionGraphProps {
  data: ContributionDay[];
}

export function ContributionGraph({ data }: ContributionGraphProps) {
  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-200';
    if (count < 6) return 'bg-green-400';
    return 'bg-green-600';
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Learning Activity</h3>
      <div className="grid grid-cols-7 gap-1">
        {data.map((day, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm ${getColor(day.count)}`}
            title={`${day.date}: ${day.count} activities`}
          />
        ))}
      </div>
    </div>
  );
}