import { CiStar } from "react-icons/ci";
import imace from "../../../public/images/imace.webp";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function FeatureProducts() {
  return (
    <section className="mb-40">
      <h1 className="text-5xl font-medium leading-[60px] text-white ">
        <span className="text-[#F85606]">Must-Have</span> Keyboards <br /> of
        the Season
      </h1>
      <div className="mt-20 flex gap-4">
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[250px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              iMICE
            </p>
            <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
              $499
            </p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar className="text-orange-600" />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <Link
              to={"/product-details/dslkf"}
              className="flex items-center gap-2 border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-16">
        <Link
          to={"/products"}
          className="bg-orange-500 hover:bg-orange-600 transition duration-150 text-blacks px-32 font-medium text-lg py-3 rounded "
        >
          See More
        </Link>
      </div>
    </section>
  );
}
