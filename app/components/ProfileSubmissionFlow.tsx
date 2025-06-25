import React from 'react';
import ProfileCard from './ProfileCard';
import Arrow from './Arrow';
import Image from 'next/image';

const ProfileSubmissionFlow = () => {
  return (
    <div className='w-full bg-secondaryBackground pt-10 lg:pt-16 xl:pt-20 pb-10'>
      <div className='w-full xl:max-w-[1182px] mx-auto lg:px-2 xl:px-0 max-w-[1124px] 2xl:max-w-10/12'>
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

        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder w-11/12 lg:w-full p-4 mx-auto mt-6">
          <div className="flex flex-col items-center space-y-8 py-4 
                          lg:flex-row lg:items-start lg:space-y-2 lg:py-0 lg:space-x-2 lg:justify-center lg:w-full 
                          xl:space-x-3
                          4xl:space-x-14 4xl:px-8">

            <div className="flex flex-col items-center text-center w-full max-w-sm lg:max-w-[15rem] 2xl:max-w-[18rem] lg:mt-2 xl:mt-3">
              <div className="primary-gradient-text text-sm font-semibold">START</div>
              <p className="text-xl 2xl:text-2xl">Submit your Profile</p>
              <Image width={144} height={48} src="/product/flows/submission/submit-profile-illustration.svg" alt="Profile submission illustration" className="w-36 h-12 2xl:w-44 2xl:h-14 mt-2" />
              <p className="text-secondaryText text-sm 2xl:text-base w-48 2xl:w-56">
                Provide your name, photo, and a short video to create your identity profile.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-2 2xl:space-x-3">
                <div className="flex flex-col items-center">
                  <div className="relative flex">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder z-10">
                      <Image width={32} height={32} src="/product/personas/alice.png" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder -ml-3">
                      <Image width={24} height={24} src="/product/tokens/gnosis.png" alt="Gnosis token" className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-xs text-secondaryText mt-1">Lock a <span className="text-blue-500 font-semibold">Deposit</span></p>
                </div>
                <span className="text-2xl text-orange-500 sm:mb-4 sm:my-0">
                  +
                </span>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="ml-1 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-defaultBorder">
                      <Image width={40} height={40} src="/product/personas/bob.png" alt="Voucher/Attestation" className="w-10 h-10" />
                    </div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full -ml-1"></div>
                    <span className="text-purple-500 ml-1 text-2xl">••••</span>
                    <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-purple-500 ml-1"></div>
                  </div>
                  <p className="text-xs text-secondaryText mt-1">Receive a <span className="text-purple-500 font-semibold">Vouch</span></p>
                </div>
              </div>
            </div>

              <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:mt-[92px] lg:-ml-6">
                <Arrow tailLength="w-8 2xl:w-16" />
              </div>

            <ProfileCard
              statusText="Vouching"
              statusColor="vouching"
              profileImageUrl="/product/personas/alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/product/tokens/gnosis.png"
              buttonText="Vouching"
              className="lg:mt-6 xl:mt-8"
            />

            <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:mt-[92px]">
              <Arrow tailLength="w-8 2xl:w-16" />
            </div>


            <ProfileCard
              statusText="Verification"
              statusColor="verification"
              profileImageUrl="/product/personas/alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/product/tokens/gnosis.png"
              buttonText="Verification"
              className="lg:mt-6 xl:mt-8"
            />

            <div className="flex flex-col items-center text-center lg:mt-8 xl:mt-10 2xl:mt-12 2xl:mx-4">
              <Image width={34} height={34} src="/assets/icons/search.svg" alt="Magnifying glass" className="text-2xl 2xl:text-3xl text-orange-400" />
              <div className="my-4 hidden xl:block">
                <Arrow tailLength="w-34" />
              </div>
              <Image width={16} height={16} src="/assets/icons/hourglass.svg" alt="Hourglass" className="text-2xl 2xl:text-3xl text-gray-500 hidden xl:block" />
              <p className="text-xs 2xl:text-sm text-gray-500 mt-6 xl:mt-2 w-20 xl:w-24 2xl:w-28">
                In case the profile pass without being challenged
              </p>
            </div>

            <ProfileCard
              statusText="Included"
              statusColor="included"
              profileImageUrl="/product/personas/alice.png"
              profileName="Alice"
              address="0x4567...1234"
              addressIconUrl="/product/tokens/gnosis.png"
              buttonText="Included"
              className="lg:mt-6 xl:mt-8"
            />

            <div className="flex flex-col items-center text-center lg:mt-4 lg:w-28 xl:mt-13 lg:mx-3 xl:w-30 2xl:w-36 2xl:mx-4">
              <div className="text-md 2xl:text-lg font-bold">🎉 Congrats! 🎉</div>
              <p className="text-gray-700 mt-2 text-sm lg:text-base 2xl:text-lg">
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