import imace from "../../public/images/imace.webp";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import "./Products.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="mb-40">
      <div className="flex justify-end mt-16 px-12">
        <div className="flex text-white gap-4">
          <Input
            style={{ color: "black" }}
            type="email"
            placeholder="Search by name, brand."
          />

          <Select>
            <SelectTrigger style={{ color: "black" }} className="w-[120px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger style={{ color: "black" }} className="w-[120px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <button className="bg-orange-500 hover:bg-orange-600 transition duration-150 text-black px-4 rounded-md flex gap-1  items-center">
            <p>Clear</p>
            <IoClose className="relative top-[1px]" />
          </button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-5 gap-y-16 gap-4">
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
        <div className="w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg ">
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
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
            >
              <button>See Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center mt-16"></div>
    </section>
  );
}
