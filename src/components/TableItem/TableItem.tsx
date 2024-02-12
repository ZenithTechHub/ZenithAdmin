import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ProductBackground = {
  alt?: string;
  src: string;
};

type ProductItem = {
  background: ProductBackground;
  category: string;
  count: number;
  name: string;
  price: number;
  status: string;
};

export type ProductListProps = {
  products: ProductItem[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <>
    {products.map((product, key) => (
      <ul className={twMerge("sm:w-full")}>
        <li
          className={twMerge("sm:w-full sm:flex")}
          key={key}
        >
          <Image
            alt={product.background.alt ?? ""}
            height={80}
            src={product.background.src}
            width={150}
          />

          <div
            className={twMerge(
              "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
            )}
          >
            {product.name}
          </div>

          <div
            className={twMerge(
              "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
            )}
          >
            {product.price}
          </div>

          <div
            className={twMerge(
              "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
            )}
          >
            {product.category}
          </div>

          <div
            className={twMerge(
              "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
            )}
          >
            {product.status}
          </div>

          <div
            className={twMerge(
              "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
            )}
          >
            {product.count}
          </div>
        </li>
      </ul>
    ))}
  </>
);
