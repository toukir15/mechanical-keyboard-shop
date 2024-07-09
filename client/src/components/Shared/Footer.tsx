import { Link } from "react-router-dom";
import keyboard from "../../../public/images/keyboard.png";
import FacebookLottie from "../lottie/FacebookLottie";
import GithubLottie from "../lottie/GithubLottie";
import LinkedinLottie from "../lottie/LinkedinLottie";
import YoutubeLottie from "../lottie/YoutubeLottie";
export default function Footer() {
  return (
    <div className="footer text-white">
      <div className="container mx-auto px-12 py-20">
        <div className="flex justify-between">
          {/* footer first column  */}
          <div>
            {/* Logo  */}
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={keyboard}
                  className="w-8 h-8 relative bottom-1"
                  alt=""
                />
              </div>
              <h3 className="text-[28px] text-white ">KeyGenius</h3>
            </div>
            <p className="mt-8">
              From 2019, we've empowered 100+ fast-growing <br /> companies
              across 10+ industries with impactful solutions.
            </p>
            <div className="mt-8 flex gap-6">
              <Link to={"/"}>
                <button className="bg-white p-2 rounded-full shadow-lg ">
                  <FacebookLottie />
                </button>
              </Link>
              <Link to={"/"}>
                <button className="bg-white p-2 rounded-full shadow-lg ">
                  <GithubLottie />
                </button>
              </Link>
              <Link to={"/"}>
                <button className="bg-white p-2 rounded-full shadow-lg ">
                  <LinkedinLottie />
                </button>
              </Link>
              <Link to={"/"}>
                <button className="bg-white p-2 rounded-full shadow-lg ">
                  <YoutubeLottie />
                </button>
              </Link>
            </div>
          </div>
          {/* footer second column  */}
          <div className="flex flex-col gap-4 text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Products</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Contact Us</Link>
          </div>
          {/* footer third column  */}
          <div className="flex flex-col gap-4 text-lg">
            <button className="text-start">Online Delivery</button>
            <button className="text-start">Refund and Return Policy</button>
            <button className="text-start">Online Delivery</button>
            <button className="text-start">Tearms and Conditions</button>
          </div>
          {/* footer fourth column  */}
          <div>
            <p className="font-medium text-start">KeyGenius</p>
            <p className="mt-4">
              Head Office: 28 Kazi Nazrul Islam Ave, <br /> Navana Zohura
              Square, Dhaka 1000
            </p>
            <p className="font-medium text-start mt-4">Email:</p>
            <p className="mt-4">keygenius@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
