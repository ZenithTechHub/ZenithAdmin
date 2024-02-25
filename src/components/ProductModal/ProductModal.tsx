import { DeleteProduct } from "@/components/ProductModal/DeleteProduct/DeleteProduct";
import { NewProduct } from "@/components/ProductModal/NewProduct/NewProduct";
import { ProductInformation } from "./ProductInformation/ProductInformation";

export const ProductModal = Object.assign(() => null, {
  DeleteProduct: DeleteProduct,
  NewProduct: NewProduct,
  ProductInformation: ProductInformation,
});
