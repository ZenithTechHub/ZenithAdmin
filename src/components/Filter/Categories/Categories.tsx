"use client";

import React from "react";
import { RadioGroup, Transition } from "@headlessui/react";
import { BookA, ChevronDown } from "lucide-react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { Controller } from "react-hook-form";
import color from "string-to-color";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button/Button";
import { Combobox } from "@/components/Combobox/Combobox";
import { UseFilterObject } from "@/hooks/useFilter/useFilter";

export type CategoriesProps = {
  control: UseFilterObject["control"];
  register: UseFilterObject["register"];
  setValue: UseFilterObject["setValue"];
  watch: UseFilterObject["watch"];
};

const mock = [
  "Jakobe Vincent",
  "Nadine Watt",
  "Carl Barrow",
  "Nichole Crocker",
  "Jay Proffitt",
  "Juliana Hartley",
  "Darcy Edgar",
  "Tyron Koenig",
  "Trevon Francis",
  "Tabatha Thayer",
  "Amina Salter",
  "Terrence Salas",
  "Camryn Fisher",
  "Martha Kozlowski",
  "Jaida Geary",
  "Shanya Dix",
  "Teresa Todd",
  "Kaili Cole",
  "Cesar Moffett",
  "Chad Kaminski",
];

export const Categories = ({
  control,
  register,
  setValue,
  watch,
}: CategoriesProps) => {
  const category = watch("category") || "";
  const query = watch("category-query") || "";
  const value = watch("category-value") || "";

  const selection =
    query === "" ? mock : (
      mock.filter(
        (item) =>
          item.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          item === category,
      )
    );

  React.useEffect(() => {
    setValue("category-query", value);
  }, [value]);

  return (
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:items-start sm:gap-3 sm:w-full",
        "md:flex-row md:items-center",
      )}
    >
      <Controller
        control={control}
        name="category-value"
        render={({ field }) => (
          <Combobox
            className="md:max-w-80"
            {...field}
          >
            <Combobox.Label>Filtrar Lista de Categorias.</Combobox.Label>

            <div className="sm:flex sm:items-center sm:relative sm:w-full">
              <Combobox.Input
                {...register("category-query")}
                placeholder="Filtrar selos de categorias."
              />

              <Combobox.Button className="sm:absolute sm:right-4">
                {({ open }) => (
                  <ChevronDown
                    className={twMerge("sm:h-6 sm:text-main-purple sm:w-6")}
                  />
                )}
              </Combobox.Button>
            </div>

            <Transition
              as={React.Fragment}
              enter={twMerge(
                "sm:duration-standard sm:ease-standard sm:transition-all",
              )}
              enterFrom={twMerge("sm:opacity-0 sm:scale-75")}
              enterTo={twMerge("sm:opacity-100 sm:scale-100")}
              leave={twMerge(
                "sm:duration-standard sm:ease-standard sm:transition-all",
              )}
              leaveFrom={twMerge("sm:opacity-100 sm:scale-100")}
              leaveTo={twMerge("sm:opacity-0 sm:scale-75")}
            >
              <Combobox.Options className="sm:z-10">
                <Combobox.Option value={query}>
                  Categoria: {query}
                </Combobox.Option>

                {selection
                  .filter((item) => item !== category)
                  .map((person, index) => (
                    <Combobox.Option
                      key={index}
                      value={person}
                    >
                      {person}
                    </Combobox.Option>
                  ))}
              </Combobox.Options>
            </Transition>
          </Combobox>
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <RadioGroup
            className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full"
            {...field}
          >
            <RadioGroup.Label className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
              Filtrar por Categoria.
            </RadioGroup.Label>

            <ScrollContainer className="sm:flex sm:gap-3 sm:items-center sm:select-none sm:w-full">
              <RadioGroup.Option
                as={Button}
                className={twMerge(
                  "sm:bg-transparent sm:border-main-purple sm:border-[0.0625rem] sm:!duration-200 sm:!ease-in-out sm:flex sm:flex-shrink-0 sm:gap-4 sm:items-center sm:!transition-colors",
                  "sm:hover:bg-transparent sm:ui-checked:bg-main-purple",
                )}
                value=""
                size="SMALL"
              >
                <BookA
                  className="sm:h-4 sm:w-4"
                  style={{ color: color(category) }}
                />
                Todas as Categorias
              </RadioGroup.Option>

              {selection.map((category, index) => (
                <RadioGroup.Option
                  as={Button}
                  className={twMerge(
                    "sm:bg-transparent sm:border-main-purple sm:border-[0.0625rem] sm:!duration-200 sm:!ease-in-out sm:flex sm:flex-shrink-0 sm:gap-4 sm:items-center sm:!transition-colors",
                    "sm:hover:bg-transparent sm:ui-checked:bg-main-purple",
                  )}
                  key={index}
                  value={category}
                  size="SMALL"
                >
                  <BookA
                    className="sm:h-4 sm:w-4"
                    style={{ color: color(category) }}
                  />

                  {category}
                </RadioGroup.Option>
              ))}
            </ScrollContainer>
          </RadioGroup>
        )}
      />
    </div>
  );
};
