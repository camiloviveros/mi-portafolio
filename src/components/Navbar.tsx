"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="text-xl font-bold">WCG</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-gray-600 transition-colors">
              Sobre mí
            </Link>
            <Link href="#skills" className="hover:text-gray-600 transition-colors">
              Habilidades
            </Link>
            <Link href="#portfolio" className="hover:text-gray-600 transition-colors">
              Portafolio
            </Link>
            <Link href="#contact" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Contacto
            </Link>
            <a href="https://github.com/wcgutierrez" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FaGithub />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-3 border-t border-gray-200">
            <Link href="#about" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre mí
            </Link>
            <Link href="#skills" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Habilidades
            </Link>
            <Link href="#portfolio" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Portafolio
            </Link>
            <Link href="#contact" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </Link>
            <a href="https://github.com/wcgutierrez" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-gray-600 transition-colors">
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;