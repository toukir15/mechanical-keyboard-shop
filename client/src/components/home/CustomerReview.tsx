/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import albert from "/images/review/albert.jpeg";

const reviews = [
  {
    id: 2,
    customerImg: albert,
    customerName: "albert",
    customerDesignation: "founder of laterhub",
    feedbackTitle: "Exceptional Service",
    feedbackMessage:
      "The Developerlook team is exceptional. They are responsive and display a commendable work ethic. The team is determined to find solutions, even if it involves investing substantial time to resolve issues. Their expertise goes beyond web development as they were able to offer valuable consultations on cyber security, cloud server management and business transformation. We cannot recommend Developerlook highly enough and look forward to continuing our fruitful collaboration.",
  },
  {
    id: 3,
    customerImg: albert,
    customerName: "zach",
    customerDesignation: "founder of adventure fit dojo",
    feedbackTitle: "Quality Gear",
    feedbackMessage:
      "Our experience with the Developerlook team was outstanding. They exhibited high professionalism throughout the project. Their communication was excellent, making the collaboration smooth and effortless. The team adeptly navigated us through numerous business and technological challenges, proving instrumental in the commencement of our business. We will undoubtedly engage the expertise of the Developerlook team for our future projects.",
  },
  {
    id: 4,
    customerImg: albert,
    customerName: "andrew",
    customerDesignation: "founder of online super tutors",
    feedbackTitle: "Fast Shipping",
    feedbackMessage:
      "We cannot recommend Developerlook highly enough! From initiation to delivery and beyond, the team ensures everything aligns perfectly with the requirements, while offering insightful suggestions to ensure an outstanding final product. They go above and beyond, incorporating extra features effectively. Their assistance with SEO and marketing showcases their deep understanding of the modern internet, search optimization, and future trends. If you're seeking to future-proof your web offerings, look no further than Developerlook. A well-deserved 5 stars all round.",
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
            Client <span className="text-[#F85606]"> reviews</span>
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
                    <p className="text-gray uppercase text-lg lg:text-xl text-[#BEBBBB]">
                      {review.customerDesignation}
                    </p>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[300px] sm:w-full flex lg:justify-center">
                  <img
                    style={{
                      objectFit: "cover",
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
