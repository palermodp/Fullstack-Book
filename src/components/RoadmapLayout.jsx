import React, { useState } from 'react';
import RoadmapCard from './RoadmapCard';

const RoadmapLayout = ({ sections, onSectionClick }) => {
  const [completedSections, setCompletedSections] = useState(new Set());

  const handleRightClick = (e, sectionNumber) => {
    e.preventDefault(); 
    setCompletedSections(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(sectionNumber)) {
        newCompleted.delete(sectionNumber);
      } else {
        newCompleted.add(sectionNumber);
      }
      return newCompleted;
    });
  };

  const positions = [
    { top: 0, left: 50 },
    { top: 240, left: 25 },
    { top: 480, left: 75 },
    { top: 720, left: 20 },
    { top: 960, left: 60 },
    { top: 1200, left: 30 },
    { top: 1440, left: 70 },
    { top: 1680, left: 40 },
    { top: 1920, left: 80 },
    { top: 2160, left: 25 },
    { top: 2400, left: 65 },
    { top: 2640, left: 35 },
    { top: 2880, left: 75 },
    { top: 3120, left: 20 },
    { top: 3360, left: 60 },
    { top: 3600, left: 30 },
    { top: 3840, left: 70 },
    { top: 4080, left: 40 },
    { top: 4320, left: 80 },
    { top: 4560, left: 25 },
    { top: 4800, left: 65 },
    { top: 5040, left: 45 }
  ];

  const createPath = (start, end) => {
    const startX = start.left;
    const startY = start.top + 150;
    const endX = end.left;
    const endY = end.top;

    const midY = (startY + endY) / 2;
    const controlX1 = startX;
    const controlX2 = endX;
    
    return `M ${startX} ${startY} 
            C ${controlX1} ${midY}, 
              ${controlX2} ${midY}, 
              ${endX} ${endY}`;
};

return (
    <div className="relative min-h-[5500px] w-full">
      <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 5500"
          preserveAspectRatio="none"
          style={{ zIndex: 0 }}
      >
        <defs>
          <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {positions.slice(0, -1).map((pos, index) => (
          <path
            key={index}
            d={createPath(pos, positions[index + 1])}
            stroke="url(#lineGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Tarjetas del Roadmap */}
      {sections.map((section, index) => (
        <div
          key={section.sectionNumber}
          className="absolute w-[400px] transition-all duration-300"
          style={{
            top: `${positions[index]?.top}px`,
            left: `${positions[index]?.left}%`,
            transform: 'translateX(-50%)'
          }}
          onContextMenu={(e) => handleRightClick(e, section.sectionNumber)}
        >
          <RoadmapCard 
            section={section} 
            onClick={onSectionClick}
            isCompleted={completedSections.has(section.sectionNumber)}
          />
        </div>
      ))}
    </div>
  );
};

export default RoadmapLayout;