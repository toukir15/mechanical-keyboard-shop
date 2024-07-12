import { baseApi } from "@/redux/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => ({
        url: `/carts`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    updateCart: builder.mutation({
      query: ({ type, id }) => {
        return {
          url: `/carts/${id}`,
          method: "PATCH",
          body: { type },
        };
      },
      invalidatesTags: ["cart"],
    }),
    addCart: builder.mutation({
      query: (data) => {
        return {
          url: `/carts`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation({
      query: (id) => {
        return {
          url: `/carts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = productApi;
