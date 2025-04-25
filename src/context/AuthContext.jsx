import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../config/axios';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      const { data } = await axiosInstance.get('/api/auth/profile');
      setUser(data.user);
      setToken(storedToken);
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
      setUser(null);
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log('Intentando login con:', { email });
      
      const { data } = await axiosInstance.post('/api/auth/login', {
        email,
        password
      });
      
      console.log('Respuesta del servidor:', data);
      
      if (!data || !data.token) {
        throw new Error('No se recibió un token válido');
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      toast.success(`¡Bienvenido ${data.user.name || 'Usuario'}! 👋`, {
        style: {
          background: '#1F2937',
          color: '#fff',
          border: '1px solid #059669'
        },
        position: 'top-center'
      });
      
      return data;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/register', userData);
      
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      toast.success('¡Cuenta creada exitosamente!', {
        style: {
          background: '#1F2937',
          color: '#fff',
          border: '1px solid #991B1B'
        },
        iconTheme: {
          primary: '#DC2626',
          secondary: '#fff'
        }
      });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || 'Error al registrar usuario';
      toast.error(message, {
        style: {
          background: '#1F2937',
          color: '#fff',
          border: '1px solid #991B1B'
        }
      });
      throw error;
    }
  };

  const updateUser = async (userData) => {
    try {
      const { data } = await axiosInstance.put('/api/auth/profile', userData);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];

    } catch (error) {
      console.error('Error durante el logout:', error);
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };