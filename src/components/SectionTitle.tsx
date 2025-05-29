"use client";
import { useEffect, useRef, useState } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
}

const SectionTitle = ({ title, subtitle, align = 'center', theme = 'light' }: SectionTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div ref={titleRef} className={`mb-16 ${alignmentClasses[align]}`}>
      <div className={`inline-block ${align === 'center' ? 'mx-auto' : ''}`}>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 relative ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          {title}
          <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></span>
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl mt-6 max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${
            isVisible ? 'animate-fadeIn animation-delay-200' : 'opacity-0'
          }`}>
            {subtitle}
          </p>
        )}
        <div className={`mt-8 flex ${align === 'center' ? 'justify-center' : ''} gap-2`}>
          <div className={`w-12 h-1 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}></div>
          <div className={`w-4 h-1 ${theme === 'dark' ? 'bg-white/60' : 'bg-gray-600'} ${
            isVisible ? 'animate-slideInLeft animation-delay-100' : 'opacity-0'
          }`}></div>
          <div className={`w-2 h-1 ${theme === 'dark' ? 'bg-white/30' : 'bg-gray-400'} ${
            isVisible ? 'animate-slideInLeft animation-delay-200' : 'opacity-0'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;