import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FormFilter, schema } from "@/hooks/useFilter/schema";

export type UseFilter = () => UseFilterObject;

export type UseFilterObject = {
  control: Control<FormFilter, any, FormFilter>;
  register: UseFormRegister<FormFilter>;
  setValue: UseFormSetValue<FormFilter>;
  watch: UseFormWatch<FormFilter>;
};

export const useFilter: UseFilter = () => {
  const { control, register, setValue, watch } = useForm<FormFilter>({
    defaultValues: {
      category: "",
      "category-value": "",
      "category-query": "",
    },
    resolver: zodResolver(schema),
    shouldUnregister: true,
  });

  return {
    control,
    register,
    setValue,
    watch,
  };
};
