"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectsData = {
  featured: [
    {
      id: 1,
      title: "Sistema de Control de Acceso a Edificios",
      description: "Sistema completo para gestión de acceso con Django/Python en backend y Next.js en frontend. Incluye autenticación, roles de usuario y monitoreo en tiempo real.",
      image: "/projects/access-control.jpg",
      category: "Full Stack",
      technologies: ["Django", "Python", "Next.js", "PostgreSQL", "JWT"],
      githubFrontend: "https://github.com/camiloviveros/VeriAccesCae-Frontend.git",
      githubBackend: "https://github.com/camiloviveros/VeriAccesCae.git",
      status: "Próximo a desplegar",
      type: "Sistema Empresarial"
    },
    {
      id: 2,
      title: "Sistema de Gestión para Barbería",
      description: "Aplicación completa para gestión de citas, clientes, servicios y facturación en barberías. Incluye panel administrativo y sistema de reservas.",
      image: "/projects/barbershop.jpg",
      category: "Full Stack",
      technologies: ["Django", "React", "PostgreSQL", "Bootstrap"],
      githubRepo: "https://github.com/camiloviveros/sistema-Barberia.git",
      status: "En desarrollo",
      type: "Sistema de Gestión"
    },
    {
      id: 3,
      title: "Boutique - Sistema de Ventas de Ropa",
      description: "Proyecto ambicioso de e-commerce para boutique con gestión completa de inventario, ventas, clientes y reportes. Backend robusto en desarrollo.",
      image: "/projects/boutique.jpg",
      category: "E-commerce",
      technologies: ["Django", "Python", "React", "PostgreSQL", "Stripe"],
      githubRepo: "https://github.com/camiloviveros/Boutique.git",
      status: "En producción - Backend",
      type: "E-commerce"
    },
    {
      id: 4,
      title: "CamChat - Sistema de Mensajería P2P",
      description: "Aplicación móvil de mensajería instantánea con comunicación peer-to-peer, desarrollada en Flutter con integración Firebase para autenticación y almacenamiento.",
      image: "/projects/camchat.jpg",
      category: "Mobile",
      technologies: ["Flutter", "Dart", "Firebase", "P2P"],
      githubRepo: "https://github.com/camiloviveros/camchat.git",
      status: "Completado",
      type: "Aplicación Móvil"
    }
  ],
  web: [
    {
      id: 5,
      title: "Juego de Aprendizaje de Programación",
      description: "Plataforma interactiva gamificada para aprender conceptos de programación de manera divertida y práctica.",
      image: "/projects/learning-game.jpg",
      category: "Educativo",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://juego-de-aprendizaje.vercel.app/",
      status: "Desplegado",
      type: "Aplicación Web"
    },
    {
      id: 6,
      title: "Control de Agua Inteligente",
      description: "Sistema web para gestionar el consumo de agua en el hogar con integración de IA (DeepSeek) para análisis predictivo y recomendaciones.",
      image: "/projects/water-control.jpg",
      category: "IoT",
      technologies: ["Next.js", "Tailwind CSS", "DeepSeek AI", "API"],
      liveUrl: "https://agua-control.vercel.app/",
      status: "Desplegado",
      type: "Sistema IoT"
    },
    {
      id: 7,
      title: "MarketCam - E-commerce de Ropa",
      description: "Tienda online completa para venta de ropa con catálogo de productos, carrito de compras y diseño responsive moderno.",
      image: "/projects/marketcam.jpg",
      category: "E-commerce",
      technologies: ["Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "https://pagina-web-marketcam.vercel.app/",
      status: "Desplegado",
      type: "E-commerce"
    },
    {
      id: 8,
      title: "Página Web Futurista",
      description: "Diseño web moderno y futurista con animaciones avanzadas y experiencia de usuario inmersiva.",
      image: "/projects/future-web.jpg",
      category: "Diseño Web",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://pagina-futuro.vercel.app/",
      status: "Desplegado",
      type: "Landing Page"
    }
  ],
  designs: [
    {
      id: 9,
      title: "Diseño de Login Interactivo",
      description: "Interfaz de login moderna con animaciones CSS y validación JavaScript en tiempo real.",
      image: "/projects/login-design.jpg",
      category: "UI/UX",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://dise-o-login-zeta.vercel.app/",
      status: "Desplegado",
      type: "Componente UI"
    },
    {
      id: 10,
      title: "Paisajes Interactivos",
      description: "Galería interactiva de paisajes con efectos visuales y transiciones fluidas.",
      image: "/projects/landscapes.jpg",
      category: "Diseño Web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://dise-o-login-aknt.vercel.app/",
      status: "Desplegado",
      type: "Galería Web"
    },
    {
      id: 11,
      title: "Diseño Cebra - Arte Digital",
      description: "Proyecto de arte digital interactivo con patrones geométricos y animaciones CSS avanzadas.",
      image: "/projects/zebra-design.jpg",
      category: "Arte Digital",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://dise-o-cebra.vercel.app/",
      status: "Desplegado",
      type: "Arte Interactivo"
    },
    {
      id: 12,
      title: "Efecto Parallax Avanzado",
      description: "Demostración de técnicas avanzadas de parallax scrolling con múltiples capas y efectos visuales.",
      image: "/projects/parallax.jpg",
      category: "Efectos Web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://efecto-parallax.vercel.app/",
      status: "Desplegado",
      type: "Efectos Visuales"
    },
    {
      id: 13,
      title: "Home de Películas",
      description: "Interfaz estilo Netflix para mostrar películas con navegación fluida y diseño responsive.",
      image: "/projects/movie-home.jpg",
      category: "UI/UX",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://dise-o-pelicula-home.vercel.app/",
      status: "Desplegado",
      type: "Interfaz de Usuario"
    }
  ],
  systems: [
    {
      id: 14,
      title: "Sistema de Ventas de Computadores",
      description: "Aplicación de escritorio desarrollada en C# para gestión completa de ventas, inventario y facturación de equipos de cómputo.",
      image: "/projects/computer-sales.jpg",
      category: "Desktop",
      technologies: ["C#", ".NET", "SQL Server", "WinForms"],
      githubRepo: "https://github.com/camiloviveros/sistema-venta-computadores.git",
      status: "Completado",
      type: "Aplicación de Escritorio"
    },
    {
      id: 15,
      title: "Control de Acceso a Eventos",
      description: "Sistema completo para gestión de acceso a eventos con registro de asistentes, validación de entradas y reportes en tiempo real.",
      image: "/projects/event-access.jpg",
      category: "Full Stack",
      technologies: ["Django", "Python", "Bootstrap", "HTML5", "CSS3"],
      githubRepo: "https://github.com/camiloviveros/control-acceso-eventos.git",
      status: "Listo para desplegar",
      type: "Sistema de Eventos"
    }
  ]
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Desplegado': return 'text-green-600';
      case 'Completado': return 'text-blue-600';
      case 'En desarrollo': return 'text-yellow-600';
      case 'En producción - Backend': return 'text-purple-600';
      case 'Próximo a desplegar': return 'text-orange-600';
      case 'Listo para desplegar': return 'text-indigo-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div 
      className="group bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex flex-col h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100 flex-shrink-0">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 bg-white text-xs font-mono ${getStatusStyle(project.status)} rounded`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-base font-bold text-black group-hover:text-white break-words leading-tight">
            <span className="text-gray-600 group-hover:text-gray-400">project.</span>
            <span className="break-all">{project.title.replace(/\s+/g, '')}</span>
          </h3>
          <span className="text-xs text-gray-500 group-hover:text-gray-400 font-mono">
            // {project.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-700 group-hover:text-gray-300 mb-4 font-mono flex-grow overflow-hidden">
          <span className="break-words line-clamp-3">"{project.description}"</span>
        </p>
        
        {/* Technologies */}
        <div className="mb-4 font-mono text-xs">
          <span className="text-gray-600 group-hover:text-gray-400">tech: [</span>
          <div className="pl-4 break-words">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <span key={i} className="block break-all">
                "{tech}"{i < Math.min(project.technologies.length - 1, 2) ? ',' : ''}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-gray-500 group-hover:text-gray-400">
                // +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          <span className="text-gray-600 group-hover:text-gray-400">]</span>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-2 text-sm font-mono mt-auto">
          {project.liveUrl && (
            <Link 
              href={project.liveUrl}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 group-hover:text-white group-hover:hover:text-gray-300 break-all"
            >
              view()
            </Link>
          )}
          
          {project.githubRepo && (
            <Link 
              href={project.githubRepo}
              target="_blank"
              className="text-black hover:text-gray-700 group-hover:text-white group-hover:hover:text-gray-300 break-all"
            >
              code()
            </Link>
          )}
          
          {project.githubFrontend && (
            <Link 
              href={project.githubFrontend}
              target="_blank"
              className="text-green-600 hover:text-green-800 group-hover:text-white group-hover:hover:text-gray-300 break-all"
            >
              frontend()
            </Link>
          )}
          
          {project.githubBackend && (
            <Link 
              href={project.githubBackend}
              target="_blank"
              className="text-purple-600 hover:text-purple-800 group-hover:text-white group-hover:hover:text-gray-300 break-all"
            >
              backend()
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'all', label: 'all', count: Object.values(projectsData).flat().length },
    { id: 'featured', label: 'featured', count: projectsData.featured.length },
    { id: 'web', label: 'webApps', count: projectsData.web.length },
    { id: 'designs', label: 'designs', count: projectsData.designs.length },
    { id: 'systems', label: 'systems', count: projectsData.systems.length }
  ];

  const getCurrentProjects = () => {
    switch (activeTab) {
      case 'all': return Object.values(projectsData).flat();
      case 'featured': return projectsData.featured;
      case 'web': return projectsData.web;
      case 'designs': return projectsData.designs;
      case 'systems': return projectsData.systems;
      default: return projectsData.featured;
    }
  };

  const totalProjects = Object.values(projectsData).flat().length;

  return (
    <section id="projects" className="py-20 bg-white font-code" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-600">const</span>{' '}
            <span className="text-black">Projects</span>{' '}
            <span className="text-gray-600">=</span>{' '}
            <span className="text-gray-600">{'{'}</span>
          </h2>
          <div className="w-24 h-[2px] bg-black mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
            <span className="text-gray-500">// </span>
            Total: {totalProjects} proyectos desarrollados y muchos más en desarrollo actualmente
          </p>
          
          {/* Estadísticas Rápidas */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-700 mb-8 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-green-600">●</span>
              <span>deployed: {projectsData.web.filter(p => p.status === 'Desplegado').length + projectsData.designs.filter(p => p.status === 'Desplegado').length}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">●</span>
              <span>inProgress: {projectsData.featured.filter(p => p.status.includes('desarrollo')).length + projectsData.systems.filter(p => p.status.includes('desarrollo')).length}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">●</span>
              <span>completed: {projectsData.featured.filter(p => p.status === 'Completado').length + projectsData.systems.filter(p => p.status === 'Completado').length}</span>
            </div>
          </div>
        </div>

        {/* Tabs estilo código */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex p-2 bg-gray-100 border-2 border-black whitespace-nowrap">
            <span className="text-black font-bold px-2 py-2 flex-shrink-0">projects.</span>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {getCurrentProjects().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            <span className="text-gray-600">{'}'}</span>
          </h2>
          
          <div className="bg-black text-white p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-mono">
              <span className="text-gray-400">if (</span>
              interested
              <span className="text-gray-400">) {'{'}</span>
            </h3>
            <p className="text-gray-300 mb-6 font-mono text-sm">
              collaborate() // Siempre abierto a nuevos desafíos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/camiloviveros" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-600">{'<'}</span>
                GitHub
                <span className="text-gray-600">{'/>'}</span>
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                contact();
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

export default Projects;