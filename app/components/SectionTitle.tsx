import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className = 'text-5xl font-bold text-primaryText', 
  subtitleClassName = 'mt-4 text-2xl text-mutedText' 
}) => {
  return (
    <div className="flex flex-col">
      <div className={`flex gap-2 ${className}`}>
        {title}
      </div>
      {subtitle && (
        <div className={subtitleClassName}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
