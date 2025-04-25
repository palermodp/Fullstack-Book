import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/me.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 bg-[url('/src/assets/grid.svg')] bg-fixed pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-zinc-800/50 rounded-xl p-8 backdrop-blur-sm border border-zinc-700">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <img 
                  src={profileImage}
                  alt="Danilo Palermo"
                  className="w-full rounded-lg shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02] ring-2 ring-red-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="mt-6 flex justify-center gap-6">
                <a href="https://github.com/palermodp" target="_blank" rel="noopener noreferrer" 
                   className="text-white/80 hover:text-red-500 transform hover:scale-110 transition-all duration-300">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/palermodanilo/" target="_blank" rel="noopener noreferrer"
                   className="text-white/80 hover:text-red-500 transform hover:scale-110 transition-all duration-300">
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Hola, soy Danilo Palermo
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Soy un Desarrollador Full Stack de 31 años, apasionado por la tecnología y la educación. Mi experiencia personal en el mundo del desarrollo web me inspiró a crear algo especial para la comunidad.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Sobre FS-Book
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Como creador de FS-Book, mi objetivo es proporcionar una guía clara y accesible para aquellos que están comenzando su viaje en el desarrollo web. Esta plataforma nació de mi propia experiencia y el deseo de ayudar a otros a encontrar su camino en el mundo del desarrollo.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  FS-Book está diseñado para ser un recurso valioso que orienta a los nuevos desarrolladores en sus primeros pasos. Entiendo lo abrumador que puede ser comenzar en este campo, con tantas tecnologías y caminos posibles. Por eso, he creado una plataforma que simplifica este proceso, ofreciendo una ruta de aprendizaje estructurada y recursos cuidadosamente seleccionados.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-red-500/30 pl-4">
                  Mi esperanza es que FS-Book se convierta en el punto de partida para muchos futuros desarrolladores, brindándoles la claridad y dirección que necesitan para comenzar su carrera en el desarrollo web con confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;