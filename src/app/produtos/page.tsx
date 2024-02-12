import { twMerge } from "tailwind-merge";
import { Filter } from "@/components/Filter/Filter";
import { FormFilter } from "@/hooks/useFilter/schema";

export type ProdutosProps = {
  params: {};
  searchParams: FormFilter;
};

const Produtos = ({ searchParams }: ProdutosProps) => {
  return (
    <main
      className={twMerge(
        "sm:bg-very-dark-grey-dark-bg sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:p-4 sm:w-full",
        "md:p-6",
      )}
    >
      <Filter searchParams={searchParams} />
    </main>
  );
};

export default Produtos;
