import Marquee from "react-fast-marquee";
import logitech from "../../../public/images/brand/logitech.png";
import korsair from "../../../public/images/brand/corsair.png";
import razer from "../../../public/images/brand/razer.png";
import hyperx from "../../../public/images/brand/hyperx.png";
import xiaomi from "../../../public/images/brand/xiaomi.png";
import microsoft from "../../../public/images/brand/microsoft.png";
import apple from "../../../public/images/brand/apple.png";

const BrandMarquee = ({ extendStyle }) => {
  return (
    <>
      <section className="bg-light-gray p-8 md:py-20 mb-[140px] rounded-xl mt-[100px]">
        <div className="w-[90%] mx-auto bg-[#1D1D20] py-36 px-8 rounded-2xl">
          <h2 className=" text-5xl font-medium leading-[60px] text-white mb-20">
            The Top Feature <br /> Leading
            <span className="text-primary">Keyboard Brand</span>
          </h2>
          <div
            className={`flex flex-wrap gap-14 items-center justify-center ${extendStyle}  `}
          >
            <Marquee speed={80}>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={logitech}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={korsair}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={razer}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={hyperx}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={xiaomi}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={microsoft}
                  alt="image"
                />
              </div>
              <div className="h-[20px] sm:h-[30px] md:h-[60px] mx-10">
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
