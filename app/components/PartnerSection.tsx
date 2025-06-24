import Image from 'next/image';
import partnerSectionData from '../../data/partnerSection.json';

const PartnerSection = () => {
  return (
    <div className="flex flex-col py-12 md:py-16 lg:py-20 w-full bg-primaryBackground">
      <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug font-montserrat text-primaryText mb-8 md:mb-10 px-4">
        <div className="flex flex-col sm:flex-row text-center sm:text-left ">
          <h2>
            {partnerSectionData.titleLine1}
          </h2>
          <h2 className="primary-gradient-text sm:ml-2 ">
            {partnerSectionData.titleLine2}
          </h2>
        </div>
      </div>
      
      <div className="mt-6 md:mt-10 lg:mt-12 w-full">
        <div className="inline-flex w-full flex-nowrap overflow-hidden">
          <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
            {partnerSectionData.integrations.map((integration) => (
              <li key={`logo-${integration.id}`} className="list-none">
                <Image
                  src={integration.logoSrc}
                  alt={integration.logoAlt}
                  width={100}
                  height={35}
                  className="h-auto sm:w-20 md:w-24 lg:w-28"
                />
              </li>
            ))}
          </ul>
          <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8" aria-hidden="true">
            {partnerSectionData.integrations.map((integration) => (
              <li key={`logo-dup-${integration.id}`} className="list-none">
                <Image
                  src={integration.logoSrc}
                  alt={integration.logoAlt}
                  width={100}
                  height={35}
                  className="h-auto sm:w-20 md:w-24 lg:w-28"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
