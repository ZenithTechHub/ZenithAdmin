"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FormState,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FormFilter, schema } from "@/hooks/useFilter/schema";

type OnSubmit = (
  arg0: FormFilter,
  arg1: {
    pathname: string;
    router: AppRouterInstance;
    searchParams: ReadonlyURLSearchParams;
  },
) => Promise<void>;

export type UseFilter = (defaultValues?: FormFilter) => UseFilterObject;

export type UseFilterObject = {
  control: Control<FormFilter, any, FormFilter>;
  formState: FormState<FormFilter>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  register: UseFormRegister<FormFilter>;
  setValue: UseFormSetValue<FormFilter>;
  watch: UseFormWatch<FormFilter>;
};

export const useFilter: UseFilter = (defaultValues) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, formState, handleSubmit, register, setValue, watch } =
    useForm<FormFilter>({
      defaultValues: {
        category: defaultValues?.category || "",
        "category-query": defaultValues?.["category-query"] || "",
        "category-value": defaultValues?.["category-value"] || "",
        "sort-amount": defaultValues?.["sort-amount"] || "",
        "sort-price": defaultValues?.["sort-price"] || "",
        "sort-status": defaultValues?.["sort-status"] || "",
      },
      resolver: zodResolver(schema),
      shouldUnregister: true,
    });

  const memoOnSubmit = React.useCallback(
    handleSubmit((data) =>
      onSubmit(data, {
        pathname: pathname,
        router: router,
        searchParams: searchParams,
      }),
    ),
    [],
  );

  return {
    control,
    formState,
    onSubmit: memoOnSubmit,
    register,
    setValue,
    watch,
    handleSubmit,
  };
};

const onSubmit: OnSubmit = async (data, { pathname, router, searchParams }) => {
  const params = new URLSearchParams(searchParams.toString());

  for (const key in data) {
    const T = key as keyof FormFilter;

    params.set(T, data[T] || "");
  }

  router.push(pathname + "?" + params.toString(), { scroll: false });
};
