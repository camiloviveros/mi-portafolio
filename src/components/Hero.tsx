"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Decorative lines */}
      <div className="decorative-line top-20 right-20"></div>
      <div className="decorative-line bottom-20 left-20"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left animate-slideInLeft">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter">
            William camilo
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:opacity-60 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="flex-1 animate-slideInRight" ref={heroRef}>
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-black rounded-lg transform rotate-3"></div>
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder temporal - reemplaza con tu imagen */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-sm opacity-75">Añade tu foto aquí</p>
                  <p className="text-xs opacity-50">profile.jpg</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/80 text-sm uppercase tracking-wider mb-2">About me</p>
                    <h2 className="text-white text-2xl font-bold">William camilo</h2>
                  </div>
                  <Link href="#about" className="text-white hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;