import React from 'react';
import Image from 'next/image';
import integrateSectionData from '../../data/integrateSection.json';

const IntegrateSection: React.FC = () => {
  return (
    <div className="flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-20 w-full bg-primaryBackground">
      <div className="flex justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryText">
        <div className="flex flex-wrap gap-2">
          <div>
            {integrateSectionData.titleLine1}
          </div>
          <div className="whitespace-nowrap primary-gradient-text ml-1">
            {integrateSectionData.titleLine2}
          </div>
        </div>
      </div>
      
      <div className="mt-10 md:mt-12 w-full mx-auto">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll space-x-8">
            {[...integrateSectionData.integrations, ...integrateSectionData.integrations].map((integration, index) => (
              <div key={`${integration.id}-${index}`} className="flex flex-col items-center p-2 flex-shrink-0">
                <Image
                  src={integration.logoSrc}
                  alt={integration.logoAlt}
                  width={100}
                  height={35}
                  className="object-contain h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateSection;
