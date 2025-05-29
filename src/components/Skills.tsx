"use client";
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('using');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          setIsVisible(true);
          sectionRef.current.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = {
    using: [
      { name: "HTML5", icon: "html5", category: "Frontend", description: "Estructura semántica y moderna para aplicaciones web" },
      { name: "CSS3", icon: "css3", category: "Frontend", description: "Estilos avanzados, animaciones y responsive design" },
      { name: "JavaScript", icon: "javascript", category: "Frontend", description: "Desarrollo interactivo y dinámico del lado cliente" },
      { name: "React", icon: "react", category: "Frontend", description: "Componentes reutilizables y aplicaciones escalables" },
      { name: "Next.js", icon: "nextjs", category: "Frontend", description: "Framework React con SSR y optimizaciones" },
      { name: "Python", icon: "python", category: "Backend", description: "Desarrollo backend robusto y automatización" },
      { name: "Django", icon: "django", category: "Backend", description: "Framework web completo para aplicaciones complejas" },
      { name: "Git", icon: "git", category: "Tools", description: "Control de versiones y colaboración en equipo" }
    ],
    learning: [
      { name: "TypeScript", icon: "typescript", category: "Frontend", description: "JavaScript tipado para código más seguro" },
      { name: "Node.js", icon: "nodejs", category: "Backend", description: "JavaScript del lado servidor en desarrollo" },
      { name: "MongoDB", icon: "mongodb", category: "Database", description: "Base de datos NoSQL flexible y escalable" },
      { name: "Flutter", icon: "flutter", category: "Mobile", description: "Desarrollo multiplataforma para aplicaciones móviles" }
    ],
    databases: [
      { name: "PostgreSQL", icon: "postgresql", category: "Database", description: "Base de datos relacional robusta y confiable" },
      { name: "MySQL", icon: "mysql", category: "Database", description: "Sistema de gestión de bases de datos popular" },
      { name: "SQLite", icon: "sqlite", category: "Database", description: "Base de datos ligera para proyectos pequeños" },
      { name: "Firebase", icon: "firebase", category: "Database", description: "Plataforma backend-as-a-service de Google" }
    ],
    security: [
      { name: "Kali Linux", icon: "kali", category: "Security", description: "Distribución Linux especializada en pentesting" },
      { name: "Parrot OS", icon: "parrot", category: "Security", description: "Sistema operativo para análisis de seguridad" },
      { name: "Pentesting", icon: "security", category: "Security", description: "Pruebas de penetración y análisis de vulnerabilidades" },
      { name: "OWASP", icon: "owasp", category: "Security", description: "Mejores prácticas de seguridad web aplicadas" }
    ]
  };

  const tabs = [
    { id: 'using', label: 'Tecnologías Principales' },
    { id: 'learning', label: 'En Aprendizaje' },
    { id: 'databases', label: 'Bases de Datos' },
    { id: 'security', label: 'Ciberseguridad' }
  ];

  // Iconos SVG simplificados
  const skillIcons = {
    html5: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z"/>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4168.3073-6.6501 2.1463-8.6614 4.9728C1.1004 6.584.3414 8.3251.1269 10.156"/>
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77"/>
      </svg>
    ),
    django: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0z"/>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441"/>
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125"/>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383"/>
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.757-.963-.757s-.684.363-.963.757"/>
      </svg>
    ),
    flutter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-4.64-4.64L14.314 2.4h7.37l-7.211 7.211z"/>
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.111 5.441c-.777-2.325-2.694-2.325-3.471 0-.777 2.325.777 4.65 3.471 4.65s4.248-2.325 3.471-4.65z"/>
      </svg>
    ),
    mysql: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273"/>
      </svg>
    ),
    sqlite: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M21.678 5.367c-2.745-3.57-8.047-5.004-12.769-3.456C4.187 3.46 1.04 8.492 1.04 12.946"/>
      </svg>
    ),
    firebase: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M5.229 4.382l3.821 3.848-.888-1.618c-.438-.8-1.508-.822-1.978-.04L5.229 4.382z"/>
      </svg>
    ),
    kali: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    parrot: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    owasp: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    )
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    return (
      <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 ${skill.name === 'HTML5' ? 'text-orange-500' : 
                                       skill.name === 'CSS3' ? 'text-blue-500' :
                                       skill.name === 'JavaScript' ? 'text-yellow-500' :
                                       skill.name === 'React' ? 'text-blue-400' :
                                       skill.name === 'Next.js' ? 'text-gray-800' :
                                       skill.name === 'Python' ? 'text-blue-600' :
                                       skill.name === 'Django' ? 'text-green-600' :
                                       skill.name === 'Git' ? 'text-red-500' :
                                       skill.name === 'TypeScript' ? 'text-blue-600' :
                                       skill.name === 'Node.js' ? 'text-green-500' :
                                       skill.name === 'MongoDB' ? 'text-green-600' :
                                       skill.name === 'Flutter' ? 'text-blue-400' :
                                       skill.name === 'PostgreSQL' ? 'text-blue-700' :
                                       skill.name === 'MySQL' ? 'text-orange-600' :
                                       skill.name === 'SQLite' ? 'text-blue-500' :
                                       skill.name === 'Firebase' ? 'text-yellow-500' :
                                       skill.name === 'Kali Linux' ? 'text-blue-600' :
                                       skill.name === 'Parrot OS' ? 'text-cyan-500' :
                                       skill.name === 'Pentesting' ? 'text-red-600' :
                                       'text-gray-700'} p-2.5 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 flex-shrink-0`}>
            {skillIcons[skill.icon as keyof typeof skillIcons]}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-1">{skill.name}</h3>
            <p className="text-xs text-gray-500 mb-2">{skill.category}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>

        {/* Pestañas de navegación - Estilo Clásico */}
        <div className={`mb-8 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-1 bg-white rounded-lg p-1 shadow-lg max-w-3xl mx-auto border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de skills */}
        <div className={`transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
            {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;