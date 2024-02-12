import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Product, ProductProps } from "./Product/Product";

export type ProductListProps = {
  products: ProductProps[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <>
    {products.map((product, key) => (
      <ul className={twMerge("sm:w-full")}>
        <li
          className={twMerge("sm:w-full sm:flex")}
          key={key}
        >
          <Product {...product} />
        </li>
      </ul>
    ))}
  </>
);
