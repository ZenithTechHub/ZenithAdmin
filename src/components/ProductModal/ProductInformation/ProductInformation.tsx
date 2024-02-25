"use client";

import React from "react";
import { useQuery } from "react-query";
import { twMerge } from "tailwind-merge";
import { Modal } from "@/components/Modal/Modal";
import { APIProduct } from "@/lib/product/api";
import { Product } from "@/lib/product/schema";
import ScrollContainer from "react-indiana-drag-scroll";
import { currency } from "@/utils/formater";
import Image from "next/image";
import PNGPlaceholder from "#/PNG/placeholder.png";

export type ProductInformationProps = {
  id: Product["id"];
};

export const ProductInformation = ({ id }: ProductInformationProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const { data, status } = useQuery("product", () => APIProduct.GET(id));

  return (
    <>
      <button
        className={twMerge(
          "sm:duration-standard sm:ease-standard sm:flex sm:h-fit sm:text-main-purple sm:transition-colors sm:w-fit",
          "sm:hover:text-main-purple-hover",
        )}
        onClick={() => setOpen(true)}
        type="button"
      >
        Mais Informações
      </button>

      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title="Produto"
      >
        <div>
          {status === "loading" && (
            <ScrollContainer className="sm:flex sm:h-full sm:items-center sm:justify-center sm:select-none sm:w-full">
              <span className="sm:loading sm:loading-ring sm:text-white sm:w-16"></span>
            </ScrollContainer>
          )}
          {status === "error" ||
            (data === null && (
              <ScrollContainer className="sm:flex sm:h-full sm:items-center sm:justify-center sm:select-none sm:w-full">
                <strong className="heading-l sm:text-white">
                  💔 Oops, something went wrong!
                </strong>
              </ScrollContainer>
            ))}
          {status === "success" && (
            <div className="sm:flex sm:gap-8">
              <Image
                className="sm:w-full sm:h-full"
                src={PNGPlaceholder}
                height={192}
                width={192}
                alt={data?.title}
              />
              <div className="sm:flex sm:flex-col sm:gap-6 sm:items-start sm:w-full">
                <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start sm:justify-center sm:relative sm:w-full">
                  <label className={twMerge("body-m", "sm:text-white")}>
                    Nome
                  </label>
                  <p
                    className={twMerge(
                      "body-l",
                      "sm:text-medium-grey sm:w-full",
                    )}
                  >
                    {data?.title || "Não definido"}
                  </p>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start sm:justify-center sm:relative sm:w-full">
                  <label className={twMerge("body-m", "sm:text-white")}>
                    Descrição
                  </label>
                  <p
                    className={twMerge(
                      "body-l",
                      "sm:text-medium-grey sm:w-full",
                    )}
                  >
                    {data?.description || "Não definido"}
                  </p>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start sm:justify-center sm:relative sm:w-full">
                  <label className={twMerge("body-m", "sm:text-white")}>
                    Preço
                  </label>
                  <p
                    className={twMerge(
                      "body-l",
                      "sm:text-medium-grey sm:w-full",
                    )}
                  >
                    {data?.price ? currency(data?.price) : "Não definido"}
                  </p>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start sm:justify-center sm:relative sm:w-full">
                  <label className={twMerge("body-m", "sm:text-white")}>
                    Preço de promoção
                  </label>
                  <p
                    className={twMerge(
                      "body-l",
                      "sm:text-medium-grey sm:w-full",
                    )}
                  >
                    {data?.promotion_price ?
                      currency(data?.promotion_price)
                    : "Não definido"}
                  </p>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-2 sm:items-start sm:justify-center sm:relative sm:w-full">
                  <label className={twMerge("body-m", "sm:text-white")}>
                    Quantidade
                  </label>
                  <p
                    className={twMerge(
                      "body-l",
                      "sm:text-medium-grey sm:w-full",
                    )}
                  >
                    {data?.quantity_in_stock || "Não definido"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
