import axios from "axios";
import { GETResponse, POSTBody, POSTResponse } from "@/app/api/products/route";
import { DELETEResponse } from "@/app/api/products/[id]/route";
import { Product } from "@/lib/product/schema";

export type DELETEFunction = (id: Product["id"]) => Promise<Product>;

export type GETFunction = (id?: Product["id"]) => Promise<Product[] | null>;

export type POSTFunction = (data: POSTBody) => Promise<Product>;

const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL;

const DELETE: DELETEFunction = async (id) => {
  const response = await fetch(`${baseURL}/api/products/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });

  const status = response.status as 200 | 409 | 422;

  if (status === 200) {
    const data = (await response.json()) as DELETEResponse["200"];
    return data.data;
  }

  if (status === 409) {
    const data = (await response.json()) as DELETEResponse["409"];
    throw new Error(data.errors.detail);
  }

  if (status === 422) {
    const data = (await response.json()) as DELETEResponse["422"];
    throw new Error(data.errors.detail);
  }

  throw new Error("FATAL at - product.api.client");
};

const GET: GETFunction = async () => {
  const response: { data: GETResponse } = { data: null };

  await axios
    .get<GETResponse>("/api/products", { baseURL: baseURL })
    .then((data) => (response.data = data.data))
    .catch((error) => {
      response.data = null;
      console.warn(error);
    });

  if (response.data === null) return null;

  return response.data.data;
};

const POST: POSTFunction = async (product) => {
  const response = await fetch(`${baseURL}/api/products`, {
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  const status = response.status as 200 | 422;

  if (status === 200) {
    const data = (await response.json()) as POSTResponse["200"];
    return data.data;
  }

  if (status === 422) {
    const data = (await response.json()) as POSTResponse["422"];
    throw new Error(data.errors.title.join(" - "));
  }

  throw new Error("FATAL at - product.api.client");
};

export const APIProduct = {
  DELETE: DELETE,
  GET: GET,
  POST: POST,
};
