import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerData from '../../data/footer.json';
import BuildByKlerosIcon from './icons/BuildByKlerosIcon';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center py-px w-full max-md:max-w-full">
      <div className="flex flex-col items-center w-full bg-primaryBackground pt-16 max-md:max-w-full">
        <div className="flex flex-wrap items-start text-base text-secondaryText max-md:max-w-full gap-10 md:gap-40 lg:gap-70 justify-center">
          {footerData.linkColumns.map((column) => (
            <div key={column.id} className="w-auto min-w-[100px]">
              <div className=" text-center text-linkText font-semibold text-lg">{column.title}</div>
              {column.links.map((link) => (
                <Link key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="block mt-4 text-center hover:text-secondaryText transition-colors">
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-16 max-w-full w-[1182px] 2xl:w-[1400px] max-md:mt-10">
          <hr className="z-10 shrink-0 h-px primary-gradient-bg bg-defaultBorder border-0 max-md:max-w-full" />
          <div className="flex overflow-hidden gap-8 items-center self-center mt-6">
            {footerData.socialLinks.map((socialLink) => (
              <Link key={socialLink.id} href={socialLink.href} target="_blank" rel="noopener noreferrer" aria-label={socialLink.label}>
                <Image 
                  src={socialLink.iconSrc} 
                  alt={socialLink.label} 
                  width={24} 
                  height={24} 
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 mb-6">
          <Link href="https://kleros.io" target="_blank" rel="noopener noreferrer" aria-label="Built by Kleros">
            <BuildByKlerosIcon className="text-secondaryText" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
