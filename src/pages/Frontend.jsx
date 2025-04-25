import React, { useState } from 'react';
import Modal from '../components/Modal';
import FrontendRoadmapLayout from '../components/FrontendRoadmapLayout';
import frontendData from '../data/frontendData';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const Frontend = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  const handleRightClick = (e, sectionNumber) => {
    e.preventDefault();
    setCompletedSections(prev => 
      prev.includes(sectionNumber)
        ? prev.filter(num => num !== sectionNumber)
        : [...prev, sectionNumber]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 overflow-y-auto custom-scrollbar pb-12">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col items-center p-4 sm:p-8 text-gray-100">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center text-white">Frontend Development</h2>
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
            {/* Introducción */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-red-900/30">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  El Frontend es la cara visible de toda aplicación web, responsable de la interacción directa con el usuario. Como desarrollador frontend, crearás interfaces intuitivas y atractivas que transforman datos en experiencias visuales significativas.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  En este módulo, explorarás las tecnologías fundamentales del desarrollo frontend, desde HTML y CSS hasta frameworks modernos y optimización de rendimiento.
                </p>
              </div>
            </div>
            
            {/* Tecnologías del Roadmap */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-red-900/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center">Tecnologías del Roadmap</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <FaHtml5 className="text-6xl text-orange-500 hover:scale-110 transition-transform duration-300 hover:rotate-6" />
                    <span className="mt-2 text-gray-300">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaCss3Alt className="text-6xl text-blue-500 hover:scale-110 transition-transform duration-300 hover:-rotate-6" />
                    <span className="mt-2 text-gray-300">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaJs className="text-6xl text-yellow-400 hover:scale-110 transition-transform duration-300 hover:rotate-6" />
                    <span className="mt-2 text-gray-300">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaReact className="text-6xl text-cyan-400 hover:scale-110 transition-transform duration-300 animate-spin-slow" />
                    <span className="mt-2 text-gray-300">React</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Sections */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-red-900/30 mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white text-center">Estructura del Roadmap</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 text-center">
                  En este roadmap exploraremos los 22 capítulos fundamentales para el desarrollo frontend moderno, desde los fundamentos hasta las tecnologías más avanzadas.
                </p>
              </div>

              <div className="relative">
                <FrontendRoadmapLayout 
                  sections={frontendData}
                  completedSections={completedSections}
                  onSectionClick={(section) => setSelectedSection({
                    title: section.title,
                    content: (
                      <div>
                        <p className="text-gray-300 mb-6">{section.description}</p>
                        <div className="space-y-6">
                          {section.subsections.map((subsection, index) => (
                            <div key={index} className="bg-zinc-800/50 p-4 rounded-lg border border-red-900/30">
                              <h4 className="text-lg font-semibold text-white mb-2">{subsection.title}</h4>
                              <p className="text-gray-300">{subsection.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  onRightClick={handleRightClick}
                />
              </div>

              <Modal
                isOpen={!!selectedSection}
                onClose={() => setSelectedSection(null)}
                title={selectedSection?.title}
                content={selectedSection?.content}
              />

              {/* Navegación */}
              <div className="mt-12 sm:mt-20 bg-zinc-800/50 p-6 sm:p-8 rounded-lg border border-red-900/30">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 sm:mb-4">¡Felicitaciones! 🎉</h3>
                <p className="text-lg sm:text-xl text-gray-300 text-center mb-3 sm:mb-4">
                  Has completado exitosamente el roadmap Frontend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/backend"
                    className="px-6 sm:px-8 py-3 bg-red-900/30 text-white rounded-lg border border-red-900/50 hover:bg-red-900/50 transition-all duration-300 text-center text-base sm:text-lg font-medium no-underline"
                  >
                    Explorar Backend
                  </a>
                  <a
                    href="/"
                    className="px-6 sm:px-8 py-3 bg-zinc-800 text-white rounded-lg border border-red-900/50 hover:bg-zinc-700 transition-all duration-300 text-center text-base sm:text-lg font-medium no-underline"
                  >
                    Volver al Inicio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;