"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const About = () => {
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
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-8 text-gray-800">
            Nací el 11 de enero de 2001 en La Unión, Nariño. Crecí en un entorno humilde, donde mis padres se dedicaban 
            al cultivo del café. Desde pequeño, aprendí el valor del trabajo duro ayudando en las labores del campo, 
            lo que forjó en mí un fuerte sentido de responsabilidad y determinación.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">EDUCATION</h3>
              <p className="text-gray-600">Técnico en Sistemas</p>
              <p className="text-gray-600">Ingeniería de Software (En curso)</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">DEVELOPMENT</h3>
              <p className="text-gray-600">Full Stack Developer</p>
              <p className="text-gray-600">Proyectos en GitHub</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">MAINTENANCE</h3>
              <p className="text-gray-600">Mantenimiento preventivo</p>
              <p className="text-gray-600">Soporte técnico</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/cv.pdf" className="inline-block px-8 py-3 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 minimal-button">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;