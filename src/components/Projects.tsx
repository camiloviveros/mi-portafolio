"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/wcamilo/portfolio",
    live: "https://wcamilo.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/wcamilo/ecommerce",
    live: "https://ecommerce-wcamilo.vercel.app",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management application",
    image: "/projects/taskapp.jpg",
    github: "https://github.com/wcamilo/taskapp",
    live: "https://taskapp-wcamilo.vercel.app",
    tags: ["React", "Firebase", "Material-UI"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    image: "/projects/weather.jpg",
    github: "https://github.com/wcamilo/weather",
    live: "https://weather-wcamilo.vercel.app",
    tags: ["Vue.js", "API", "Chart.js"]
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Modern blog platform with CMS",
    image: "/projects/blog.jpg",
    github: "https://github.com/wcamilo/blog",
    live: "https://blog-wcamilo.vercel.app",
    tags: ["Next.js", "MDX", "Tailwind"]
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with WebSockets",
    image: "/projects/chat.jpg",
    github: "https://github.com/wcamilo/chat",
    live: "https://chat-wcamilo.vercel.app",
    tags: ["React", "Socket.io", "Node.js"]
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            PORTFOLIO
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </Link>
                  
                  {project.live && (
                    <Link 
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;