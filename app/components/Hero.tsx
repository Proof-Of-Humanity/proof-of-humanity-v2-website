import React from 'react';
import Button from './Button';
import Image from 'next/image';
import heroData from '../../data/hero.json';
import BuildByKlerosIcon from './icons/BuildByKlerosIcon';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="self-center mt-16 md:mt-24 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-md:mb-2.5">
      <div className="flex gap-8 lg:gap-5 max-md:flex-col">
        <div className="w-full md:w-[54%] flex flex-col justify-center max-md:order-2">
          <div className="self-stretch flex flex-col my-auto max-md:mt-10">
            <div className="w-full">
              <div className="text-4xl sm:text-5xl lg:text-7xl leading-tight sm:leading-snug lg:leading-[70px] text-primaryText">
                <span className="font-montserrat font-bold text-primaryText">
                  {heroData.title.line1}
                </span>
                <br />
                <span className="font-montserrat font-bold text-primaryText">
                  {heroData.title.line2}
                </span>{" "}
                <span 
                  className="font-montserrat font-bold primary-gradient-text"
                >
                  {heroData.title.line3}
                </span>
              </div>
              <div className="mt-4 text-xl sm:text-2xl lg:text-3xl text-primaryText">
                {heroData.subtitle}
              </div>
            </div>
            <div className="mt-8 text-base font-medium">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
                <Button href={heroData.launchAppButton.href} className="text-onBrandText w-full sm:w-auto primary-gradient-bg">
                  {heroData.launchAppButton.text}
                </Button>
                <Button 
                  href={heroData.learnMoreButton.href} 
                  className="text-linkText border border-linkText rounded-md px-6 py-3 font-medium transition-colors duration-150 w-full sm:w-auto"
                >
                  {heroData.learnMoreButton.text}
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center lg:self-start mt-4">
              <BuildByKlerosIcon className="text-black" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[46%] max-md:order-1">
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={700}
            height={500}
            className="w-full h-auto object-contain rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
