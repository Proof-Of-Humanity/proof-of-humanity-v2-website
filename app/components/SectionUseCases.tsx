import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import sectionUseCasesData from "../../data/sectionUseCases.json";

const SectionUseCases = () => {
  return (
    <section className="flex flex-col justify-center items-center px-32 2xl:px-40 py-20 2xl:py-24 w-full bg-secondaryBackground max-md:px-5 max-md:max-w-full">
      <div className="max-w-full w-[1182px] 2xl:w-[1600px] max-md:max-w-full">
        <div className="w-full">
          <div className="w-full">
            <header className="flex flex-col w-full max-w-[1182px] 2xl:max-w-[1600px] max-md:max-w-full">
              <h2 className="flex flex-wrap gap-2 2xl:gap-3 items-start self-start text-3xl 2xl:text-4xl font-bold h-[39px] 2xl:h-[48px] max-md:max-w-full">
                <span className="whitespace-nowrap text-primary-gradient-text">
                  {sectionUseCasesData.header.titlePart1}
                </span>
                <span className="min-w-60 2xl:min-w-72 text-primaryText max-md:max-w-full">
                  {sectionUseCasesData.header.titlePart2}
                </span>
              </h2>
              <p className="mt-4 2xl:mt-6 text-2xl 2xl:text-3xl text-mutedText max-md:max-w-full">
                {sectionUseCasesData.header.description}
              </p>
            </header>
          </div>
        </div>

        <div className="mt-12 2xl:mt-16 w-full text-2xl 2xl:text-3xl text-center text-primaryText max-md:mt-10">
          <div className="px-16 2xl:px-24 pt-72 2xl:pt-80 pb-60 2xl:pb-72 bg-primaryBackground rounded-2xl border border-solid border-defaultBorder max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
          </div>
        </div>

        <div className="mt-12 2xl:mt-16 w-full text-2xl 2xl:text-3xl text-center max-md:mt-10">
          <div className="flex flex-col items-center w-full max-w-[1182px] 2xl:max-w-[1600px] max-md:max-w-full">
            <p className="text-mutedText max-md:max-w-full">
              {sectionUseCasesData.callToAction.description}
            </p>
            <Link href={sectionUseCasesData.callToAction.link.href} className="flex gap-4 2xl:gap-6 items-center mt-2 2xl:mt-4 text-linkText cursor-pointer">
              <span className="self-stretch my-auto text-linkText">
                {sectionUseCasesData.callToAction.link.text}
              </span>
              <Image
                src={sectionUseCasesData.callToAction.link.iconSrc}
                alt={sectionUseCasesData.callToAction.link.iconAlt}
                className="object-contain shrink-0 self-stretch my-auto w-6 2xl:w-8 aspect-square"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionUseCases;
