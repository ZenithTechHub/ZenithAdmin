import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

export type ProductProps = {
  propsImage: ImageProps;
  category: string;
  count: number;
  name: string;
  price: number;
  status: string;
};

export const Product = ({
  category,
  count,
  name,
  price,
  propsImage,
  status,
}: ProductProps) => (
  <article className="">
    <Image
      {...propsImage}
      height={70}
      width={150}
    />

    <div
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
      )}
    >
      {name}
    </div>

    <div
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
      )}
    >
      {price}
    </div>

    <div
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
      )}
    >
      {category}
    </div>

    <div
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
      )}
    >
      {status}
    </div>

    <div
      className={twMerge(
        "sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full",
      )}
    >
      {count}
    </div>
  </article>
);
