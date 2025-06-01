"use client";
import { useState, useEffect } from 'react';

// Tipos TypeScript
interface FileItem {
  type: 'file';
  icon: string;
  description: string;
}

interface FolderItem {
  type: 'folder';
  expanded: boolean;
  children: FileStructure;
}

type FileStructureItem = FileItem | FolderItem;

interface FileStructure {
  [key: string]: FileStructureItem;
}

interface ModalData {
  fileName: string;
  description: string;
}

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [explorerMenu, setExplorerMenu] = useState<boolean>(false);
  const [selectedModal, setSelectedModal] = useState<ModalData | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    src: true,
    components: false,
    'mi-historia': false,
    proyectos: false,
    'habilidades-tecnicas': false
  });

  // Estructura del explorador de archivos
  const fileStructure: FileStructure = {
    'MI-PORTAFOLIO': {
      type: 'folder',
      expanded: true,
      children: {
        'package.json': { 
          type: 'file', 
          icon: '📦', 
          description: '{\n  "name": "developer-journey",\n  "version": "1.0.0",\n  "description": "Mi transición de militar a desarrollador",\n  "author": "WC",\n  "dependencies": {\n    "disciplina": "^militar.entregado",\n    "determinacion": "^autodidacta.constante",\n    "sueños": "^fullstack.developer",\n    "valores": "^honor.deber.patria"\n  },\n  "scripts": {\n    "start": "comenzar-nueva-vida",\n    "build": "construir-futuro",\n    "deploy": "hacer-realidad-sueños"\n  }\n}' 
        },
        'next.config.mjs': { 
          type: 'file', 
          icon: '⚙️', 
          description: '// Configuración de mi nuevo camino\nexport default {\n  experimental: {\n    militarToDeveloper: true,\n    autodidactaMode: "enabled",\n    persistencia: "infinita"\n  },\n  env: {\n    MOTIVACION: "Crear impacto positivo",\n    META: "Ser desarrollador Full Stack exitoso",\n    ORIGEN: "Servicio militar con honor"\n  }\n}' 
        },
        src: {
          type: 'folder',
          expanded: expandedFolders.src,
          children: {
            components: {
              type: 'folder',
              expanded: expandedFolders.components,
              children: {
                'Navbar.tsx': { type: 'file', icon: '🧭', description: 'Componente de navegación principal con diseño moderno y explorador de archivos' },
                'Hero.tsx': { type: 'file', icon: '🏠', description: 'Sección principal con presentación personal y llamada a la acción' },
                'About.tsx': { type: 'file', icon: '👨‍💻', description: 'Mi historia: de militar entregado a desarrollador autodidacta' },
                'Skills.tsx': { type: 'file', icon: '⚡', description: 'Habilidades técnicas y soft skills del servicio militar' },
                'Projects.tsx': { type: 'file', icon: '🚀', description: 'Portafolio de proyectos desarrollados con pasión' },
                'Contact.tsx': { type: 'file', icon: '📧', description: 'Formulario de contacto y redes sociales profesionales' }
              }
            },
            'mi-historia': {
              type: 'folder',
              expanded: expandedFolders['mi-historia'],
              children: {
                'misSueños.tsx': { 
                  type: 'file', 
                  icon: '✨', 
                  description: 'const misSueños = {\n  objetivo: "Ser un desarrollador Full Stack exitoso",\n  motivacion: "Crear soluciones que impacten positivamente la sociedad",\n  metas: [\n    "Dominar React, Node.js y tecnologías modernas",\n    "Contribuir a proyectos open source",\n    "Crear mi propia startup tecnológica",\n    "Mentorear a otros en su transición profesional"\n  ],\n  valores: ["Excelencia", "Perseverancia", "Innovación"]\n};' 
                },
                'origenMilitar.tsx': { 
                  type: 'file', 
                  icon: '🎖️', 
                  description: 'const disciplinaMilitar = {\n  servicio: "Militar entregado con honor y dedicación",\n  valores: ["Honor", "Deber", "Patria", "Lealtad", "Integridad"],\n  habilidades: [\n    "Liderazgo bajo presión",\n    "Trabajo en equipo efectivo",\n    "Resistencia ante adversidades",\n    "Toma de decisiones críticas",\n    "Disciplina y organización"\n  ],\n  legado: "Servir con honor, transicionar con propósito"\n};' 
                },
                'transición.tsx': { 
                  type: 'file', 
                  icon: '🔄', 
                  description: 'const miTransicion = {\n  de: "Servicio militar con honor",\n  hacia: "Desarrollo de software innovador",\n  proceso: {\n    aprendizaje: "Autodidacta y determinado",\n    retos: "Adaptar disciplina militar al mundo tech",\n    fortalezas: "Perseverancia y mentalidad de crecimiento"\n  },\n  filosofia: "La disciplina militar + pasión por la tecnología = éxito"\n};' 
                },
                'dependencias-vida.tsx': {
                  type: 'file',
                  icon: '💎',
                  description: 'const dependenciasVida = {\n  familia: {\n    version: "∞",\n    description: "Apoyo incondicional y motivación diaria",\n    required: true\n  },\n  fe: {\n    version: "eterna",\n    description: "Guía espiritual y fortaleza interior",\n    required: true\n  },\n  salud: {\n    version: "prioritaria",\n    description: "Mente y cuerpo sanos para rendir al máximo",\n    required: true\n  },\n  educacion: {\n    version: "continua",\n    description: "Aprendizaje constante y mejora personal",\n    required: true\n  },\n  proposito: {\n    version: "claro",\n    description: "Impactar positivamente a través de la tecnología",\n    required: true\n  }\n};'
                }
              }
            },
            proyectos: {
              type: 'folder',
              expanded: expandedFolders.proyectos,
              children: {
                'webApps.tsx': { 
                  type: 'file', 
                  icon: '🌐', 
                  description: 'const proyectosWeb = {\n  tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS"],\n  enfoque: "Interfaces modernas, responsive y accesibles",\n  objetivo: "Experiencia de usuario excepcional",\n  principios: [\n    "Código limpio y mantenible",\n    "Performance optimizada",\n    "Diseño centrado en el usuario"\n  ]\n};' 
                },
                'aprendizaje.tsx': { 
                  type: 'file', 
                  icon: '📚', 
                  description: 'const miAprendizaje = {\n  modalidad: "Autodidacta con disciplina militar",\n  recursos: [\n    "Documentación oficial",\n    "Proyectos prácticos reales",\n    "Comunidad developer",\n    "Cursos especializados"\n  ],\n  metodologia: "Aprender haciendo, fallar rápido, mejorar siempre",\n  progreso: "Constante y disciplinado como en el servicio"\n};' 
                },
                'metas-2025.tsx': {
                  type: 'file',
                  icon: '🎯',
                  description: 'const metas2025 = {\n  tecnicas: [\n    "Dominar Next.js 15 y React 19",\n    "Aprender Node.js y bases de datos",\n    "Contribuir a 5 proyectos open source",\n    "Crear 3 aplicaciones web completas"\n  ],\n  profesionales: [\n    "Conseguir primer trabajo como desarrollador",\n    "Construir network en la industria tech",\n    "Obtener certificaciones relevantes"\n  ],\n  personales: [\n    "Mantener equilibrio vida-código",\n    "Ayudar a otros en transición profesional"\n  ]\n};'
                }
              }
            },
            'habilidades-tecnicas': {
              type: 'folder',
              expanded: expandedFolders['habilidades-tecnicas'],
              children: {
                'frontend.tsx': { 
                  type: 'file', 
                  icon: '🎨', 
                  description: 'const skillsFrontend = {\n  frameworks: ["React", "Next.js"],\n  estilos: ["Tailwind CSS", "CSS3", "Sass"],\n  herramientas: ["TypeScript", "HTML5", "JavaScript ES6+"],\n  librerias: ["Framer Motion", "Lucide Icons"],\n  metodologias: ["Mobile First", "Responsive Design", "Atomic Design"]\n};' 
                },
                'softSkills.tsx': { 
                  type: 'file', 
                  icon: '🤝', 
                  description: 'const habilidadesBlandas = {\n  delServicioMilitar: [\n    "Disciplina inquebrantable",\n    "Liderazgo natural",\n    "Trabajo bajo presión extrema",\n    "Comunicación efectiva",\n    "Adaptabilidad"\n  ],\n  paraDesarrollo: [\n    "Resolución de problemas complejos",\n    "Aprendizaje acelerado",\n    "Atención meticulosa al detalle",\n    "Perseverancia ante bugs",\n    "Mentalidad de mejora continua"\n  ]\n};' 
                },
                'tools.tsx': {
                  type: 'file',
                  icon: '🛠️',
                  description: 'const herramientasDesarrollo = {\n  editores: ["VS Code", "Neovim"],\n  versionControl: ["Git", "GitHub"],\n  design: ["Figma", "Adobe XD"],\n  deployment: ["Vercel", "Netlify"],\n  learning: [\n    "MDN Web Docs",\n    "React.dev",\n    "YouTube tech channels",\n    "Developer communities"\n  ],\n  nextToLearn: ["Docker", "AWS", "PostgreSQL"]\n};'
                }
              }
            }
          }
        },
        'README.md': {
          type: 'file',
          icon: '📋',
          description: '# Mi Camino: De Militar a Desarrollador\n\n## 🎖️ Origen\nServicio militar con honor, disciplina y dedicación.\n\n## 💻 Destino\nDesarrollador Full Stack apasionado por crear soluciones.\n\n## 🚀 Misión\nTransformar mi disciplina militar en código de calidad.\n\n## 📈 Progreso\n- ✅ Fundamentos de programación\n- ✅ React y Next.js\n- 🔄 Node.js y bases de datos\n- 📋 Primer trabajo como developer\n\n*"La disciplina militar + pasión por la tecnología = éxito inevitable"*'
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
      
      const sections: string[] = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition: number = window.scrollY + 100;
      
      for (const section of sections) {
        const element: HTMLElement | null = document.getElementById(section);
        if (element) {
          const offsetTop: number = element.offsetTop;
          const offsetHeight: number = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    setMobileMenu(false);
    setActiveSection(sectionId);
    const element: HTMLElement | null = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFolder = (folderPath: string): void => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderPath]: !prev[folderPath]
    }));
  };

  const openModal = (fileName: string, description: string): void => {
    setSelectedModal({ fileName, description });
    setExplorerMenu(false);
  };

  const closeModal = (): void => {
    setSelectedModal(null);
  };

  const renderFileTree = (structure: FileStructure, level: number = 0, path: string = ''): JSX.Element[] => {
    return Object.entries(structure).map(([name, item]: [string, FileStructureItem]) => {
      const currentPath: string = path ? `${path}/${name}` : name;
      
      if (item.type === 'folder') {
        const folderItem = item as FolderItem;
        const isExpanded: boolean = folderItem.expanded;
        
        return (
          <div key={name} style={{ marginLeft: `${level * 12}px` }}>
            <div>
              <button
                onClick={() => toggleFolder(name)}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 py-1 w-full text-left"
              >
                <span className="text-xs">{isExpanded ? '📂' : '📁'}</span>
                <span className="text-sm font-medium">{name}</span>
              </button>
              {isExpanded && folderItem.children && (
                <div className="ml-2">
                  {renderFileTree(folderItem.children, level + 1, currentPath)}
                </div>
              )}
            </div>
          </div>
        );
      } else {
        const fileItem = item as FileItem;
        
        return (
          <div key={name} style={{ marginLeft: `${level * 12}px` }}>
            <button
              onClick={() => openModal(name, fileItem.description)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 py-1 w-full text-left group"
            >
              <span className="text-xs">{fileItem.icon}</span>
              <span className="text-sm group-hover:underline">{name}</span>
            </button>
          </div>
        );
      }
    });
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 font-code ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2 sm:py-3' 
          : 'bg-black py-4 sm:py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            
            {/* Explorer Menu Button (tres puntos) - Esquina izquierda */}
            <div className="relative">
              <button 
                onClick={() => setExplorerMenu(!explorerMenu)}
                className="p-2 text-white hover:bg-white/10 rounded-md transition-all duration-300 group"
                aria-label="Explorer menu"
              >
                {!explorerMenu ? (
                  // Tres puntos cuando está cerrado
                  <div className="flex flex-col gap-1">
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200 delay-75"></div>
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200 delay-150"></div>
                  </div>
                ) : (
                  // X cuando está abierto
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>

              {/* Explorer Dropdown */}
              <div className={`absolute left-0 top-full mt-2 w-80 sm:w-96 transition-all duration-300 ${
                explorerMenu 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}>
                <div className="bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl max-h-[70vh] overflow-y-auto">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">📁</span>
                        <span className="text-sm font-bold text-white">EXPLORADOR</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {renderFileTree(fileStructure)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenedor centrado para logo y navegación */}
            <div className="flex-1 flex justify-between items-center ml-4">
              {/* Logo */}
              <button 
                onClick={() => scrollToSection('home')} 
                className="group flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-all duration-500 transform hover:scale-105"
              >
              <div className="text-sm sm:text-base lg:text-lg transition-all duration-300">
                <span className="text-gray-400 group-hover:text-gray-300">const</span>{' '}
                <span className="text-white font-bold group-hover:text-gray-100">developer</span>{' '}
                <span className="text-gray-400 group-hover:text-gray-300">=</span>{' '}
                <span className="text-gray-400 group-hover:text-gray-300">{'{'}</span>
                <span className="text-white ml-1 sm:ml-2 font-bold text-lg sm:text-xl group-hover:text-gray-100 transform group-hover:scale-110 transition-all duration-300">WC</span>
                <span className="text-gray-400 group-hover:text-gray-300">{' }'}</span>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              <span className="text-gray-400 mr-2 text-lg transition-colors duration-300">{'['}</span>
              {navItems.map((item: NavItem, index: number) => (
                <div key={item.id} className="flex items-center">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-500 group ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-white/10 scale-100' 
                        : 'bg-white/5 scale-0 group-hover:scale-100'
                    }`}></div>
                    
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    <span className="relative z-10">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">"</span>
                      <span className="mx-0.5">{item.label}</span>
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">"</span>
                    </span>
                  </button>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-400 mx-0.5 lg:mx-1 transition-colors duration-300">,</span>
                  )}
                </div>
              ))}
              <span className="text-gray-400 ml-2 text-lg transition-colors duration-300">{']'}</span>
              
              {/* Contact Button */}
              <div className="ml-6 lg:ml-8 group relative">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="relative overflow-hidden px-4 py-2 rounded-md transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute inset-0 border border-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <span className="relative z-10">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{'() => '}</span>
                    <span className="text-white font-bold group-hover:text-gray-100 transition-colors duration-300">
                      contact()
                    </span>
                  </span>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 sm:p-3 text-white hover:bg-white/10 rounded-md transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 sm:w-6 sm:h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transition-all duration-500 origin-center ${
                  mobileMenu ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : 'group-hover:scale-110'
                }`}></span>
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileMenu ? 'opacity-0 scale-0' : 'group-hover:scale-110 delay-75'
                }`}></span>
                <span className={`block h-0.5 w-full bg-white transition-all duration-500 origin-center ${
                  mobileMenu ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : 'group-hover:scale-110 delay-150'
                }`}></span>
              </div>
            </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute left-0 right-0 top-full transition-all duration-500 ${
            mobileMenu 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}>
            <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50 shadow-2xl">
              <div className="p-4 sm:p-6 space-y-1">
                {navItems.map((item: NavItem, index: number) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative w-full text-left px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                      activeSection === item.id
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <span className="relative z-10">
                      <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">"</span>
                      <span className="mx-1">{item.label}</span>
                      <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">"</span>
                    </span>
                  </button>
                ))}
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative w-full text-left px-3 sm:px-4 py-4 sm:py-5 mt-4 text-white font-bold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <span className="relative z-10">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{'() => '}</span>
                    <span className="group-hover:text-gray-100 transition-colors duration-300">contact()</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal para mostrar contenido de archivos */}
      {selectedModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-black/95 border border-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Header del Modal */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 text-lg">📄</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{selectedModal.fileName}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-md"
                  aria-label="Cerrar modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contenido del Modal */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="bg-gray-900/50 rounded-md p-4 sm:p-6 border border-gray-800">
                  <pre className="text-sm sm:text-base text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                    {selectedModal.description}
                  </pre>
                </div>
                
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-md">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-blue-300">
                    <span className="text-blue-400 mt-0.5">💡</span>
                    <div>
                      <p className="font-medium mb-1">Código que representa mi historia y aspiraciones</p>
                      <p className="text-blue-400/80">Cada archivo cuenta parte de mi camino de militar a desarrollador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .font-code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </>
  );
};

export default Navbar;