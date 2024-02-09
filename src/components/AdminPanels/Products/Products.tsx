import { Tab } from "@headlessui/react";
import { Filters } from "@/components/Filters/Filters";

export const Products = () => (
  <Tab.Panel
    as="section"
    className="sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:w-full"
  >
    <Filters />
  </Tab.Panel>
);
