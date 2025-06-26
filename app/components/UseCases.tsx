import React from 'react';
import UseCaseCard from './UseCaseCard';
import Link from 'next/link';
import Image from 'next/image';
import useCasesDataJson from '../../data/useCases.json';

const UseCases = () => {
  return (
    <div className="flex flex-col items-center py-20 px-20 2xl:px-32 w-full bg-primaryBackground max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1182px] 2xl:max-w-[1800px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-5xl font-bold text-primaryText">
            {useCasesDataJson.sectionTitle}
          </div>
          <div className="mt-4 text-2xl text-mutedText">
            {useCasesDataJson.sectionSubtitle}
          </div>
        </div>
        
        <div className="mt-12 max-md:mt-10">
          <div className="flex flex-wrap gap-6 2xl:gap-12 justify-center items-start w-full">
            {useCasesDataJson.cards.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                imageUrl={useCase.imageUrl}
                imageAlt={useCase.imageAlt}
                title={useCase.title}
                description={useCase.description}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center md:mt-12 2xl:mt-16 text-xl lg:text-2xl">
          <div className="flex flex-col items-center">
            <p className="text-mutedText">
              {useCasesDataJson.discoverMoreText}
            </p>
            <Link href={useCasesDataJson.viewAllLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center mt-2 text-linkText cursor-pointer 2xl:gap-6 2xl:mt-4">
              <span className="my-auto">
                {useCasesDataJson.viewAllLink.text}
              </span>
              <Image
                src={useCasesDataJson.viewAllLink.iconSrc}
                alt={useCasesDataJson.viewAllLink.iconAlt}
                className="shrink-0 w-6 h-6 2xl:w-8 2xl:h-8"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        </div>
        
        <div className="pt-12 2xl:pt-16 mt-12 2xl:mt-16 max-md:mt-10">
          <Image
            src={useCasesDataJson.bottomCtaImage.src}
            alt={useCasesDataJson.bottomCtaImage.alt}
            width={2560}
            height={1488}
            sizes="100vw"
            className="object-cover w-full h-auto rounded-2xl max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
