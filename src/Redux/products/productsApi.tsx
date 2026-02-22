import type { CreateProductPayload, Product, UpdateProductPayload } from "../../types/product";
import type { ProductQueryParams } from "../../types/query";
import baseApi from "../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    /* =======================GET ALL PRODUCTS======================= */
    getProducts: build.query<Product[], ProductQueryParams>({
      query: ({ offset = 0, limit = 10 }) => ({
        url: `/products`,
        method: "GET",
        params: { offset, limit },
      }),
      providesTags: ["products"],
    }),

    /* =======================GET PRODUCT BY ID======================= */
    getProductById: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),

    /* ======================= GET PRODUCT BY SLUG======================= */
    getProductBySlug: build.query<Product, string>({
      query: (slug) => `/products/slug/${slug}`,
      providesTags: ["products"],
    }),

    /* =======================CREATE PRODUCT======================= */
    createProduct: build.mutation<Product, CreateProductPayload>({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    /* =======================UPDATE PRODUCT======================= */
    updateProduct: build.mutation<Product, UpdateProductPayload>({
      query: ({ id, ...body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags:["products"]
    }),

    /* =======================DELETE PRODUCT======================= */
    deleteProduct: build.mutation<boolean, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductBySlugQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;