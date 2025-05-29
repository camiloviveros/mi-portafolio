"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  // Efecto de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Ciclo de animaciones cada 5 segundos
  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setAnimationCycle(prev => prev + 1);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  // Efecto de scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden"
      ref={heroRef}
    >
      {/* Elementos decorativos clásicos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculos decorativos con animación sutil */}
        <div 
          className={`absolute w-96 h-96 border border-gray-200/30 rounded-full transition-all duration-[8000ms] ${
            animationCycle % 2 === 0 ? 'top-10 right-10 scale-100 opacity-20' : 'top-16 right-16 scale-110 opacity-10'
          }`}
        ></div>
        <div 
          className={`absolute w-64 h-64 border-2 border-amber-200/20 rounded-full transition-all duration-[6000ms] ${
            animationCycle % 3 === 0 ? 'bottom-20 left-20 rotate-0 opacity-15' : 
            animationCycle % 3 === 1 ? 'bottom-24 left-24 rotate-45 opacity-25' :
            'bottom-16 left-16 rotate-90 opacity-10'
          }`}
        ></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-amber-300/30 to-transparent"></div>
        
        {/* Puntos decorativos animados */}
        <div className={`absolute w-2 h-2 bg-gray-400/40 rounded-full transition-all duration-3000 ${
          animationCycle % 4 === 0 ? 'top-1/4 right-1/4 opacity-60' :
          animationCycle % 4 === 1 ? 'top-1/3 right-1/3 opacity-40' :
          animationCycle % 4 === 2 ? 'top-1/5 right-1/5 opacity-80' :
          'top-1/6 right-1/6 opacity-20'
        }`}></div>
        <div className={`absolute w-3 h-3 border border-amber-400/30 rounded-full transition-all duration-4000 ${
          animationCycle % 3 === 0 ? 'bottom-1/4 left-1/4 scale-100' :
          animationCycle % 3 === 1 ? 'bottom-1/3 left-1/3 scale-125' :
          'bottom-1/5 left-1/5 scale-75'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[80vh]">
          
          {/* Contenido izquierdo con efectos clásicos */}
          <div className="flex-1 text-center lg:text-left max-w-2xl relative">
            
            {/* Fondo sutil detrás del texto */}
            <div className="absolute inset-0 -z-10">
              <div className={`absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 rounded-full blur-3xl transition-all duration-[6000ms] ${
                animationCycle % 2 === 0 ? 'opacity-60 scale-100' : 'opacity-30 scale-120'
              }`}></div>
              <div className={`absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-amber-50/30 to-orange-50/20 rounded-full blur-2xl transition-all duration-[7000ms] ${
                animationCycle % 2 === 0 ? 'opacity-40 scale-110' : 'opacity-60 scale-90'
              }`}></div>
            </div>
            
            {/* Saludo elegante con movimiento */}
            <div className={`transform transition-all duration-1500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="relative mb-6">
                <p className="text-sm md:text-base text-gray-600 tracking-widest uppercase font-light relative inline-block">
                  <span className={`absolute -top-2 -left-2 w-1 h-1 bg-amber-400 rounded-full transition-all duration-1000 ${
                    animationCycle % 5 === 0 ? 'opacity-100 scale-100' :
                    animationCycle % 5 === 1 ? 'opacity-60 scale-150' :
                    animationCycle % 5 === 2 ? 'opacity-80 scale-75' :
                    animationCycle % 5 === 3 ? 'opacity-40 scale-125' :
                    'opacity-100 scale-100'
                  }`}></span>
                  <span className={`inline-block mr-3 transition-all duration-1000 ${
                    animationCycle % 6 === 0 ? 'animate-none' :
                    animationCycle % 6 === 1 ? 'animate-bounce' :
                    animationCycle % 6 === 2 ? 'animate-pulse scale-110' :
                    animationCycle % 6 === 3 ? 'transform rotate-12 scale-105' :
                    animationCycle % 6 === 4 ? 'animate-pulse scale-125' :
                    'transform -rotate-6 scale-110'
                  }`}>👋</span>
                  Hola, soy
                </p>
              </div>
            </div>

            {/* Nombre principal con efectos cinematográficos */}
            <div className={`transform transition-all duration-2000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}>
              <h1 className="relative mb-6">
                <span className={`block text-5xl md:text-7xl lg:text-8xl font-light text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 bg-clip-text transition-all duration-2000 ${
                  animationCycle % 4 === 0 ? 'tracking-normal' :
                  animationCycle % 4 === 1 ? 'tracking-wider' :
                  animationCycle % 4 === 2 ? 'tracking-wide' :
                  'tracking-widest'
                }`}>
                  <span className={`inline-block transform transition-all duration-1000 hover:scale-105 ${
                    animationCycle % 3 === 0 ? '' :
                    animationCycle % 3 === 1 ? 'animate-pulse' :
                    'scale-[1.02]'
                  }`}>William</span>
                </span>
                <span className={`block text-5xl md:text-7xl lg:text-8xl font-extralight text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-600 bg-clip-text transition-all duration-2000 ${
                  animationCycle % 4 === 0 ? 'tracking-normal' :
                  animationCycle % 4 === 1 ? 'tracking-wider' :
                  animationCycle % 4 === 2 ? 'tracking-wide' :
                  'tracking-widest'
                }`}>
                  <span className={`inline-block transform transition-all duration-1000 hover:scale-105 ${
                    animationCycle % 3 === 0 ? '' :
                    animationCycle % 3 === 1 ? 'animate-pulse' :
                    'scale-[1.02]'
                  }`} style={{ animationDelay: '0.3s' }}>Camilo</span>
                </span>
                
                {/* Línea decorativa animada */}
                <div className={`absolute -bottom-3 left-0 h-0.5 transition-all duration-3000 ${
                  isLoaded ? 'w-full opacity-100' : 'w-0 opacity-0'
                } ${
                  animationCycle % 5 === 0 ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600' :
                  animationCycle % 5 === 1 ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600' :
                  animationCycle % 5 === 2 ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600' :
                  animationCycle % 5 === 3 ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600' :
                  'bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600'
                }`}></div>
                
                {/* Sombra de texto sutil */}
                <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-light text-gray-200/20 blur-sm -z-10">
                  <span className="block">William</span>
                  <span className="block font-extralight">Camilo</span>
                </div>
              </h1>
            </div>

            {/* Título profesional con movimiento elegante */}
            <div className={`transform transition-all duration-1800 delay-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light flex items-center justify-center lg:justify-start">
                  <span className={`text-blue-600 mr-4 transition-all duration-1000 ${
                    animationCycle % 4 === 0 ? 'transform rotate-0' :
                    animationCycle % 4 === 1 ? 'transform rotate-90' :
                    animationCycle % 4 === 2 ? 'transform rotate-180' :
                    'transform rotate-270'
                  }`}>▶</span>
                  <span className={`transition-all duration-2000 ${
                    animationCycle % 3 === 0 ? 'tracking-normal' :
                    animationCycle % 3 === 1 ? 'tracking-wide' :
                    'tracking-wider'
                  }`}>
                    Software Developer & Cybersecurity Enthusiast
                  </span>
                </h2>
              </div>
            </div>

            {/* Descripción con efectos de aparición */}
            <div className={`transform transition-all duration-2000 delay-1500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Soy un <strong className={`text-gray-800 transition-all duration-1000 ${
                  animationCycle % 4 === 0 ? 'text-blue-700' :
                  animationCycle % 4 === 1 ? 'text-emerald-700' :
                  animationCycle % 4 === 2 ? 'text-purple-700' :
                  'text-amber-700'
                }`}>desarrollador apasionado</strong> con experiencia en crear soluciones innovadoras. 
                Combino mi formación militar con mi amor por la <strong className="text-gray-800 hover:text-green-600 transition-colors duration-500">tecnología</strong> y la 
                <strong className="text-gray-800 hover:text-red-600 transition-colors duration-500"> ciberseguridad</strong> para desarrollar aplicaciones robustas y seguras.
              </p>
            </div>

            {/* Botones con efectos premium */}
            <div className={`transform transition-all duration-2000 delay-2000 ${
              isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                <Link 
                  href="https://github.com/camiloviveros" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  {/* Efecto de brillo que se mueve */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-medium text-lg relative z-10">Ver mi código</span>
                  
                  {/* Partículas en hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </Link>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative flex items-center gap-4 px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  {/* Efecto de llenado desde la izquierda */}
                  <div className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-lg relative z-10">Contactar</span>
                </button>
              </div>
            </div>

            {/* Stats elegantes con movimiento */}
            <div className={`transform transition-all duration-2000 delay-2500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-gray-600">
                <div className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 hover:scale-110 ${
                  animationCycle % 9 === 0 ? 'animate-pulse' : ''
                }`}>
                  <div className={`w-4 h-4 bg-emerald-500 rounded-full transition-all duration-1000 group-hover:scale-150 ${
                    animationCycle % 3 === 0 ? 'animate-pulse' :
                    animationCycle % 3 === 1 ? 'animate-bounce' :
                    'scale-125 animate-pulse'
                  }`}></div>
                  <span className="text-lg font-light group-hover:text-emerald-600 transition-colors duration-300">
                    <strong className="font-medium">15+</strong> Proyectos
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 hover:scale-110 ${
                  animationCycle % 9 === 3 ? 'animate-pulse' : ''
                }`}>
                  <div className={`w-4 h-4 bg-blue-500 rounded-full transition-all duration-1000 group-hover:scale-150 ${
                    animationCycle % 3 === 0 ? 'animate-pulse' :
                    animationCycle % 3 === 1 ? 'animate-bounce' :
                    'scale-125 animate-pulse'
                  }`}></div>
                  <span className="text-lg font-light group-hover:text-blue-600 transition-colors duration-300">
                    <strong className="font-medium">8+</strong> Desplegados
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 hover:scale-110 ${
                  animationCycle % 9 === 6 ? 'animate-pulse' : ''
                }`}>
                  <div className={`w-4 h-4 bg-purple-500 rounded-full transition-all duration-1000 group-hover:scale-150 ${
                    animationCycle % 3 === 0 ? 'animate-pulse' :
                    animationCycle % 3 === 1 ? 'animate-bounce' :
                    'scale-125 animate-pulse'
                  }`}></div>
                  <span className="text-lg font-light group-hover:text-purple-600 transition-colors duration-300">
                    <strong className="font-medium">Django Expert</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen clásica y elegante */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div 
              className={`relative transform transition-all duration-3000 delay-2800 ${
                isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-90'
              }`}
            >
              {/* Marcos decorativos con animación sutil */}
              <div className="relative">
                <div className={`absolute -inset-8 bg-gradient-to-br from-amber-100/20 via-gray-100/30 to-slate-200/20 rounded-full blur-3xl transition-all duration-[8000ms] ${
                  animationCycle % 2 === 0 ? 'opacity-60 scale-100' : 'opacity-40 scale-110'
                }`}></div>
                <div className="absolute -inset-4 bg-gradient-to-tl from-gray-200/30 to-gray-300/20 rounded-3xl blur-xl"></div>
                
                {/* Marco principal clásico */}
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 p-4 rounded-3xl shadow-2xl border-2 border-gray-200/50">
                  
                  {/* Marco interior elegante */}
                  <div className="bg-gradient-to-br from-amber-50/40 via-white to-gray-50 p-3 rounded-2xl border border-amber-100/50">
                    
                    {/* Contenedor de imagen con estilo galería */}
                    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300/30 relative">
                      
                      {/* Patrón de textura sutil */}
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
                      
                      <div className="aspect-[3/4] relative group">
                        
                        {/* Imagen principal */}
                        <img 
                          src="/images/profile.jpg" 
                          alt="William Camilo - Software Developer" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const placeholder = e.currentTarget.nextElementSibling;
                            if (placeholder && placeholder instanceof HTMLElement) placeholder.style.display = 'flex';
                          }}
                        />
                        
                        {/* Placeholder elegante (se muestra si no hay imagen) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10" style={{ display: 'none' }}>
                          
                          {/* Título decorativo */}
                          <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-3200 ${
                            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                              <span className="text-xs font-light tracking-[0.3em] uppercase opacity-70">Portfolio</span>
                              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                            </div>
                          </div>
                          
                          {/* Avatar artístico */}
                          <div className={`relative mb-10 transition-all duration-2000 delay-3000 ${
                            isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                          }`}>
                            <div className="absolute -inset-8 border border-white/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
                            <div className="absolute -inset-6 border border-white/20 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
                            
                            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent"></div>
                              <div className="w-44 h-44 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-inner border border-white/20">
                                <svg className="w-28 h-28 text-white/95 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                              <div className="absolute top-6 left-6 w-10 h-10 bg-white/25 rounded-full blur-xl"></div>
                            </div>
                          </div>
                          
                          {/* Información elegante */}
                          <div className={`text-center space-y-8 transition-all duration-1500 delay-3400 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                          }`}>
                            <div className="space-y-4">
                              <h3 className="text-5xl font-serif font-extralight tracking-wide text-white drop-shadow-2xl">
                                William Camilo
                              </h3>
                              
                              <div className="flex items-center justify-center gap-4">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/60"></div>
                                <div className="w-3 h-3 border-2 border-white/50 rounded-full"></div>
                                <div className="w-16 h-px bg-white/50"></div>
                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/60"></div>
                              </div>
                              
                              <p className="text-base font-light opacity-95 tracking-[0.2em] uppercase">
                                Software Developer
                              </p>
                            </div>
                            
                            <div className="space-y-4 pt-4">
                              <div className="flex items-center justify-center gap-4 text-sm opacity-80">
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                                <span className="font-light tracking-wide">Técnico en Sistemas</span>
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                              </div>
                              <div className="flex items-center justify-center gap-4 text-sm opacity-80">
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                                <span className="font-light tracking-wide">Est. Ingeniería de Software</span>
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                        
                        {/* Información flotante sobre la imagen */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                          <div className="flex justify-between items-end">
                            <div className="space-y-2">
                              <p className="text-xs uppercase tracking-[0.3em] opacity-70 animate-pulse">Developer</p>
                              <h2 className="text-2xl font-light tracking-wide">William Camilo</h2>
                              <p className="text-sm opacity-90 flex items-center gap-2">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                Colombia 🇨🇴
                              </p>
                            </div>
                            <button 
                              onClick={() => scrollToSection('about')}
                              className="group/btn hover:opacity-80 transition-all duration-500 p-4 bg-white/15 rounded-full backdrop-blur-md hover:bg-white/25 hover:scale-110 border border-white/20"
                              aria-label="Conocer más"
                            >
                              <svg className="w-5 h-5 animate-bounce group-hover/btn:animate-none transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Indicadores de tecnologías flotantes */}
                        <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                          {[
                            { name: 'React', color: 'bg-blue-500/90', delay: '0s' },
                            { name: 'Django', color: 'bg-green-500/90', delay: '0.2s' },
                            { name: 'Security', color: 'bg-red-500/90', delay: '0.4s' }
                          ].map((tech, i) => (
                            <div 
                              key={tech.name}
                              className={`${tech.color} text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 animate-pulse font-medium tracking-wide`}
                              style={{ animationDelay: tech.delay, animationDuration: '2s' }}
                            >
                              {tech.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón de navegación elegante */}
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-3600 ${
                    isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-90'
                  }`}>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center hover:shadow-3xl transition-all duration-700 hover:scale-125 border-2 border-gray-200/70 group/scroll backdrop-blur-sm"
                      aria-label="Scroll para conocer más"
                    >
                      <svg className="w-6 h-6 text-gray-600 group-hover/scroll:text-gray-800 transition-all duration-500 animate-bounce group-hover/scroll:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Elementos decorativos refinados */}
                <div className={`absolute -top-6 -right-6 w-10 h-10 border-2 border-amber-300/40 rounded-full transition-all duration-4000 ${
                  animationCycle % 3 === 0 ? 'opacity-60 scale-100' :
                  animationCycle % 3 === 1 ? 'opacity-40 scale-125' :
                  'opacity-80 scale-75'
                }`}></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gray-400/30 rounded-full opacity-50"></div>
                <div className={`absolute top-1/3 -left-8 w-4 h-4 bg-amber-400/40 rounded-full transition-all duration-3000 ${
                  animationCycle % 2 === 0 ? 'opacity-50 scale-100' : 'opacity-30 scale-150'
                }`}></div>
                <div className="absolute bottom-1/3 -right-8 w-5 h-5 border border-gray-500/40 rounded-full opacity-40"></div>
                <div className="absolute top-2/3 -left-3 w-2 h-2 bg-gray-500/50 rounded-full"></div>
                <div className="absolute top-1/4 -right-4 w-3 h-3 border border-amber-500/50 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll clásico */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-4000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-3 text-gray-500 group cursor-pointer" onClick={() => scrollToSection('about')}>
            <span className="text-xs uppercase tracking-[0.2em] font-light group-hover:text-gray-700 transition-colors duration-500">Explorar</span>
            <div className="w-6 h-12 border-2 border-gray-400/60 rounded-full p-1 group-hover:border-gray-600 transition-colors duration-500">
              <div className="w-1.5 h-4 bg-gray-400 rounded-full animate-bounce group-hover:bg-gray-600 transition-colors duration-500"></div>
            </div>
            <svg className="w-4 h-4 animate-bounce group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;