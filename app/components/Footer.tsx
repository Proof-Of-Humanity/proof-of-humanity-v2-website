import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerData from '../../data/footer.json';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col justify-center py-px w-full max-md:max-w-full">
      <div className="flex flex-col items-center w-full bg-primaryBackground pt-16 max-md:max-w-full">
        <div className="flex flex-wrap items-start text-base text-secondaryText max-md:max-w-full gap-10 md:gap-40 lg:gap-70 justify-center">
          {footerData.linkColumns.map((column) => (
            <div key={column.id} className="w-auto min-w-[100px]">
              <div className="text-linkText font-semibold text-lg">{column.title}</div>
              {column.links.map((link) => (
                <Link key={link.id} href={link.href} className="block mt-4 hover:text-secondaryText transition-colors">
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-16 max-w-full w-[1182px] max-md:mt-10">
          <hr className="z-10 shrink-0 h-px primary-gradient-bg bg-defaultBorder border-0 max-md:max-w-full" />
          <div className="flex overflow-hidden gap-8 items-center self-center mt-6">
            {footerData.socialLinks.map((socialLink) => (
              <Link key={socialLink.id} href={socialLink.href} aria-label={socialLink.label}>
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
        <Image
            src={footerData.footerDividerImage.src}
            alt={footerData.footerDividerImage.alt}
            width={1182}
            height={79}
            className="object-contain mt-12 w-full aspect-[14.93] max-md:mt-10 max-md:max-w-full bg-secondaryBackground"
            priority={false}
          />
      </div>
    </footer>
  );
};

export default Footer;
