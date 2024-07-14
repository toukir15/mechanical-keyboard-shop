import roller1 from "/images/switch/roller1.webp";
import cherry1 from "/images/switch/chery1.webp";
import gateronMagnatic from "/images/switch/gateron-magnatic1.webp";
import cherryOrange from "/images/switch/cherry-orange1.webp";
import gateron1 from "/images/switch/gateron1.webp";
const swithesData = [
  {
    switchName: "ROLLER SWITCHES",
    switchType: "cherry",
    price: "$5",
    img: roller1,
  },
  {
    switchName: "CHERRY MX PURPLE",
    switchType: "cherry",
    price: "$6",
    img: cherry1,
  },
  {
    switchName: "GATERON MAGNETIC",
    switchType: "cherry",
    price: "$19",
    img: gateronMagnatic,
  },
  {
    switchName: "CHERRY MX ORANGE",
    switchType: "cherry",
    price: "$12",
    img: cherryOrange,
  },
  {
    switchName: "GATERON 0° SILENT",
    switchType: "cherry",
    price: "$9",
    img: gateron1,
  },
];
export default function KeyboardSwitches() {
  return (
    <section className="pb-20 lg:mb-40 px-4">
      <h1 className="text-2xl lg:text-5xl font-medium lg:leading-[60px] text-white ">
        Keyboard<span className="text-[#F85606]"> Switches</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8 lg:mt-20">
        {swithesData.map((switchData) => {
          return (
            <div key={switchData.switchName} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={switchData.img}
                  className="rounded transition-transform duration-200 transform group-hover:scale-105"
                  alt=""
                />
              </div>
              <p className="text-white group-hover:text-orange-600 transition duration-200 mt-3 font-medium text-lg text-center">
                {switchData.switchName}
              </p>
              <p className="text-white group-hover:text-orange-600 transition duration-200 mt-1  text-lg text-center">
                {switchData.price}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
