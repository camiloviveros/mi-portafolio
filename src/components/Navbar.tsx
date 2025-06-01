"use client";
import { useState, useEffect } from 'react';
import ExplorerMenu from './ExplorerMenu'; // Importar el nuevo componente

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [explorerMenu, setExplorerMenu] = useState<boolean>(false);

  // useEffect para manejar el scroll y secciones activas
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
      
      const sections: string[] = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition: number = window.scrollY + 100;
      
      for (const section of sections) {
        const element: HTMLElement | null = document.getElementById(section);
        if (element) {
          const offsetTop: number = element.offsetTop;
          const offsetHeight: number = element.offsetHeight;
          
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

  // Función para hacer scroll a secciones
  const scrollToSection = (sectionId: string): void => {
    setMobileMenu(false);
    setActiveSection(sectionId);
    const element: HTMLElement | null = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 font-code ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2 sm:py-3' 
          : 'bg-black py-4 sm:py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            
            {/* Explorer Menu Button (tres puntos) - Esquina izquierda */}
            <div className="relative">
              <button 
                onClick={() => setExplorerMenu(!explorerMenu)}
                className="p-2 text-white hover:bg-white/10 rounded-md transition-all duration-300 group"
                aria-label="Explorer menu"
              >
                {!explorerMenu ? (
                  // Tres puntos cuando está cerrado
                  <div className="flex flex-col gap-1">
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200 delay-75"></div>
                    <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform duration-200 delay-150"></div>
                  </div>
                ) : (
                  // X cuando está abierto
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* Contenedor centrado para logo y navegación */}
            <div className="flex-1 flex justify-between items-center ml-4">
              {/* Logo */}
              <button 
                onClick={() => scrollToSection('home')} 
                className="group flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-sm sm:text-base lg:text-lg transition-all duration-300">
                  <span className="text-gray-400 group-hover:text-gray-300">const</span>{' '}
                  <span className="text-white font-bold group-hover:text-gray-100">developer</span>{' '}
                  <span className="text-gray-400 group-hover:text-gray-300">=</span>{' '}
                  <span className="text-gray-400 group-hover:text-gray-300">{'{'}</span>
                  <span className="text-white ml-1 sm:ml-2 font-bold text-lg sm:text-xl group-hover:text-gray-100 transform group-hover:scale-110 transition-all duration-300">WC</span>
                  <span className="text-gray-400 group-hover:text-gray-300">{' }'}</span>
                </div>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                <span className="text-gray-400 mr-2 text-lg transition-colors duration-300">{'['}</span>
                {navItems.map((item: NavItem, index: number) => (
                  <div key={item.id} className="flex items-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-500 group ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-white/10 scale-100' 
                          : 'bg-white/5 scale-0 group-hover:scale-100'
                      }`}></div>
                      
                      {activeSection === item.id && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                      )}
                      
                      <span className="relative z-10">
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">"</span>
                        <span className="mx-0.5">{item.label}</span>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">"</span>
                      </span>
                    </button>
                    {index < navItems.length - 1 && (
                      <span className="text-gray-400 mx-0.5 lg:mx-1 transition-colors duration-300">,</span>
                    )}
                  </div>
                ))}
                <span className="text-gray-400 ml-2 text-lg transition-colors duration-300">{']'}</span>
                
                {/* Contact Button */}
                <div className="ml-6 lg:ml-8 group relative">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="relative overflow-hidden px-4 py-2 rounded-md transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute inset-0 border border-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <span className="relative z-10">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{'() => '}</span>
                      <span className="text-white font-bold group-hover:text-gray-100 transition-colors duration-300">
                        contact()
                      </span>
                    </span>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden p-2 sm:p-3 text-white hover:bg-white/10 rounded-md transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 sm:w-6 sm:h-5 relative flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-white transition-all duration-500 origin-center ${
                    mobileMenu ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : 'group-hover:scale-110'
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    mobileMenu ? 'opacity-0 scale-0' : 'group-hover:scale-110 delay-75'
                  }`}></span>
                  <span className={`block h-0.5 w-full bg-white transition-all duration-500 origin-center ${
                    mobileMenu ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : 'group-hover:scale-110 delay-150'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute left-0 right-0 top-full transition-all duration-500 ${
            mobileMenu 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}>
            <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50 shadow-2xl">
              <div className="p-4 sm:p-6 space-y-1">
                {navItems.map((item: NavItem, index: number) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative w-full text-left px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                      activeSection === item.id
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <span className="relative z-10">
                      <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">"</span>
                      <span className="mx-1">{item.label}</span>
                      <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">"</span>
                    </span>
                  </button>
                ))}
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative w-full text-left px-3 sm:px-4 py-4 sm:py-5 mt-4 text-white font-bold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <span className="relative z-10">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{'() => '}</span>
                    <span className="group-hover:text-gray-100 transition-colors duration-300">contact()</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Componente del explorador externo */}
      <ExplorerMenu 
        isOpen={explorerMenu} 
        onClose={() => setExplorerMenu(false)} 
      />
      
      <style jsx>{`
        .font-code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </>
  );
};

export default Navbar;