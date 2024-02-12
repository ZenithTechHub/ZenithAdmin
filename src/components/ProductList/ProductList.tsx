import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Product, ProductProps } from "./Product/Product";
import { ScrollContainer } from "react-indiana-drag-scroll";

export type ProductListProps = {
  products: ProductProps[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <ScrollContainer className="sm:w-full">
    <ul className="sm:flex sm:flex-col sm:gap-1 body-l sm:w-full">
      {products.map((product, key) => (
        <li
          className="sm:w-full sm:flex"
          key={key}
        >
          <Product {...product} />
        </li>
      ))}
    </ul>
  </ScrollContainer>
);
