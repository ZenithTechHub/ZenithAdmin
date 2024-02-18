import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { DialogContext } from "@/contexts/DialogContext/DialogContext";
import { APIProduct } from "@/lib/product/api";
import { Product } from "@/lib/product/schema";

export type DeleteProductProps = {
  id: Product["id"];
};

export const DeleteProduct = ({ id }: DeleteProductProps) => {
  const { "modal-delete-product": modalDeleteProduct } =
    React.useContext(DialogContext);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(APIProduct.DELETE, {
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => queryClient.invalidateQueries("products"),
  });

  return (
    <>
      <button
        className={twMerge(
          "body-l",
          "sm:duration-standard sm:ease-standard sm:flex sm:h-fit sm:w-fit sm:text-red sm:transition-colors",
          "sm:hover:text-red-hover",
        )}
        onClick={() => modalDeleteProduct.setOpen(true)}
      >
        Excluir Produto
      </button>

      <Modal
        description="⚠️ Perigo, essa ação é irreversível."
        onClose={() => modalDeleteProduct.setOpen(false)}
        open={modalDeleteProduct.open}
        title="Excluir Produto"
      >
        <div className="sm:flex sm:gap-3 sm:items-center sm:justify-end sm:w-full">
          <Button
            color="SECONDARY"
            onClick={() => modalDeleteProduct.setOpen(false)}
            size="SMALL"
          >
            Cancelar
          </Button>

          <Button
            color="DESTRUCTIVE"
            onClick={() => mutate(id)}
            size="SMALL"
          >
            Excluir
          </Button>
        </div>
      </Modal>
    </>
  );
};
