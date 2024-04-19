import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../components/Product/ProductList";

export const apiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], number | null>({
      query: (dataLimit?: number | null) =>
        `/products?limit=${dataLimit || 10}`,
      providesTags: ["Products"],
    }),

    getProduct: builder.query({
      query: (productId: number) => `/products/${productId}`,
    }),

    createProduct: builder.mutation({
      query: (productData: IProduct) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: (productData: IProduct) => ({
        url: `albums/${productData.id}`,
        method: "PUT",
        body: productData,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
