import React from "react";
import { usePathname } from "next/navigation";
import { KanbanSquare } from "lucide-react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  NextLinkProps;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, href, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <NextLink
        {...props}
        className={twMerge(
          "heading-m",
          "sm:duration-200 sm:ease-in-out sm:flex-shrink-0 sm:gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:h-12 sm:items-center sm:justify-items-start sm:px-6 sm:rounded-r-[100rem] sm:text-medium-grey sm:text-left sm:transition-colors sm:w-full",
          "sm:hover:bg-main-purple-hover sm:hover:text-white",
          pathname === href &&
            "sm:bg-main-purple sm:text-white sm:hover:bg-main-purple",
          className,
        )}
        href={href}
        ref={ref}
      >
        <KanbanSquare className="sm:h-4 sm:w-4" />

        <div className="sm:block sm:overflow-hidden sm:text-ellipsis sm:text-nowrap sm:w-full">
          {children}
        </div>
      </NextLink>
    );
  },
);
