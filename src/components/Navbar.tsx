"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">
            WC
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:opacity-60 transition-opacity">
              About me
            </Link>
            <Link href="#skills" className="text-sm hover:opacity-60 transition-opacity">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:opacity-60 transition-opacity">
              Portfolio
            </Link>
            <Link href="#contact" className="px-5 py-2 border border-black text-sm hover:bg-black hover:text-white transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
                mobileMenu ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-black top-2 transition-all duration-300 ${
                mobileMenu ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
                mobileMenu ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ${
          mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="p-6 space-y-4">
            <Link href="#about" onClick={() => setMobileMenu(false)} className="block text-sm">
              About me
            </Link>
            <Link href="#skills" onClick={() => setMobileMenu(false)} className="block text-sm">
              Skills
            </Link>
            <Link href="#projects" onClick={() => setMobileMenu(false)} className="block text-sm">
              Portfolio
            </Link>
            <Link href="#contact" onClick={() => setMobileMenu(false)} className="block text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;