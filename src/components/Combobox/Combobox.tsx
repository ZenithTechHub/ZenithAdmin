import React from "react";
import { Combobox as ComboboxHU } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export type ComboboxProps = React.ComponentProps<typeof ComboboxHU>;
export type ButtonProps = React.ComponentProps<typeof ComboboxHU.Button>;
export type InputProps = React.ComponentProps<typeof ComboboxHU.Input> & {
  placeholder?: string | undefined;
};
export type LabelProps = React.ComponentProps<typeof ComboboxHU.Label>;
export type OptionProps = React.ComponentProps<typeof ComboboxHU.Option>;
export type OptionsProps = React.ComponentProps<typeof ComboboxHU.Options>;

const Base = React.forwardRef<HTMLElement, ComboboxProps>(
  ({ as = "div", className, ...props }, ref) => (
    <ComboboxHU
      {...props}
      as={as}
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:relative sm:w-full",
        className,
      )}
      ref={ref}
    />
  ),
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <ComboboxHU.Button
      {...props}
      className={twMerge("sm:flex sm:h-fit sm:w-fit", className)}
      ref={ref}
    />
  ),
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ as = "input", className, ...props }, ref) => (
    <ComboboxHU.Input
      {...props}
      as={as}
      className={twMerge(
        "body-l",
        "sm:duration-200 sm:ease-in-out sm:bg-dark-grey sm:border-[#828FA340] sm:border-[0.0625rem] sm:h-10 sm:py-2 sm:px-4 sm:pr-14 sm:rounded sm:text-white sm:transition-colors sm:w-full",
        "sm:focus:border-main-purple",
        className,
      )}
      ref={ref}
    />
  ),
);

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <ComboboxHU.Label
      {...props}
      className={twMerge(
        "sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0",
        className,
      )}
      ref={ref}
    />
  ),
);

const Option = React.forwardRef<HTMLLIElement, OptionProps>(
  ({ className, ...props }, ref) => (
    <ComboboxHU.Option
      {...props}
      className={twMerge(
        "body-l",
        "sm:block sm:cursor-pointer sm:duration-200 sm:ease-in-out sm:flex-shrink-0 sm:max-w-full sm:overflow-hidden sm:text-ellipsis sm:text-medium-grey sm:text-nowrap sm:transition-colors sm:w-fit",
        "sm:ui-active:text-white",
        className,
      )}
      ref={ref}
    />
  ),
);

const Options = React.forwardRef<HTMLUListElement, OptionsProps>(
  ({ className, ...props }, ref) => (
    <ComboboxHU.Options
      {...props}
      className={twMerge(
        "sm:absolute sm:bg-dark-grey sm:-bottom-2 sm:flex sm:flex-col sm:gap-2 sm:max-h-32 sm:overflow-y-auto sm:p-4 sm:rounded-lg sm:translate-y-full sm:w-full",
        className,
      )}
      ref={ref}
    />
  ),
);

export const Combobox = Object.assign(Base, {
  Button,
  Input,
  Label,
  Option,
  Options,
});
