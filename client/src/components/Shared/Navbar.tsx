import { Link, useNavigate } from "react-router-dom";
import CartSvg from "../svg/CartSvg";
import keyboard from "/images/keyboard.png";
import { useGetCartsQuery } from "@/redux/features/cart/cartApi";
import { TCart } from "@/pages/Cart";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data: cartsData } = useGetCartsQuery(undefined);
  const totalItems = cartsData?.data.reduce(
    (accumulator: number, value: TCart) => {
      return accumulator + value.cartQuantity;
    },
    0
  );
  return (
    <div className="bg-[#000000ef] py-[14px]  md:py-[22px] px-4 lg:px-6 sticky top-0 z-50 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center lg:px-12">
          {/* Logo  */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div>
              <img
                src={keyboard}
                className="w-8 h-8 relative bottom-1"
                alt=""
              />
            </div>
            <h3 className="text-[20px] lg:text-[26px] text-white ">
              KeyGenius
            </h3>
          </button>
          {/* navlink  */}
          <div className="text-white font-medium  space-x-12 hidden lg:block">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/contact-us"}>Contact Us</Link>
          </div>
          {/* dashboard and cart btn  */}
          <div className="font-medium  flex  items-center gap-5 md:gap-6">
            <Link className="hidden md:block" to={"/dashboard/product-list"}>
              <button className="bg-white py-2  px-4 rounded text-primary hover:bg-[#D5D5D5] transition duration-100 ">
                Dashboard
              </button>
            </Link>
            <Link to={"/cart"} className="relative">
              <CartSvg height={"h-7"} width={"w-7"} color={"white"} />
              {totalItems > 0 && (
                <div className="bg-[#d5d5d5] h-5 w-5 rounded-full absolute flex justify-center items-center -top-2 -right-2">
                  <span className="text-[12px] text-orange-600">
                    {totalItems}
                  </span>
                </div>
              )}
            </Link>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="bg-[#121212] p-2 md:hidden rounded-full"
            >
              <FiMenu className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav link  */}
      {isNavOpen && (
        <div className="text-white bg-black absolute top-[68px] space-y-3 pr-12 left-0 flex flex-col p-4">
          <Link onClick={() => setIsNavOpen(false)} to={"/"}>
            Home
          </Link>
          <Link onClick={() => setIsNavOpen(false)} to={"/products"}>
            Products
          </Link>
          <Link onClick={() => setIsNavOpen(false)} to={"/about-us"}>
            About Us
          </Link>
          <Link onClick={() => setIsNavOpen(false)} to={"/contact-us"}>
            Contact Us
          </Link>
          <Link
            onClick={() => setIsNavOpen(false)}
            to={"/dashboard/product-list"}
          >
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
