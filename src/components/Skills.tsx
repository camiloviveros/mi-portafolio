"use client";
import { useEffect, useRef } from 'react';

const skills = [
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "Git", icon: "📦", category: "Tools" },
  { name: "Figma", icon: "🎯", category: "Design" },
  { name: "Bootstrap", icon: "🅱️", category: "Frontend" },
  { name: "C++", icon: "🔷", category: "Languages" },
  { name: "C", icon: "🔵", category: "Languages" },
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
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">USING NOW:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.slice(0, 8).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-black transition-colors duration-300">
                    <span className="text-3xl group-hover:grayscale-0 transition-all duration-300">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">LEARNING:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.slice(8, 12).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-black transition-colors duration-300">
                    <span className="text-3xl group-hover:grayscale-0 transition-all duration-300">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">OTHER SKILLS:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.slice(12).map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-black transition-colors duration-300">
                    <span className="text-3xl group-hover:grayscale-0 transition-all duration-300">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
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