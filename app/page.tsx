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
      <main id="main-content" className="w-full max-md:max-w-full">
        <div className="flex flex-col pb-44 w-full bg-primaryBackground max-md:pb-24 max-md:max-w-full">
          {/* Hero Section */}
          <Hero />
        </div>
        {/* Use Cases Section */}
        <section aria-labelledby="use-cases-heading">
          <UseCases />
        </section>

        {/* Profile Submission Flow Section */}
        <section aria-labelledby="submission-flow-heading" id="submission-flow-heading">
          <ProfileSubmissionFlow />
        </section>

        {/* Challenge Flow Section */}
        <section aria-labelledby="challenge-flow-heading">
          <ChallengeFlow />
        </section>
        
        {/* Integrate Section */}
        <section aria-labelledby="integrate-heading">
          <IntegrateSection />
        </section>

        {/* Partner Scroll Section */}
        <section aria-labelledby="partners-heading">
          <PartnerSection />
        </section>
        
        {/* Claim Your Humanity Section CTA */}
        <section aria-labelledby="claim-humanity-heading">
          <ClaimHumanity />
        </section>

        {/* Share POH Card Section */}
        <section aria-labelledby="share-card-heading">
          <SharePohCard />
        </section>
      </main>
    </PageContainer>
  );
}
