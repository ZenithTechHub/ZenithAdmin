import { twMerge } from "tailwind-merge";
import { Filters } from "@/components/Filters/Filters";
import { ProductList } from "@/components/TableItem/TableItem";

const products = [
  {
    background: {
      alt: "",
      src: "/balde.webp",
    },
    category: "Limpeza",
    count: 25,
    name: "Balde lindo demais",
    price: 49.49,
    status: "Ativo",
  },
  {
    background: {
      alt: "",
      src: "/mop.jpg",
    },
    category: "Limpeza",
    count: 12,
    name: "Esfregão mop",
    price: 78.25,
    status: "Ativo",
  },
  {
    background: {
      alt: "",
      src: "/kit-escolar.webp",
    },
    category: "Material escolar",
    count: 30,
    name: "Kit escolar",
    price: 120,
    status: "Ativo",
  },
  {
    background: {
      alt: "",
      src: "/caixas.jpg",
    },
    category: "Embalagens",
    count: 200,
    name: "Caixas de papelão",
    price: 2,
    status: "Ativo",
  },
];

const Products = () => (
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

export default Products;
