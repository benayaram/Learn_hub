import React from 'react';
import { DailyProgress } from '../../types/user';

interface ActivityCalendarProps {
  data: DailyProgress[];
}

export function ActivityCalendar({ data }: ActivityCalendarProps) {
  const getIntensityClass = (minutes: number) => {
    if (minutes === 0) return 'bg-gray-100';
    if (minutes < 30) return 'bg-green-200';
    if (minutes < 60) return 'bg-green-300';
    if (minutes < 90) return 'bg-green-400';
    return 'bg-green-500';
  };

  const weeks = [];
  for (let i = 0; i < 52; i++) {
    weeks.push(data.slice(i * 7, (i + 1) * 7));
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Activity Calendar</h3>
      <div className="flex gap-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`w-3 h-3 rounded-sm ${getIntensityClass(day.minutesSpent)}`}
                title={`${day.date}: ${day.minutesSpent} minutes spent learning`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}