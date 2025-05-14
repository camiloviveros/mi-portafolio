import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="text-2xl font-bold">WCG</div>
            </Link>
            <p className="mt-2 text-gray-400">Desarrollador de Software & Ingeniero</p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Enlaces rápidos</h3>
            <Link href="#about" className="text-gray-400 hover:text-white mb-2 transition-colors">
              Sobre mí
            </Link>
            <Link href="#skills" className="text-gray-400 hover:text-white mb-2 transition-colors">
              Habilidades
            </Link>
            <Link href="#portfolio" className="text-gray-400 hover:text-white mb-2 transition-colors">
              Portafolio
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/wcgutierrez" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/william-camilo-gutierrez" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/wcgutierrez" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} William Camilo Gutierrez Viveros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;