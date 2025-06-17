import React from 'react';
import Arrow from './Arrow';

const ResponsiveArrow = () => (
  <>
    <div className="flex items-center justify-center transform rotate-90 lg:hidden">
      <Arrow tailLength="w-8" />
    </div>
    <div className="hidden items-center justify-center lg:flex xl:hidden lg:mt-[80px]">
      <Arrow tailLength="w-6" />
    </div>
    <div className="hidden items-center justify-center xl:flex 2xl:hidden xl:mt-[92px]">
      <Arrow tailLength="w-6" />
    </div>
    <div className="hidden items-center justify-center 2xl:flex 2xl:mt-[92px]">
      <Arrow tailLength="w-16" />
    </div>
  </>
);

export default ResponsiveArrow; 