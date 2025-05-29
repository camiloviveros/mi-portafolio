"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave
  const scrollToSection = (sectionId: string) => {
    setMobileMenu(false); // Cerrar menú móvil
    setActiveSection(sectionId); // Actualizar sección activa
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo mejorado */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="group flex items-center gap-3 hover:opacity-80 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg">WC</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900">William Camilo</h1>
              <p className="text-xs text-gray-600 -mt-1">Software Developer</p>
            </div>
          </button>

          {/* Desktop Menu mejorado */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
                )}
              </button>
            ))}
            
            {/* Botón de contacto especial */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-medium rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button mejorado */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative">
              <span className={`absolute w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                mobileMenu ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 rounded top-2 transition-all duration-300 ${
                mobileMenu ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                mobileMenu ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu mejorado */}
        <div className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 transition-all duration-300 ${
          mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="p-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 mt-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all duration-300"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;