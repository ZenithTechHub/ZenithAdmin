import axios from "axios";
import { GETResponse } from "@/app/api/products/route";
import { Product } from "@/lib/product/schema";

export type GETFunction = (id?: Product["id"]) => Promise<Product[] | null>;

// Usar a URL da aplicação
const baseURL = process.env.APP_BASE_URL;

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

export const APIProduct = {
  GET: GET,
};
