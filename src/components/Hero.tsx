"use client";
import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [loopCount, setLoopCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Líneas de código agrupadas para terminal más compacta
  const codeLines = useMemo(() => [
    { text: 'class Developer {', delay: 100 },
    { text: '  constructor() {', delay: 80 },
    { text: '    this.name = "William Camilo Gutierrez";', delay: 60 },
    { text: '    this.role = "Software Developer";', delay: 60 },
    { text: '    this.location = "Colombia";', delay: 60 },
    { text: '    this.skills = ["Frontend", "Backend", "Security"];', delay: 60 },
    { text: '  }', delay: 80 },
    { text: '  async buildSolutions() {', delay: 80 },
    { text: '    return "Sistemas seguros y escalables";', delay: 60 },
    { text: '  }', delay: 80 },
    { text: '}', delay: 100 }
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Seguimiento del mouse para efectos parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Efecto de cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Efecto de máquina de escribir con loop infinito corregido
  useEffect(() => {
    if (!isLoaded) return;

    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, currentLine.delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
        return () => clearTimeout(timeout);
      }
    } else {
      // Al completar todas las líneas, marcar como completado
      if (!isTypingComplete) {
        setIsTypingComplete(true);
      }
      
      // Reiniciar después de 4 segundos - LOOP INFINITO
      const timeout = setTimeout(() => {
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTypingComplete(false);
        setLoopCount(prev => prev + 1);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded, currentLineIndex, currentCharIndex, loopCount, codeLines, isTypingComplete]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para renderizar el código con efecto typewriter y altura fija
  const renderCodeLine = (lineIndex: number) => {
    const line = codeLines[lineIndex];
    
    // Mostrar siempre todas las líneas para mantener altura constante
    const displayText = lineIndex > currentLineIndex 
      ? '' // Línea vacía si aún no se ha llegado
      : lineIndex === currentLineIndex 
        ? line.text.substring(0, currentCharIndex)
        : line.text; // Línea completa si ya se escribió

    // Determinar el estilo de la línea
    const getLineStyle = () => {
      if (line.text.includes('class') || line.text.includes('constructor') || line.text.includes('async') || line.text.includes('return')) {
        return 'text-purple-600 font-bold';
      }
      if (line.text.includes('this.')) {
        return 'text-blue-600';
      }
      if (line.text.includes('"')) {
        return 'text-green-600';
      }
      return 'text-gray-800';
    };

    return (
      <div key={lineIndex} className="min-h-[18px] sm:min-h-[20px] md:min-h-[22px] lg:min-h-[24px] flex">
        <span className={`${getLineStyle()} text-[10px] sm:text-xs md:text-sm lg:text-base break-words leading-tight`}>
          {displayText}
          {lineIndex === currentLineIndex && showCursor && displayText.length > 0 && (
            <span className="text-gray-600 animate-pulse">|</span>
          )}
          {/* Espacio invisible para mantener altura cuando la línea está vacía */}
          {displayText.length === 0 && <span className="opacity-0">.</span>}
        </span>
      </div>
    );
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden font-code pt-20 sm:pt-24 md:pt-28 lg:pt-20 pb-4 sm:pb-6"
      ref={heroRef}
    >
      {/* Patrón de fondo animado mejorado */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #e0e0e0 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-500 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-pink-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-center min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-140px)] gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-6 lg:mt-0">
          
          {/* Contenido izquierdo - Editor de código */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 mt-12 sm:mt-14 lg:mt-4">
            <div className={`transform transition-all duration-1500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`} style={{
              transform: `translateY(${mousePosition.y * 0.1}px) translateX(${mousePosition.x * 0.05}px)`
            }}>
              {/* Editor de código con glassmorphism */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-lg overflow-hidden">
                {/* Barra superior del editor mejorada */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm hover:shadow-red-300 transition-shadow duration-300"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-sm hover:shadow-yellow-300 transition-shadow duration-300"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm hover:shadow-green-300 transition-shadow duration-300"></div>
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-mono bg-gray-700 px-2 py-1 rounded text-center min-w-0">
                    Developer.js
                  </div>
                  <div className="text-gray-400 text-xs hidden sm:block">UTF-8</div>
                </div>
                
                {/* Área de código compacta */}
                <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-6 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] bg-gradient-to-br from-gray-50/50 to-white/80">
                  <div className="space-y-1 sm:space-y-1.5 font-mono leading-tight">
                    {codeLines.map((_, index) => renderCodeLine(index))}
                  </div>
                </div>
                
                {/* Barra inferior mejorada */}
                <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 border-t border-gray-200/50 px-3 sm:px-4 py-2 flex justify-between text-xs sm:text-sm text-gray-600">
                  <span className="font-mono flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Ln {Math.min(currentLineIndex + 1, codeLines.length)}, Col {currentCharIndex + 1}
                  </span>
                  <span className="font-mono">JavaScript</span>
                </div>
              </div>

              {/* Botones de acción completamente rediseñados */}
              <div className="mt-4 sm:mt-6 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="https://github.com/camiloviveros" 
                    target="_blank"
                    className="group relative overflow-hidden bg-black text-white px-3 sm:px-4 py-3 sm:py-3.5 text-center font-bold text-xs sm:text-sm font-mono rounded-lg shadow-lg lg:hover:shadow-2xl transition-all duration-500 lg:hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      <span className="text-gray-400 lg:group-hover:text-gray-300">git.</span>
                      <span>push()</span>
                    </span>
                  </Link>
                  
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group relative overflow-hidden border-2 border-black text-black px-3 sm:px-4 py-3 sm:py-3.5 font-bold text-xs sm:text-sm font-mono rounded-lg shadow-lg lg:hover:shadow-2xl lg:hover:bg-black lg:hover:text-white transition-all duration-500 lg:hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-black scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative z-10">projects.view()</span>
                  </button>
                </div>
                
                <Link 
                  href="http://www.linkedin.com/in/william-camilo-gutierrez-viveros-3740a5369" 
                  target="_blank"
                  className="group relative block w-full overflow-hidden border-2 border-blue-600 text-blue-600 px-3 sm:px-4 py-3 sm:py-3.5 font-bold text-xs sm:text-sm text-center font-mono rounded-lg shadow-lg lg:hover:shadow-2xl lg:hover:bg-blue-600 lg:hover:text-white transition-all duration-500 lg:hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    <span className="lg:group-hover:text-blue-100">linkedin.</span>
                    <span>connect()</span>
                  </span>
                </Link>
              </div>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 font-mono text-center lg:text-left">
                <span className="text-gray-400">{/* Construyendo el futuro, una línea de código a la vez */}</span>
                Construyendo el futuro, una línea de código a la vez
              </p>
            </div>
          </div>

          {/* Indicador de scroll centrado - SOLO DESKTOP */}
          <div className="hidden lg:flex w-12 order-2 lg:order-2 justify-center items-end pb-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center gap-3 text-black hover:text-gray-700 transition-all duration-500"
              style={{
                transform: `translateY(${mousePosition.y * 0.2}px)`
              }}
            >
              <span className="text-xs font-mono writing-mode-vertical-rl transform rotate-180 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                scroll.down()
              </span>
              <div className="relative w-6 h-12 border-2 border-black rounded-full flex justify-center overflow-hidden group-hover:border-gray-700 transition-colors duration-300">
                <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce group-hover:bg-gray-700"></div>
                <div className="absolute inset-0 bg-black/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </div>
            </button>
          </div>

          {/* Contenedor de imagen completamente renovado */}
          <div className={`w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-3 mb-6 sm:mb-8 lg:mb-0 transform transition-all duration-1500 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`} style={{
            transform: `translateY(${-mousePosition.y * 0.1}px) translateX(${-mousePosition.x * 0.05}px)`
          }}>
            <div className="max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] w-full">
              {/* Marco contenedor con efectos avanzados SIEMPRE ACTIVOS */}
              <div className="relative group">
                {/* Ondas atómicas negras finas y más oscuras - SIEMPRE VISIBLES */}
                <div className="absolute -inset-6 sm:-inset-8 opacity-80">
                  <div className="absolute inset-0 border border-black/60 rounded-full animate-pulse" style={{animationDuration: '2s', borderWidth: '1px'}}></div>
                  <div className="absolute inset-2 border border-black/50 rounded-full animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s', borderWidth: '1px'}}></div>
                  <div className="absolute inset-4 border border-black/40 rounded-full animate-pulse" style={{animationDuration: '3s', animationDelay: '1s', borderWidth: '1px'}}></div>
                </div>
                
                {/* Anillos orbitales negros más oscuros - SIEMPRE ACTIVOS */}
                <div className="absolute -inset-10 sm:-inset-12 opacity-60">
                  <div className="absolute inset-0 border border-black/50 rounded-full animate-spin" style={{animationDuration: '12s', borderWidth: '1px'}}></div>
                  <div className="absolute inset-3 border border-black/40 rounded-full animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse', borderWidth: '1px'}}></div>
                  <div className="absolute inset-6 border border-black/30 rounded-full animate-spin" style={{animationDuration: '24s', borderWidth: '1px'}}></div>
                </div>
                
                {/* Contenedor principal limpio y cuadrado */}
                <div className="relative bg-black/90 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl transition-all duration-700 lg:hover:scale-110">
                  {/* Marco interior cuadrado */}
                  <div className="border-2 border-gray-600 p-2 sm:p-3 md:p-4 transition-colors duration-500 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Imagen cuadrada */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                      <Image 
                        src="/images/profile.jpg" 
                        alt="William Camilo" 
                        fill
                        className="object-cover transition-transform duration-1000 lg:hover:scale-125 lg:hover:rotate-3"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling;
                          if (placeholder) {
                            placeholder.classList.remove('hidden');
                          }
                        }}
                      />
                      
                      {/* Placeholder mejorado cuadrado */}
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                        <div className="text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-3 sm:mb-4 border-2 border-white flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">WC</span>
                          </div>
                          <div className="text-white font-mono space-y-1">
                            <p className="text-sm sm:text-base">
                              <span className="text-gray-400">@</span>william_camilo
                            </p>
                            <p className="text-sm text-gray-400">developer.init()</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Información mejorada */}
                  <div className="mt-3 sm:mt-4 text-center">
                    <h2 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 transition-colors duration-500">William Camilo</h2>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base font-mono mb-3 transition-colors duration-500">Developer</p>
                    
                    {/* Mini terminal cuadrado */}
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-500 p-2 sm:p-3 text-left transition-colors duration-500">
                      <p className="text-green-400 text-xs sm:text-sm font-mono transition-colors duration-500">
                        <span className="text-gray-500">$</span> status
                      </p>
                      <p className="text-white text-xs sm:text-sm font-mono mt-1 transition-colors duration-500">
                        <span className="text-green-400 animate-pulse">●</span> Available for hire
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Etiquetas flotantes negras cuadradas */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 font-mono shadow-lg transition-transform duration-300 animate-bounce" style={{animationDuration: '2s'}}>
                  v2.0.25
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 font-mono shadow-lg transition-transform duration-300 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                  &lt;/&gt;
                </div>
                
                {/* Puntos de energía negros más visibles */}
                <div className="absolute -top-3 left-1/4 w-1.5 h-1.5 bg-black rounded-full animate-ping opacity-70" style={{animationDuration: '2s'}}></div>
                <div className="absolute -right-3 top-1/3 w-2 h-2 bg-black rounded-full animate-pulse opacity-60" style={{animationDuration: '2.5s'}}></div>
                <div className="absolute -bottom-3 right-1/4 w-1.5 h-1.5 bg-black rounded-full animate-ping opacity-70" style={{animationDuration: '2.2s'}}></div>
                <div className="absolute -left-3 bottom-1/3 w-2 h-2 bg-black rounded-full animate-bounce opacity-65" style={{animationDuration: '3s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator flotante para móvil - COMPLETAMENTE REDISEÑADO */}
      {isTypingComplete && (
        <div className="lg:hidden fixed bottom-4 right-4 z-50 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="group relative bg-black/80 backdrop-blur-md text-white p-3 rounded-full shadow-2xl border border-gray-600 hover:border-gray-400 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg 
              className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            
            {/* Pulso de energía */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;