import { twMerge } from "tailwind-merge";
import { Filters } from "@/components/Filters/Filters";
import { ProductList } from "@/components/ProductList/ProductList";

const Products = async () => {
  return (
    <main
      className={twMerge(
        "sm:bg-very-dark-grey-dark-bg sm:gap-6 sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:p-4 sm:w-full",
        "md:p-6",
      )}
    >
      <Filters />

      <ProductList />
    </main>
  );
};

export default Products;
