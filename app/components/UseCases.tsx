import React from 'react';
import SectionTitle from './SectionTitle';
import UseCaseCard from './UseCaseCard';
import Link from 'next/link';
import Image from 'next/image';
import useCasesDataJson from '../../data/useCases.json';

const UseCases = () => {
  return (
    <div className="flex flex-col items-center py-20 px-20 2xl:px-32 w-full bg-primaryBackground max-md:px-5 max-md:max-w-full">
      <SectionTitle 
        title={useCasesDataJson.sectionTitle}
        subtitle={useCasesDataJson.sectionSubtitle}
      />
      
      <div className="mt-12 max-w-full w-[1182px] 2xl:w-[1800px] max-md:mt-10">
        <div className="w-full max-w-[1182px] 2xl:max-w-[1800px] max-md:max-w-full">
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
          
          <div className="flex flex-col items-center mt-12 2xl:mt-16 w-full text-2xl 2xl:text-3xl text-center max-md:mt-10 max-md:max-w-full">
            <div className="text-secondaryText max-md:max-w-full">
              {useCasesDataJson.discoverMoreText}
            </div>
            <Link href={useCasesDataJson.viewAllLink.href} className="flex gap-4 2xl:gap-6 items-center mt-2 2xl:mt-4 text-linkText">
              <div className="self-stretch my-auto">
                {useCasesDataJson.viewAllLink.text}
              </div>
              <Image
                src={useCasesDataJson.viewAllLink.iconSrc}
                alt={useCasesDataJson.viewAllLink.iconAlt}
                width={24} 
                height={24} 
                className="object-contain shrink-0 self-stretch my-auto w-6 2xl:w-8 aspect-square"
              />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="self-stretch pt-12 2xl:pt-16 mt-12 2xl:mt-16 w-full max-md:mt-10">
        <Image
          src={useCasesDataJson.bottomCtaImage.src}
          alt={useCasesDataJson.bottomCtaImage.alt}
          width={1400}
          height={400}
          className="object-cover w-full h-auto rounded-2xl max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default UseCases;
