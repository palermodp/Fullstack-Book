import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  
  // Estados iniciales
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);  // Solo una vez

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Email inválido' : '';
      case 'password':
        if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres';
        if (!/[A-Z]/.test(value)) return 'Debe incluir al menos una mayúscula';
        if (!/[0-9]/.test(value)) return 'Debe incluir al menos un número';
        return '';
      case 'confirmPassword':
        return value !== formData.password ? 'Las contraseñas no coinciden' : '';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const data = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      if (data && data.token) {
        await new Promise(resolve => setTimeout(resolve, 100));
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      setServerError(error.response?.data?.message || 'Error al registrar usuario');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;
    return strength;
  };

  return (
    <div className="min-h-screen bg-zinc-900 bg-[url('/src/assets/grid.svg')] bg-fixed py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-zinc-800/50 p-8 rounded-lg shadow-xl border border-red-900/30 backdrop-blur-sm animate-fade-up animate-duration-[800ms] animate-delay-200">
          <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Crear Cuenta
          </h2>
          {serverError && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-md mb-4">
              {serverError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full p-2 bg-zinc-700 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-red-900/30'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full p-2 bg-zinc-700 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-red-900/30'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 bg-zinc-700 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                    errors.password ? 'border-red-500' : 'border-red-900/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        passwordStrength <= 25 ? 'bg-red-500' :
                        passwordStrength <= 50 ? 'bg-yellow-500' :
                        passwordStrength <= 75 ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${passwordStrength}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {passwordStrength <= 25 ? 'Débil' :
                     passwordStrength <= 50 ? 'Regular' :
                     passwordStrength <= 75 ? 'Buena' : 'Excelente'}
                  </p>
                </div>
              )}
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Confirmar Contraseña</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 bg-zinc-700 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                    errors.confirmPassword ? 'border-red-500' : 'border-red-900/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-red-600/80 to-red-800/80 text-white py-3 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 backdrop-blur-sm flex items-center justify-center ${
                isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  Registrando...
                </>
              ) : (
                'Crear Cuenta'
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-300">
            ¿Ya tienes cuenta?{' '}
            <Link 
              to="/auth"
              className="font-medium text-red-500 hover:text-red-400 transition-colors duration-300"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;