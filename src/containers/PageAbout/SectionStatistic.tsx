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
    heading: "4 FOUNDERS, 4 NATIONALITIES",
    subHeading:
      "Our diverse team of founders represent 4 nationalities, we understand what it means to involve all ethnic backgrounds, genders and orientations.",
  },
  {
    id: "2",
    heading: "1000+ HOURS OF WORK",
    subHeading: "Endless hours have been invested into making the community what it is today and always building on top of what we've always achieved. ",
  },
  {
    id: "3",
    heading: "A DECADE OF EXPERIENCE",
    subHeading:
      "The team here at CryptoVerse have a reptable amount of experience and are all reputable individuals.",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=""
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-grey rounded-2xl dark:border-neutral-800"
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
