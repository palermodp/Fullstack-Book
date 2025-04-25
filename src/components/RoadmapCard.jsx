import React from 'react';

const RoadmapCard = ({ section, onClick, isCompleted }) => {
  return (
    <div
      onClick={() => onClick(section)}
      className="bg-zinc-800/50 p-6 rounded-lg border border-red-900/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-red-500/50 relative"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`text-3xl ${section.iconColor} flex-shrink-0`}>{section.icon}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center flex-nowrap">
            <span className="text-red-500 font-bold mr-2">{section.sectionNumber}.</span>
            <h3 className="text-xl font-bold text-white truncate">{section.title}</h3>
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-sm line-clamp-2">{section.description}</p>
      {isCompleted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <span className="text-green-500 font-bold text-2xl">¡Completado!</span>
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;