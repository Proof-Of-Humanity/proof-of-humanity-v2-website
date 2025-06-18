import React from "react";
import PageContainer from "./components/PageContainer";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import PartnerSection from "./components/PartnerSection";
import IntegrateSection from "./components/IntegrateSection";
import ChallengeFlow from "./components/ChallengeFlow";
import SharePohCard from "./components/SharePohCard";
import ProfileSubmissionFlow from "./components/ProfileSubmissionFlow";
import ClaimHumanity from "./components/ClaimHumanity";

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
      
      {/* Integrate Section */}
      <IntegrateSection />

      {/* Partner Scroll Section */}
      <PartnerSection />
      
      {/* Claim Your Humanity Section CTA */}
      <ClaimHumanity />

      {/* Share POH Card Section */}
      <SharePohCard />
    </PageContainer>
  );
}
