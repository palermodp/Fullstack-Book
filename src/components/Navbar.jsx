import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBook, FaSignInAlt, FaUserPlus, FaCheck } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/', { replace: true });
      toast.success('¡Sesión cerrada exitosamente! 👋', {
        style: {
          background: '#1F2937',
          color: '#fff',
          border: '1px solid #059669'
        },
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // También podemos eliminar el useEffect que manejaba el mensaje anterior
  // ya que ahora estamos usando el nuevo estilo directamente
  React.useEffect(() => {
    if (localStorage.getItem('showLogoutMessage')) {
      localStorage.removeItem('showLogoutMessage');
      toast.custom(
        <div className="bg-zinc-800 text-white px-6 py-4 shadow-xl rounded-xl border border-zinc-700/50 flex items-center gap-3">
          <div className="bg-green-500/20 p-1 rounded-full">
            <FaCheck className="text-green-500 text-sm" />
          </div>
          Sesión cerrada exitosamente
        </div>,
        {
          duration: 4000,
          position: 'top-center'
        }
      );
    }
  }, []);

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-sm">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-white">FS-Book</Link>
          </div>
        </div>
      </nav>
    );
  }


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-sm transition-shadow duration-300 ${
      isScrolled ? 'shadow-lg shadow-black/20' : ''
    }`}>
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-white transition-all duration-300 no-underline relative group -ml-4 flex items-center">
              <FaBook className="mr-2 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-white hover:text-white/80 transition-colors duration-300">
                FS-Book
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>

            <div className="flex items-center gap-6">
              <Link 
                to="/about" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-gray-300 hover:text-white transition-all duration-300 no-underline relative group flex items-center"
              >
                <span>Sobre Mí</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-gray-300 hover:text-white transition-all duration-300 no-underline relative group flex items-center"
              >
                <span>Contacto</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>

          {user ? (
            <div className="flex items-center gap-1">
              <span className="text-gray-300 flex items-center gap-2 animate-fadeIn">
                Welcome,{' '}
                <span className="text-white font-medium bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent hover:from-red-600 hover:to-red-800 transition-all duration-300">
                  {user.name || 'User'}
                </span>
              </span>
              <Link 
                to="/profile" 
                onClick={() => window.scrollTo(0, 0)}
                className="px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 no-underline relative group flex items-center gap-2"
              >
                <FaUser />
                <span>Perfil</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <button 
                onClick={handleLogout}
                className="px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center gap-2"
              >
                <FaSignOutAlt />
                <span>Salir</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 mr-4">
              <Link 
                to="/auth" 
                className="text-white relative group no-underline flex items-center gap-2"
              >
                <FaSignInAlt />
                <span className="transition-colors duration-300 group-hover:text-red-500">
                  Iniciar Sesión
                </span>
              </Link>
              <Link 
                to="/register" 
                className="bg-red-600/80 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 no-underline flex items-center gap-2"
              >
                <FaUserPlus />
                <span>Registrarse</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;