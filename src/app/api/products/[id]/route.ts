import { Product } from "@/lib/product/schema";

const baseURL = process.env.API_BASE_URL;

export type DELETEResponse = {
  200: { data: Product };
  409: { errors: { detail: string } };
  422: { errors: { detail: string } };
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = params;

  const response = await fetch(`${baseURL}/api/products/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });

  const data = await response.json();

  return Response.json(data, {
    status: response.status,
    statusText: response.statusText,
  });
};
