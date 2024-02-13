import { Product } from "@/lib/schema";

export const products: Product[] = [
  {
    active: false,
    description: "",
    price: 500,
    promotion_price: 400,
    quantity_in_stock: 20,
    title: "Loren Ipsun 1",
  },
  {
    active: false,
    description: "",
    price: 500,
    promotion_price: null,
    quantity_in_stock: 20,
    title: "Loren Ipsun 2",
  },
  {
    active: true,
    description: "",
    price: 500,
    promotion_price: 400,
    quantity_in_stock: 20,
    title: "Loren Ipsun 3",
  },
  {
    active: true,
    description: "",
    price: 500,
    promotion_price: 400,
    quantity_in_stock: 20,
    title: "Loren Ipsun 4",
  },
];
