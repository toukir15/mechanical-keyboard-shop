import Marquee from "react-fast-marquee";
import logitech from "/images/brand/logitech.png";
import korsair from "/images/brand/corsair.png";
import razer from "/images/brand/razer.png";
import hyperx from "/images/brand/hyperx.png";
import xiaomi from "/images/brand/xiaomi.png";
import microsoft from "/images/brand/microsoft.png";
import apple from "/images/brand/apple.png";

const BrandMarquee = () => {
  return (
    <>
      <section className="bg-light-gray lg:p-8 md:py-20 mb-[20px] lg:mb-[140px] rounded-xl lg:mt-[100px]">
        <div className="w-[90%] mx-auto bg-[#1D1D20] py-10 lg:py-36 px-8 rounded-2xl">
          <h2 className=" text-2xl lg:text-5xl font-medium lg:leading-[60px] text-white mb-10 lg:mb-20">
            The Top Feature <br /> Leading
            <span className="text-[#F85606]"> Keyboard Brand</span>
          </h2>
          <div className={`flex flex-wrap gap-14 items-center justify-center`}>
            <Marquee speed={80}>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={logitech}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={korsair}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={razer}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={hyperx}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={xiaomi}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={microsoft}
                  alt="image"
                />
              </div>
              <div className="h-[30px] sm:h-[30px] md:h-[60px] mx-4 lg:mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={apple}
                  alt="image"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandMarquee;
