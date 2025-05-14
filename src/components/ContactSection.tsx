"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulación de envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría el código real para enviar el formulario
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle title="Contacto" />
      
      <div className="flex flex-col md:flex-row gap-10">
        <motion.div 
          className="w-full md:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
          <p className="text-gray-600 mb-8">
            Estoy abierto a oportunidades de trabajo o colaboración en proyectos interesantes. 
            Si tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-xl p-3 bg-black text-white rounded-full mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <p className="text-gray-600">william.camilo@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-xl p-3 bg-black text-white rounded-full mr-4">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-lg font-medium">Teléfono</h4>
                <p className="text-gray-600">+57 123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-xl p-3 bg-black text-white rounded-full mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-lg font-medium">Ubicación</h4>
                <p className="text-gray-600">La Unión, Nariño, Colombia</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                required
              ></textarea>
            </div>
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                {submitError}
              </div>
            )}
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                ¡Mensaje enviado con éxito! Te responderé lo antes posible.
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;