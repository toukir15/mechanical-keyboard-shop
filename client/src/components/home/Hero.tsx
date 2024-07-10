import DownArrowImage from "../svg/DownArrowSvg";
import "../home/Hero.css";

export default function Hero() {
  return (
    <section className=" h-screen">
      <div className=" h-[calc(100vh-90px)] bg-cover bg-center hero-bg flex px-12 items-center relative">
        {/* Add any other content you want here */}
        <div className="relative z-10 text-white flex flex-col gap-16 ">
          <p className="border-b-2 w-fit pb-3 border-[#F85606] text-xl font-medium leading-[35px] text-gray-200">
            Designing, Strategizing, Delivering <br /> Cutting-Edge Keyboard
            Solutions
          </p>
          <h1 className=" text-8xl font-bold leading-[100px] text-gray-300 ">
            Your One-Stop Shop <br /> for Quality{" "}
            <span className="text-[#d16a36]">Keyboards</span>
          </h1>
          <div className="flex gap-8 mt-6">
            <button className="bg-[#F85606] py-4 px-28 text-xl font-medium rounded ">
              See Products
            </button>
            <button className="bg-white text-[#F85606] py-4 px-28 text-xl font-medium rounded ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[80px] sm:w-[120px] md:w-[150px] absolute bottom-16 right-44 ">
          <DownArrowImage height={"h-52"} width={"w-52"} />
        </div>
      </div>
    </section>
  );
}
