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
      liveUrl: "https://vercel.com/camiloviveros-projects/agua-control/F6Um22cvDQ15QFCKWgxXrrkktWHZ",
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
      liveUrl: "https://vercel.com/camiloviveros-projects/pagina-futuro/5p4GwDunixLMmQofknbVauAkBFo2",
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
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Desplegado': return 'bg-green-100 text-green-800';
      case 'Completado': return 'bg-blue-100 text-blue-800';
      case 'En desarrollo': return 'bg-yellow-100 text-yellow-800';
      case 'En producción - Backend': return 'bg-purple-100 text-purple-800';
      case 'Próximo a desplegar': return 'bg-orange-100 text-orange-800';
      case 'Listo para desplegar': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-50 text-gray-700 rounded border">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 text-sm">
          {project.liveUrl && (
            <Link 
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Ver Demo</span>
            </Link>
          )}
          
          {project.githubRepo && (
            <Link 
              href={project.githubRepo}
              target="_blank"
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Código</span>
            </Link>
          )}
          
          {project.githubFrontend && (
            <Link 
              href={project.githubFrontend}
              target="_blank"
              className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Frontend</span>
            </Link>
          )}
          
          {project.githubBackend && (
            <Link 
              href={project.githubBackend}
              target="_blank"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Backend</span>
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
    { id: 'featured', label: 'Destacados', count: projectsData.featured.length },
    { id: 'web', label: 'Aplicaciones Web', count: projectsData.web.length },
    { id: 'designs', label: 'Diseños', count: projectsData.designs.length },
    { id: 'systems', label: 'Sistemas', count: projectsData.systems.length }
  ];

  const getCurrentProjects = () => {
    switch (activeTab) {
      case 'featured': return projectsData.featured;
      case 'web': return projectsData.web;
      case 'designs': return projectsData.designs;
      case 'systems': return projectsData.systems;
      default: return projectsData.featured;
    }
  };

  const totalProjects = Object.values(projectsData).flat().length;

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            MI PORTAFOLIO
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Una colección de {totalProjects} proyectos que demuestran mi experiencia en desarrollo, 
            desde aplicaciones web hasta sistemas empresariales y diseños interactivos.
          </p>
          
          {/* Estadísticas Rápidas */}
          <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>{projectsData.web.filter(p => p.status === 'Desplegado').length + projectsData.designs.filter(p => p.status === 'Desplegado').length} Desplegados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>{projectsData.featured.filter(p => p.status.includes('desarrollo')).length + projectsData.systems.filter(p => p.status.includes('desarrollo')).length} En Desarrollo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>{projectsData.featured.filter(p => p.status === 'Completado').length + projectsData.systems.filter(p => p.status === 'Completado').length} Completados</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {getCurrentProjects().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">¿Interesado en colaborar?</h3>
            <p className="text-gray-600 mb-6">
              Estos proyectos representan mi pasión por crear soluciones tecnológicas innovadoras. 
              Siempre estoy abierto a nuevos desafíos y oportunidades de colaboración.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="https://github.com/camiloviveros" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Ver más en GitHub</span>
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contactar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;