import React from 'react';
import Button from './Button';
import Image from 'next/image';

// Use regular img tags for simplicity since we're having import conflicts
// We'll add proper Image optimization later if needed

interface HeroProps {
  gradientButtonStyle?: string;
}

const Hero: React.FC<HeroProps> = ({ gradientButtonStyle }) => {
  return (
    <div className="self-center mt-24 w-full px-32 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[54%] max-md:ml-0 max-md:w-full self-center">
          <div className="self-stretch flex flex-col my-auto max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-7xl leading-[70px] text-primaryText max-md:text-5xl max-md:leading-10">
                <span className="font-montserrat font-bold text-primaryText">
                  The Internet
                </span>
                <br />
                <span className="font-montserrat font-bold text-primaryText">
                  Of
                </span>{" "}
                <span className="font-montserrat font-bold">
                  Humans
                </span>
              </div>
              <div className="mt-4 text-3xl text-primaryText max-md:max-w-full">
                Decentralized, self-sovereign identity for the digital age.
              </div>
            </div>
            <div className="mt-8 max-w-full text-base font-medium text-center w-[318px]">
              <div className="flex gap-6 items-center w-full">
                <Button href="/app" className={`text-onBrandText ${gradientButtonStyle || ''}`}>
                  Launch App
                </Button>
                <div className="flex gap-2 items-center">
                  <div className="self-stretch my-auto whitespace-nowrap text-secondaryText">
                    Share
                  </div>
                  <Image
                    src="/share-icon.svg"
                    alt="Share icon"
                    width={16}
                    height={16}
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <Image
            src="/hero-illustration.png"
            alt="Hero illustration"
            width={523}
            height={465}
            className="object-contain grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
