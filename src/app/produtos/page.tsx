import { twMerge } from "tailwind-merge";
import { Filters } from "@/components/Filters/Filters";

const Produtos = () => (
  <main
    className={twMerge(
      "sm:bg-very-dark-grey-dark-bg sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:p-4 sm:w-full",
      "md:p-6",
    )}
  >
    <Filters />
  </main>
);

export default Produtos;
