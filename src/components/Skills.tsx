"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const skills = [
  { name: "HTML5", icon: "html5", category: "Frontend" },
  { name: "CSS3", icon: "css3", category: "Frontend" },
  { name: "Python", icon: "python", category: "Backend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },
  { name: "Git", icon: "git", category: "Tools" },
  { name: "Figma", icon: "figma", category: "Design" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "MySQL", icon: "mysql", category: "Database" },
  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "C++", icon: "cplusplus", category: "Languages" },
  { name: "C", icon: "c", category: "Languages" },
];

const Skills = () => {
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
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            SKILLS
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Using Now */}
          <div className="mb-16">
            <h3 className="text-lg font-medium mb-10 text-center">USING NOW:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.slice(0, 8).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-3 
                    group-hover:bg-gray-900 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="w-8 h-8 relative group-hover:brightness-0 group-hover:invert transition-all duration-300">
                      {/* Fallback icon mientras carga la imagen */}
                      <div className="w-full h-full bg-gray-300 rounded animate-pulse absolute inset-0"></div>
                      <Image 
                        src={`/skills/${skill.icon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain relative z-10"
                        onError={(e) => {
                          // Si la imagen no carga, mostrar un placeholder
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="mb-16">
            <h3 className="text-lg font-medium mb-10 text-center">LEARNING:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.slice(8, 12).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-3 
                    group-hover:bg-gray-900 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="w-8 h-8 relative group-hover:brightness-0 group-hover:invert transition-all duration-300">
                      <div className="w-full h-full bg-gray-300 rounded animate-pulse absolute inset-0"></div>
                      <Image 
                        src={`/skills/${skill.icon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg font-medium mb-10 text-center">OTHER SKILLS:</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-sm mx-auto">
              {skills.slice(12).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-3 
                    group-hover:bg-gray-900 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="w-8 h-8 relative group-hover:brightness-0 group-hover:invert transition-all duration-300">
                      <div className="w-full h-full bg-gray-300 rounded animate-pulse absolute inset-0"></div>
                      <Image 
                        src={`/skills/${skill.icon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;