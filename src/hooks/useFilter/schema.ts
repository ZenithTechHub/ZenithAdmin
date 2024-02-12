import * as zod from "zod";

export type FormFilter = zod.infer<typeof schema>;

export const valuesSortAmount = [
  "",
  "Quantidade: maior.",
  "Quantidade: menor.",
] as const;
export const valuesSortPrice = ["", "Preço: maior.", "Preço: menor."] as const;
export const valuesSortStatus = [
  "",
  "Status: ativo.",
  "Status: inativo.",
] as const;

export const schema = zod.object({
  category: zod.string().optional(),
  "category-value": zod.string().optional(),
  "category-query": zod.string().optional(),
  "sort-amount": zod.enum(valuesSortAmount).optional(),
  "sort-price": zod.enum(valuesSortPrice).optional(),
  "sort-status": zod.enum(valuesSortStatus).optional(),
});
