import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Links } from "@/components/SideBar/Links/Links";
import PNGPlaceholder from "#/PNG/placeholder.png";

export const SideBar = () => (
  <aside
    className={twMerge(
      "sm:hidden",
      "md:bg-dark-grey md:border-r-[0.0625rem] md:border-r-lines-dark md:grid md:grid-cols-1 md:grid-rows-[auto_1fr] sm:h-full sm:items-start md:w-full",
    )}
  >
    <div className="sm:flex sm:h-20 sm:items-center sm:px-6 sm:w-full">
      <Image
        alt="Logo"
        className="sm:h-6 sm:object-contain sm:w-auto"
        height={24}
        loading="eager"
        placeholder="blur"
        priority
        quality={100}
        src={PNGPlaceholder}
        width={120}
      />
    </div>

    <div className="sm:gap-5 sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:w-full">
      <strong className={twMerge("heading-s", "sm:text-medium-grey sm:px-6")}>
        ALL BOARDS
      </strong>

      <Links />
    </div>
  </aside>
);
