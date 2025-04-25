import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem('rememberedEmail'));
  const [formData, setFormData] = useState({
    email: localStorage.getItem('rememberedEmail') || '',
    password: ''
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setRememberMe(true);
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', formData.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      navigate('/');
    } catch (error) {
      localStorage.removeItem('rememberedEmail');
      toast.error('Error al iniciar sesión', {
        style: {
          background: '#1F2937',
          color: '#fff',
          border: '1px solid #991B1B'
        }
      });
    }
  };

  return (
    <div className="flex items-start justify-center h-[calc(100vh-10rem)] bg-zinc-900 bg-[url('/src/assets/grid.svg')] bg-fixed pt-20">
      <div className="w-full max-w-sm px-4">
        <div className="bg-zinc-800/50 p-6 rounded-lg shadow-xl border border-zinc-900 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 text-white focus:outline-none focus:border-red-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-red-600 bg-zinc-700 border-zinc-600 rounded focus:ring-red-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                Recordar usuario
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;