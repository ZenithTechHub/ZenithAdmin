"use client";

import React, { ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { twMerge } from "tailwind-merge";

type DialogDescription = React.ComponentProps<typeof Dialog.Description>;

type DialogPanel = React.ComponentProps<typeof Dialog.Panel>;

type DialogTitle = React.ComponentProps<typeof Dialog.Title>;

export type ModalProps = React.ComponentProps<typeof Dialog> & {
  description?: DialogDescription["children"];
  propsContent?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  propsDescription?: DialogDescription;
  propsPanel?: DialogPanel;
  propsTitle?: DialogTitle;
  title: DialogTitle["children"];
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      description,
      open,
      propsDescription,
      propsContent,
      propsPanel,
      propsTitle,
      title,
      ...props
    },
    ref,
  ) => (
    <Transition
      as={React.Fragment}
      show={open}
    >
      <Dialog
        {...props}
        ref={ref}
      >
        <Transition.Child
          as={React.Fragment}
          enter={twMerge(
            "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-opacity",
          )}
          enterFrom={twMerge("sm:opacity-0")}
          enterTo={twMerge("sm:opacity-100")}
          leave={twMerge(
            "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-opacity",
          )}
          leaveFrom={twMerge("sm:opacity-100")}
          leaveTo={twMerge("sm:opacity-0")}
        >
          <div
            aria-hidden
            className="sm:bg-[#00000080] sm:fixed sm:inset-0"
          />
        </Transition.Child>

        <div
          className={twMerge(
            "sm:fixed sm:flex sm:inset-0 sm:items-center sm:justify-center sm:p-4 sm:w-screen",
            "md:p-6",
          )}
        >
          <Transition.Child
            as={React.Fragment}
            enter={twMerge(
              "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-all",
            )}
            enterFrom={twMerge("sm:opacity-0 sm:scale-75")}
            enterTo={twMerge("sm:opacity-100 sm:scale-100")}
            leave={twMerge(
              "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-all",
            )}
            leaveFrom={twMerge("sm:opacity-100 sm:scale-100")}
            leaveTo={twMerge("sm:opacity-0 sm:scale-75")}
          >
            <Dialog.Panel
              {...propsPanel}
              as={ScrollContainer}
              className={twMerge(
                "sm:bg-dark-grey sm:flex sm:flex-col sm:gap-6 sm:max-h-full sm:max-w-[30rem] sm:p-6 sm:rounded sm:select-none sm:w-full",
                propsPanel?.className,
              )}
            >
              <Dialog.Title
                {...propsTitle}
                className={twMerge(
                  "heading-l",
                  "sm:flex-shrink-0 sm:text-left sm:text-white",
                  propsTitle?.className,
                )}
              >
                {title}
              </Dialog.Title>

              {description !== undefined && (
                <Dialog.Description
                  {...propsDescription}
                  className={twMerge(
                    "body-l",
                    "sm:flex-shrink-0 sm:text-left sm:text-white",
                    propsDescription?.className,
                  )}
                >
                  {description}
                </Dialog.Description>
              )}

              <div
                {...propsContent}
                className={twMerge(
                  "sm:flex sm:flex-col sm:flex-shrink-0 sm:w-full",
                  propsContent?.className,
                )}
              >
                {children as ReactNode}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  ),
);
