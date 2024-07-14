import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  useDeleteCartMutation,
  useGetCartsQuery,
  useUpdateCartMutation,
} from "@/redux/features/cart/cartApi";
import TransparentLoading from "@/components/loading/TransparentLoading";

export type TCart = {
  _id: string;
  cartQuantity: number;
  inStock: number;
  totalPrice: number;
  name: string;
  brand: string;
  price: number;
  img: string;
};

const ACTION_TYPES = {
  increment: "increment",
  decrement: "decrement",
};

export default function Cart() {
  const { data: cartsData } = useGetCartsQuery(undefined);
  const [updateCart, { isLoading: isUpdateCartLoading }] =
    useUpdateCartMutation();
  const [deleteCart, { isLoading: isDeleteCartLoading }] =
    useDeleteCartMutation();

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

  const handleCartQuantity = (type: string, id: string) => {
    updateCart({ type, id });
  };

  const handleDeleteCart = (id: string) => {
    deleteCart(id);
  };

  return (
    <>
      <div className="text-white lg:flex gap-8 px-4 lg:px-12 mb-16 min-h-[calc(100vh-120px)] container mx-auto">
        <div className="w-full lg:w-[60%]">
          {cartsData?.data.map((cart: TCart) => {
            const { img, name, brand, inStock, price, cartQuantity, _id } =
              cart;
            return (
              <div className="lg:flex gap-4 items-center w-full space-x-2 mt-8 border relative border-gray-500 rounded-lg lg:py-6 py-3 lg:px-4 pr-4 lg:pr-0 ">
                <div className="lg:w-[10%] px-2 lg:px-0">
                  <img src={img} className="h-20 w-20 rounded" alt="" />
                </div>
                <div className="lg:w-[50%] mt-1">
                  <p>{name}</p>
                  <p>Brand: {brand}</p>
                  <p className="lg:block hidden" style={{ margin: "0px" }}>
                    Price: ${price}
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    Only {inStock} item(s) in stock
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="flex flex-col items-center gap-4 lg:w-[10%]">
                    <p className="text-orange-600">${price}</p>
                    <button onClick={() => handleDeleteCart(_id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex gap-5 justify-end lg:justify-start lg:pl-10 relative bottom-4">
                    <button
                      onClick={() =>
                        handleCartQuantity(ACTION_TYPES.decrement, _id)
                      }
                      disabled={cartQuantity === 1}
                      className={` ${
                        cartQuantity === 1 ? "bg-orange-300" : "bg-orange-600"
                      } text-xl  p-[3px] rounded-[2px]`}
                    >
                      <FiMinus />
                    </button>
                    <p>{cartQuantity}</p>
                    <button
                      onClick={() =>
                        handleCartQuantity(ACTION_TYPES.increment, _id)
                      }
                      disabled={inStock === 0}
                      className={` ${
                        inStock === 0 ? "bg-orange-300" : "bg-orange-600"
                      } text-xl  p-[3px] rounded-[2px]`}
                    >
                      <GoPlus />
                    </button>
                  </div>
                </div>

                {/* mobile delete button  */}
                <button
                  className="absolute top-4 right-4 lg:hidden"
                  onClick={() => handleDeleteCart(_id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
          {!cartsData?.data.length && (
            <h3 className=" text-2xl font-medium text-center mt-40 text-gray-400">
              Carts data comming soon!
            </h3>
          )}
        </div>
        <div className="lg:w-[30%] border h-fit p-4 lg:mt-8 mt-4 rounded-lg border-gray-500 ">
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
          <Link to={"/checkout"}>
            <button className="uppercase bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mt-6 py-3 text-black font-medium text-sm ">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      {(isDeleteCartLoading || isUpdateCartLoading) && <TransparentLoading />}
    </>
  );
}
