"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-white overflow-hidden"
      ref={heroRef}
    >
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0">
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Gradientes flotantes muy sutiles */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gray-100/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Contenido izquierdo */}
          <div className="text-gray-900">
            <div className={`transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <p className="text-gray-600 font-mono text-sm mb-6 tracking-wider">
                <span className="text-gray-400">const</span>
                <span className="text-gray-700"> developer</span>
                <span className="text-gray-400"> = </span>
                <span className="text-gray-400">{'{'}</span>
              </p>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="pl-8 mb-6">
                <p className="font-mono text-sm text-gray-600 mb-2">
                  <span className="text-gray-400">name:</span>
                  <span className="text-green-700"> "William Camilo"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="font-mono text-sm text-gray-600 mb-2">
                  <span className="text-gray-400">role:</span>
                  <span className="text-blue-700"> "Desarrollador de Software"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="font-mono text-sm text-gray-600">
                  <span className="text-gray-400">location:</span>
                  <span className="text-purple-700"> "Colombia"</span>
                </p>
              </div>
              <p className="text-gray-600 font-mono text-sm mb-8">
                <span className="text-gray-400">{'}'}</span>
                <span className="text-gray-400">;</span>
              </p>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="mb-8">
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Me apasiona el <span className="text-gray-900 font-medium">desarrollo de software</span> y 
                  trabajar para crear <span className="text-gray-900 font-medium">sistemas seguros</span> y 
                  <span className="text-gray-900 font-medium"> escalables</span> que resuelvan problemas reales.
                </p>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link 
                  href="https://github.com/camiloviveros" 
                  target="_blank"
                  className="group px-8 py-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg hover:from-black hover:to-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                >
                  {/* Efecto de brillo sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="flex items-center gap-3 relative z-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </span>
                </Link>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="font-medium">Ver Proyectos</span>
                </button>
              </div>

              <p className="text-gray-500 font-mono text-sm">
                <span className="text-green-600">// </span>
                <span className="text-gray-600">Construyendo el futuro, una línea de código a la vez</span>
              </p>
            </div>
          </div>

          {/* Contenedor de imagen mejorado - Clásico y minimalista */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative max-w-md mx-auto">
              {/* Marco clásico */}
              <div className="relative">
                {/* Sombra decorativa */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-2xl blur-2xl"></div>
                
                {/* Contenedor principal - Estilo clásico */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Imagen */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src="/images/profile.jpg" 
                      alt="William Camilo" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling;
                        if (placeholder) {
                          placeholder.classList.remove('hidden');
                        }
                      }}
                    />
                    
                    {/* Placeholder elegante y minimalista */}
                    <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="text-center">
                        {/* Avatar minimalista */}
                        <div className="w-40 h-40 mx-auto mb-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full"></div>
                          <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                            <span className="text-7xl font-light text-white">WC</span>
                          </div>
                        </div>
                        
                        {/* Nombre estilo código */}
                        <div className="font-mono text-sm text-gray-600">
                          <p className="mb-1">
                            <span className="text-gray-400">{'<'}</span>
                            <span className="text-gray-700">Developer</span>
                            <span className="text-gray-400">{' />'}</span>
                          </p>
                          <p className="text-gray-900 text-xl font-medium">William Camilo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Barra inferior minimalista */}
                  <div className="bg-gray-900 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-mono">En línea</span>
                      </div>
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
                      >
                        Contactar →
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos minimalistas */}
                <div className="absolute -z-10 top-10 -right-10 w-20 h-20 border border-gray-300 rounded-full opacity-20"></div>
                <div className="absolute -z-10 bottom-10 -left-10 w-32 h-32 border border-gray-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <button 
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider font-mono">scroll()</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;