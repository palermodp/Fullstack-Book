import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950/95 border-t border-zinc-900 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-all duration-300 no-underline">
              FS-Book
            </Link>
            <p className="text-sm text-gray-300 mt-1">
              Tu guía hacia el desarrollo Full Stack
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300">
              © {currentYear} FS-Book. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Hecho con <span className="text-red-500">❤️</span> para la comunidad dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;