import React from 'react';
import ProfileCard from './ProfileCard';
import Arrow from './Arrow';           
const ProfileSubmissionFlow = () => {

  return (
    <div className='w-full bg-secondaryBackground pt-10 lg:pt-16 xl:pt-20 pb-10'>
      <div className='w-full xl:w-10/12 mx-auto bg-secondaryBackground'>
        <div>
          <h2 className="text-3xl text-center lg:text-left lg:text-4xl xl:text-5xl font-bold text-primaryText">
            How Proof of Humanity <span className='primary-gradient-text'>Works</span>
          </h2>
          <p className='text-xl text-center lg:text-left lg:text-2xl xl:text-[32px] font-bold font-montserrat text-primaryText mt-4 lg:mt-5 xl:mt-6'>
            <span className='primary-gradient-text'>Submit</span> Your Profile
          </p>
        </div>
        <p className='text-secondaryText text-base text-center lg:text-left lg:text-xl xl:text-2xl my-2 lg:my-3 xl:my-4'>
          Verify your identity and join the Proof of Humanity list in a few simple steps.
        </p>

        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder p-4 mx-auto mt-6">
          <div className="flex flex-col items-center space-y-8 py-4 
                          lg:flex-row lg:items-start lg:space-y-0 lg:py-0 lg:space-x-2 lg:justify-start lg:overflow-x-auto lg:w-full 
                          xl:space-x-3 xl:justify-center">

            <div className={`flex flex-col items-center text-center w-full max-w-sm lg:max-w-[15rem] lg:mt-2 xl:mt-3`}>
              <div className="primary-gradient-text text-sm font-semibold">START</div>
              <p className="text-xl">Submit your Profile</p>
              <img src="/icons/Submit-profile-step1.svg" alt="Profile submission illustration" className="w-36 h-12 mt-2" />
              <p className="text-secondaryText text-sm w-48">
                Provide your name, photo, and a short video to create your identity profile.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
                <div className="flex flex-col items-center">
                  <div className="relative flex">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder z-10">
                      <img src="/images/persona/Alice.png" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder -ml-3">
                      <img src="/images/tokens/Gnosis.png" alt="Gnosis token" className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-xs text-secondaryText mt-1">Lock a <span className="text-blue-500 font-semibold">Deposit</span></p>
                </div>
                <span className="text-2xl text-orange-500 hidden sm:block sm:mb-4">+</span>
                <span className="text-2xl text-orange-500 block sm:hidden transform rotate-90 my-2">+</span>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="ml-1 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder">
                      <img src="/images/persona/bob.png" alt="Voucher/Attestation" className="w-10 h-10" />
                    </div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full -ml-1"></div>
                    <span className="text-purple-500 ml-1 text-2xl">••••</span>
                    <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-purple-500 ml-1"></div>
                  </div>
                  <p className="text-xs text-secondaryText mt-1">Receive a <span className="text-purple-500 font-semibold">Vouch</span></p>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden items-center justify-center transform rotate-90">
              <Arrow stemLength="w-8" />
            </div>
            <div className={`hidden lg:flex xl:hidden items-center justify-center lg:mt-[80px]`}>
              <Arrow stemLength="w-6" />
            </div>
            <div className={`hidden xl:flex items-center justify-center xl:mt-[92px]`}>
              <Arrow stemLength="w-6" />
            </div>

            <ProfileCard
              statusText="Vouching"
              statusColor="purple"
              profileImageUrl="/images/persona/Alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/images/tokens/Gnosis.png"
              buttonText="Vouching"
              className={`lg:mt-6 xl:mt-8`}
            />

            {/* Arrow for mobile (<lg) */}
            <div className="flex lg:hidden items-center justify-center transform rotate-90">
              <Arrow stemLength="w-8" />
            </div>
            <div className={`hidden lg:flex xl:hidden items-center justify-center lg:mt-[80px]`}>
              <Arrow stemLength="w-6" />
            </div>
            <div className={`hidden xl:flex items-center justify-center xl:mt-[92px]`}>
              <Arrow stemLength="w-6" />
            </div>

            <ProfileCard
              statusText="Verification"
              statusColor="blue"
              profileImageUrl="/images/persona/Alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/images/tokens/Gnosis.png"
              buttonText="Verification"
              className={`lg:mt-6 xl:mt-8`}
            />

            <div className={`flex flex-col items-center text-center lg:mt-8 xl:mt-10`}>
              <img src="/icons/Search.svg" alt="Magnifying glass" className="text-2xl text-orange-400" />
              <div className="my-4 md:block hidden">
                <Arrow stemLength="w-34" />
              </div>
              <img src="/icons/hourglass.svg" alt="Hourglass" className="text-2xl text-gray-500 md:block hidden" />
              <p className="text-xs text-gray-500 mt-2 w-24">
                In case the profile pass without being challenged
              </p>
            </div>

            <ProfileCard
              statusText="Included"
              statusColor="green"
              profileImageUrl="/images/persona/Alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/images/tokens/Gnosis.png"
              buttonText="Included"
              className={`lg:mt-6 xl:mt-8`}
            />

            <div className={`flex flex-col items-center text-center lg:mt-10 lg:w-28 xl:mt-13 lg:mx-3 xl:w-30`}>
              <div className="text-md font-bold">🎉 Congrats! 🎉</div>
              <p className="text-gray-700 mt-2 text-md">
                Your profile is <span className="text-green-500 font-semibold">Included</span> on <br className="hidden sm:block lg:hidden" /> the PoH list of humans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubmissionFlow;