import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Auth } from "@/components/Header/Auth/Auth";
import PNGPlaceholder from "#/PNG/placeholder.png";

export const Header = () => (
  <header
    className={twMerge(
      "sm:bg-dark-grey sm:gap-4 sm:grid sm:grid-cols-[auto_1fr_auto] sm:h-16 sm:items-center sm:px-4 sm:w-full",
      "md:border-b-[0.0625rem] md:border-b-lines-dark md:gap-6 md:grid-cols-[1fr_auto] md:min-h-24 md:px-6",
    )}
  >
    <Image
      alt=""
      className={twMerge("sm:h-6 sm:object-contain sm:w-auto", "md:hidden")}
      height={48}
      loading="eager"
      placeholder="blur"
      priority
      quality={100}
      src={PNGPlaceholder}
      width={48}
    />

    <h1
      className={twMerge(
        "heading-l",
        "sm:overflow-hidden sm:text-ellipsis sm:text-nowrap sm:text-white",
      )}
    >
      Loren Ipsun
    </h1>

    <Auth />
  </header>
);
