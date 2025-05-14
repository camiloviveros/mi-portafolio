"use client";
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle title="Sobre Mí" />
      
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Mi Historia</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Soy William Camilo Gutierrez Viveros, nacido el 11 de enero de 2001 en La Unión, Nariño. 
              Mi camino profesional ha sido diverso y enriquecedor, combinando experiencia militar, 
              formación técnica y pasión por la tecnología.
            </p>
            <p>
              Crecí en un entorno humilde donde mis padres se dedicaban al cultivo del café. Desde 
              niño, aprendí el valor del trabajo duro ayudando en las labores del campo. Esta experiencia 
              forjó en mí un fuerte sentido de responsabilidad y determinación.
            </p>
            <p>
              Tras graduarme como bachiller en La Unión, Nariño, presté servicio militar donde destaqué 
              por mi disciplina y compromiso, recibiendo recomendaciones de altos mandos y una carta de 
              pase para el curso de oficial de la Infantería de Marina.
            </p>
            <p>
              Aunque la pandemia interrumpió mi carrera militar, este desafío me llevó a redescubrir 
              mi pasión por la tecnología. Decidí formarme como técnico en sistemas y actualmente 
              estoy cursando Ingeniería de Software, donde encuentro mi verdadera vocación.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">¿Quién Soy?</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Me considero un desarrollador apasionado por la resolución de problemas y la 
              creación de soluciones tecnológicas que impacten positivamente a la sociedad. 
              Mi formación técnica en sistemas y mi experiencia militar me han brindado una 
              perspectiva única sobre la disciplina, la perseverancia y el trabajo en equipo.
            </p>
            <p>
              Me especializo en desarrollo Full Stack, con amplio conocimiento en tecnologías 
              frontend y backend. Disfruto tanto creando interfaces de usuario atractivas y 
              funcionales como desarrollando robustas arquitecturas de servidor.
            </p>
            <p>
              En mis ratos libres, disfruto del ciclismo y el fútbol, deportes que me ayudan 
              a mantener un equilibrio entre mi vida profesional y personal. También dedico 
              tiempo a ampliar mis conocimientos en ciberseguridad, un campo que me fascina 
              por sus constantes desafíos y evolución.
            </p>
            <p>
              Mi objetivo es crecer como profesional en el campo del desarrollo de software, 
              contribuyendo con soluciones innovadoras y participando en proyectos que generen 
              un impacto positivo. Creo firmemente que la tecnología, bien aplicada, puede 
              transformar vidas y comunidades enteras.
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Mi Trayectoria</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-4 text-black">🎓</div>
            <h4 className="text-xl font-semibold mb-2">Educación</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachiller - La Unión, Nariño</li>
              <li>Técnico en Sistemas</li>
              <li>Estudiante de Ingeniería de Software (Actual)</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-4 text-black">🪖</div>
            <h4 className="text-xl font-semibold mb-2">Experiencia Militar</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Servicio Militar (Más de 1 año)</li>
              <li>Reconocimiento por buen desempeño</li>
              <li>Carta de pase para curso de oficial</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-4 text-black">💻</div>
            <h4 className="text-xl font-semibold mb-2">Desarrollo</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Desarrollo Full Stack</li>
              <li>Proyectos en GitHub</li>
              <li>Sitios web desplegados en Vercel</li>
              <li>Conocimientos en Ciberseguridad</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;