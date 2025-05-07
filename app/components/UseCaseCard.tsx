import React from 'react';
import Image from 'next/image';

interface UseCaseCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  imageUrl, 
  imageAlt, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`grow shrink min-w-60 w-[378px] h-[375px] ${className}`}>
      <div className="px-6 pt-6 pb-20 bg-secondaryBackground rounded-2xl border border-solid shadow-sm border-defaultBorder max-md:px-5 h-full">
        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={90}
            height={90}
            className="object-contain aspect-square w-[90px]"
          />
          <div className="mt-4 text-2xl text-primaryText">
            {title}
          </div>
          <div className="mt-4 text-base text-secondaryText">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
