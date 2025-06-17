"use client";
import * as React from "react";
import ProfileCard from "./ProfileCard";
import Arrow from "./Arrow";
import Image from "next/image";

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
        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder mx-auto w-11/12 lg:w-full pt-7 pb-10 mt-6">
          <div className="flex flex-col items-center space-y-8
                          lg:flex-row lg:items-center lg:space-y-0 lg:py-0 lg:space-x-2 lg:justify-start lg:overflow-x-auto lg:w-full 
                          xl:space-x-3
                          4xl:space-x-14 4xl:justify-center 4xl:px-8">
            
            {/* SECTION 1 - Identify & Challenge */}
            <div className="w-[14rem] flex flex-col items-center mt-3 xl:ml-6">
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
               className="absolute -right-5 -bottom-5 top-28 w-10 h-10" />
            </div>

            {/* Arrow from verification to challenged */}
            <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:-mt-10">
              <Arrow tailLength="w-8" />
            </div>

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
            <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:-mt-10">
              <Arrow tailLength="w-8" />
            </div>

            {/* SECTION 4 - Kleros Court (card style) */}
            <div className="relative flex lg:self-start ml-8">
                <img src="/images/challenge-flow/kleros.svg" alt="Kleros icon" className="absolute top-14 -left-9" />
                <img src="/images/challenge-flow/law-balance-icon.svg" alt="Scale icon" className="absolute top-2 -left-3" />
              
              {/* Card Component */}
              <div className="bg-white rounded-2xl border border-defaultBorder pl-10 pr-4 pt-3 pb-6 max-w-[15rem] shadow-sm ">
                <div className="text-primaryText text-base mb-3 leading-tight">Dispute Resolution via Kleros Court</div>
                <p className="text-secondaryText text-sm">
                  The case is sent to Kleros, where an independent panel of jurors evaluates the profile against registry policies.
                </p>
              </div>
            </div>

            {/* Arrow from Kleros to outcome */}
            <Image src="/images/challenge-flow/Union.svg"
             alt="Arrow from Kleros to outcome"
             width={42}
             height={72}
             className="rotate-90 -mt-10 md:-ml-3 lg:self-start lg:mt-13 lg:rotate-0"
             />
            {/* SECTION 5 - Final Outcome */}
            <div className="flex flex-row -mt-8 lg:flex-col items-center lg:self-start lg:mt-9">
              {/* Included pill */}
              <div className="bg-statusIncluded text-onBrandText px-4 py-1 rounded-full text-sm 2xl:text-base font-semibold">Included</div>   
              {/* Or text */}
              <div className="text-secondaryText text-base 2xl:text-lg mx-2 lg:my-2">Or</div>
              {/* Rejected pill */}
              <div className="bg-statusRejected text-onBrandText px-4 py-1 rounded-full text-sm 2xl:text-base font-semibold">Rejected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChallengeFlow;