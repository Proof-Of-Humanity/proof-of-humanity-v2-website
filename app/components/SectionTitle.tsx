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
  className = 'text-5xl font-bold text-primaryText max-md:text-4xl', 
  subtitleClassName = 'mt-4 text-2xl text-mutedText max-md:max-w-full' 
}) => {
  return (
    <div className="flex flex-col max-w-full">
      <div className={`flex gap-2 items-center self-start ${className}`}>
        <div className="self-stretch my-auto min-w-60">
          {title}
        </div>
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
