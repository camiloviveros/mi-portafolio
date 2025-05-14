import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-2 border-black pb-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;