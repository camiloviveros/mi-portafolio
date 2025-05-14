"use client";
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypeWriter = ({ text, speed = 100, className = '' }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, speed, text]);

  return (
    <div className={`inline-block relative ${className} ${isComplete ? 'after:hidden' : 'after:content-[""] after:inline-block after:absolute after:right-0 after:top-0 after:h-full after:w-0.5 after:bg-black after:animate-blink'}`}>
      {displayedText}
    </div>
  );
};

export default TypeWriter;