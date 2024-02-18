import * as zod from "zod";

export type FormCreateProduct = zod.infer<typeof schema>;

export const schema = zod.object({
  active: zod.boolean().optional(),
  description: zod.string().optional(),
  price: zod.coerce.string().min(1, "*Obrigatório"),
  promotion_price: zod.coerce.string().optional(),
  quantity_in_stock: zod.coerce.string().min(1, "*Obrigatório"),
  title: zod.string().min(1, "*Obrigatório"),
});
