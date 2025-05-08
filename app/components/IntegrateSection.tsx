import React from 'react';
import Image from 'next/image';
import integrateSectionData from '../../data/integrateSection.json';

const IntegrateSection: React.FC = () => {
  return (
    <div className="flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-20 w-full bg-primaryBackground">
      <div className="self-start text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryText">
        <div className="flex flex-wrap gap-2 items-start">
          <div>
            {integrateSectionData.titleLine1}
          </div>
          <div className="whitespace-nowrap">
            {integrateSectionData.titleLine2}
          </div>
        </div>
      </div>
      
      <div className="mt-10 md:mt-12 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1182px] mx-auto">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full place-items-center">
            {integrateSectionData.integrations.map((integration) => (
              <div key={integration.id} className="flex flex-col items-center p-2">
                <Image
                  src={integration.logoSrc}
                  alt={integration.logoAlt}
                  width={100}
                  height={35}
                  className="object-contain h-auto"
                />
                <div className="mt-2 text-sm text-secondaryText text-center">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateSection;
