import React from 'react';
import ProfileCard from './ProfileCard';
// --- New/Specialized Components for this Challenge Flow ---

const LineArrowIcon = ({ color = 'text-gray-700', size = 'w-6 h-6', className = '' }) => (
  <svg className={`${size} ${color} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const DottedLineArrowIcon = ({ color = 'text-orange-400', className = '' }) => (
  <div className={`flex items-center space-x-px ${className}`}>
    {[...Array(4)].map((_, i) => (
      <span key={i} className={`block w-1.5 h-1.5 ${color.replace('text-', 'bg-')} rounded-full`}></span>
    ))}
    <svg className={`w-4 h-4 ${color} ml-1`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </div>
);

const BranchingDottedArrowsIcon = ({ color = 'text-gray-600' }) => (
  <div className="relative w-10 h-12 mx-1">
    {/* Upper branch - conceptual, true dotted lines in SVG are complex */}
    <svg className={`absolute top-0 left-0 w-6 h-6 ${color} transform -translate-x-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ strokeDasharray: "3,2" }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12 Q6 10 9 7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7l2-2 M7 7l-2-2" transform="translate(2 -0.5)" />
    </svg>
     {/* Lower branch */}
    <svg className={`absolute bottom-0 left-0 w-6 h-6 ${color} transform -translate-x-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ strokeDasharray: "3,2" }}>
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12 Q6 14 9 17" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17l2 2 M7 17l-2 2" transform="translate(2 0.5)"/>
    </svg>
  </div>
);
// --- End New/Specialized Components ---


const ChallengeFlow: React.FC = () => {
  // Placeholder image paths - replace with your actual asset paths
  const PROFILE_IMG_BEARBOT = "/images/persona/bearbot.png"; 
  const ADDRESS_ICON_GENERIC = "/images/tokens/generic-blue-token.png"; 
  const MAGNIFYING_GLASS_ICON = "/icons/magnifying-glass-orange.svg"; 
  const SCALES_ICON = "/icons/scales-justice-purple.svg"; 
  const KLEROS_ICON = "/icons/kleros-gem-purple.svg"; 

  return (
    <div className="bg-white py-8 md:py-12 lg:py-16"> {/* Existing outer container from skeleton */}
      <div className="container mx-auto px-4 md:px-6"> {/* Existing container from skeleton */}
        {/* Existing text from skeleton */}
        <h2 className="text-xl md:text-[32px] font-bold text-primaryText mb-3 text-center md:text-left">
          <span className="primary-gradient-text">Challenge</span> Suspicious Profiles
        </h2>
        <p className="text-lg md:text-2xl text-secondaryText mx-auto md:mx-0 text-center md:text-left">
          Earn rewards by maintaining registry integrity through successful challenges of rule-violating profiles.
        </p>

        {/* --- New Flow Diagram Section (based on the image) --- */}
        <div className="mt-10 md:mt-12 lg:mt-16 bg-primaryBackground p-6 md:p-8 lg:p-10 rounded-2xl shadow-md border border-defaultBorder">
          <div className="flex flex-col lg:flex-row lg:space-x-6 xl:space-x-10">
            {/* Left Text Block (from image) */}
            <div className="lg:w-[30%] xl:w-1/4 flex flex-col mb-10 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                Identify & Challenge a Suspicious Profile
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-6">
                If you spot a profile that seems fraudulent, you can <span className="text-orange-500 font-semibold">challenge it</span> for review.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-auto pt-4">
                <DottedLineArrowIcon color="text-orange-400" className="hidden sm:flex"/>
              </div>
            </div>

            {/* Right Flow Elements Section - This section will scroll on lg if content overflows */}
            <div className="flex-1 min-w-0"> {/* min-w-0 is crucial for flex children to allow overflow */}
              <div className="flex flex-col items-center space-y-8 
                              lg:flex-row lg:items-start lg:space-y-0 lg:space-x-2 xl:space-x-3 
                              lg:overflow-x-auto lg:pb-4 lg:pt-1 lg:justify-start"> {/* justify-start for scroll */}
                
                {/* --- Card 1 + Magnifying Glass --- */}
                <div className="relative shrink-0 group">
                  <ProfileCard
                    statusText="Verification"
                    statusColor="blue"
                    profileImageUrl={PROFILE_IMG_BEARBOT}
                    profileName="Bear Bot"
                    address="0x1234...4567"
                    addressIconUrl={ADDRESS_ICON_GENERIC}
                    buttonText="Verification"
                    className="transition-all duration-300 group-hover:shadow-xl"
                  />
                  <img 
                    src={MAGNIFYING_GLASS_ICON} 
                    alt="Challenge" 
                    className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 z-10 transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>

                {/* Vertical Arrow (Mobile) */}
                <div className="flex lg:hidden items-center justify-center w-full shrink-0">
                    <LineArrowIcon color="text-gray-400" size="w-8 h-8" className="transform rotate-90" />
                </div>
                {/* Horizontal Arrow (Desktop) */}
                <div className="hidden lg:flex items-center self-center pt-12 shrink-0 mx-1 xl:mx-2">
                  <LineArrowIcon color="text-gray-600" size="w-8 h-8" />
                </div>

                {/* --- Card 2 & Button --- */}
                <div className="flex flex-col items-center shrink-0 group">
                  <ProfileCard
                    statusText="Challenged"
                    statusColor="purple"
                    profileImageUrl={PROFILE_IMG_BEARBOT}
                    profileName="Bear Bot"
                    address="0x1234...4567"
                    addressIconUrl={ADDRESS_ICON_GENERIC}
                    buttonText="Challenged"
                    className="transition-all duration-300 group-hover:shadow-xl"
                  />
                </div>
                
                {/* Vertical Arrow (Mobile) */}
                <div className="flex lg:hidden items-center justify-center w-full shrink-0">
                    <LineArrowIcon color="text-gray-400" size="w-8 h-8" className="transform rotate-90" />
                </div>
                {/* Horizontal Arrow (Desktop) */}
                <div className="hidden lg:flex items-center self-center pt-12 shrink-0 mx-1 xl:mx-2">
                  <LineArrowIcon color="text-gray-600" size="w-8 h-8" />
                </div>

                {/* --- Dispute Resolution Card --- */}
                <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5 flex flex-col items-center text-center 
                                lg:text-left lg:flex-row lg:items-start space-y-3 lg:space-y-0 lg:space-x-4 
                                shrink-0 lg:self-center w-full max-w-md lg:max-w-xs xl:max-w-sm group transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-row lg:flex-col items-center space-x-3 lg:space-x-0 lg:space-y-2 shrink-0">
                    <img src={SCALES_ICON} alt="Dispute Resolution" className="w-10 h-10" />
                    <img src={KLEROS_ICON} alt="Kleros" className="w-12 h-12" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Dispute Resolution via Kleros Court</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      The case is sent to Kleros, where an independent panel of jurors evaluates the profile against registry policies.
                    </p>
                  </div>
                </div>
                
                {/* --- Branching Logic --- */}
                {/* Vertical structure for mobile */}
                <div className="flex flex-col items-center space-y-3 lg:hidden shrink-0 w-full">
                     <LineArrowIcon color="text-gray-400" size="w-8 h-8" className="transform rotate-90" />
                     <button className="bg-green-500 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-green-600 transition-colors w-28 shadow">
                        Included
                     </button>
                     <span className="text-gray-500 text-xs">Or</span>
                     <button className="bg-pink-600 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-pink-700 transition-colors w-28 shadow">
                        Rejected
                     </button>
                </div>
                {/* Horizontal structure for desktop */}
                <div className="hidden lg:flex items-center self-center pt-12 shrink-0">
                    <BranchingDottedArrowsIcon color="text-gray-500" />
                    <div className="flex flex-col items-center space-y-2 ml-1">
                        <button className="bg-green-500 text-white text-xs font-semibold px-5 py-1.5 rounded-full hover:bg-green-600 transition-colors w-28 shadow">
                        Included
                        </button>
                        <span className="text-gray-500 text-xs">Or</span>
                        <button className="bg-pink-600 text-white text-xs font-semibold px-5 py-1.5 rounded-full hover:bg-pink-700 transition-colors w-28 shadow">
                        Rejected
                        </button>
                    </div>
                </div>

              </div> {/* End of right flow elements scrollable container */}
            </div> {/* End of right flow elements section */}
          </div> {/* End of main flex container for diagram */}
        </div> {/* End of new flow diagram section wrapper */}
      </div> {/* End of existing container from skeleton */}
    </div> 
  );
};

export default ChallengeFlow;