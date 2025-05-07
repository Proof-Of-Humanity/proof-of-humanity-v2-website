import React from 'react';
import SectionTitle from './SectionTitle';
import UseCaseCard from './UseCaseCard';
import Link from 'next/link';
import Image from 'next/image';

// This could be moved to a separate data file or fetched from an API
const useCasesData = [
  {
    id: 1,
    imageUrl: "/usecase-decentralized-voting.svg",
    imageAlt: "Decentralized Voting",
    title: "Decentralized Voting",
    description: "Ensure fair and transparent voting processes by verifying each voter's unique identity.",
  },
  {
    id: 2,
    imageUrl: "/usecase-sybil-resistance.svg",
    imageAlt: "Sybil Resistance",
    title: "Sybil Resistance",
    description: "Protect your platform from Sybil attacks by ensuring that each account corresponds to a real human.",
  },
  {
    id: 3,
    imageUrl: "/usecase-verified-airdrops.svg",
    imageAlt: "Verified Airdrops",
    title: "Verified Airdrops",
    description: "Distribute tokens to real users, preventing bots from claiming multiple shares.",
  },
  {
    id: 4,
    imageUrl: "/usecase-dao-membership.svg",
    imageAlt: "DAO Membership",
    title: "DAO Membership",
    description: "Grant DAO membership and voting rights to verified humans, fostering genuine community governance.",
  },
  {
    id: 5,
    imageUrl: "/usecase-community-moderation.svg",
    imageAlt: "Community Moderation",
    title: "Community Moderation",
    description: "Enable human-verified moderators to maintain healthy and authentic online communities.",
  },
  {
    id: 6,
    imageUrl: "/usecase-unique-event-access.svg",
    imageAlt: "Unique Event Access",
    title: "Unique Event Access",
    description: "Provide exclusive access to events or content for verified human participants.",
  },
];

interface UseCasesProps {
  // Add any props if needed
}

const UseCases: React.FC<UseCasesProps> = () => {
  return (
    <div className="flex flex-col items-center py-20 pr-20 pl-32 w-full bg-primaryBackground max-md:px-5 max-md:max-w-full">
      <SectionTitle 
        title="Use Cases"
        subtitle="Proof of Humanity enables verified human identities, enhancing security, fairness, and trust across applications."
      />
      
      <div className="mt-12 max-w-full w-[1182px] max-md:mt-10">
        <div className="w-full max-w-[1182px] max-md:max-w-full">
          <div className="flex flex-wrap gap-6 justify-center items-start w-full">
            {useCasesData.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                imageUrl={useCase.imageUrl}
                imageAlt={useCase.imageAlt}
                title={useCase.title}
                description={useCase.description}
              />
            ))}
          </div>
          
          <div className="flex flex-col items-center mt-12 w-full text-2xl text-center max-md:mt-10 max-md:max-w-full">
            <div className="text-secondaryText max-md:max-w-full">
              Discover even more possibilities and explore how Proof of Humanity can enhance your project!
            </div>
            <Link href="#" className="flex gap-4 items-center mt-2 text-linkText">
              <div className="self-stretch my-auto">
                View All Use Cases
              </div>
              <Image
                src="/arrow-right-icon.svg"
                alt="Arrow right"
                width={24} 
                height={24} 
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="self-stretch pt-12 mt-12 w-full max-md:mt-10">
        <Image
          src="/usecases-bottom-cta.png"
          alt="Placeholder image for section CTA"
          width={1182} 
          height={717}  
          className="object-cover w-full rounded-2xl max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default UseCases;
