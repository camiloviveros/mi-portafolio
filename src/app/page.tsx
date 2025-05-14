"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>
      
      <section id="about" className="py-20">
        <AboutSection />
      </section>
      
      <section id="skills" className="py-20 bg-gray-100">
        <SkillsSection />
      </section>
      
      <section id="portfolio" className="py-20">
        <PortfolioSection />
      </section>
      
      <section id="contact" className="py-20 bg-gray-100">
        <ContactSection />
      </section>
    </div>
  );
}