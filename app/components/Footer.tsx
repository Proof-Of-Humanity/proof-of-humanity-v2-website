import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center py-px w-full max-md:max-w-full">
      <div className="flex flex-col items-center w-full bg-secondaryBackground pt-16 max-md:max-w-full">
        <div className="flex flex-wrap items-start text-base whitespace-nowrap text-mutedText max-md:max-w-full gap-8 md:gap-16 lg:gap-24 justify-center">
          <div className="w-auto min-w-[100px]">
            <div className="text-linkText font-semibold">POH</div>
            <Link href="/" className="block mt-4 hover:text-secondaryText transition-colors">Home</Link>
            <Link href="/policy" className="block mt-4 hover:text-secondaryText transition-colors">Policy</Link>
          </div>
          <div className="w-auto min-w-[100px]">
            <div className="text-linkText font-semibold">Governance</div>
            <Link href="#" className="block mt-4 hover:text-secondaryText transition-colors">Forum</Link> {/* Assuming # for placeholder */}
            <Link href="#" className="block mt-4 hover:text-secondaryText transition-colors">Voting</Link> {/* Assuming # for placeholder */}
          </div>
          <div className="w-auto min-w-[100px]">
            <div className="text-linkText font-semibold">More</div>
            <Link href="/blog" className="block mt-4 hover:text-secondaryText transition-colors">Blog</Link>
            <Link href="/faq" className="block mt-4 hover:text-secondaryText transition-colors">FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col mt-16 max-w-full w-[1182px] max-md:mt-10">
          <hr className="z-10 shrink-0 h-px bg-defaultBorder border-0 max-md:max-w-full" />
          <div className="flex overflow-hidden gap-8 items-center self-center mt-6">
            <Link href="#" aria-label="Social media link 1">
              <Image src="/social-icon-1.svg" alt="Social icon 1" width={24} height={24} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </Link>
            <Link href="#" aria-label="Social media link 2">
              <Image src="/social-icon-2.svg" alt="Social icon 2" width={24} height={24} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </Link>
            <Link href="#" aria-label="Social media link 3">
              <Image src="/social-icon-3.svg" alt="Social icon 3" width={24} height={24} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </Link>
            <Link href="#" aria-label="Social media link 4">
              <Image src="/social-icon-4.svg" alt="Social icon 4" width={24} height={24} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </Link>
          </div>
        </div>
        <Image
            src="/footer-divider.svg"
            alt="Footer decorative border"
            width={1182}
            height={79}
            className="object-contain mt-16 w-full aspect-[14.93] max-md:mt-10 max-md:max-w-full"
            priority={false}
          />
      </div>
    </footer>
  );
};

export default Footer;
