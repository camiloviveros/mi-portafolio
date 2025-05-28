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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          WC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity">
            About me
          </Link>
          <Link href="#skills" className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity">
            Skills
          </Link>
          <Link href="#projects" className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity">
            Portfolio
          </Link>
          <Link href="#contact" className="px-6 py-2 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenu ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black my-1 transition-all duration-300 ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-white transition-all duration-500 ${
        mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          <Link href="#about" onClick={() => setMobileMenu(false)} className="text-lg">About me</Link>
          <Link href="#skills" onClick={() => setMobileMenu(false)} className="text-lg">Skills</Link>
          <Link href="#projects" onClick={() => setMobileMenu(false)} className="text-lg">Portfolio</Link>
          <Link href="#contact" onClick={() => setMobileMenu(false)} className="text-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;