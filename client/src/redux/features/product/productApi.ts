import { baseApi } from "@/redux/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (payload) => {
        return {
          url: `/products`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["products", "product"],
    }),
    editProduct: builder.mutation({
      query: (payload) => {
        return {
          url: `/products`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["products", "product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products", "product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useEditProductMutation,
} = productApi;
