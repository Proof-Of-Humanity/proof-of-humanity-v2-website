import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface HeaderProps {
  gradientButtonStyle?: string;
}

const Header: React.FC<HeaderProps> = ({ gradientButtonStyle }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-8 py-4 w-full text-base text-center bg-primaryBackground max-md:px-5 max-md:max-w-full">
      <Link href="/">
          <Image
            src="/poh-logo-header.svg"
            alt="Proof of Humanity logo"
            width={134}
            height={48}
            className="object-contain shrink-0 max-w-full aspect-[2.79] w-[134px]"
          />
      </Link>
      <nav className="flex gap-10 items-center self-start max-md:max-w-full">
        <div className="flex gap-8 justify-center items-center self-stretch my-auto whitespace-nowrap min-h-8 min-w-60 text-neutral-400">
          <Link href="/policy" className="self-stretch my-auto hover:text-neutral-600 transition-colors">
            Policy
          </Link>
          <Link href="/governance" className="self-stretch my-auto hover:text-neutral-600 transition-colors">
            Governance
          </Link>
          <Link href="/faq" className="self-stretch my-auto hover:text-neutral-600 transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="self-stretch my-auto hover:text-neutral-600 transition-colors">
            Blog
          </Link>
        </div>
        <div className="flex overflow-hidden items-center self-stretch my-auto">
          <Button href="/app" className={`text-white ${gradientButtonStyle || ''}`}>
            Launch App
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
