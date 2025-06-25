import * as React from "react";
import ProfileCard from "./ProfileCard";
import Arrow from "./Arrow";
import Image from "next/image";
import Link from "next/link";
import tutorialSectionData from "../../data/tutorialSection.json";

export const ProfileChallengeFlow = () => {
  return (
    <div className='w-full bg-secondaryBackground pt-5 pb-10'>
      <div className='w-full xl:max-w-[1182px] mx-auto lg:px-2 xl:px-0 max-w-[1124px] 2xl:max-w-10/12'>
        <div>
          <p className='text-xl text-center lg:text-left lg:text-2xl xl:text-[32px] font-bold font-montserrat text-primaryText'>
            <span className='primary-gradient-text'>Challenge</span> Suspicious Profiles
          </p>
        </div>
        <p className='text-secondaryText text-base text-center lg:text-left lg:text-xl xl:text-2xl my-2 lg:my-3 xl:my-4'>
          Earn rewards by maintaining registry integrity through successful challenges of rule-violating profiles.
        </p>

        <div className="bg-primaryBackground rounded-2xl shadow-lg border border-defaultBorder mx-auto w-11/12 lg:w-full pt-8 pb-10 mt-6">
          <div className="flex flex-col items-center space-y-8
                          lg:flex-row lg:items-center lg:space-y-0 lg:py-0 lg:space-x-2 justify-start lg:overflow-x-auto lg:w-full lg:justify-center
                         xl:justify-start xl:space-x-3 2xl:space-x-10 2xl:justify-center
                          4xl:space-x-14 4xl:px-8">
            
            <div className="xl:w-[14rem] flex flex-col items-center mt-3">
              <div className="flex flex-col w-42 text-center">
              <div className="text-2xl mb-3">Identify & Challenge a Suspicious Profile</div>
              <p className="text-secondaryText text-sm mb-2">
                If you spot a profile that seems fraudulent, you can <span className="text-statusChallenged font-semibold">challenge it</span> for review.
              </p>
              </div>
            </div>

            <div className="relative">
              <Image src="/assets/icons/yellow-arrow.svg" alt="Challenge Arrow" 
                width={43}
                height={1}
               className="absolute top-49 -left-9" />
              <ProfileCard
                statusText="Verification"
                statusColor="verification"
                profileImageUrl="/product/personas/bear-bot.png"
                profileName="Bear Bot"
                address="0x1234...4567"
                addressIconUrl="/product/tokens/gnosis.png"
                buttonText="Verification"
              />
               <Image src="/product/flows/challenge/search-icon.svg" alt="Search icon" 
                width={40}
                height={40}
               className="absolute -right-5 -bottom-5 top-28 w-10 h-10" />
            </div>

            <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:-mt-10">
              <Arrow tailLength="w-8 xl:w-16" />
            </div>

            <ProfileCard
                statusText="Challenged"
                statusColor="challenged"
                profileImageUrl="/product/personas/bear-bot.png"
                profileName="Bear Bot"
                address="0x1234...4567"
                addressIconUrl="/product/tokens/gnosis.png"
                buttonText="Challenged"
              />
             

            <div className="flex items-center justify-center rotate-90 lg:rotate-0 lg:-mt-10">
              <Arrow tailLength="w-8 xl:w-16" />
            </div>

            <div className="relative flex flex-col lg:flex-row ml-5 lg:self-start lg:ml-8">
                <Image src="/product/flows/challenge/kleros-badge.svg" alt="Kleros icon" className="absolute top-14 -left-9" width={71} height={71} />
                <Image src="/product/flows/challenge/law-balance.svg" alt="Scale icon" className="absolute top-2 -left-3" width={28} height={30} />
              
              <div className="bg-white rounded-2xl border border-defaultBorder pl-10 pr-4 pt-3 pb-6 max-w-[15rem] shadow-sm ">
                <div className="text-primaryText text-base mb-3 leading-tight">Dispute Resolution via Kleros Court</div>
                <p className="text-secondaryText text-sm">
                  The case is sent to Kleros, where an independent panel of jurors evaluates the profile against registry policies.
                </p>
              </div>
              <Image src="/product/flows/challenge/union-arrow.svg"
             alt="Arrow from Kleros to outcome"
             width={42}
             height={72}
             className="rotate-90 self-center -mt-3 lg:self-start lg:mt-13 lg:rotate-0"
             />
            </div>
            <div className="flex flex-row -mt-8 lg:flex-col items-center lg:self-start lg:mt-9">
              <div className="bg-statusIncluded text-onBrandText px-4 py-1 rounded-full text-sm 2xl:text-base font-semibold">Included</div>   
              <div className="text-secondaryText text-base 2xl:text-lg mx-2 lg:my-2">Or</div>
              <div className="bg-statusRejected text-onBrandText px-4 py-1 rounded-full text-sm 2xl:text-base font-semibold">Rejected</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12 2xl:mt-16 text-xl lg:text-2xl mx-auto w-11/12 lg:w-full">
          <div className="flex flex-col items-center">
            <p className="text-mutedText">
              {tutorialSectionData.description}
            </p>
            <Link href={tutorialSectionData.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center mt-2 text-linkText cursor-pointer 2xl:gap-6 2xl:mt-4">
              <span className="my-auto">
                {tutorialSectionData.link.text}
              </span>
              <Image
                src={tutorialSectionData.link.iconSrc}
                alt={tutorialSectionData.link.iconAlt}
                className="shrink-0 w-6 h-6 2xl:w-8 2xl:h-8"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileChallengeFlow;