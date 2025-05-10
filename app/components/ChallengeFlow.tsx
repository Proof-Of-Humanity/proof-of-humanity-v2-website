import React from 'react';

const ChallengeFlow: React.FC = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-[32px] font-bold text-primaryText mb-3">
          <span className="primary-gradient-text">Challenge</span> Suspicious Profiles
        </h2>
        <p className="text-lg md:text-2xl text-secondaryText mx-auto">
          Earn rewards by maintaining registry integrity through successful challenges of rule-violating profiles.
        </p>
      </div>
    </div>
  );
};

export default ChallengeFlow;