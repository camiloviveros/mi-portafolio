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

        <div className="max-w-5xl mx-auto">
          {/* Historia Personal */}
          <div className="mb-16">
            <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center">
              Nací el <strong>11 de enero de 2001</strong> en La Unión, Nariño. Crecí en un entorno humilde, 
              donde mis padres se dedicaban al cultivo del café. Desde pequeño, aprendí el valor del 
              <strong> trabajo duro</strong> ayudando en las labores del campo, lo que forjó en mí un fuerte 
              sentido de <strong>responsabilidad y determinación</strong>.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-gray-700 text-center">
              Soy una persona <strong>entregada y trabajadora</strong>, que proviene del campo y comprende 
              la importancia de la dedicación. Mi experiencia en la <strong>Infantería de Marina de Colombia</strong> 
              me enseñó disciplina, trabajo en equipo y liderazgo. Ahora, como estudiante de 
              <strong> Ingeniería de Software</strong> y <strong>Técnico en Sistemas</strong>, combino mi 
              honestidad y ética de trabajo con mi pasión por la tecnología.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-gray-700 text-center">
              Me considero una persona <strong>honesta</strong> que disfruta trabajar en cualquier entorno, 
              siempre buscando <strong>soluciones innovadoras</strong> y fomentando el <strong>trabajo en equipo</strong>. 
              Mi pasión por el <strong>desarrollo web</strong>, tanto en <strong>frontend como backend</strong>, 
              y mi interés en la <strong>ciberseguridad</strong> me motivan a seguir aprendiendo y creciendo profesionalmente.
            </p>
          </div>

          {/* Tarjetas de Información */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">EDUCACIÓN</h3>
              <p className="text-sm text-gray-600 mb-2">Técnico en Sistemas</p>
              <p className="text-sm text-gray-600 mb-2">Estudiante de Ingeniería de Software</p>
              <p className="text-xs text-gray-500">En constante aprendizaje</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">EXPERIENCIA MILITAR</h3>
              <p className="text-sm text-gray-600 mb-2">Infantería de Marina</p>
              <p className="text-sm text-gray-600 mb-2">Colombia</p>
              <p className="text-xs text-gray-500">Disciplina y liderazgo</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">DESARROLLO</h3>
              <p className="text-sm text-gray-600 mb-2">desarrollador</p>
              <p className="text-sm text-gray-600 mb-2">Frontend & Backend</p>
              <p className="text-xs text-gray-500">Proyectos en producción</p>
            </div>
          </div>

          {/* Intereses y Pasiones */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-center mb-8">MIS PASIONES</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔒</span>
                  Ciberseguridad
                </h4>
                <p className="text-gray-600 text-sm">
                  Me fascina el mundo de la ciberseguridad, el análisis de vulnerabilidades 
                  y la protección de sistemas. Siempre explorando nuevas técnicas de pentesting 
                  y seguridad informática.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-3">🐍</span>
                  Backend con Django
                </h4>
                <p className="text-gray-600 text-sm">
                  Django y Python son mis herramientas favoritas para el desarrollo backend. 
                  Me encanta crear APIs robustas y sistemas escalables que resuelvan problemas reales.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-3">⚽</span>
                  Fútbol y Naturaleza
                </h4>
                <p className="text-gray-600 text-sm">
                  En mi tiempo libre disfruto jugando fútbol y saliendo a caminar para conocer 
                  nuevos lugares. La naturaleza me inspira y me ayuda a mantener el equilibrio.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎨</span>
                  Diseño Web
                </h4>
                <p className="text-gray-600 text-sm">
                  Me apasiona tanto el desarrollo como el diseño web. Crear experiencias 
                  visuales atractivas y funcionales es algo que realmente disfruto.
                </p>
              </div>
            </div>
          </div>

          {/* Valores Personales */}
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-light mb-8">MIS VALORES</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Honestidad</span>
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Responsabilidad</span>
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Trabajo en Equipo</span>
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Innovación</span>
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Disciplina</span>
              <span className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">Adaptabilidad</span>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/cv.pdf" 
              className="inline-block px-8 py-3 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
            >
              DESCARGAR CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;