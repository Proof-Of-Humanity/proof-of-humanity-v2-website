import Image from "next/image";
import Link from "next/link";
import integrateSectionData from "../../data/integrateSection.json";

const IntegrateSection = () => {
  return (
    <section className="flex justify-center items-center w-full px-5 py-20 bg-primaryBackground sm:px-8 md:px-16 lg:px-32 2xl:px-40 2xl:py-24">
      <div className="w-full max-w-[1182px] 2xl:w-[1600px]">
        <header className="w-full">
          <h2 className="flex flex-wrap gap-2 text-3xl font-bold md:text-4xl 2xl:gap-3 2xl:text-4xl">
            <span className="primary-gradient-text">
              {integrateSectionData.header.titlePart1}
            </span>
            <span className="text-primaryText">
              {integrateSectionData.header.titlePart2}
            </span>
          </h2>
          <p className="mt-4 text-xl text-mutedText md:text-2xl 2xl:mt-6 2xl:text-3xl">
            {integrateSectionData.header.description}
          </p>
        </header>

        <div className="mt-10 md:mt-12 2xl:mt-16 w-full">
          <div className="mb-5 rounded-lg border border-linkText/30 bg-linkText/10 px-5 py-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-linkText">
              Integration note
            </p>
            <p className="mt-2 text-lg font-semibold text-primaryText md:text-xl">
              Use <span className="text-linkText">Cross-Chain</span> Proof of
              Humanity contract for integrations.
            </p>
            <p className="mt-1 text-base text-mutedText md:text-lg">
              Do not read human status from the main Proof of Humanity contract.
            </p>
          </div>
          <div className="rounded-2xl border border-solid border-defaultBorder">
            <div className="bg-gray-900 rounded-lg font-mono text-sm overflow-x-auto p-6">
              <div className="text-left">
                <div className="mb-2">
                  <span className="text-orange-400">interface</span>{" "}
                  <span className="text-yellow-300">ICrossChainProofOfHumanity</span>{" "}
                  <span className="text-white">{'{'}</span>
                </div>
                <div className="ml-2 text-gray-400 mb-1">{`// Returns true when the account has a valid humanity.`}</div>
                <div className="ml-2 mb-1">
                  <span className="text-orange-400">function</span>{" "}
                  <span className="text-blue-300">isHuman</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">address</span>{" "}
                  <span className="text-white">account</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-orange-400">external</span>{" "}
                  <span className="text-orange-400">view</span>{" "}
                  <span className="text-orange-400">returns</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-orange-400">bool</span>
                  <span className="text-white">);</span>
                </div>
                <div className="ml-2 text-gray-400 mb-1">{`// Returns the humanity ID owned by the account.`}</div>
                <div className="ml-2 mb-1">
                  <span className="text-orange-400">function</span>{" "}
                  <span className="text-blue-300">humanityOf</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">address</span>{" "}
                  <span className="text-white">account</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-orange-400">external</span>{" "}
                  <span className="text-orange-400">view</span>{" "}
                  <span className="text-orange-400">returns</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-orange-400">bytes20</span>
                  <span className="text-white">);</span>
                </div>
                <div className="ml-2 text-gray-400 mb-1">{`// Returns the current owner of a humanity ID.`}</div>
                <div className="ml-2 mb-1">
                  <span className="text-orange-400">function</span>{" "}
                  <span className="text-blue-300">boundTo</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">bytes20</span>{" "}
                  <span className="text-white">_humanityId</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-orange-400">external</span>{" "}
                  <span className="text-orange-400">view</span>{" "}
                  <span className="text-orange-400">returns</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-orange-400">address</span>
                  <span className="text-white">);</span>
                </div>
                <div className="ml-2 text-gray-400 mb-1">{`// Returns true when the humanity ID is claimed on any supported chain.`}</div>
                <div className="ml-2 mb-1">
                  <span className="text-orange-400">function</span>{" "}
                  <span className="text-blue-300">isClaimed</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">bytes20</span>{" "}
                  <span className="text-white">_humanityId</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-orange-400">external</span>{" "}
                  <span className="text-orange-400">view</span>{" "}
                  <span className="text-orange-400">returns</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-orange-400">bool</span>
                  <span className="text-white">);</span>
                </div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12 2xl:mt-16 text-xl lg:text-2xl">
          <div className="flex flex-col items-center">
            <p className="text-mutedText">
              {integrateSectionData.callToAction.description}
            </p>
            <Link href={integrateSectionData.callToAction.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-4 items-center mt-2 text-linkText cursor-pointer 2xl:gap-6 2xl:mt-4">
              <span className="my-auto">
                {integrateSectionData.callToAction.link.text}
              </span>
              <Image
                src={integrateSectionData.callToAction.link.iconSrc}
                alt={integrateSectionData.callToAction.link.iconAlt}
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
