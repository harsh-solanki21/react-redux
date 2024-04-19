import { FC } from "react";
import { useGetAllProductsQuery } from "../../features/rtkQuery/productSlice";

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
}

const ProductList: FC = () => {
  const {
    data: products = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAllProductsQuery(11);

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>{(error as any).status}</div>;
  }

  return (
    <ul>
      {products.map((product: IProduct) => (
        <ol key={product.id}>
          <li>{product.id}</li>
          <li>{product.title}</li>
          <li>{product.price}</li>
          <li>{product.category}</li>
          <li>{product.description}</li>
          <br />
        </ol>
      ))}
    </ul>
  );
};

export default ProductList;
