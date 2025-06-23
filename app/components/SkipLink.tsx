import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-50 -translate-y-20 bg-black text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink; 