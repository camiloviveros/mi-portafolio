"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Definición de tipos para proyectos
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'backend' | 'all';
}

// Lista de proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Mi portafolio personal desarrollado con Next.js, TypeScript y Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/wcgutierrez/portfolio",
    liveUrl: "https://wcgutierrez.vercel.app",
    category: "web"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Inventarios",
    description: "Aplicación web para gestionar inventarios con autenticación, roles y permisos.",
    image: "/projects/inventory.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/wcgutierrez/inventory-system",
    liveUrl: "https://inventory-system.vercel.app",
    category: "web"
  },
  {
    id: 3,
    title: "API de Gestión de Tareas",
    description: "API RESTful para gestión de tareas con autenticación y autorización.",
    image: "/projects/tasks-api.jpg",
    tags: ["Django", "Python", "PostgreSQL", "REST"],
    githubUrl: "https://github.com/wcgutierrez/tasks-api",
    category: "backend"
  },
  {
    id: 4,
    title: "App de Control de Gastos",
    description: "Aplicación móvil para control de gastos personales con estadísticas y gráficos.",
    image: "/projects/expense-tracker.jpg",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/wcgutierrez/expense-tracker",
    category: "mobile"
  },
  {
    id: 5,
    title: "Blog Tecnológico",
    description: "Blog sobre tecnología con sistema de comentarios y autenticación.",
    image: "/projects/tech-blog.jpg",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/wcgutierrez/tech-blog",
    liveUrl: "https://tech-blog-wcg.vercel.app",
    category: "web"
  },
  {
    id: 6,
    title: "Sistema de Análisis de Vulnerabilidades",
    description: "Herramienta de análisis de vulnerabilidades en aplicaciones web.",
    image: "/projects/security-scanner.jpg",
    tags: ["Python", "Flask", "Docker"],
    githubUrl: "https://github.com/wcgutierrez/security-scanner",
    category: "backend"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-60 bg-gray-200">
        <Image 
          src={project.image || "/placeholder-project.jpg"} 
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-black transition-colors"
          >
            <FaGithub className="mr-2" />
            <span>GitHub</span>
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-black transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'backend'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle title="Portafolio" />
      
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md ${activeCategory === 'all' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeCategory === 'web' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
            onClick={() => setActiveCategory('web')}
          >
            Web
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeCategory === 'mobile' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Móvil
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeCategory === 'backend' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Estos son solo algunos de mis proyectos. Puedes encontrar más en mi GitHub.
        </p>
        <a 
          href="https://github.com/wcgutierrez" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="mr-2" />
          <span>Ver más en GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioSection;