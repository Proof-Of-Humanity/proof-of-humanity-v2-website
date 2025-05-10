import React from "react";
import PageContainer from "./components/PageContainer";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import IntegrateSection from "./components/IntegrateSection";
import Button from "./components/Button";
import SectionUseCases from "./components/SectionUseCases";
import ChallengeFlow from "./components/ChallengeFlow";
import SharePohCard from "./components/SharePohCard";
import ProfileSubmissionFlow from "./components/ProfileSubmissionFlow";

export default function HomePage() {
  return (
    <PageContainer>
      <div className="w-full max-md:max-w-full">
        <div className="flex flex-col pb-44 w-full bg-primaryBackground max-md:pb-24 max-md:max-w-full">
          {/* Hero Section */}
          <Hero />
        </div>
      </div>
      
      {/* Use Cases Section */}
      <UseCases />

      {/* Profile Submission Flow Section */}
      <ProfileSubmissionFlow />

      {/* Challenge Flow Section */}
      <ChallengeFlow />
      
      {/* Section Use Cases */}
      <SectionUseCases />

      {/* Integrate Section */}
      <IntegrateSection />
      
      {/* Claim Your Humanity Section - This could be extracted to a component later */}
      <div className="flex flex-col justify-center items-center px-32 py-20 w-full bg-primaryBackground max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[1182px]">
          <div className="w-full">
            <div className="flex flex-col items-center p-8 w-full rounded-2xl max-w-[1182px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-wrap gap-2 items-start text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                <div className="whitespace-nowrap max-md:text-4xl">Claim</div>
                <div className="min-w-60 text-primaryText max-md:text-4xl">Your Humanity</div>
              </div>
              <div className="flex overflow-hidden gap-4 items-center mt-6 text-base font-medium text-center text-onBrandText">
                <Button href="/app" className="text-onBrandText bg-gradient-to-r from-brandGradientStart to-brandGradientEnd transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-0.5">
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share POH Card Section */}
      <SharePohCard />
    </PageContainer>
  );
}
