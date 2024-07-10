import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductsList() {
  return (
    <div>
      <div className="flex mt-8 justify-end">
        <Link
          to={"/dashboard/add-product"}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-150  mx-4 justify-center rounded font-medium px-12 py-3 mt-8"
        >
          <button>Add Product</button>
        </Link>
      </div>
      <div className="">
        <table className="w-full text-white  mt-4">
          <thead>
            <th className="text-start pt-4 pb-4 text-gray font-normal ">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Product Name
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Image
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Brand
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Price
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Details
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Edit
              </p>
            </th>
            <th className="text-start pt-4 pb-4 px-3 text-gray font-normal">
              <p className="bg-[#2F1B11] w-fit py-1  text-orange-600  px-3">
                Delete
              </p>
            </th>
          </thead>
          <tbody>
            <tr className="   border-b-[20px] border-[#121212] rounded-lg bg-white text-black cursor-pointer">
              <td className="py-5 px-4 text-start">name</td>
              <td className="py-5 px-4 text-start">img</td>
              <td className="py-5 px-4 pl-6 text-start">id</td>
              <td className="py-5 px-4 text-start">
                <p className="bg-[#BBF7D0] w-fit px-3 py-[1px] text-[#158F9C] rounded-full">
                  sd
                </p>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button type="button">
                  <FaRegEye size={19} />
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="   border-b-[20px] border-[#121212] rounded-lg bg-white text-black cursor-pointer">
              <td className="py-5 px-4 text-start">name</td>
              <td className="py-5 px-4 text-start">img</td>
              <td className="py-5 px-4 pl-6 text-start">id</td>
              <td className="py-5 px-4 text-start">
                <p className="bg-[#BBF7D0] w-fit px-3 py-[1px] text-[#158F9C] rounded-full">
                  sd
                </p>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button type="button">
                  <FaRegEye size={19} />
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="   border-b-[20px] border-[#121212] rounded-lg bg-white text-black cursor-pointer">
              <td className="py-5 px-4 text-start">name</td>
              <td className="py-5 px-4 text-start">img</td>
              <td className="py-5 px-4 pl-6 text-start">id</td>
              <td className="py-5 px-4 text-start">
                <p className="bg-[#BBF7D0] w-fit px-3 py-[1px] text-[#158F9C] rounded-full">
                  sd
                </p>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button type="button">
                  <FaRegEye size={19} />
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="   border-b-[20px] border-[#121212] rounded-lg bg-white text-black cursor-pointer">
              <td className="py-5 px-4 text-start">name</td>
              <td className="py-5 px-4 text-start">img</td>
              <td className="py-5 px-4 pl-6 text-start">id</td>
              <td className="py-5 px-4 text-start">
                <p className="bg-[#BBF7D0] w-fit px-3 py-[1px] text-[#158F9C] rounded-full">
                  sd
                </p>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button type="button">
                  <FaRegEye size={19} />
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td className="py-5 px-4 pl-8 text-start">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
