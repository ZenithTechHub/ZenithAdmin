"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FormState,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FormCreateProduct, schema } from "@/hooks/useCreateProduct/schema";

export type UseCreateProduct = () => UseCreateProductObject;

export type UseCreateProductObject = {
  control: Control<FormCreateProduct, any, FormCreateProduct>;
  formState: FormState<FormCreateProduct>;
  handleSubmit: UseFormHandleSubmit<FormCreateProduct, FormCreateProduct>;
  register: UseFormRegister<FormCreateProduct>;
  setValue: UseFormSetValue<FormCreateProduct>;
  watch: UseFormWatch<FormCreateProduct>;
};

export const useCreateProduct: UseCreateProduct = () => {
  const { control, formState, handleSubmit, register, setValue, watch } =
    useForm<FormCreateProduct>({
      defaultValues: {
        active: true,
        description: "",
        price: "",
        promotion_price: "",
        quantity_in_stock: "",
        title: "",
      },
      resolver: zodResolver(schema),
      shouldUnregister: true,
    });

  return {
    control,
    formState,
    handleSubmit,
    register,
    setValue,
    watch,
  };
};
