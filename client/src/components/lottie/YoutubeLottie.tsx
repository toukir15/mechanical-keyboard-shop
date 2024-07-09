// FacebookLottie.tsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/json/youtube.json";

const YoutubeLottie: React.FC = () => {
  return (
    <div style={{ width: 32, height: 32 }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default YoutubeLottie;
