"use client";

import React from "react";
import { Tab, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { AdminPanels } from "@/components/AdminPanels/AdminPanels";
import { Header } from "@/components/Header/Header";
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

      <div className="sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:w-full">
        <Header />

        <Tab.Panels>
          <AdminPanels.Products />

          <Tab.Panel>Content 2</Tab.Panel>

          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Home;
