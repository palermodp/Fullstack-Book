import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fd89185d-aa32-4169-b851-d32e9a48145f',
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje
        })
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('¡Mensaje enviado exitosamente! 📨', {
          style: {
            background: '#1F2937',
            color: '#fff',
            border: '1px solid #059669'
          },
          position: 'top-center'
        });
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 bg-[url('/src/assets/grid.svg')] bg-fixed pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-zinc-800/50 rounded-xl p-8 backdrop-blur-sm border border-zinc-700">
          <h1 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Contacto
          </h1>
          <p className="text-gray-300 mb-8">
            ¿Tienes alguna pregunta o necesitas más información? Completa el formulario y me pondré en contacto contigo lo antes posible.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Nombre"
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="apellido"
                  required
                  placeholder="Apellido"
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="telefono"
                required
                placeholder="Teléfono"
                className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <textarea
                name="mensaje"
                rows="4"
                placeholder="Tu mensaje"
                className="w-full p-4 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;