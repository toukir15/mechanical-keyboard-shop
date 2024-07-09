import { Link } from "react-router-dom";
import CartSvg from "../svg/CartSvg";
import keyboard from "../../../public/images/keyboard.png";

export default function Navbar() {
  return (
    <div className="  bg-primary py-6 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-12">
          {/* Logo  */}
          <div className="flex items-center gap-2">
            <div>
              <img
                src={keyboard}
                className="w-8 h-8 relative bottom-1"
                alt=""
              />
            </div>
            <h3 className="text-[28px] text-white ">KeyGenius</h3>
          </div>
          {/* navlink  */}
          <div className="text-white font-medium text-lg flex gap-12">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/contact-us"}>Contact Us</Link>
          </div>
          {/* dashboard and cart btn  */}
          <div className="font-medium text-lg flex  items-center gap-6">
            <Link to={"/"}>
              <button className="bg-white py-2 px-4 rounded text-primary">
                Dashboard
              </button>
            </Link>
            <Link to={"/"} className="relative">
              <CartSvg height={"h-8"} width={"w-8"} color={"white"} />
              <div className="bg-white h-5 w-5 rounded-full absolute flex justify-center items-center -top-2 -right-2">
                <span className="text-[10px] text-primary">27</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
