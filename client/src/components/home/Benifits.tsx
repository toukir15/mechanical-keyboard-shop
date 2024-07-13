import { MdOutlineRateReview, MdOutlineTimer } from "react-icons/md";
import { RiCustomerService2Fill, RiTeamLine } from "react-icons/ri";
import { TiDeviceDesktop } from "react-icons/ti";
import { GiNotebook } from "react-icons/gi";

export default function Benefits() {
  return (
    <div className="mb-60 mt-0 lg:mt-40 px-4">
      <h1 className=" text-2xl lg:text-5xl font-medium lg:leading-[60px] text-white mb-6 lg:mb-32">
        Elevating Your Experience <br /> With
        <span className="text-[#F85606]"> Exceptional Benefits</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 md:gap-5 justify-items-center text-gray-400">
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <MdOutlineRateReview />
          </div>
          <p className="md:text-xl text-center">
            Product <br /> Recommendation
          </p>
        </div>
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <MdOutlineTimer />
          </div>
          <p className="md:text-xl text-center ">
            Fast & Reliable <br /> Delivery
          </p>
        </div>
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <RiTeamLine />
          </div>
          <p className="md:text-xl text-center">
            Global <br /> Market
          </p>
        </div>
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <TiDeviceDesktop />
          </div>
          <p className="md:text-xl text-center">
            Direct <br /> Feedback
          </p>
        </div>
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <RiCustomerService2Fill />
          </div>
          <p className="md:text-xl text-center">
            24/7 Customer <br /> Support
          </p>
        </div>
        <div className="border border-gray hover:border-[#F85606] p-6 rounded-lg w-full flex flex-col gap-1 items-center text-gray hover:text-[#F85606] transition duration-300 hover:scale-[1.02]">
          <div className="text-6xl">
            <GiNotebook />
          </div>
          <p className="md:text-xl text-center">
            Comprehensive
            <br /> Descriptions
          </p>
        </div>
      </div>
    </div>
  );
}
