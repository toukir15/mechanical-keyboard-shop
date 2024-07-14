/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useGetCartsQuery } from "@/redux/features/cart/cartApi";
import { useAddPaymentSessionMutation } from "@/redux/features/payment/paymentApi";
import { useForm } from "react-hook-form";
import { TCart } from "./Cart";
import { useState } from "react";
import Loading from "@/components/loading/Loading";
// import { useStripe } from "@stripe/react-stripe-js";

export default function Checkout() {
  const { data: cartsData } = useGetCartsQuery(undefined);
  const [addPaymentSession] = useAddPaymentSessionMutation();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  // const stripe = useStripe();

  const totalPrice = cartsData?.data.reduce(
    (accumulator: number, value: TCart) => {
      return accumulator + value.totalPrice;
    },
    0
  );

  const totalItems = cartsData?.data.reduce(
    (accumulator: number, value: TCart) => {
      return accumulator + value.cartQuantity;
    },
    0
  );

  const { register, handleSubmit } = useForm();
  const handleCheckoutForm = async (data: any) => {
    setIsCheckoutLoading(true);
    try {
      const response = await addPaymentSession({
        products: cartsData?.data,
        customer: data,
      });
      // const { sessionId } = response.data.data;
      // await stripe
      //   ?.redirectToCheckout({ sessionId })
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
      window.location.href = response.data.data.url;
      setIsCheckoutLoading(false);
    } catch (err) {
      setIsCheckoutLoading(false);
      console.log(err);
    }
  };

  if (isCheckoutLoading) {
    return <Loading />;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleCheckoutForm)}
        className="text-white lg:flex gap-8 px-4 lg:px-12 mb-16 mt-12 container mx-auto min-h-[calc(100vh-110px)]"
      >
        <div className="lg:w-[60%]">
          <div className="mt-8 border border-gray-500 rounded-lg py-4 lg:py-6 px-4">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <Input
                required
                {...register("firstName")}
                style={{ background: "#D1D5DB", color: "black" }}
                type="firstName"
                placeholder="First name"
              />
              <Input
                required
                {...register("lastName")}
                style={{ background: "#D1D5DB", color: "black" }}
                type="lastName"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-2 lg:mt-4">
              <Input
                required
                {...register("email")}
                style={{ background: "#D1D5DB", color: "black" }}
                type="email"
                placeholder="Email"
              />
              <Input
                required
                {...register("number")}
                style={{ background: "#D1D5DB", color: "black" }}
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className=" mt-2 lg:mt-4">
              <Input
                required
                {...register("deliveryAddress")}
                style={{ background: "#D1D5DB", color: "black" }}
                type="address"
                placeholder="Delivery address"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] border h-fit p-4 mt-6 lg:mt-8 rounded-lg border-gray-500 ">
          <p className="text-xl font-medium">Order Summary</p>
          <div className="flex justify-between mt-2">
            <p>Subtotal ({totalItems} items)</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Shipping fee (Free)</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button
            type="submit"
            className="uppercase bg-orange-600 hover:bg-orange-700 transition duration-150 w-full mt-6 py-3 text-black font-medium text-sm "
          >
            Place Order
          </button>
        </div>
      </form>
    </>
  );
}
