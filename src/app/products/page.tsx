import { twMerge } from "tailwind-merge";
import { Filters } from "@/components/Filters/Filters";
import { ProductList } from "@/components/ProductList/ProductList";
import { products } from "@/lib/mock";

const Products = async () => {
  return (
    <main
      className={twMerge(
        "sm:bg-very-dark-grey-dark-bg sm:gap-6 sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:p-4 sm:w-full",
        "md:p-6 md:gap-8",
      )}
    >
      <Filters />

      <ProductList products={products} />
    </main>
  );
};

export default Products;
