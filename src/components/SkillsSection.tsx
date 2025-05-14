"use client";
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { 
  FaCode, FaDatabase, FaServer, FaMobile, FaLaptopCode, 
  FaReact, FaHtml5, FaCss3, FaJs, FaPhp, FaPython, 
  FaWindows, FaLinux, FaShieldAlt
} from 'react-icons/fa';

interface SkillItemProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  level: number;
}

const SkillItem = ({ title, icon, color, level }: SkillItemProps) => {
  return (
    <motion.div 
      className="flex items-center mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className={`text-2xl mr-4 ${color}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-gray-500">{level}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className={`h-full rounded-full ${color.includes('text') ? color.replace('text', 'bg') : 'bg-black'}`} 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-6">
        <div className="text-3xl mr-3">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle title="Habilidades" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SkillCategory title="Desarrollo Frontend" icon={<FaLaptopCode />}>
            <SkillItem title="HTML/CSS" icon={<FaHtml5 />} color="text-red-500" level={95} />
            <SkillItem title="JavaScript" icon={<FaJs />} color="text-yellow-500" level={90} />
            <SkillItem title="TypeScript" icon={<FaCode />} color="text-blue-500" level={85} />
            <SkillItem title="React" icon={<FaReact />} color="text-blue-400" level={85} />
            <SkillItem title="Next.js" icon={<FaCode />} color="text-black" level={80} />
            <SkillItem title="Tailwind CSS" icon={<FaCss3 />} color="text-blue-400" level={90} />
          </SkillCategory>
          
          <SkillCategory title="Desarrollo Backend" icon={<FaServer />}>
            <SkillItem title="PHP" icon={<FaPhp />} color="text-purple-500" level={85} />
            <SkillItem title="Laravel" icon={<FaCode />} color="text-red-500" level={80} />
            <SkillItem title="Python" icon={<FaPython />} color="text-blue-500" level={75} />
            <SkillItem title="Django" icon={<FaCode />} color="text-green-500" level={75} />
            <SkillItem title="C++" icon={<FaCode />} color="text-blue-600" level={70} />
            <SkillItem title="C#" icon={<FaCode />} color="text-purple-600" level={65} />
          </SkillCategory>
        </div>
        
        <div>
          <SkillCategory title="Bases de Datos" icon={<FaDatabase />}>
            <SkillItem title="PostgreSQL" icon={<FaDatabase />} color="text-blue-500" level={85} />
            <SkillItem title="MySQL" icon={<FaDatabase />} color="text-orange-500" level={90} />
            <SkillItem title="SQLite" icon={<FaDatabase />} color="text-blue-400" level={85} />
            <SkillItem title="MongoDB" icon={<FaDatabase />} color="text-green-500" level={75} />
            <SkillItem title="Firebase" icon={<FaDatabase />} color="text-yellow-500" level={80} />
          </SkillCategory>
          
          <SkillCategory title="Desarrollo Móvil" icon={<FaMobile />}>
            <SkillItem title="Flutter" icon={<FaCode />} color="text-blue-400" level={70} />
            <SkillItem title="Dart" icon={<FaCode />} color="text-blue-500" level={65} />
          </SkillCategory>
          
          <SkillCategory title="Sistemas Operativos" icon={<FaLaptopCode />}>
            <SkillItem title="Windows" icon={<FaWindows />} color="text-blue-500" level={95} />
            <SkillItem title="Linux" icon={<FaLinux />} color="text-black" level={85} />
            <SkillItem title="Kali Linux" icon={<FaLinux />} color="text-blue-400" level={80} />
            <SkillItem title="Parrot OS" icon={<FaLinux />} color="text-green-500" level={75} />
          </SkillCategory>
          
          <SkillCategory title="Ciberseguridad" icon={<FaShieldAlt />}>
            <SkillItem title="Pentesting" icon={<FaShieldAlt />} color="text-red-500" level={70} />
            <SkillItem title="Análisis de Vulnerabilidades" icon={<FaShieldAlt />} color="text-orange-500" level={75} />
            <SkillItem title="Seguridad Web" icon={<FaShieldAlt />} color="text-blue-500" level={80} />
          </SkillCategory>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;