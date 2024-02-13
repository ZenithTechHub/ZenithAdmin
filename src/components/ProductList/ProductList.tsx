import { twMerge } from "tailwind-merge";
import {
  Product,
  ProductProps,
} from "@/components/ProductList/Product/Product";
import { ScrollContainer } from "react-indiana-drag-scroll";

export type ProductListProps = {
  products: ProductProps[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <ScrollContainer className="sm:flex sm:h-full sm:select-none sm:w-full">
    <table className="sm:border-collapse sm:border-spacing-1 sm:h-fit sm:min-w-full sm:text-left sm:text-nowrap sm:text-white sm:w-fit">
      <thead
        className={twMerge(
          "heading-m",
          "sm:h-fit sm:sticky sm:top-0 sm:w-full",
          "sm:[&_span]:bg-dark-grey sm:[&_span]:border-[#828FA340] sm:[&_span]:border-b-[0.0625rem] sm:[&_span]:border-t-[0.0625rem] sm:[&_span]:flex-shrink-0 sm:[&_span]:h-10 sm:[&_span]:items-center sm:[&_span]:px-4",
          "sm:[&_th]:pb-1",
        )}
      >
        <tr className="sm:w-full">
          <th>
            <span className="sm:border-l-[0.0625rem] sm:flex sm:rounded-l">
              Banner
            </span>
          </th>
          <th>
            <span className="sm:flex">Nome</span>
          </th>
          <th>
            <span className="sm:flex">Descrição</span>
          </th>
          <th>
            <span className="sm:flex">Preço</span>
          </th>
          <th>
            <span className="sm:flex">Status</span>
          </th>
          <th>
            <span className="sm:border-r-[0.0625rem] sm:flex sm:rounded-r">
              Quantidade
            </span>
          </th>
        </tr>
      </thead>

      <tbody
        className={twMerge(
          "body-m",
          "sm:h-fit sm:w-full",
          "sm:[&_span]:bg-dark-grey sm:[&_span]:border-[#828FA340] sm:[&_span]:border-b-[0.0625rem] sm:[&_span]:border-t-[0.0625rem] sm:[&_span]:flex-shrink-0 sm:[&_span]:h-16 sm:[&_span]:items-center sm:[&_span]:px-4",
          "sm:[&_td]:py-1 sm:[&_td]:last:[&_tr]:pb-0",
        )}
      >
        {products.map((product, index) => (
          <Product
            {...product}
            key={index}
          />
        ))}
      </tbody>
    </table>
  </ScrollContainer>
);
