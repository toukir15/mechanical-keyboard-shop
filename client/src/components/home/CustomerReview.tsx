/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import toukir from "/images/review/toukir.jpg";
import shiam from "/images/review/shiam.jpg";
import sagor from "/images/review/sagor.jpg";

const reviews = [
  {
    id: 2,
    customerImg: toukir,
    customerName: "Toukir Ahmed",
    customerDesignation: "founder of laterhub",
    feedbackTitle: "Exceptional Service",
    feedbackMessage:
      "I recently purchased the KeyGenius Pro Mechanical Keyboard, and I am blown away by the quality and performance. The tactile feedback is perfect for typing and gaming, and the customizable RGB lighting is a fantastic touch. Highly recommend KeyGenius for anyone looking for top-notch mechanical keyboards!",
  },
  {
    id: 3,
    customerImg: shiam,
    customerName: "Toukir Ahmed",
    customerDesignation: "founder of adventure fit dojo",
    feedbackTitle: "Quality Gear",
    feedbackMessage:
      "I've been using mechanical keyboards for years, and the KeyGenius MX is by far the best I've ever owned. The build quality is solid, and the key switches are incredibly responsive. The customer service was excellent, too – they answered all my questions promptly. I'll definitely be buying from KeyGenius again!",
  },
  {
    id: 4,
    customerImg: sagor,
    customerName: "Shiam Shikder",
    customerDesignation: "founder of online super tutors",
    feedbackTitle: "Fast Shipping",
    feedbackMessage:
      "As a professional gamer, having a reliable keyboard is crucial. The KeyGenius Gaming Pro has exceeded my expectations. The anti-ghosting feature ensures that every keypress is registered, and the ergonomic design keeps my hands comfortable during long gaming sessions. Thank you, KeyGenius!",
  },
];

const CustomerReviews = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="h-fit mb-10 lg:mb-32 px-4 mt-16 lg:mt-0">
      <div className="flex justify-between items-center mb-2 lg:mb-8 ">
        <div className="mb-5 sm:mb-10 space-y-2 sm:space-y-4">
          <p className="w-fit bg-[#f8570620] text-sm lg:text-xl text-[#F85606] py-1.5 px-3 rounded-lg mb-1">
            Testimonial
          </p>
          <h2 className="text-white text-3xl lg:text-5xl">
            Customer <span className="text-[#F85606]"> reviews</span>
          </h2>
        </div>

        <div className="hidden sm:block">
          <div className="flex gap-2 ">
            <button
              aria-label="Click me to see previous review"
              className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-[#F85606] transition-all duration-200"
              onClick={handlePrev}
            >
              <FaArrowLeftLong size={18} />
            </button>
            <button
              aria-label="Click me to see next review"
              className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-[#F85606] transition-all duration-200"
              onClick={handleNext}
            >
              <FaArrowRightLong size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1D1D20] rounded-2xl">
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          grabCursor={true}
          effect={"fade"}
          modules={[Pagination]}
          onSwiper={(swiper: any) => setSwiperInstance(swiper)}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="w-full">
              <div className="bg-light-gray p-6 md:p-20 rounded-lg flex gap-5 md:gap-20 items-center flex-col sm:flex-row justify-between">
                <div className="order-2 sm:order-1">
                  <span className="text-[#F85606]">
                    <FaQuoteLeft className="text-[50px] lg:text-[60px]"></FaQuoteLeft>
                  </span>
                  <p className="text-[#BEBBBB] lg:text-lg mt-4 ">
                    {review.feedbackMessage.slice(0, 260)}...
                  </p>

                  <div className="mt-5 sm:mt-7 md:mt-10">
                    <p className="font-medium text-[#F85606] text-2xl lg:text-3xl uppercase mb-1 lg:mb-3 ">
                      {review.customerName}
                    </p>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[300px] sm:w-full flex lg:justify-center">
                  <img
                    style={{
                      objectFit: "contain",
                    }}
                    className="rounded-full w-[70%] lg:w-[80%] h-[70%] lg:h-[80%]"
                    src={review.customerImg}
                    alt="Customer image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:hidden">
        <div className="flex justify-end gap-2 mt-4">
          <button
            aria-label="Click me to see previous review"
            className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-[#F85606] transition-all duration-200"
            onClick={handlePrev}
          >
            <FaArrowLeftLong size={18} />
          </button>
          <button
            aria-label="Click me to see next review"
            className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-[#F85606] transition-all duration-200"
            onClick={handleNext}
          >
            <FaArrowRightLong size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
