"use client";

import React from "react";
import { Button } from "@/components/Button/Button";
import { Categories } from "@/components/Filter/Categories/Categories";
import { General } from "@/components/Filter/General/General";
import { useFilter } from "@/hooks/useFilter/useFilter";

export type FilterProps = {
  searchParams: {};
};

export const Filter = ({ searchParams }: FilterProps) => {
  const { control, onSubmit, register, setValue, watch } =
    useFilter(searchParams);

  return (
    <form
      autoComplete="off"
      className="sm:flex sm:flex-col sm:gap-3 sm:w-full"
      onSubmit={onSubmit}
    >
      <General control={control} />

      <section className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
        <h2 className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
          Filtrar por categorias.
        </h2>

        <Categories
          control={control}
          register={register}
          setValue={setValue}
          watch={watch}
        />
      </section>

      <Button
        className="sm:ml-auto"
        color="PRIMARY"
        size="SMALL"
        type="submit"
      >
        Filtrar
      </Button>
    </form>
  );
};
