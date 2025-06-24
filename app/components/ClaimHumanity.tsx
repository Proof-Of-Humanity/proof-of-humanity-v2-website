import Button from "./Button";
import claimHumanityData from '../../data/claimHumanity.json';

const ClaimHumanity = () => (
  <section className="flex flex-col justify-center items-center px-5 sm:px-8 md:px-16 lg:px-32 py-20 w-full bg-secondaryBackground">
    <div className="w-full max-w-[1182px] 2xl:max-w-[1400px]">
      <div className="flex flex-col items-center p-4 md:p-8 w-full rounded-2xl">
        <h2 className="flex flex-wrap gap-2 justify-center text-center text-4xl md:text-5xl font-bold">
          <span className="primary-gradient-text">{claimHumanityData.titlePart1}</span>
          <span className="text-primaryText">{claimHumanityData.titlePart2}</span>
        </h2>
        <div className="mt-6">
          <Button href={claimHumanityData.buttonLink} target="_blank" rel="noopener noreferrer" className="text-onBrandText primary-gradient-bg">
            {claimHumanityData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ClaimHumanity; 