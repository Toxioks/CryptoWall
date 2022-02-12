import Heading from "components/Heading/Heading";
import NcImage from "components/NcImage/NcImage";
import React from "react";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Daniel Kramer`,
    job: "Project Manager & Front-End Engineer",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGcFESmHic1Rg/profile-displayphoto-shrink_800_800/0/1642187900079?e=1649289600&v=beta&t=yuDlwFBiRUcb4DD1peuTc9xsbsrvPpi66FEsUe7D1FY",
  },
  {
    id: "4",
    name: `Furqan Khan`,
    job: "Back-End Software Engineer",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQExzPSHcFApxg/profile-displayphoto-shrink_800_800/0/1633817379175?e=1649289600&v=beta&t=Yx0CAqD2e-2WlQLlJFHRl1UJVa42Lj-enLDSNHAwl2U",
  },
  {
    id: "3",
    name: `Lewis Dickinson`,
    job: "Front-End Engineer and Business Lead",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFkOSoe78LJzA/profile-displayphoto-shrink_200_200/0/1598990377608?e=1649894400&v=beta&t=F1dTFfeSJ2CBo-ooxS36z9r0q-V5MOqo3OtGvCjomPg",
  },
  {
    id: "2",
    name: `Mirza Ali`,
    job: "Back-End Software Engineer",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEHjiH-1oI7zw/profile-displayphoto-shrink_800_800/0/1642087018208?e=1649289600&v=beta&t=StCWZ9x84sHwlaB3ejTFJGWJBlBW0SabqqETK62djdU",
  },

];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="A group of Students who study at Leeds Beckett University, We’re impartial and independent, and every day we create distinctive,
          world-class articles for the CryptoVerse community
          "
      >
        💼 Founders
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
