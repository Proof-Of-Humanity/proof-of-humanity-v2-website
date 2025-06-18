import React from 'react';
import Image from 'next/image';
import partnerSectionData from '../../data/partnerSection.json';

const PartnerSection: React.FC = () => {
  return (
    <div className="flex flex-col py-12 md:py-16 lg:py-20 w-screen bg-primaryBackground">
      <div className="flex justify-center text-3xl sm:text-4xl lg:text-5xl font-montserrat text-primaryText mb-10">
        <div className="flex">
          <div>
            {partnerSectionData.titleLine1}
          </div>
          <div className="primary-gradient-text ml-2">
            {partnerSectionData.titleLine2}
          </div>
        </div>
      </div>
      
      <div className="mt-10 md:mt-12 w-full">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex space-x-8 z-10">
            {[...partnerSectionData.integrations, ...partnerSectionData.integrations].map((integration, index) => (
              <div key={`${integration.id}-${index}`} className="flex flex-col items-center p-2 flex-shrink-0">
                <Image
                  src={integration.logoSrc}
                  alt={integration.logoAlt}
                  width={100}
                  height={35}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
