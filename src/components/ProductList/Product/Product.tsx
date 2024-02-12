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
  <article className="sm:bg-dark-grey sm:w-full sm:flex sm:text-white sm:gap-5 sm:px-6 sm:py-4 sm:flex-shrink-0">
    <Image
      className="sm:h-16 sm:object-cover sm:flex-shrink-0 sm:w-16"
      {...propsImage}
      height={64}
      width={128}
    />

    <div className="sm:flex sm:items-center sm:justify-start sm:text-center sm:from-neutral-50 sm:w-full">
      {name}
    </div>

    <div className="sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full">
      {price}
    </div>

    <div className="sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full">
      {category}
    </div>

    <div className="sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full">
      {status}
    </div>

    <div className="sm:flex sm:items-center sm:justify-center sm:text-center sm:from-neutral-50 sm:w-full">
      {count}
    </div>
  </article>
);
