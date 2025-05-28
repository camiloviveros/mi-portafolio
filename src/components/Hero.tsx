"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 10;
      const y = (clientY / innerHeight - 0.5) * 10;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-[1px] bg-black/20 transform -rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-40 h-[1px] bg-black/20 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 animate-slideInLeft">
              William camilo
            </h1>
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
            >
              <Image 
                src="/github-icon.svg" 
                alt="GitHub"
                width={20}
                height={20}
                className="dark:invert"
              />
              <span>https://github.com</span>
            </Link>
          </div>

          {/* Right content - Image */}
          <div className="flex-1 max-w-lg mx-auto lg:mx-0" ref={heroRef}>
            <div className="relative">
              <div className="absolute -inset-4 bg-black/5 rounded-lg transform rotate-3"></div>
              <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-[3/4] relative">
                  <Image 
                    src="/profile.jpg" 
                    alt="William Camilo"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..."
                  />
                  {/* Fallback para cuando no hay imagen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <p className="text-xs opacity-50">Añade tu foto</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-80 mb-1">About me</p>
                      <h2 className="text-xl font-medium">William camilo</h2>
                    </div>
                    <Link 
                      href="#about" 
                      className="hover:opacity-80 transition-opacity p-2"
                      aria-label="Scroll to about section"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                  </div>
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