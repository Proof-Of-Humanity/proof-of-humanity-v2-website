"use client";
import * as React from "react";
import ProfileCard from "./ProfileCard";
import ResponsiveArrow from "./ResponsiveArrow";

export const ProfileChallengeFlow: React.FC = () => {
  return (
    <div className='w-full bg-secondaryBackground pt-10 lg:pt-16 xl:pt-20 pb-10'>
      <div className='w-full xl:w-10/12 mx-auto bg-secondaryBackground'>
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primaryText">
            How Proof of Humanity <span className='primary-gradient-text'>Works</span>
          </h2>
          <p className='text-xl lg:text-2xl xl:text-[32px] font-bold font-montserrat text-primaryText mt-4 lg:mt-5 xl:mt-6'>
            <span className='primary-gradient-text'>Challenge</span> Suspicious Profiles
          </p>
        </div>
        <p className='text-secondaryText text-base text-center lg:text-left lg:text-xl xl:text-2xl my-2 lg:my-3 xl:my-4'>
          If you spot a profile that seems fraudulent, you can challenge it for review.
        </p>

        {/* Main Challenge Flow Container */}
        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder p-4 mx-auto mt-6">
          {/* Flex wrapper similar to ProfileSubmissionFlow */}
          <div className="flex flex-col items-center space-y-8 py-4 
                          lg:flex-row lg:items-start lg:space-y-0 lg:py-0 lg:space-x-2 lg:justify-start lg:overflow-x-auto lg:w-full 
                          xl:space-x-3 xl:justify-center
                          2xl:space-x-14 2xl:justify-center 2xl:px-8">
            {/* SECTION 1 - Intro */}
            <div className={`flex flex-col items-center text-center w-full max-w-sm lg:max-w-[15rem] 2xl:max-w-[18rem] lg:mt-2 xl:mt-3`}>
              <div className="primary-gradient-text text-sm font-semibold">START</div>
              <p className="text-xl 2xl:text-2xl">Identify & Challenge a Suspicious Profile</p>
              <img src="/images/challenge-flow/search-icon.svg" alt="Search icon" className="w-16 h-16 2xl:w-20 2xl:h-20 mt-2" />
              <p className="text-secondaryText text-sm 2xl:text-base w-48 2xl:w-56 mt-2">
                If you spot a profile that seems fraudulent, you can <span className="text-accentOrange font-semibold">challenge it</span> for review.
              </p>
            </div>

            <ResponsiveArrow />

            {/* SECTION 2 - Profile Card 1 */}
            <ProfileCard
              statusText="Verification"
              statusColor="verification"
              profileImageUrl="/images/challenge-flow/profile-1.png"
              profileName="Bear Bot"
              address="0x1234...4567"
              addressIconUrl="/images/tokens/Gnosis.png"
              buttonText="Verification"
              className={`lg:mt-6 xl:mt-8`}
            />

            <ResponsiveArrow />

            {/* SECTION 3 - Profile Card 2 */}
            <ProfileCard
              statusText="Registration Challenged"
              statusColor="challenged"
              profileImageUrl="/images/challenge-flow/profile-2.png"
              profileName="Bear Bot"
              address="0x1234...4567"
              addressIconUrl="/images/tokens/Gnosis.png"
              buttonText="Challenged"
              className={`lg:mt-6 xl:mt-8`}
            />

            <ResponsiveArrow />

            {/* SECTION 4 - Kleros Court Card */}
            <div className="flex flex-col items-center text-center max-w-[15rem] 2xl:max-w-[18rem] lg:mt-6 xl:mt-8 2xl:mx-4">
              <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                <img src="/images/challenge-flow/kleros-icon.svg" alt="Kleros" className="w-10 h-8 2xl:w-12 2xl:h-10" />
              </div>
              <h4 className="text-base 2xl:text-lg font-normal mb-2">Dispute Resolution via Kleros Court</h4>
              <p className="text-secondaryText text-sm 2xl:text-base leading-relaxed">
                The case is sent to Kleros, where an independent panel of jurors evaluates the profile against registry policies.
              </p>
            </div>

            <ResponsiveArrow />

            {/* SECTION 5 - Verdicts */}
            <div className="flex flex-col items-center text-center lg:mt-8 xl:mt-10 2xl:mt-12 2xl:mx-4">
              <div className="bg-green-500 text-white px-3 py-1 2xl:px-4 2xl:py-2 rounded-full text-sm 2xl:text-base font-semibold mb-2">Included</div>
              <span className="text-secondaryText text-base 2xl:text-lg mb-2">Or</span>
              <div className="bg-red-500 text-white px-3 py-1 2xl:px-4 2xl:py-2 rounded-full text-sm 2xl:text-base font-semibold">Rejected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChallengeFlow;