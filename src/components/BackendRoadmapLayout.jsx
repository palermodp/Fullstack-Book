import React from 'react';
import BackendRoadmapCard from './BackendRoadmapCard';

const BackendRoadmapLayout = ({ sections, onSectionClick, onRightClick, completedSections }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-900/50 hidden md:block -translate-x-1/2" />
      
      {sections.map((section, index) => (
        <div
          key={section.sectionNumber}
          className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
        >
          <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-12 h-2 bg-blue-900/50 transform ${index % 2 === 0 ? 'rotate-180' : ''} animate-pulse`} />
          
          <BackendRoadmapCard
            section={section}
            onClick={onSectionClick}
            onRightClick={(e) => onRightClick(e, section.sectionNumber)}
            isCompleted={completedSections.includes(section.sectionNumber)}
          />
        </div>
      ))}
    </div>
  );
};

export default BackendRoadmapLayout;