import { baseApi } from "@/redux/api/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getCarts: builder.query({
    //   query: () => ({
    //     url: `/carts`,
    //     method: "GET",
    //   }),
    //   providesTags: ["cart"],
    // }),

    addPaymentSession: builder.mutation({
      query: ({ products, customer }) => ({
        url: "/payments/create-checkout-session",
        method: "POST",
        body: { products, customer },
      }),
    }),
  }),
});

export const { useAddPaymentSessionMutation } = paymentApi;
