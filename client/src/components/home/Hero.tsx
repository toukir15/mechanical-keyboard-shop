import DownArrowImage from "../svg/DownArrowSvg";
import "../home/Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className=" h-screen">
      <div className="h-[calc(100vh-70px)] lg:h-[calc(100vh-85px)] bg-cover bg-center hero-bg flex px-4 lg:px-12 items-center relative">
        {/* Add any other content you want here */}
        <div className="relative z-10 text-white flex flex-col gap-16 lg:container lg:mx-auto w-full ">
          <p className="border-b-2 w-fit pb-3 border-orange-600 text-md md:text-xl font-medium leading-[20px] lg:leading-[35px] text-gray-200">
            Designing, Strategizing, Delivering <br /> Cutting-Edge Keyboard
            Solutions
          </p>
          <h1 className=" text-3xl md:text-6xl lg:text-8xl font-bold leading-[45px] md:leading-[70px] lg:leading-[100px] text-gray-300 ">
            Your One-Stop Shop <br /> for Quality
            <span className="text-[#d16a36]"> Keyboards</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 mt-6">
            <button
              onClick={() => navigate("/products")}
              className="bg-orange-600 hover:bg-orange-700 transition duration-150 text-black py-3 md:py-4 px-28 w-full md:w-fit md:text-lg font-medium rounded "
            >
              See Products
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="bg-white hover:bg-[#d5d5d5] transition duration-150 text-orange-600 py-3 md:py-4 px-28 md:text-lg w-full md:w-fit font-medium rounded "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[80px] hidden lg:block sm:w-[120px] md:w-[150px] absolute bottom-16 right-44 ">
          <DownArrowImage height={"h-52"} width={"w-52"} />
        </div>
      </div>
    </section>
  );
}
