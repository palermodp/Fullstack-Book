import React from 'react';

const FrontendRoadmapCard = ({ section, onClick, onRightClick, isCompleted }) => {
  return (
    <div
      onClick={() => onClick(section)}
      onContextMenu={(e) => onRightClick(e)}
      className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-red-900/30 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border-red-600/50 relative"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <span className={`text-2xl sm:text-3xl ${section.iconColor} flex-shrink-0`}>
          {React.createElement(section.icon)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center flex-nowrap">
            <span className="text-red-500 font-bold text-sm sm:text-base mr-2">
              {section.sectionNumber}.
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white truncate">
              {section.title}
            </h3>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
        {section.description}
      </p>
      {isCompleted && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90 rounded-lg">
          <span className="text-green-500 font-bold text-xl sm:text-2xl">¡Completado!</span>
        </div>
      )}
    </div>
  );
};

export default FrontendRoadmapCard;