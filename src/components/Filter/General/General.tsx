import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Select } from "@/components/Select/Select";
import { TextField } from "@/components/TextField/TextField";
import {
  valuesSortAmount,
  valuesSortPrice,
  valuesSortStatus,
} from "@/hooks/useFilter/schema";
import { UseFilterObject } from "@/hooks/useFilter/useFilter";

export type GeneralProps = {
  control: UseFilterObject["control"];
};

export const General = ({ control }: GeneralProps) => (
  <section className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
    <h2 className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
      Filtrar por nome e ajustar ordenação
    </h2>

    <div
      className={twMerge(
        "sm:gap-3 sm:grid sm:grid-cols-2 sm:w-full",
        "mdB:grid-cols-4",
      )}
    >
      <TextField
        label="Filtrar nome do produto."
        placeholder="Filtrar nome do produto."
      />

      <Controller
        control={control}
        name="sort-price"
        render={({ field }) => (
          <Select
            {...field}
            label="Ordenar preço."
            options={valuesSortPrice}
            placeholder="Preço:"
          />
        )}
      />

      <Controller
        control={control}
        name="sort-status"
        render={({ field }) => (
          <Select
            {...field}
            label="Ordenar status."
            options={valuesSortStatus}
            placeholder="Status:"
          />
        )}
      />

      <Controller
        control={control}
        name="sort-amount"
        render={({ field }) => (
          <Select
            {...field}
            label="Ordenar quantidade."
            options={valuesSortAmount}
            placeholder="Quantidade:"
          />
        )}
      />
    </div>
  </section>
);
