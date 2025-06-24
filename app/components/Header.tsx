"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import headerData from '../../data/header.json';

// SVG for Menu Icon
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// SVG for Close Icon (X)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap gap-5 justify-between items-center px-8 py-4 w-full text-base text-center bg-primaryBackground max-md:px-5 max-md:max-w-full relative">
      <Link href="/">
          <Image
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            width={134}
            height={48}
            className="object-contain shrink-0 max-w-full aspect-[2.79] w-[134px]"
          />
      </Link>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center gap-6 absolute top-full left-0 right-0 w-full bg-primaryBackground py-4 shadow-md z-20 
          md:static md:flex md:flex-row md:items-center md:gap-10 md:w-auto md:bg-transparent md:py-0 md:shadow-none md:self-start
        `}
      >
        <div className="flex flex-col gap-4 items-center md:flex-row md:gap-8 md:justify-center md:items-center md:self-stretch md:my-auto text-neutral-400">
          {headerData.navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-600 transition-colors py-2 md:py-0" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="mt-4 md:mt-0 md:flex md:items-center md:self-stretch md:my-auto">
          <Button 
            href={headerData.launchAppButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white primary-gradient-bg"
          >
            {headerData.launchAppButton.text}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
