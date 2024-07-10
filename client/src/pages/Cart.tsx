import { Checkbox } from "@/components/ui/checkbox";
import imace from "../../public/images/imace.webp";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="text-white flex gap-8 px-12 mb-16 ">
      <div className="w-[60%]">
        <div className="flex gap-4 items-center space-x-2 mt-8 border border-gray-500 rounded-lg py-6 px-4">
          <Checkbox
            style={{
              backgroundColor: "white",
              color: "black",
              width: "1.1rem",
              height: "1.1rem",
            }}
            id="terms"
          />
          <div>
            <img src={imace} className="h-20 w-20 rounded" alt="" />
          </div>
          <div>
            <p>iMICE GK-500 97 KEYS Gaming Mechanical Keyboard</p>
            <p>Brand: iMICE</p>
            <p className="text-sm mt-2 text-gray-300">
              Only 3 item(s) in stock
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-orange-600">$400</p>
            <button>
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
          <div className="flex gap-5 pl-10 relative bottom-4">
            <button className="text-xl bg-orange-300 p-[3px] rounded-[2px]">
              <FiMinus />
            </button>
            <p>1</p>
            <button className="text-xl bg-orange-600 p-[3px] rounded-[2px]">
              <GoPlus />
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center space-x-2 mt-8 border border-gray-500 rounded-lg py-6 px-4">
          <Checkbox
            style={{
              backgroundColor: "white",
              color: "black",
              width: "1.1rem",
              height: "1.1rem",
            }}
            id="terms"
          />
          <div>
            <img src={imace} className="h-20 w-20 rounded" alt="" />
          </div>
          <div>
            <p>iMICE GK-500 97 KEYS Gaming Mechanical Keyboard</p>
            <p>Brand: iMICE</p>
            <p className="text-sm mt-2 text-gray-300">
              Only 3 item(s) in stock
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-orange-600">$400</p>
            <button>
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
          <div className="flex gap-5 pl-10 relative bottom-4">
            <button className="text-xl bg-orange-300 p-[3px] rounded-[2px]">
              <FiMinus />
            </button>
            <p>1</p>
            <button className="text-xl bg-orange-600 p-[3px] rounded-[2px]">
              <GoPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30%] border h-fit p-4 mt-8 rounded-lg border-gray-500 ">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="flex justify-between mt-2">
          <p>Subtotal (7 items)</p>
          <p>$1,390</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Shipping fee (Free)</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p>$1,390</p>
        </div>
        <Link to={"/checkout"}>
          <button className="uppercase bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mt-6 py-3 text-black font-medium text-sm ">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
