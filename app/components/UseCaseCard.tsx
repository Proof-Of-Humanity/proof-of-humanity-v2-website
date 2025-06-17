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
    <div className={`grow shrink min-w-60 w-[378px] 2xl:w-[480px] h-[375px] 2xl:h-[420px] ${className}`}>
      <div className="px-6 2xl:px-8 pt-6 2xl:pt-8 pb-20 2xl:pb-24 bg-secondaryBackground rounded-2xl border border-solid shadow-sm border-defaultBorder max-md:px-5 h-full">
        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={90}
            height={90}
            className="object-contain aspect-square w-[90px] 2xl:w-[110px] 2xl:h-[110px]"
          />
          <div className="mt-4 2xl:mt-6 text-2xl 2xl:text-3xl text-primaryText">
            {title}
          </div>
          <div className="mt-4 2xl:mt-6 text-base 2xl:text-lg text-secondaryText leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
