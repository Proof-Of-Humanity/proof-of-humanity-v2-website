import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const SectionUseCases = () => {
  return (
    <section className="flex flex-col justify-center items-center px-32 py-20 w-full bg-secondaryBackground max-md:px-5 max-md:max-w-full">
      <div className="max-w-full w-[1182px]">
        <div className="w-full">
          <div className="w-full">
            <header className="flex flex-col w-full max-w-[1182px] max-md:max-w-full">
              <h2 className="flex flex-wrap gap-2 items-start self-start text-3xl font-bold h-[39px] max-md:max-w-full">
                <span className="whitespace-nowrap">
                  Integrate
                </span>
                <span className="min-w-60 text-primaryText max-md:max-w-full">
                  Proof of Humanity into Your Project
                </span>
              </h2>
              <p className="mt-4 text-2xl text-mutedText max-md:max-w-full">
                Whether you're building a governance platform, distributing
                tokens, or developing innovative Web3 solutions, PoH strengthens
                your system with decentralized, human-centric identity
                verification.
              </p>
            </header>
          </div>
        </div>

        <div className="mt-12 w-full text-2xl text-center text-primaryText max-md:mt-10">
          <div className="px-16 pt-72 pb-60 bg-primaryBackground rounded-2xl border border-solid border-defaultBorder max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
            Code Snippet Placeholder
            <br />
            <span className="text-mutedText">
              Suggested by Guangmian
            </span>
          </div>
        </div>

        <div className="mt-12 w-full text-2xl text-center max-md:mt-10">
          <div className="flex flex-col items-center w-full max-w-[1182px] max-md:max-w-full">
            <p className="text-mutedText max-md:max-w-full">
              Check our integration guide and become part of a growing
              ecosystem.
            </p>
            <Link href="#" className="flex gap-4 items-center mt-2 text-linkText cursor-pointer">
              <span className="self-stretch my-auto text-linkText">
                Integration Guide
              </span>
              <Image
                src="/bullet-icon.svg"
                alt="Arrow icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
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
