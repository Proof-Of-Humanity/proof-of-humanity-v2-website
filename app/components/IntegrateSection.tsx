import Image from "next/image";
import Link from "next/link";
import sectionUseCasesData from "../../data/sectionUseCases.json";

const IntegrateSection = () => {
  return (
    <section className="flex justify-center items-center w-full px-5 py-20 bg-primaryBackgrounds sm:px-8 md:px-16 lg:px-32 2xl:px-40 2xl:py-24">
      <div className="w-full max-w-[1182px] 2xl:w-[1600px]">
        <header className="w-full">
          <h2 className="flex flex-wrap gap-2 text-3xl font-bold md:text-4xl 2xl:gap-3 2xl:text-4xl">
            <span className="primary-gradient-text">
              {sectionUseCasesData.header.titlePart1}
            </span>
            <span className="text-primaryText">
              {sectionUseCasesData.header.titlePart2}
            </span>
          </h2>
          <p className="mt-4 text-xl text-mutedText md:text-2xl 2xl:mt-6 2xl:text-3xl">
            {sectionUseCasesData.header.description}
          </p>
        </header>

        <div className="mt-10 md:mt-12 2xl:mt-16 w-full">
          <div className="px-5 py-28 rounded-2xl border border-solid border-defaultBorder sm:px-8 md:px-16 lg:px-24 md:pt-48 md:pb-40 lg:pt-72 lg:pb-60 2xl:pt-80 2xl:pb-72">
            {/* TODO: CODE SECTION */}
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12 2xl:mt-16 text-xl lg:text-2xl">
          <div className="flex flex-col items-center">
            <p className="text-mutedText">
              {sectionUseCasesData.callToAction.description}
            </p>
            <Link href={sectionUseCasesData.callToAction.link.href} className="inline-flex gap-4 items-center mt-2 text-linkText cursor-pointer 2xl:gap-6 2xl:mt-4">
              <span className="my-auto">
                {sectionUseCasesData.callToAction.link.text}
              </span>
              <Image
                src={sectionUseCasesData.callToAction.link.iconSrc}
                alt={sectionUseCasesData.callToAction.link.iconAlt}
                className="shrink-0 w-6 h-6 2xl:w-8 2xl:h-8"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrateSection;
