import type { Category, Product } from "../../types/product";
import baseApi from "../api/baseApi";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all categories
    getCategories: builder.query<Category[], void>({
      query: () => `categories`,
      providesTags: ["categories"],
    }),
   

    // Get category by ID
    getCategoryById: builder.query<Category, number>({
      query: (id) => `categories/${id}`,
      providesTags: ["categories"],
    }),

    // Get category by slug
    getCategoryBySlug: builder.query<Category, string>({
      query: (slug) => `categories/slug/${slug}`,
      providesTags: ["categories"],
    }),

    // Create a new category
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({
        url: 'categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: ["categories"],
    }),

    // Update a category by ID
    updateCategory: builder.mutation<Category, { id: number; body: Partial<Category> }>({
      query: ({ id, body }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ["categories"],
    }),

    // Delete a category by ID
    deleteCategory: builder.mutation<boolean, number>({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["categories"],
    }),

    // Get all products by category ID
    getProductsByCategory: builder.query<Product[], number>({
      query: (id) => `categories/${id}/products`,
      providesTags: ["categories"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetCategoryBySlugQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetProductsByCategoryQuery,
} = categoriesApi;