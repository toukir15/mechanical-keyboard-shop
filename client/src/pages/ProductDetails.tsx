import { CiStar } from "react-icons/ci";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import {
  useAddCartMutation,
  useGetCartsQuery,
} from "@/redux/features/cart/cartApi";

export default function ProductDetails() {
  const url = window.location.href;
  const parts = url.split("/");
  const id = parts[parts.length - 1];
  const [addCart] = useAddCartMutation();
  const { data: productData, isLoading: isProductLoading } =
    useGetProductQuery(id);
  const { data: cartsData, isLoading: isCartLoading } =
    useGetCartsQuery(undefined);

  const cart = cartsData?.data.find(
    (data: { product: string }) => data.product === id
  );
  const [counter, setCounter] = useState(0);

  if (isProductLoading || isCartLoading) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = (id: string) => {
    const cartData = { product: id, cartQuantity: counter };
    addCart(cartData);
  };

  return (
    <div className="text-white py-40  px-20 ">
      <div className="flex">
        <div className="flex-1 flex justify-center">
          <img src={productData?.data.img} className="w-[75%]" alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-4xl leading-[60px]">{productData?.data.name}</h3>
          <h6 className="mt-6 text-2xl">Brand: {productData?.data.brand}</h6>
          <h6 className="mt-6 text-2xl">
            Available Quantiy: {productData?.data.availableQuantity}
          </h6>
          <h6 className="mt-6 text-2xl">Price: ${productData?.data.price}</h6>
          <h6 className="mt-6 text-2xl flex">
            <p>Rattings: </p>
            <Rating
              className="relative top-1 left-2"
              initialRating={productData?.data.rating}
              readonly
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar className="text-orange-600" />}
            />
          </h6>
          <div className="flex mt-8 gap-6">
            <div className="flex gap-4 border py-3 justify-between px-4 w-[19%] text-xl ">
              <button
                disabled={counter <= 1}
                onClick={() => setCounter(counter - 1)}
                className={`${
                  counter <= 1
                    ? "text-orange-200"
                    : "text-orange-500 hover:text-orange-600"
                }  transition duration-100 pr-1 `}
              >
                <FiMinus />
              </button>
              <p>{counter}</p>
              <button
                disabled={
                  counter == productData?.data.availableQuantity ||
                  cart?.inStock - counter === 0
                }
                onClick={() => setCounter(counter + 1)}
                className={` ${
                  counter == productData?.data.availableQuantity ||
                  cart?.inStock - counter === 0
                    ? "text-orange-200"
                    : "text-orange-500 hover:text-orange-600"
                }  transition duration-100 pl-1`}
              >
                <GoPlus />
              </button>
            </div>
            <Link
              onClick={() => handleAddToCart(productData?.data._id)}
              to={"/cart"}
              className=" px-4 w-[50%] bg-orange-500 hover:bg-orange-600 transition duration-150 text-black font-medium  flex justify-center items-center "
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <h5 className="bg-[#2F1B11] w-fit py-1  text-orange-600 text-2xl px-5 mt-20">
        Description
      </h5>
      <p className="mt-6 leading-8">{productData?.data.description}</p>
    </div>
  );
}
