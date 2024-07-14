import compact from "/images/keyboard/Compact_Collection.webp";
import fullsize from "/images/keyboard/FullSize_Collection.webp";
import nonStandard from "/images/keyboard/NonStandard_Collection.webp";
import numpad from "/images/keyboard/Numpad_Collection.webp";
import tlk from "/images/keyboard/TKL_Collection.webp";

const keybordsData = [
  {
    keyboardType: "Full-Size Keyboard",
    img: fullsize,
  },
  {
    keyboardType: "TLK Keyboards",
    img: tlk,
  },
  {
    keyboardType: "Compact Keyboards",
    img: compact,
  },
  {
    keyboardType: "Numpad Keyboards",
    img: numpad,
  },
  {
    keyboardType: "Non-Standard Keyboards",
    img: nonStandard,
  },
];

export default function KeyboardSize() {
  return (
    <section className="  lg:pt-10 pb-20 lg:mb-40 px-4">
      <h1 className="text-2xl lg:text-5xl font-medium lg:leading-[60px] text-white ">
        Shop Keyboards
        <span className="text-[#F85606]"> By Size</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8 lg:mt-20">
        {keybordsData.map((keyboard) => {
          return (
            <div key={keyboard.keyboardType} className="group cursor-pointer ">
              <div className="overflow-hidden">
                <img
                  src={keyboard.img}
                  className="rounded transition transform duration-200 scale-105 hover:scale-100"
                  alt=""
                />
              </div>
              <p className="text-white group-hover:text-orange-600 transition duration-200 mt-3 font-medium uppercase text-lg text-center">
                {keyboard.keyboardType}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
