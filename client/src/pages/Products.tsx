import imace from "../../public/images/imace.webp";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Products() {
  return (
    <section className="mb-40">
      <div className="flex justify-end mt-16 px-12">
        <div className="flex text-white gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <p>filter</p>
          <p>search</p>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-5 gap-y-16 gap-4">
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
        <div className="w-[280px] bg-[#1D1D20] border border-gray-500 rounded-lg shadow-lg ">
          <div className="pt-3 px-3 mx-auto ">
            <img src={imace} className="rounded-lg " alt="" />
          </div>
          <p className="text-center mt-3 font-medium text-gray-100 mb-1 ">
            iMICE GK-500 97 KEYS Gaming Mechanical Keyboard
          </p>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>iMICE</p>
            <p>$499</p>
            <p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
            </p>
          </div>
          <div className="text-gray-200 flex justify-between py-1 px-4">
            <p>Available Quantity: 10</p>
          </div>
          <div className="flex justify-center pb-6 ">
            <button className="flex items-center gap-2 border border-gray-400 hover:border-primary w-full mx-4 justify-center py-1.5 rounded mt-2 text-gray-300 hover:text-primary font-medium transition duration-100">
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center mt-16"></div>
    </section>
  );
}
