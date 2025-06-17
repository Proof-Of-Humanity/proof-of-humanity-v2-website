"use client";
import * as React from "react";
import ProfileCard from "./ProfileCard";
import Arrow from "./Arrow";

export const ProfileChallengeFlow: React.FC = () => {
  return (
    <div className='w-full bg-secondaryBackground pt-10 lg:pt-16 xl:pt-20 pb-10'>
      <div className='w-full xl:w-10/12 mx-auto'>
        <div>
          <h2 className="text-3xl text-center lg:text-left lg:text-4xl xl:text-5xl font-bold text-primaryText">
            How Proof of Humanity <span className='primary-gradient-text'>Works</span>
          </h2>
          <p className='text-xl text-center lg:text-left lg:text-2xl xl:text-[32px] font-bold font-montserrat text-primaryText mt-4 lg:mt-5 xl:mt-6'>
            <span className='primary-gradient-text'>Challenge</span> Suspicious Profiles
          </p>
        </div>
        <p className='text-secondaryText text-base text-center lg:text-left lg:text-xl xl:text-2xl my-2 lg:my-3 xl:my-4'>
          Earn rewards by maintaining registry integrity through successful challenges of rule-violating profiles.
        </p>

        {/* Main Challenge Flow Container */}
        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder px-4 mx-auto py-6 mt-6">
          <div className="flex flex-col items-center space-y-8
                          lg:flex-row lg:items-start lg:space-y-0 lg:py-0 lg:space-x-2 lg:justify-start lg:overflow-x-auto lg:w-full 
                          xl:space-x-3
                          2xl:space-x-14">
            
            {/* SECTION 1 - Identify & Challenge */}
            <div className="w-[14rem] flex flex-col items-center mt-3">
              <div className="flex flex-col w-42 text-center">
              <div className="text-2xl mb-3">Identify & Challenge a Suspicious Profile</div>
              <p className="text-secondaryText text-sm mb-2">
                If you spot a profile that seems fraudulent, you can <span className="text-statusChallenged font-semibold">challenge it</span> for review.
              </p>
              </div>
            </div>

            {/* SECTION 2 - Verification Profile */}
            <div className="relative">
              <ProfileCard
                statusText="Verification"
                statusColor="verification"
                profileImageUrl="/images/persona/bear-bot.png"
                profileName="Bear Bot"
                address="0x1234...4567"
                addressIconUrl="/images/tokens/Gnosis.png"
                buttonText="Verification"
                className=""
              />
               <img src="/images/challenge-flow/search-icon.svg" alt="Search icon" 
               className="absolute -right-5 -bottom-5 top-25 w-10 h-10 lg:block hidden" />
            </div>

            {/* Arrow from verification to challenged */}
            <>
              <div className="flex items-center justify-center transform rotate-90 lg:hidden">
                <Arrow tailLength="w-8" />
              </div>
              <div className="hidden lg:flex items-center lg:mt-10 xl:mt-12 2xl:mt-14">
                <Arrow tailLength="w-10" />
              </div>
            </>

            {/* SECTION 3 - Challenged Profile with Magnifying Glass */}
              <ProfileCard
                statusText="Challenged"
                statusColor="challenged"
                profileImageUrl="/images/persona/bear-bot.png"
                profileName="Bear Bot"
                address="0x1234...4567"
                addressIconUrl="/images/tokens/Gnosis.png"
                buttonText="Challenged"
                className=""
              />
             

            {/* Arrow from challenged card to Kleros */}
            <>
              <div className="flex items-center justify-center transform rotate-90 lg:hidden">
                <Arrow tailLength="w-8" />
              </div>
              <div className="hidden lg:flex items-center lg:mt-10 xl:mt-12 2xl:mt-14">
                <Arrow tailLength="w-10" />
              </div>
            </>

            {/* SECTION 4 - Kleros Court (white card) */}
            <div className="flex flex-col items-center text-center max-w-[15rem] lg:mt-6 xl:mt-8 2xl:mx-4">
              <div className="relative mb-3">
                <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-purple-500 rounded-full flex items-center justify-center">
                  <img src="/images/challenge-flow/kleros-icon.svg" alt="Kleros icon" className="w-8 h-8 2xl:w-10 2xl:h-10" />
                </div>
                {/* Scale icon */}
                <img src="/images/challenge-flow/law-balance-icon.svg" alt="Scale icon" className="absolute -top-2 left-2 w-6 h-6" />
              </div>
              <h4 className="text-base 2xl:text-lg font-semibold mb-2">Dispute Resolution via Kleros Court</h4>
              <p className="text-secondaryText text-sm 2xl:text-base leading-relaxed text-center">
                The case is sent to Kleros, where an independent panel of jurors evaluates the profile against registry policies.
              </p>
            </div>

            {/* Arrow from Kleros block to outcome */}
            <>
              <div className="flex items-center justify-center transform rotate-90 lg:hidden">
                <Arrow tailLength="w-8" />
              </div>
              <div className="hidden lg:flex items-center lg:mt-10 xl:mt-12 2xl:mt-14">
                <Arrow tailLength="w-12" />
              </div>
            </>

            {/* SECTION 5 - Final Outcome */}
            <div className="flex flex-col items-center text-center lg:mt-8 xl:mt-10 2xl:mt-12 2xl:mx-4">
              {/* Included pill */}
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm 2xl:text-base font-semibold mb-4">Included</div>
              
              {/* Or text */}
              <div className="text-secondaryText text-base 2xl:text-lg mb-4">Or</div>
              
              {/* Dotted arrows pointing to rejected */}
              <div className="flex items-center space-x-1 mb-4">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3">
                  <path d="M19 12H5m7 7l-7-7 7-7"/>
                </svg>
              </div>
              
              {/* Rejected pill */}
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm 2xl:text-base font-semibold">Rejected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChallengeFlow;