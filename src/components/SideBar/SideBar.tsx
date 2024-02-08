import { Tab as TabHU } from "@headlessui/react";
import Image from "next/image";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { twMerge } from "tailwind-merge";
import { Tab } from "@/components/SideBar/Tab/Tab";
import PNGPlaceholder from "#/PNG/placeholder.png";

export const SideBar = () => (
  <TabHU.List
    as="aside"
    className={twMerge(
      "sm:hidden",
      "md:bg-dark-grey md:border-r-[0.0625rem] md:border-r-lines-dark md:grid md:grid-cols-1 md:grid-rows-[auto_1fr_auto] sm:items-start md:w-full",
    )}
  >
    <div className="sm:flex sm:h-20 sm:items-center sm:px-6 sm:w-full">
      <Image
        alt="Logo"
        className="sm:h-6 sm:object-contain sm:w-auto"
        height={24}
        loading="eager"
        placeholder="blur"
        priority
        quality={100}
        src={PNGPlaceholder}
        width={120}
      />
    </div>

    <div className="sm:gap-5 sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:w-full">
      <strong className={twMerge("heading-s", "sm:text-medium-grey sm:px-6")}>
        ALL BOARDS
      </strong>

      <ScrollContainer className="sm:flex sm:flex-col sm:h-full sm:-my-2 sm:overflow-y-auto sm:pr-5 sm:py-2 sm:w-full">
        <Tab>Platform Launch</Tab>

        <Tab>Marketing Plan</Tab>

        <Tab>Roadmap</Tab>
      </ScrollContainer>
    </div>

    <div></div>
  </TabHU.List>
);
