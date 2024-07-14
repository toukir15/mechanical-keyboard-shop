import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import {
  useAddCartMutation,
  useGetCartsQuery,
} from "@/redux/features/cart/cartApi";
import { Rating } from "@smastrom/react-rating";
import Loading from "@/components/loading/Loading";

export default function ProductDetails() {
  const navigate = useNavigate();
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
    return <Loading />;
  }

  const handleAddToCart = async (id: string) => {
    const cartData = { product: id, cartQuantity: counter };
    await addCart(cartData);
    navigate("/cart");
  };

  return (
    <div className="text-white lg:py-40 lg:px-20 mb-12 lg:mb-0 container mx-auto px-4">
      <div className="lg:flex">
        <div className="flex-1 flex justify-center">
          <img src={productData?.data.img} className="lg:w-[75%]" alt="" />
        </div>
        <div className="flex-1">
          <h3 className=" text-2xl lg:text-4xl mt-2 lg:mt-0 lg:leading-[60px]">
            {productData?.data.name}
          </h3>
          <h6 className="lg:mt-6 mt-3 text-xl lg:text-2xl">
            Brand: {productData?.data.brand}
          </h6>
          <h6 className="lg:mt-6 text-xl lg:text-2xl">
            Available Quantiy: {productData?.data.availableQuantity}
          </h6>
          <h6 className="lg:mt-6 text-xl lg:text-2xl">
            Price: ${productData?.data.price}
          </h6>
          <h6 className="lg:mt-6 text-xl lg:text-2xl flex">
            <p>Rattings: </p>

            <Rating
              value={productData?.data.rating}
              style={{ maxWidth: 100 }}
              readOnly={true}
            />
          </h6>
          <div className="flex mt-4 lg:mt-8 gap-4 lg:gap-6">
            <div className="flex gap-4 border py-2 lg:py-3 justify-between px-4 lg:w-[19%] text-xl ">
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
            <button
              onClick={() => handleAddToCart(productData?.data._id)}
              className=" px-4 w-[50%] bg-orange-500 hover:bg-orange-600 transition duration-150 text-black font-medium  flex justify-center items-center "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h5 className="bg-[#2F1B11] w-fit py-1  text-orange-600 text-xl lg:text-2xl px-5 mt-10 lg:mt-20">
        Description
      </h5>
      <p className="mt-3 lg:mt-6 leading-6 text-justify lg:text-left lg:leading-8">
        {productData?.data.description}
      </p>
    </div>
  );
}
