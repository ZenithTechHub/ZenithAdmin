import * as zod from "zod";

export type FormFilter = zod.infer<typeof schema>;

export const schema = zod.object({
  category: zod.string(),
  "category-value": zod.string(),
  "category-query": zod.string(),
});
