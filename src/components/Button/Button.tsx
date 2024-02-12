import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof button>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color = "PRIMARY",
      size = "RESPONSIVE",
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      {...props}
      className={button({
        className: className,
        color: color,
        size: size,
      })}
      ref={ref}
      type={type}
    />
  ),
);

const button = tv({
  base: "sm:duration-200 sm:ease-in-out sm:flex sm:font-plus-jakarta-sans sm:items-center sm:justify-center sm:max-w-full sm:py-2 sm:rounded-full sm:text-center sm:transition-colors sm:w-fit",
  variants: {
    size: {
      RESPONSIVE: twMerge(
        "sm:font-bold sm:h-10 sm:px-4 sm:text-[0.8125rem] sm:leading-[1.4375rem]",
        "md:font-bold md:h-12 md:px-6 md:text-[0.9375rem] md:leading-[1.1875rem]",
      ),
      LARGE:
        "sm:font-bold sm:h-12 sm:px-6 sm:text-[0.9375rem] sm:leading-[1.1875rem]",
      SMALL:
        "sm:font-bold sm:h-10 sm:px-4 sm:text-[0.8125rem] sm:leading-[1.4375rem]",
    },
    color: {
      DESTRUCTIVE: "sm:bg-red sm:text-white sm:hover:bg-red-hover",
      PRIMARY: "sm:bg-main-purple sm:text-white sm:hover:bg-main-purple-hover",
      SECONDARY:
        "sm:bg-[#635FC71A] sm:text-main-purple sm:hover:bg-[#635FC740]",
    },
  },
});
