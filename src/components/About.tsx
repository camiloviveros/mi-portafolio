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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            ABOUT ME
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-base leading-relaxed mb-8 text-gray-700 text-center">
            Nací el 11 de enero de 2001 en La Unión, Nariño. Crecí en un entorno humilde, donde mis padres se dedicaban 
            al cultivo del café. Desde pequeño, aprendí el valor del trabajo duro ayudando en las labores del campo, 
            lo que forjó en mí un fuerte sentido de responsabilidad y determinación.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-medium mb-2">EDUCATION</h3>
              <p className="text-sm text-gray-600">Técnico en Sistemas</p>
              <p className="text-sm text-gray-600">Ingeniería de Software</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-medium mb-2">DEVELOPMENT</h3>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
              <p className="text-sm text-gray-600">Proyectos en GitHub</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-medium mb-2">MAINTENANCE</h3>
              <p className="text-sm text-gray-600">Mantenimiento preventivo</p>
              <p className="text-sm text-gray-600">Soporte técnico</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/cv.pdf" 
              className="inline-block px-8 py-3 border border-black text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;