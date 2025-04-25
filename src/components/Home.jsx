import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaDatabase } from 'react-icons/fa';
import backgroundImage from '../images/background2.jpg';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Home = () => {
  const auth = useAuth();
  console.log('Auth Context:', auth); // Debug log
  const { user, loading } = auth;
  console.log('Loading:', loading, 'User:', user); // Debug log
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Agregar un renderizado de carga
  if (loading) {
    return <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <p className="text-white">Cargando...</p>
    </div>;
  }

  const handleRouteClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="min-h-screen bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-screen py-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white/90 mb-4 sm:mb-8 text-center animate-fade-down animate-duration-[1000ms] animate-delay-0 hover:scale-105 transition-transform duration-500 relative group">
              <span className="relative inline-block">
                Bienvenido a Full Stack Book
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-2xl px-4 animate-fade-down animate-duration-[1000ms] animate-delay-300">
              Tu guía completa para convertirte en un desarrollador Full Stack
            </p>

            <h3 className="text-2xl text-white/90 mb-8 text-center animate-fade-down animate-duration-[1000ms] animate-delay-400">
              ¡Elige el camino para comenzar tu viaje!
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12 w-full max-w-4xl px-4">
              <Link 
                to="/frontend"
                onClick={handleRouteClick}
                className="bg-zinc-900/40 p-6 sm:p-8 rounded-xl text-center transition-all duration-500 group border border-red-900/30 animate-fade-right animate-duration-[1000ms] animate-delay-500 no-underline cursor-pointer backdrop-blur-sm hover:bg-zinc-800/50 hover:border-red-500/50 hover:scale-105 hover:shadow-lg hover:shadow-red-900/20"
              >
                <FaLaptopCode className="text-5xl sm:text-6xl text-red-600 mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-red-500 transition-colors">Frontend</h2>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors">Aprende desarrollo frontend con React y herramientas modernas.</p>
              </Link>

              <Link 
                to="/backend"
                onClick={handleRouteClick}
                className="bg-zinc-900/40 p-6 sm:p-8 rounded-xl text-center transition-all duration-500 group border border-blue-900/30 animate-fade-left animate-duration-[1000ms] animate-delay-500 no-underline cursor-pointer backdrop-blur-sm hover:bg-zinc-800/50 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <FaDatabase className="text-5xl sm:text-6xl text-blue-600 mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" />
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-blue-500 transition-colors">Backend</h2>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors">Descubre el desarrollo backend con Node.js y Express.</p>
              </Link>
            </div>

            {/* Características Destacadas */}
            <div className="w-full max-w-6xl mt-16 animate-fade-up animate-duration-[1000ms] animate-delay-700">
              <h2 className="text-3xl font-bold text-white text-center mb-12 relative inline-block">
                <span className="relative">
                  Características Destacadas
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-blue-500"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group">
                  <div className="bg-gradient-to-br from-red-500 to-red-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Contenido Actualizado</h3>
                  <p className="text-gray-300">Materiales constantemente actualizados con las últimas tecnologías y mejores prácticas del desarrollo web.</p>
                </div>
                
                <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Aprendizaje Práctico</h3>
                  <p className="text-gray-300">Enfoque basado en proyectos reales para que puedas aplicar lo aprendido inmediatamente en tu carrera.</p>
                </div>
                
                <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidad Activa</h3>
                  <p className="text-gray-300">Únete a una comunidad de desarrolladores donde podrás compartir conocimientos y resolver dudas.</p>
                </div>
              </div>
            </div>

            {/* ¿Por qué elegir FS-Book? */}
            <div className="w-full max-w-6xl mt-24 animate-fade-up animate-duration-[1000ms] animate-delay-800">
              <h2 className="text-3xl font-bold text-white text-center mb-12 relative inline-block">
                <span className="relative">
                  ¿Por qué elegir FS-Book?
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-blue-500"></span>
                </span>
              </h2>

              <div className="bg-zinc-900/60 backdrop-blur-sm p-8 sm:p-10 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    En FS-Book creemos que la programación es para todos. No importa tu edad, experiencia previa o background - aquí encontrarás tu lugar.
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    Nuestra misión es hacer que el desarrollo web sea accesible y comprensible para cualquier persona que tenga el deseo de aprender. Con contenido estructurado paso a paso, proyectos prácticos y una comunidad solidaria, te ayudaremos a convertir tu sueño de ser programador en realidad.
                  </p>
                  {!user && (
                    <Link
                      to="/register"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 animate-pulse animate-infinite"
                    >
                      Comienza tu viaje
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Agregar el AuthModal al final del componente, justo antes del div de cierre */}
      <AuthModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default Home;