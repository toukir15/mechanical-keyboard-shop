import { CiStar } from "react-icons/ci";
import Rating from "react-rating";
import imace from "../../public/images/imace.webp";
import { FaStar } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function ProductDetails() {
  return (
    <div className="text-white py-40  px-20 ">
      <div className="flex">
        <div className="flex-1 flex justify-center">
          <img src={imace} className="w-[75%]" alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-4xl leading-[60px]">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </h3>
          <h5 className="bg-[#2F1B11] w-fit py-1 mt-4 text-orange-600 text-2xl px-5">
            iMICE
          </h5>
          <h6 className="mt-6 text-2xl">Available Quantiy: 10</h6>
          <h6 className="mt-6 text-2xl">Price: $100</h6>
          <h6 className="mt-6 text-2xl flex">
            <p>Rattings: </p>{" "}
            <Rating
              className="relative top-1 left-2"
              initialRating={2}
              readonly
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar className="text-orange-600" />}
            />
          </h6>
          <div className="flex mt-8 gap-6">
            <div className="flex gap-4 border py-3 justify-between px-4 w-[19%] text-xl ">
              <button className="text-orange-500 hover:text-orange-600 transition duration-100 pr-1 ">
                <FiMinus />
              </button>
              <p>1</p>
              <button className="text-orange-500 hover:text-orange-600 transition duration-100 pl-1">
                <GoPlus />
              </button>
            </div>
            <Link
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

      <p className="mt-6 leading-8">
        description: The iMICE GK-500 Mechanical Keyboard is a versatile and
        stylish gaming keyboard designed for a smooth experience. These gaming
        keyboards are compatible with Windows, Android, and Mac OS, this
        keyboard features 97keys in a compact and majestic design that supports
        all keys anti-ghosting for a full throw of conflict-free, rapid
        keystrokes. iMICE GK-500 comes with 12 groups of multimedia buttons to
        have quick access and increase functionality. The iMICE GK-500 is
        featured with a 1.5-meter USB cable ensuring a stable and responsive
        connection, while the plastic wire construction adds durability. These
        mechanical gaming keyboards are made ergonomically. Users can have 18
        lighting types to intensify the gaming experience. Weighing 720 grams
        and measuring 388 x 142 x 42 mm, the iMICE GK-500 keyboard combines
        performance and durability. The mechanical gaming keyboard is ideal for
        gamers seeking functionality and style.
      </p>
    </div>
  );
}
