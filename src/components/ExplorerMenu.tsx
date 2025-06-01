// 1. Crear nuevo componente: src/components/ExplorerMenu.tsx
"use client";
import { useState } from 'react';

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

interface ExplorerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalData {
  fileName: string;
  description: string;
}

const ExplorerMenu: React.FC<ExplorerMenuProps> = ({ isOpen, onClose }) => {
  const [selectedModal, setSelectedModal] = useState<ModalData | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'MI-PORTAFOLIO': true,
    src: true,
    components: false,
    'mi-historia': false,
    proyectos: false,
    'habilidades-tecnicas': false
  });

  // Estructura del explorador de archivos (la misma que tenías en Navbar)
  const fileStructure: FileStructure = {
    'MI-PORTAFOLIO': {
      type: 'folder',
      expanded: expandedFolders['MI-PORTAFOLIO'],
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

  const toggleFolder = (folderPath: string): void => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderPath]: !prev[folderPath]
    }));
  };

  const openModal = (fileName: string, description: string): void => {
    console.log('Abriendo modal:', fileName); // Debug
    setSelectedModal({ fileName, description });
  };

  const closeModal = (): void => {
    setSelectedModal(null);
  };

  // Función mejorada para cerrar modal al hacer click en el overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
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
              onClick={() => {
                console.log('Click en archivo:', name, fileItem.description); // Debug
                openModal(name, fileItem.description);
              }}
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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay de fondo */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Panel del explorador */}
      <div className="fixed top-0 left-0 w-80 sm:w-96 h-full bg-black/95 backdrop-blur-md border-r border-gray-800 shadow-2xl z-50 transform transition-transform duration-300">
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📁</span>
              <span className="text-sm font-bold text-white">EXPLORADOR</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-1">
            {renderFileTree(fileStructure)}
          </div>
        </div>
      </div>

      {/* Modal para mostrar contenido de archivos - MEJORADO */}
      {selectedModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div 
            className="bg-black/95 border border-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer click en el modal
          >
            <div className="flex flex-col h-full max-h-[85vh]">
              {/* Header del Modal */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 text-lg">📄</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                    {selectedModal.fileName}
                  </h3>
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
              
              {/* Contenido del Modal - Con scroll independiente */}
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
    </>
  );
};

export default ExplorerMenu;