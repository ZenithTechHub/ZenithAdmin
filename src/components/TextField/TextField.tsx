import React from "react";
import { twMerge } from "tailwind-merge";

export type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  propsContainer?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  label: React.ReactNode;
  error?: React.ReactNode | undefined;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      error,
      id: idProp,
      label,
      propsContainer,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const id = idProp || React.useId();

    return (
      <div
        {...propsContainer}
        className={twMerge(
          "sm:flex sm:flex-col sm:gap-2 sm:items-center sm:justify-center sm:relative sm:w-full",
          propsContainer?.className,
        )}
      >
        <label
          className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0"
          htmlFor={id}
        >
          {label}
        </label>

        <div
          className={twMerge(
            "sm:bg-dark-grey sm:h-10 sm:border-[0.0625rem] sm:border-[#828FA340] sm:duration-standard sm:ease-standard sm:flex sm:items-center sm:justify-end sm:relative sm:rounded sm:transition-colors sm:w-full",
            error !== undefined && "sm:border-red",
          )}
        >
          <input
            {...props}
            className={twMerge(
              "body-l",
              "sm:bg-transparent sm:border-none sm:h-full sm:px-4 sm:rounded sm:text-white sm:w-full",
              "sm:placeholder:text-[#FFFFFF40]",
              className,
            )}
            id={id}
            ref={ref}
            type={type}
          />

          {error !== undefined && (
            <span
              className={twMerge(
                "body-l",
                "sm:absolute sm:bg-dark-grey sm:block sm:max-w-[50%] sm:overflow-hidden sm:px-4 sm:text-ellipsis sm:text-nowrap sm:text-red sm:w-fit",
              )}
            >
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);
