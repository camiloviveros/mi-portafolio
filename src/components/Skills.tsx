"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      { 
        name: "HTML5", 
        icon: "html5", 
        category: "Frontend", 
        description: "Estructura semántica y moderna para aplicaciones web",
        image: "/images/skills/html5.png",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        level: "Intermedio",
        experience: "4+ años"
      },
      { 
        name: "CSS3", 
        icon: "css3", 
        category: "Frontend", 
        description: "Estilos avanzados, animaciones y responsive design",
        image: "/images/skills/css3.png",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        level: "Intermedio",
        experience: "4+ años"
      },
      { 
        name: "JavaScript", 
        icon: "javascript", 
        category: "Frontend", 
        description: "Desarrollo interactivo y dinámico del lado cliente",
        image: "/images/skills/javascript.png",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        level: "Intermedio",
        experience: "4+ años"
      },
      { 
        name: "React", 
        icon: "react", 
        category: "Frontend", 
        description: "Componentes reutilizables y aplicaciones escalables",
        image: "/images/skills/react.png",
        documentation: "https://react.dev",
        level: "Intermedio",
        experience: "3+ años"
      },
      { 
        name: "Next.js", 
        icon: "nextjs", 
        category: "Frontend", 
        description: "Framework React con SSR y optimizaciones",
        image: "/images/skills/nextjs.png",
        documentation: "https://nextjs.org/docs",
        level: "Avanzado",
        experience: "2+ años"
      },
      { 
        name: "Python", 
        icon: "python", 
        category: "Backend", 
        description: "Desarrollo backend robusto y automatización",
        image: "/images/skills/python.png",
        documentation: "https://docs.python.org",
        level: "Intermedio",
        experience: "4+ años"
      },
      { 
        name: "Django", 
        icon: "django", 
        category: "Backend", 
        description: "Framework web completo para aplicaciones complejas",
        image: "/images/skills/django.png",
        documentation: "https://docs.djangoproject.com",
        level: "Intermedio",
        experience: "3+ años"
      },
      { 
        name: "Git", 
        icon: "git", 
        category: "Tools", 
        description: "Control de versiones y colaboración en equipo",
        image: "/images/skills/git.png",
        documentation: "https://git-scm.com/doc",
        level: "Intermedio",
        experience: "4+ años"
      }
    ],
    learning: [
      { 
        name: "TypeScript", 
        icon: "typescript", 
        category: "Frontend", 
        description: "JavaScript tipado para código más seguro",
        image: "/images/skills/typescript.png",
        documentation: "https://www.typescriptlang.org/docs",
        level: "Intermedio",
        experience: "1+ años"
      },
      { 
        name: "Node.js", 
        icon: "nodejs", 
        category: "Backend", 
        description: "JavaScript del lado servidor en desarrollo",
        image: "/images/skills/nodejs.png",
        documentation: "https://nodejs.org/en/docs",
        level: "Intermedio",
        experience: "1+ años"
      },
      { 
        name: "MongoDB", 
        icon: "mongodb", 
        category: "Database", 
        description: "Base de datos NoSQL flexible y escalable",
        image: "/images/skills/mongodb.png",
        documentation: "https://docs.mongodb.com",
        level: "Básico",
        experience: "6+ meses"
      },
      { 
        name: "Flutter", 
        icon: "flutter", 
        category: "Mobile", 
        description: "Desarrollo multiplataforma para aplicaciones móviles",
        image: "/images/skills/flutter.png",
        documentation: "https://docs.flutter.dev",
        level: "Intermedio",
        experience: "1+ años"
      }
    ],
    databases: [
      { 
        name: "PostgreSQL", 
        icon: "postgresql", 
        category: "Database", 
        description: "Base de datos relacional robusta y confiable",
        image: "/images/skills/postgresql.png",
        documentation: "https://www.postgresql.org/docs",
        level: "Intermedio",
        experience: "2+ años"
      },
      { 
        name: "MySQL", 
        icon: "mysql", 
        category: "Database", 
        description: "Sistema de gestión de bases de datos popular",
        image: "/images/skills/mysql.png",
        documentation: "https://dev.mysql.com/doc",
        level: "Intermedio",
        experience: "3+ años"
      },
      { 
        name: "MySQL Workbench", 
        icon: "workbench", 
        category: "Database Tool", 
        description: "Herramienta visual para administración de MySQL",
        image: "/images/skills/workbench.png",
        documentation: "https://dev.mysql.com/doc/workbench/en",
        level: "Intermedio",
        experience: "2+ años"
      },
      { 
        name: "Firebase", 
        icon: "firebase", 
        category: "Database", 
        description: "Plataforma backend-as-a-service de Google",
        image: "/images/skills/firebase.png",
        documentation: "https://firebase.google.com/docs",
        level: "Intermedio",
        experience: "1+ años"
      }
    ],
    security: [
      { 
        name: "Kali Linux", 
        icon: "kali", 
        category: "Security", 
        description: "Distribución Linux especializada en pentesting",
        image: "/images/skills/kali.png",
        documentation: "https://www.kali.org/docs",
        level: "Intermedio",
        experience: "2+ años"
      },
      { 
        name: "Parrot OS", 
        icon: "parrot", 
        category: "Security", 
        description: "Sistema operativo para análisis de seguridad",
        image: "/images/skills/parrot.png",
        documentation: "https://docs.parrotsec.org",
        level: "Básico",
        experience: "1+ años"
      },
      { 
        name: "Pentesting", 
        icon: "security", 
        category: "Security", 
        description: "Pruebas de penetración y análisis de vulnerabilidades",
        image: "/images/skills/pentesting.png",
        documentation: "https://owasp.org",
        level: "Intermedio",
        experience: "2+ años"
      },
      { 
        name: "OWASP", 
        icon: "owasp", 
        category: "Security", 
        description: "Mejores prácticas de seguridad web aplicadas",
        image: "/images/skills/owasp.png",
        documentation: "https://owasp.org/www-project-top-ten",
        level: "Intermedio",
        experience: "2+ años"
      }
    ]
  };

  const tabs = [
    { id: 'all', label: 'all', count: Object.values(skillsData).flat().length },
    { id: 'using', label: 'main', count: skillsData.using.length },
    { id: 'learning', label: 'learning', count: skillsData.learning.length },
    { id: 'databases', label: 'databases', count: skillsData.databases.length },
    { id: 'security', label: 'security', count: skillsData.security.length }
  ];

  const getCurrentSkills = () => {
    switch (activeTab) {
      case 'all': return Object.values(skillsData).flat();
      case 'using': return skillsData.using;
      case 'learning': return skillsData.learning;
      case 'databases': return skillsData.databases;
      case 'security': return skillsData.security;
      default: return skillsData.using;
    }
  };

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Avanzado': return 'text-green-600';
      case 'Intermedio': return 'text-yellow-600';
      case 'Básico': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    return (
      <div 
        className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex flex-col h-full"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="aspect-square relative overflow-hidden bg-gray-100 flex-shrink-0">
          <Image 
            src={skill.image}
            alt={skill.name}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Level Badge */}
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 bg-white text-xs font-mono ${getLevelStyle(skill.level)} rounded`}>
              {skill.level}
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-3">
            <h3 className="text-base font-bold text-black group-hover:text-white break-words leading-tight">
              <span className="text-gray-600 group-hover:text-gray-400">skill.</span>
              <span className="break-all">{skill.name.replace(/\s+/g, '')}</span>
            </h3>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 font-mono">
              // {skill.category} - {skill.experience}
            </span>
          </div>
          
          <p className="text-sm text-gray-700 group-hover:text-gray-300 mb-4 font-mono flex-grow overflow-hidden">
            <span className="break-words line-clamp-3">"{skill.description}"</span>
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap gap-2 text-sm font-mono mt-auto">
            {skill.documentation && (
              <Link 
                href={skill.documentation}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 group-hover:text-white group-hover:hover:text-gray-300 break-all"
              >
                docs()
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };

  const totalSkills = Object.values(skillsData).flat().length;

  return (
    <section id="skills" className="py-20 bg-white font-code" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-600">const</span>{' '}
            <span className="text-black">Skills</span>{' '}
            <span className="text-gray-600">=</span>{' '}
            <span className="text-gray-600">{'{'}</span>
          </h2>
          <div className="w-24 h-[2px] bg-black mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-4xl mx-auto mb-8 text-lg">
            <span className="text-gray-500">// </span>
            Me gusta mucho el trabajo en Next.js y Tailwind, utilizar React en frontend, Django y Python en backend, y PostgreSQL/MySQL Workbench para bases de datos. Estoy en constante aprendizaje, pero esto es en lo que más me desempeño y sigo aprendiendo para fortalecer más estos aspectos.
          </p>
          
          {/* Estadísticas Rápidas */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-700 mb-8 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-green-600">●</span>
              <span>main: {skillsData.using.length} tecnologías</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">●</span>
              <span>learning: {skillsData.learning.length} en progreso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">●</span>
              <span>total: {totalSkills} habilidades</span>
            </div>
          </div>
        </div>

        {/* Tabs estilo código */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex p-2 bg-gray-100 border-2 border-black whitespace-nowrap">
            <span className="text-black font-bold px-2 py-2 flex-shrink-0">skills.</span>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 text-sm font-mono transition-all duration-200 flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                {tab.label}
                <span className="ml-1 text-xs opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {getCurrentSkills().map((skill, index) => (
            <SkillCard key={`${skill.name}-${activeTab}`} skill={skill} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            <span className="text-gray-600">{'}'}</span>
          </h2>
          
          <div className="bg-black text-white p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-mono">
              <span className="text-gray-400">while (</span>
              learning
              <span className="text-gray-400">) {'{'}</span>
            </h3>
            <p className="text-gray-300 mb-6 font-mono text-sm">
              improve() // Siempre en constante crecimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-600">{'<'}</span>
                Ver Proyectos
                <span className="text-gray-600">{'/>'}</span>
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                collaborate();
              </Link>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-6 font-mono">
              <span className="text-gray-400">{'}'}</span>
            </h3>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .font-code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;