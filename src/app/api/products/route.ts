import axios from "axios";
import { Product } from "@/lib/product/schema";

export type GETResponse = { data: Product[] } | null;

export type POSTResponse = { data: Product } | null;

// Usar a URL da API
const baseURL = process.env.API_BASE_URL;

export const GET = async () => {
  const response: { data: GETResponse } = { data: null };

  await axios
    .get<GETResponse>("/api/products", { baseURL: baseURL })
    .then((data) => (response.data = data.data))
    .catch((error) => {
      response.data = null;
      console.warn(error);
    });

  if (response.data === null) return new Response("", { status: 500 });

  return Response.json(response.data);
};

export const POST = async (req: Request) => {
  const response: { data: POSTResponse } = { data: null };

  const body: { data: Product } = await req.json();

  console.log(body.data);

  await axios
    .post<POSTResponse>("/api/products", {
      baseURL: baseURL,
      data: { title: "caixadepapelao", price: "9999" },
      headers: { "Content-Type": "application/json" },
    })
    .then((data) => {
      response.data = data.data;
    })
    .catch((error) => {
      response.data = null;
      console.warn(error);
    });

  if (response.data === null) return new Response("", { status: 500 });

  return Response.json(response.data);
};
