import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { Product as ProductType } from "@/lib/product/schema";
import { currency } from "@/utils/formater";
import PNGPlaceholder from "#/PNG/placeholder.png";

export type ProductProps = ProductType & {};

export const Product = ({
  active,
  description,
  price,
  promotion_price,
  quantity_in_stock,
  title,
}: ProductProps) => (
  <tr className="sm:w-full">
    <td>
      <span className="sm:border-l-[0.0625rem] sm:flex sm:rounded-l">
        <Image
          alt="Placeholder"
          className="sm:h-12 sm:object-cover sm:flex-shrink-0 sm:w-12"
          height={48}
          placeholder="blur"
          src={PNGPlaceholder}
          width={48}
        />
      </span>
    </td>

    <td>
      <span className="sm:flex">{title}</span>
    </td>
    <td>
      <span className="sm:flex">{description}</span>
    </td>

    <td>
      <span className="sm:flex sm:gap-2 sm:text-white">
        <strong
          className={twMerge(
            promotion_price !== null && "sm:line-through sm:text-medium-grey",
          )}
        >
          {currency(price || 0)}
        </strong>

        {promotion_price !== null && (
          <strong className="sm:no-underline sm:text-white">
            {currency(promotion_price)}
          </strong>
        )}
      </span>
    </td>

    <td>
      <span className="sm:flex">{active}</span>
    </td>
    <td>
      <span className="sm:border-r-[0.0625rem] sm:flex sm:rounded-r">
        {quantity_in_stock}
      </span>
    </td>
  </tr>
);
