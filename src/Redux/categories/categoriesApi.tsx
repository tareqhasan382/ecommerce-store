import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Category, Product } from '../../types/product';


export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  tagTypes: ['Category', 'Product'],
  endpoints: (builder) => ({
    // Get all categories
    getCategories: builder.query<Category[], void>({
      query: () => `categories`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Category' as const, id })), { type: 'Category', id: 'LIST' }]
          : [{ type: 'Category', id: 'LIST' }],
    }),

    // Get category by ID
    getCategoryById: builder.query<Category, number>({
      query: (id) => `categories/${id}`,
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),

    // Get category by slug
    getCategoryBySlug: builder.query<Category, string>({
      query: (slug) => `categories/slug/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Category', id: result?.id }],
    }),

    // Create a new category
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({
        url: 'categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Category', id: 'LIST' }],
    }),

    // Update a category by ID
    updateCategory: builder.mutation<Category, { id: number; body: Partial<Category> }>({
      query: ({ id, body }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Category', id }],
    }),

    // Delete a category by ID
    deleteCategory: builder.mutation<boolean, number>({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Category', id: 'LIST' }],
    }),

    // Get all products by category ID
    getProductsByCategory: builder.query<Product[], number>({
      query: (id) => `categories/${id}/products`,
      providesTags: (result, error, id) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Product' as const, id }))]
          : [],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetCategoryBySlugQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetProductsByCategoryQuery,
} = categoriesApi;