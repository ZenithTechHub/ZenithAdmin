type ProductItem = {
  category: string;
  count: number;
  name: string;
  price: number;
  status: string;
};

export type ProductListProps = {
  products: ProductItem[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <>
    {products.map((product, key) => (
      <ul>
        <li key={key}></li>
      </ul>
    ))}
  </>
);
