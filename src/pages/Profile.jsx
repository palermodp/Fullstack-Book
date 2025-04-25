import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!user) return <Navigate to="/auth" />;

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const updatedData = {};
      if (formData.name !== user.name) updatedData.name = formData.name;
      if (formData.email !== user.email) updatedData.email = formData.email;
      
      await updateUser(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-zinc-800/50 p-8 rounded-lg shadow-xl border border-red-900/30 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Mi Perfil</h2>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up animate-duration-300">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 bg-zinc-700/50 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none border-red-900/30 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 bg-zinc-700/50 border rounded-md text-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none border-red-900/30 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                      Guardando...
                    </>
                  ) : (
                    'Guardar Cambios'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={isLoading}
                  className="flex-1 bg-zinc-600 text-white p-3 rounded-md hover:bg-zinc-700 transition-colors disabled:opacity-50"
                >
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6 animate-fade-up animate-duration-300">
              <div className="p-4 bg-zinc-700/30 rounded-lg border border-red-900/20">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Nombre</h3>
                <p className="text-white text-lg">{user.name}</p>
              </div>
              <div className="p-4 bg-zinc-700/30 rounded-lg border border-red-900/20">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                <p className="text-white text-lg">{user.email}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-colors mt-4"
              >
                Editar Perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;