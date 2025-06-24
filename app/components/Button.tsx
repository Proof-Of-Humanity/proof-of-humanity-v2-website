import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, className, href, target, rel, onClick, type = 'button' }: ButtonProps) => {
  const baseClasses = 'px-8 py-3 rounded max-md:px-5 text-center font-medium transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-0.5';

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseClasses} ${className || ''}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;
