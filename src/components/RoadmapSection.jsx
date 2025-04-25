import React from 'react';

const RoadmapSection = ({ sectionNumber, icon: Icon, title, description, subsections, iconColor, onSubsectionClick }) => {
  const isEven = sectionNumber % 2 === 0;

  return (
    <div className={`relative pl-24 ${isEven ? 'ml-12' : 'mr-12'}`}>
      {/* Línea conectora vertical */}
      <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-red-900/50 to-transparent" />

      {/* Círculo numerado */}
      <div className={`absolute left-4 top-0 w-10 h-10 rounded-full ${iconColor} flex items-center justify-center border-2 border-red-900/50`}>
        <span className="text-white font-bold">{sectionNumber}</span>
      </div>

      {/* Flecha conectora */}
      <div className="absolute left-14 top-5 w-8 h-2 bg-red-900/50 transform -rotate-45 animate-pulse" />

      {/* Contenido principal */}
      <div className={`bg-zinc-800/50 p-6 rounded-lg border border-red-900/30 ${isEven ? 'ml-8' : ''}`}>
        <div className="flex items-center gap-4 mb-4">
          {Icon && <Icon className={`text-3xl ${iconColor}`} />}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Grid de subsecciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subsections.map((subsection, index) => (
            <div
              key={index}
              onClick={() => onSubsectionClick(subsection)}
              className="bg-zinc-900/50 p-4 rounded-lg border border-red-900/30 hover:border-red-500/50 cursor-pointer transition-all duration-300 hover:bg-zinc-800/70"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{subsection.title}</h4>
              <p className="text-gray-400 line-clamp-2">{subsection.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;