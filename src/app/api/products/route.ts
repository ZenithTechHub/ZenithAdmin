import axios from "axios";
import { Product } from "@/lib/product/schema";

export type GETResponse = { data: Product[] } | null;

export type POSTBody = Product;

export type POSTResponse = {
  200: { data: Product };
  422: { errors: { title: string[] } };
};

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
  const body: POSTBody = await req.json();

  const response = await fetch(`${baseURL}/api/products`, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  const data = await response.json();

  return Response.json(data, {
    status: response.status,
    statusText: response.statusText,
  });
};
