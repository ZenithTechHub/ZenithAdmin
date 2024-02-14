import axios from "axios";
import { GETResponse, POSTResponse } from "@/app/api/products/route";
import { Product } from "@/lib/product/schema";

export type GETFunction = (id?: Product["id"]) => Promise<Product[] | null>;

export type POSTFunction = (data: Omit<Product, "id">) => Promise<Product>;

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

const POST: POSTFunction = async (product) => {
  const response: { data: POSTResponse } = { data: null };

  await axios
    .post<POSTResponse>("/api/products", {
      baseURL: baseURL,
      data: product,
    })
    .then((data) => (response.data = data.data))
    .catch((error) => {
      response.data = null;
      console.warn(error);
    });

  if (response.data === null)
    throw new Error("ERROR: API - Product - POST Function");

  return response.data.data;
};

export const APIProduct = {
  GET: GET,
  POST: POST,
};
