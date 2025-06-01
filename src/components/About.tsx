"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [terminalState, setTerminalState] = useState('idle');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Nueva bandera
  const lastAnimationTime = useRef<number>(0); // Tiempo de última animación

  const terminalCommands = [
    { command: 'npm install about-william-camilo', delay: 800 },
    { command: '📦 Installing dependencies...', delay: 600 },
    { command: '✓ Loaded personal-history.json', delay: 500 },
    { command: '✓ Compiled skills-matrix.tsx', delay: 500 },
    { command: '🚀 Building William Camilo profile...', delay: 600 },
    { command: '⚡ Generating about section...', delay: 500 },
    { command: '✅ About section ready!', delay: 500 },
    { command: '🌐 Starting development server...', delay: 500 },
    { command: '⚡ Server running on http://localhost:3000', delay: 600 },
    { command: 'function aboutMe() { ... }', delay: 600 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentTime = Date.now();
            const timeSinceLastAnimation = currentTime - lastAnimationTime.current;
            
            // Solo ejecutar si nunca se ha animado O si han pasado más de 5 minutos (300 segundos)
            if (!hasAnimated || timeSinceLastAnimation > 300000) {
              // Reset states solo si se va a ejecutar la animación
              setTerminalState('idle');
              setTerminalLines([]);
              setContentVisible(false);
              setTitleVisible(false);
              
              setTimeout(() => {
                setTerminalState('executing');
                executeTerminalAnimation();
                setHasAnimated(true);
                lastAnimationTime.current = currentTime;
              }, 500);
            } else {
              // Si ya se animó recientemente, mostrar contenido directamente
              if (terminalState === 'idle') {
                setTerminalState('completed');
                setContentVisible(true);
                setTitleVisible(true);
              }
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, terminalState]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const executeTerminalAnimation = async () => {
    let commandIndex = 0;
    
    const executeNextCommand = () => {
      if (commandIndex < terminalCommands.length) {
        const command = terminalCommands[commandIndex];
        
        setTimeout(() => {
          setTerminalLines(prev => [...prev, command.command]);
          commandIndex++;
          executeNextCommand();
        }, command.delay);
      } else {
        setTimeout(() => {
          setTerminalState('completed');
          setContentVisible(true);
          setTimeout(() => {
            setTitleVisible(true);
          }, 500);
        }, 1000);
      }
    };

    executeNextCommand();
  };

  return (
    <section id="about" className="py-20 bg-white font-code" ref={sectionRef}>
      
      {/* Terminal conservada igual */}
      <div className="w-full max-w-6xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <div className={`bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 transform transition-all duration-1000 ${
          terminalState !== 'idle' ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-t-2xl border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm hover:shadow-red-400/50 transition-shadow cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm hover:shadow-yellow-400/50 transition-shadow cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm hover:shadow-green-400/50 transition-shadow cursor-pointer"></div>
            </div>
            <div className="text-gray-300 text-sm font-mono bg-gray-800 px-3 py-1 rounded-md">
              Kali Terminal
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-xs">Active</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 h-56 sm:h-64 md:h-72 lg:h-80 overflow-y-auto bg-black/95">
            <div className="font-mono text-sm space-y-2">
              <div className="text-green-400 opacity-90">
                ┌──(william㉿kali)-[~/about-portfolio]
              </div>
              
              {terminalLines.map((line, index) => (
                <div key={index} className="group">
                  <div className="flex items-start">
                    <span className="text-green-400 whitespace-nowrap flex-shrink-0">└─$ </span>
                    <span className={`break-all ml-2 leading-relaxed ${
                      line.includes('localhost:3000') ? 'text-cyan-300 font-semibold' : 
                      line.includes('✓') || line.includes('✅') ? 'text-green-300' : 
                      line.includes('🚀') || line.includes('⚡') || line.includes('🌐') ? 'text-yellow-300' :
                      line.includes('📦') ? 'text-blue-300' :
                      line.includes('npm') ? 'text-purple-300' :
                      'text-gray-100'
                    }`}>
                      {line}
                    </span>
                    {index === terminalLines.length - 1 && terminalState === 'executing' && showCursor && (
                      <span className="text-green-400 ml-1 animate-pulse font-bold">█</span>
                    )}
                  </div>
                </div>
              ))}
              
              {terminalState === 'completed' && (
                <div className="mt-4 animate-fade-in">
                  <div className="text-green-400 opacity-90">
                    ┌──(william㉿kali)-[~/about-portfolio]
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400">└─$ </span>
                    <span className="text-purple-300 ml-2">cat aboutMe.js</span>
                  </div>
                  <div className="mt-3 ml-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="text-blue-300 font-semibold">
                      <span className="text-purple-300">function</span> <span className="text-cyan-300">aboutMe</span><span className="text-gray-300">()</span> <span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="text-green-300 ml-4 mt-1">
                      <span className="text-purple-300">return</span> <span className="text-yellow-300">"Ready to explore my story..."</span><span className="text-gray-300">;</span>
                    </div>
                    <div className="text-yellow-300 font-semibold">
                      {'}'}
                    </div>
                  </div>
                  <div className="text-green-400 mt-3 opacity-90">
                    ┌──(william㉿kali)-[~/about-portfolio]
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400">└─$ </span>
                    <span className="text-green-400 animate-pulse font-bold">█</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal con estilo de Projects */}
      {contentVisible && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          
          {/* Título principal estilo Projects */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 ${
              titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <span className="text-gray-600 animate-keyword-bounce">const</span>{' '}
              <span className="text-black animate-aboutme-blink">AboutMe</span>{' '}
              <span className="text-gray-600 animate-operator-pulse">=</span>{' '}
              <span className="text-gray-600 animate-bracket-bounce">{'{'}</span>
            </h2>
            <div className="w-24 h-[2px] bg-black mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              <span className="text-gray-500">// </span>
              Técnico en sistemas, persona humilde con ganas de seguir creciendo y en constante aprendizaje. Me gusta mucho el trabajo en equipo, mi pasatiempo es ver películas, jugar fútbol o explorar lugares.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Historia Personal */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">
                    <span className="text-gray-600 group-hover:text-gray-400">const</span>{' '}
                    <span className="text-black group-hover:text-white">historia</span>{' '}
                    <span className="text-gray-600 group-hover:text-gray-400">=</span>{' '}
                    <span className="text-gray-600 group-hover:text-gray-400">{'{'}</span>
                  </h3>
                  <div className="pl-4 space-y-3 font-mono text-sm">
                    <p>
                      <span className="text-blue-600 group-hover:text-blue-400">nacimiento:</span>{' '}
                      <span className="text-green-600 group-hover:text-green-400">"11 de enero de 2001"</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 group-hover:text-blue-400">lugar:</span>{' '}
                      <span className="text-green-600 group-hover:text-green-400">"La Unión, Nariño"</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 group-hover:text-blue-400">origen:</span>{' '}
                      <span className="text-green-600 group-hover:text-green-400">"Campo cafetero"</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 group-hover:text-blue-400">valores:</span>{' '}
                      <span className="text-gray-600 group-hover:text-gray-400">['trabajo duro', 'responsabilidad', 'determinación']</span>
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mt-6 text-gray-600 group-hover:text-gray-400">{'}'};</h3>
                </div>
              </div>

              <div className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">
                    <span className="text-gray-600 group-hover:text-gray-400">const</span>{' '}
                    <span className="text-black group-hover:text-white">experiencia</span>{' '}
                    <span className="text-gray-600 group-hover:text-gray-400">=</span>{' '}
                    <span className="text-gray-600 group-hover:text-gray-400">[</span>
                  </h3>
                  <div className="pl-4 space-y-4 font-mono text-sm">
                    <div className="bg-gray-100 group-hover:bg-gray-900 p-4 border-l-4 border-blue-600">
                      <p>
                        <span className="text-blue-600 group-hover:text-blue-400">rol:</span>{' '}
                        <span className="text-green-600 group-hover:text-green-400">"Infantería de Marina"</span>,
                      </p>
                      <p>
                        <span className="text-blue-600 group-hover:text-blue-400">aprendizaje:</span>{' '}
                        <span className="text-gray-600 group-hover:text-gray-400">['disciplina', 'liderazgo', 'trabajo en equipo']</span>
                      </p>
                    </div>
                    <div className="bg-gray-100 group-hover:bg-gray-900 p-4 border-l-4 border-green-600">
                      <p>
                        <span className="text-blue-600 group-hover:text-blue-400">rol:</span>{' '}
                        <span className="text-green-600 group-hover:text-green-400">"Desarrollador Full Stack"</span>,
                      </p>
                      <p>
                        <span className="text-blue-600 group-hover:text-blue-400">actual:</span>{' '}
                        <span className="text-green-600 group-hover:text-green-400">true</span>,
                      </p>
                      <p>
                        <span className="text-blue-600 group-hover:text-blue-400">pasión:</span>{' '}
                        <span className="text-gray-600 group-hover:text-gray-400">['frontend', 'backend', 'ciberseguridad']</span>
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-6 text-gray-600 group-hover:text-gray-400">];</h3>
                </div>
              </div>
            </div>

            {/* Tarjetas de experiencia */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {icon: '{ }', title: 'EDUCACIÓN', items: ['Técnico.sistemas = true;', 'Ingeniería.software = "cursando";', 'aprendizaje = "constante";']},
                {icon: '[ ]', title: 'MILITAR', items: ['servicio[0] = "Infantería";', 'servicio[1] = "Marina";', 'servicio.push("honor");']},
                {icon: '( )', title: 'DESARROLLO', items: ['function build() {', '  return "soluciones";', '}']}
              ].map((card, index) => (
                <div key={index} className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-4 font-mono text-black group-hover:text-white">{card.icon}</div>
                    <h3 className="text-lg font-bold mb-4 tracking-wider text-black group-hover:text-white">{card.title}</h3>
                    <div className="space-y-2 font-mono text-xs text-left">
                      {card.items.map((item, i) => (
                        <p key={i} className="text-gray-700 group-hover:text-gray-300 opacity-80 group-hover:opacity-100">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pasiones */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gray-600">const</span>{' '}
                <span className="text-black">pasiones</span>{' '}
                <span className="text-gray-600">=</span>{' '}
                <span className="text-gray-600">[</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {icon: '🔒', title: 'Ciberseguridad', desc: '// Análisis de vulnerabilidades\n// Pentesting y seguridad\n// Protección de sistemas'},
                  {icon: '🐍', title: 'Django + Python', desc: '// APIs robustas\n// Sistemas escalables\n// Backend eficiente'},
                  {icon: '⚽', title: 'Deportes', desc: '// Fútbol.play();\n// Naturaleza.explore();\n// Balance.maintain();'},
                  {icon: '🎨', title: 'Diseño Web', desc: '// UI.create();\n// UX.optimize();\n// Design.innovate();'}
                ].map((item, index) => (
                  <div key={index} className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                    <div className="p-6 text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold mb-4 text-black group-hover:text-white">{item.title}</h4>
                      <p className="text-sm font-mono leading-relaxed whitespace-pre-line text-gray-700 group-hover:text-gray-300 opacity-80 group-hover:opacity-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-center mt-8">
                <span className="text-gray-600">];</span>
              </h3>
            </div>

            {/* Valores */}
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gray-400">this.</span>valores{' '}
                <span className="text-gray-400">= {'{'}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {['honestidad: true', 'responsabilidad: 100%', 'teamWork: enabled', 'innovación++', 'disciplina = max', 'adaptabilidad: flex'].map((valor, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 font-mono text-sm hover:bg-white/20 transition-colors duration-300">
                    {valor}
                  </div>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mt-8">
                <span className="text-gray-400">{'}'}</span>;
              </h3>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                <span className="text-gray-600">{'}'}</span>
              </h2>
              
              <div className="bg-black text-white p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4 font-mono">
                  <span className="text-gray-400">if (</span>
                  interested
                  <span className="text-gray-400">) {'{'}</span>
                </h3>
                <p className="text-gray-300 mb-6 font-mono text-sm">
                  connect() // Siempre abierto a nuevas oportunidades
                </p>
                <div className="flex gap-4 justify-center">
                  <Link 
                    href="/cv.pdf" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-gray-600">{'<'}</span>
                    Download CV
                    <span className="text-gray-600">{'/>'}</span>
                  </Link>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    contact();
                  </Link>
                </div>
                <h3 className="text-xl font-bold mt-6 font-mono">
                  <span className="text-gray-400">{'}'}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes code-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          }
          50% { 
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
        
        @keyframes glow-effect {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.3),
                         0 0 10px rgba(0, 0, 0, 0.2);
          }
          33% { 
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.5),
                         0 0 15px rgba(0, 0, 0, 0.3),
                         0 0 20px rgba(0, 0, 0, 0.2);
          }
          66% { 
            text-shadow: 0 0 8px rgba(0, 0, 0, 0.4),
                         0 0 12px rgba(0, 0, 0, 0.25);
          }
        }
        
        @keyframes keyword-bounce {
          0%, 100% { 
            color: #374151;
            transform: translateY(0px) scale(1);
            text-shadow: 0 0 3px rgba(55, 65, 81, 0.2);
          }
          20% { 
            transform: translateY(-3px) scale(1.02);
          }
          40% { 
            color: #1f2937;
            transform: translateY(-6px) scale(1.05);
            text-shadow: 0 0 8px rgba(31, 41, 55, 0.4);
          }
          60% { 
            transform: translateY(-3px) scale(1.02);
          }
          80% { 
            transform: translateY(-1px) scale(1.01);
          }
        }
        
        @keyframes operator-pulse {
          0%, 100% { 
            color: #6b7280;
            transform: scale(1);
            opacity: 1;
          }
          25% { 
            opacity: 0.3;
          }
          50% { 
            color: #374151;
            transform: scale(1.15);
            opacity: 1;
            text-shadow: 0 0 8px rgba(55, 65, 81, 0.4);
          }
          75% { 
            opacity: 0.7;
          }
        }
        
        @keyframes bracket-bounce {
          0%, 100% { 
            color: #4b5563;
            transform: translateY(0px) scale(1);
            text-shadow: 0 0 3px rgba(75, 85, 99, 0.3);
          }
          20% { 
            color: #374151;
            transform: translateY(-4px) scale(1.1);
          }
          40% { 
            color: #1f2937;
            transform: translateY(-8px) scale(1.2);
            text-shadow: 0 0 12px rgba(31, 41, 55, 0.6),
                         0 0 20px rgba(31, 41, 55, 0.4);
          }
          60% { 
            color: #374151;
            transform: translateY(-4px) scale(1.1);
          }
          80% { 
            color: #4b5563;
            transform: translateY(-1px) scale(1.05);
          }
        }
        
        @keyframes aboutme-blink {
          0%, 90%, 100% { 
            opacity: 1;
            transform: scale(1);
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          }
          95% { 
            opacity: 0.3;
            transform: scale(0.98);
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }
        
        .animate-code-glow {
          animation: code-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-glow-effect {
          animation: glow-effect 6s ease-in-out infinite;
        }
        
        .animate-keyword-bounce {
          animation: keyword-bounce 1.8s ease-out infinite;
          display: inline-block;
        }
        
        .animate-operator-pulse {
          animation: operator-pulse 2s ease-in-out infinite;
        }
        
        .animate-bracket-bounce {
          animation: bracket-bounce 3s ease-out infinite;
        }
        
        .animate-aboutme-blink {
          animation: aboutme-blink 4s ease-in-out infinite;
        }
        
        .font-code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </section>
  );
};

export default About;