import React from "react";
import { Tab as TabHU } from "@headlessui/react";
import { KanbanSquare } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type TabProps = Omit<React.ComponentProps<typeof TabHU>, "children"> & {
  children?: React.ReactNode;
};

export const Tab = React.forwardRef<HTMLElement, TabProps>(
  ({ className, children, ...props }, ref) => (
    <TabHU
      {...props}
      className={twMerge(
        "heading-m",
        "sm:duration-200 sm:ease-in-out sm:flex-shrink-0 sm:gap-3 sm:grid sm:grid-cols-[auto_1fr] sm:h-12 sm:items-center sm:justify-items-start sm:px-6 sm:rounded-r-[100rem] sm:text-left sm:transition-colors sm:w-full",
        "sm:ui-selected:bg-main-purple  sm:ui-selected:text-white sm:ui-not-selected:text-medium-grey",
        className,
      )}
      ref={ref}
    >
      {({ selected }) => (
        <>
          <KanbanSquare
            className={twMerge(
              "sm:h-4 sm:w-4",
              selected === true && "sm:text-white",
              selected === false && "sm:text-medium-grey",
            )}
          />

          <div className="sm:block sm:overflow-hidden sm:text-ellipsis sm:text-nowrap sm:w-full">
            {children}
          </div>
        </>
      )}
    </TabHU>
  ),
);
