import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "4 founders, 4 Nationalities",
    subHeading:
      "Our diverse team of founders represent 4 nationalities",
  },
  {
    id: "2",
    heading: "1000+ Hours of Work",
    subHeading: "Invested into making the community the best it can be",
  },
  {
    id: "3",
    heading: "8+ Years of Experience",
    subHeading:
      "Between us we have over 8 years of experience ",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="We’re impartial and independent, and every day we create distinctive,
          world-class articles for the CryptoWall community"
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
