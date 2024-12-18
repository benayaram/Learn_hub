import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { RoadmapDetail } from './pages/RoadmapDetail';
import { PhaseDetail } from './pages/PhaseDetail';
import { Navbar } from './pages/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar with Back button is always displayed */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/roadmap/:id" element={<RoadmapDetail />} />
        <Route path="/phase/:roadmapId/:phaseId" element={<PhaseDetail />} />
      </Routes>
    </Router>
  );
}
