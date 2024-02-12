import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export type SelectProps = React.ComponentProps<typeof Listbox> & {
  label: React.ReactNode;
  options: readonly string[];
  placeholder?: string;
  propsButton?: React.ComponentProps<typeof Listbox.Button>;
  propsOption?: React.ComponentProps<typeof Listbox.Option>;
  propsOptions?: React.ComponentProps<typeof Listbox.Options>;
};

export const Select = React.forwardRef<HTMLElement, SelectProps>(
  (
    {
      as = "div",
      className,
      label,
      options = [],
      placeholder = "Placeholder",
      propsButton,
      propsOption,
      propsOptions,
      value = "",
      ...props
    },
    ref,
  ) => (
    <Listbox
      {...props}
      as={as}
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:relative sm:w-full",
        className,
      )}
      ref={ref}
      value={value}
    >
      <Listbox.Label className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
        {label}
      </Listbox.Label>

      <Listbox.Button
        {...propsButton}
        className={twMerge(
          "sm:bg-dark-grey sm:border-[0.0625rem] sm:border-[#828FA340] sm:flex sm:h-10 sm:items-center sm:justify-start sm:px-4 sm:rounded sm:text-left sm:w-full",
          propsButton?.className,
        )}
      >
        <span
          className={twMerge(
            "body-l",
            "sm:block sm:overflow-hidden sm:text-ellipsis sm:text-nowrap sm:text-white sm:w-full",
          )}
        >
          {value === "" ? placeholder : (value as string)}
        </span>
      </Listbox.Button>

      <Transition
        as={React.Fragment}
        enter={twMerge(
          "sm:duration-standard sm:ease-standard sm:transition-all",
        )}
        enterFrom={twMerge("sm:opacity-0 sm:scale-75")}
        enterTo={twMerge("sm:opacity-100 sm:scale-100")}
        leave={twMerge(
          "sm:duration-standard sm:ease-standard sm:transition-all",
        )}
        leaveFrom={twMerge("sm:opacity-100 sm:scale-100")}
        leaveTo={twMerge("sm:opacity-0 sm:scale-75")}
      >
        <Listbox.Options
          {...propsOptions}
          className={twMerge(
            "sm:absolute sm:bg-dark-grey sm:-bottom-2 sm:flex sm:flex-col sm:gap-2 sm:items-start sm:max-h-32 sm:overflow-y-auto sm:p-4 sm:rounded sm:translate-y-full sm:w-full sm:z-10",
            propsOptions?.className,
          )}
        >
          {options.map((value, index) => (
            <Listbox.Option
              {...propsOption}
              className={twMerge(
                "sm:cursor-pointer sm:flex sm:flex-shrink-0 sm:max-w-full sm:w-fit",
                propsOption?.className,
              )}
              key={index}
              value={value}
            >
              <span
                className={twMerge(
                  "body-l",
                  "sm:block sm:duration-standard sm:ease-standard sm:overflow-hidden sm:text-ellipsis sm:text-nowrap sm:text-medium-grey sm:transition-colors sm:w-full",
                  "sm:ui-active:text-white sm:ui-selected:text-main-purple",
                )}
              >
                {value === "" ? placeholder : value}
              </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  ),
);
