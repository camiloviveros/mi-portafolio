"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row min-h-screen items-center">
        <motion.div 
          className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {isLoaded && <TypeWriter text="William Camilo" speed={150} />}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Desarrollador de Software & Ingeniero
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Apasionado por crear soluciones tecnológicas innovadoras que resuelven problemas reales.
            Especializado en desarrollo web full-stack y ciberseguridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors text-center">
              Contáctame
            </a>
            <a href="#portfolio" className="border border-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
              Ver Proyectos
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black w-full aspect-square rounded-md overflow-hidden relative">
            <Image 
              src="/william-profile.jpg" 
              alt="William Camilo Gutierrez" 
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;