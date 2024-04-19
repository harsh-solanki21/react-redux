import React, { useState } from "react";
import { useCreateProductMutation } from "../../features/rtkQuery/productSlice";
import { IProduct } from "./ProductList";

const ProductAdd = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const initialState: IProduct = {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
  };

  const [product, setProduct] = useState<IProduct>(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(product);
    setProduct(initialState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>New Product</h3>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          name="id"
          value={product.id}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <input type="submit" value="Add Product" disabled={isLoading} />
        {isLoading && " Loading..."}
      </div>
    </form>
  );
};

export default ProductAdd;
