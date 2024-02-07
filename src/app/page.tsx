"use client";

import React from "react";
import { Tab, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { SideBar } from "@/components/SideBar/SideBar";
import { AdminTabsContext } from "@/contexts/AdminTabs/AdminTabs";

const Home = () => {
  const { selectedIndex, setSelectedIndex } =
    React.useContext(AdminTabsContext);

  return (
    <Tab.Group
      as="div"
      className={twMerge(
        "sm:bg-very-dark-grey-dark-bg sm:grid sm:grid-cols-1 sm:h-full sm:w-full",
        "md:grid-cols-[18.75rem_1fr]",
      )}
      onChange={setSelectedIndex}
      selectedIndex={selectedIndex}
      vertical
    >
      <SideBar />

      <Tab.Panels>
        <Tab.Panel>
          <Tab.Group>
            <Tab.List>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Home;
