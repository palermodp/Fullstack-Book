import React from 'react';
import { Link } from 'react-router-dom';

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade animate-duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-900/95 p-8 rounded-xl shadow-xl border border-zinc-800/50 max-w-md w-full mx-4 animate-fade-up animate-duration-300">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Acceso Restringido
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Para acceder a nuestros roadmaps gratuitos, necesitas iniciar sesión o crear una cuenta.
        </p>
        <div className="flex flex-col gap-3">
          <Link 
            to="/auth" 
            className="w-full bg-red-600/90 text-white py-2.5 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 text-center font-semibold hover:scale-[1.02]"
            onClick={onClose}
          >
            Iniciar Sesión
          </Link>
          <Link 
            to="/register" 
            className="w-full bg-zinc-800 text-white py-2.5 px-4 rounded-lg hover:bg-zinc-700 transition-all duration-300 text-center font-semibold hover:scale-[1.02]"
            onClick={onClose}
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;