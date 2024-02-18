"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import { Controller } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { Select } from "@/components/Select/Select";
import { TextField } from "@/components/TextField/TextField";
import { useCreateProduct } from "@/hooks/useCreateProduct/useCreateProduct";
import { APIProduct } from "@/lib/product/api";

export const NewProduct = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(APIProduct.POST, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("products");
    },
  });

  const { control, formState, handleSubmit, register, watch } =
    useCreateProduct();

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
        <PlusCircle className="sm:h-6 sm:w-6" />
      </button>

      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title="Novo Produto"
      >
        <form
          action=""
          className="sm:flex sm:flex-col sm:gap-6 sm:items-start sm:w-full"
          onSubmit={handleSubmit((data) => mutate(data as any))}
        >
          <TextField
            {...register("title")}
            error={formState.errors.title?.message}
            label="Nome do Produto"
            hideLabel={false}
            placeholder="e.g. Flores"
          />

          <TextField
            {...register("description")}
            error={formState.errors.description?.message}
            hideLabel={false}
            label="Descrição"
            placeholder="e.g. Oh, flores azuis, tão misteriosas."
          />

          <TextField
            {...register("price")}
            error={formState.errors.price?.message}
            hideLabel={false}
            label="Preço"
            placeholder="e.g. R$ 500"
            step={1}
            type="number"
          />

          <TextField
            {...register("promotion_price")}
            error={formState.errors.promotion_price?.message}
            hideLabel={false}
            label="Preço de Promoção"
            placeholder="e.g. R$ 250"
            step={1}
            type="number"
          />

          <TextField
            {...register("quantity_in_stock")}
            error={formState.errors.quantity_in_stock?.message}
            hideLabel={false}
            label="Quantidade"
            placeholder="e.g. 20"
            step={1}
            type="number"
          />

          <Button
            className="sm:w-full"
            color="PRIMARY"
            size="SMALL"
            type="submit"
          >
            Criar Produto
          </Button>
        </form>
      </Modal>
    </>
  );
};
