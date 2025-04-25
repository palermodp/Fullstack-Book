import React, { useState } from 'react';
import Modal from '../components/Modal';
import BackendRoadmapLayout from '../components/BackendRoadmapLayout';
import backendData from '../data/backendData';
import { FaNodeJs, FaDatabase, FaServer, FaShieldAlt } from 'react-icons/fa';

const Backend = () => {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center text-white">Backend Development</h2>
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
            {/* Introducción */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-blue-900/30">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  El Backend es el corazón de toda aplicación web, responsable de la lógica de negocio, el procesamiento de datos y la seguridad. Como desarrollador backend, serás responsable de construir y mantener los sistemas que potencian las aplicaciones modernas.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  En este módulo, explorarás las tecnologías fundamentales del desarrollo backend, desde lenguajes de programación hasta bases de datos, seguridad y despliegue de aplicaciones.
                </p>
              </div>
            </div>
            
            {/* Tecnologías del Roadmap */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-blue-900/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center">Tecnologías del Roadmap</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <FaNodeJs className="text-6xl text-green-500 hover:scale-110 transition-transform duration-300 hover:rotate-6" />
                    <span className="mt-2 text-gray-300">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaDatabase className="text-6xl text-blue-500 hover:scale-110 transition-transform duration-300 hover:-rotate-6" />
                    <span className="mt-2 text-gray-300">Databases</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaServer className="text-6xl text-purple-400 hover:scale-110 transition-transform duration-300 hover:rotate-6" />
                    <span className="mt-2 text-gray-300">APIs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaShieldAlt className="text-6xl text-red-400 hover:scale-110 transition-transform duration-300" />
                    <span className="mt-2 text-gray-300">Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Sections */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-blue-900/30 mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white text-center">Estructura del Roadmap</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 text-center">
                  En este roadmap exploraremos los 22 capítulos fundamentales para el desarrollo backend moderno, desde lenguajes de programación hasta estrategias de escalabilidad y monitoreo.
                </p>
              </div>

              <BackendRoadmapLayout 
                sections={backendData}
                completedSections={completedSections}
                onSectionClick={(section) => setSelectedSection({
                  title: section.title,
                  content: (
                    <div>
                      <p className="text-gray-300 mb-6">{section.description}</p>
                      <div className="space-y-6">
                        {section.subsections.map((subsection, index) => (
                          <div key={index} className="bg-zinc-800/50 p-4 rounded-lg border border-blue-900/30">
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

              <Modal
                isOpen={!!selectedSection}
                onClose={() => setSelectedSection(null)}
                title={selectedSection?.title}
                content={selectedSection?.content}
              />

              {/* Navegación */}
              <div className="mt-12 sm:mt-20 bg-zinc-800/50 p-6 sm:p-8 rounded-lg border border-blue-900/30">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 sm:mb-4">¡Felicitaciones! 🎉</h3>
                <p className="text-lg sm:text-xl text-gray-300 text-center mb-3 sm:mb-4">
                  Has completado exitosamente el roadmap Backend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/frontend"
                    className="px-6 sm:px-8 py-3 bg-blue-900/30 text-white rounded-lg border border-blue-900/50 hover:bg-blue-900/50 transition-all duration-300 text-center text-base sm:text-lg font-medium no-underline"
                  >
                    Explorar Frontend
                  </a>
                  <a
                    href="/"
                    className="px-6 sm:px-8 py-3 bg-zinc-800 text-white rounded-lg border border-blue-900/50 hover:bg-zinc-700 transition-all duration-300 text-center text-base sm:text-lg font-medium no-underline"
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

export default Backend;