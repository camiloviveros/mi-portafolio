"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    image: "placeholder",
    github: "https://github.com/wcamilo/portfolio",
    live: "https://wcamilo.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "placeholder",
    github: "https://github.com/wcamilo/ecommerce",
    live: "https://ecommerce-wcamilo.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management application",
    image: "placeholder",
    github: "https://github.com/wcamilo/taskapp",
    live: "https://taskapp-wcamilo.vercel.app",
    tags: ["React", "Firebase", "Material-UI"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    image: "placeholder",
    github: "https://github.com/wcamilo/weather",
    live: "https://weather-wcamilo.vercel.app",
    tags: ["Vue.js", "API Integration", "Chart.js"]
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Modern blog platform with CMS",
    image: "placeholder",
    github: "https://github.com/wcamilo/blog",
    live: "https://blog-wcamilo.vercel.app",
    tags: ["Next.js", "MDX", "Tailwind CSS"]
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with WebSockets",
    image: "placeholder",
    github: "https://github.com/wcamilo/chat",
    live: "https://chat-wcamilo.vercel.app",
    tags: ["React", "Socket.io", "Node.js"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  return (
    <section id="projects" className="py-20 bg-[#f7f7f7]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                {/* Placeholder temporal */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="text-sm uppercase tracking-wider mb-2">View Project</p>
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-6">
                  {/* Placeholder temporal */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>

                <div className="flex gap-4">
                  <Link 
                    href={projects.find(p => p.id === selectedProject)?.github || ""}
                    target="_blank"
                    className="flex-1 text-center px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Code
                  </Link>
                  <Link 
                    href={projects.find(p => p.id === selectedProject)?.live || ""}
                    target="_blank"
                    className="flex-1 text-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;