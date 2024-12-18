import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on a roadmap or phase page
  const isOnCoursePage = location.pathname.includes('/phase/');
  const isOnRoadmapPage = location.pathname.includes('/roadmap/');

  // Go back to the previous page
  const handleBack = () => {
    navigate(-1); // This navigates to the previous page in the history stack
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">LEARN HUB</h1>
      {(isOnCoursePage || isOnRoadmapPage) && (
        <button
          onClick={handleBack}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          &#8592; Back
        </button>
      )}
    </div>
  );
}
