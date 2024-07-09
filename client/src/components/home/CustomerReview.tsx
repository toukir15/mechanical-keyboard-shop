/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import albert from "../../../public/images/review/albert.jpeg";

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
  //   {
  //     id: 4,
  //     customerImg: andrew,
  //     customerName: "andrew",
  //     customerDesignation: "founder of online super tutors",
  //     feedbackTitle: "Fast Shipping",
  //     feedbackMessage:
  //       "We cannot recommend Developerlook highly enough! From initiation to delivery and beyond, the team ensures everything aligns perfectly with the requirements, while offering insightful suggestions to ensure an outstanding final product. They go above and beyond, incorporating extra features effectively. Their assistance with SEO and marketing showcases their deep understanding of the modern internet, search optimization, and future trends. If you're seeking to future-proof your web offerings, look no further than Developerlook. A well-deserved 5 stars all round.",
  //   },
  //   {
  //     id: 5,
  //     customerImg: nathaniel,
  //     customerName: "nathaniel",
  //     customerDesignation: "director of americal mandarin socity",
  //     feedbackMessage:
  //       "The Developerlook team did a stellar job assisting us in building our online course website. They responded swiftly to our inquiries, completed tasks promptly, and provided well-considered recommendations for solutions. Their timely delivery was commendable, even in the face of unexpected technical issues and content delays on our end.",
  //   },
  //   {
  //     id: 6,
  //     customerImg: vegard,
  //     customerName: "vegard",
  //     customerDesignation: "co-founder of nutihorse",
  //     feedbackMessage:
  //       "We've had the pleasure of collaborating with the Developerlook team. They've showcased a solution-oriented approach, impressive skills, and provided numerous tips and solutions that significantly enhanced our website beyond our expectations! We highly recommend Developerlook.",
  //   },
  //   {
  //     id: 7,
  //     customerImg: beau,
  //     customerName: "beau",
  //     customerDesignation: "founder of circle of docs",
  //     feedbackMessage:
  //       "Developerlook does incredible work! The team is evidently passionate about their craft, consistently going above and beyond the standard level of service. They contribute great ideas to enhance both the aesthetics and performance of your platform beyond your imagination. We approached them with an idea, and they transformed it into a functional, thriving site. We plan to work with Developerlook for months, even years to come. We cannot recommend them highly enough!",
  //   },
  //   {
  //     id: 8,
  //     customerImg: riley,
  //     customerName: "riley",
  //     customerDesignation: "founder of unwindescapes",
  //     feedbackMessage:
  //       "Developerlook does incredible work! The team is evidently passionate about their craft, consistently going above and beyond the standard level of service. They contribute great ideas to enhance both the aesthetics and performance of your platform beyond your imagination. We approached them with an idea, and they transformed it into a functional, thriving site. We plan to work with Developerlook for months, even years to come. We cannot recommend them highly enough!",
  //   },
  //   {
  //     id: 9,
  //     customerImg: bob,
  //     customerName: "bob",
  //     customerDesignation: "founder of elite academy",
  //     feedbackMessage:
  //       "Coupling with the Developerlook team for our Security Learning Management System (LMS) website and app development project was a truly exceptional experience. Their team excelled in implementing intricate security features into a user-friendly platform that aligns seamlessly with our objectives.",
  //   },
  //   {
  //     id: 10,
  //     customerImg: fiona,
  //     customerName: "fiona",
  //     customerDesignation: "co-founder of meeting point",
  //     feedbackMessage:
  //       "The experts at Developerlook demonstrated excellent communication, technical, and business skills throughout our custom website project. They effortlessly adapted to our preferred method of project management, proactively solved issues, offered valuable advice, and overall, were a pleasure to work with.",
  //   },
  //   {
  //     id: 11,
  //     customerImg: saimir,
  //     customerName: "saimir",
  //     customerDesignation: "co-founder of network charlotte",
  //     feedbackMessage:
  //       "Working with the Developerlook team was an A+ experience. They were highly responsive, providing excellent suggestions to drive the process forward when we were unsure of the next steps. Thank you!",
  //   },
  //   {
  //     id: 12,
  //     customerImg: vesta,
  //     customerName: "vesta",
  //     customerDesignation: "founder of meeting point",
  //     feedbackMessage:
  //       "Developerlook is an extremely professional and skilled team. Communication was consistently smooth, they were very proactive and easily accessible. The Developerlook team played a vital role in our project, not only as experts in their field, but also as invaluable advisors on many other topics. We thoroughly enjoyed working with Developerlook and highly recommend them for complex projects.",
  //   },
  //   {
  //     id: 13,
  //     customerImg: georgina,
  //     customerName: "georgina",
  //     customerDesignation: "founder of diversity network",
  //     feedbackMessage:
  //       "It was truly great to collaborate with Developerlook. They were prompt, efficient, and delivered exceptional results, not only on the initial project but also on additional work to transition the site to a cloud server. They come highly recommended.",
  //   },
];

const CustomerReviews = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

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
    <div className="h-fit mb-32 ">
      <div className="flex justify-between items-center mb-8 ">
        <div className="mb-5 sm:mb-10 space-y-2 sm:space-y-4">
          <p className="w-fit bg-[#f8570620] text-xl text-primary py-1.5 px-3 rounded-lg mb-1">
            Testimonial
          </p>
          <h2 className="text-white text-5xl">
            Client <span className="text-primary"> reviews</span>
          </h2>
        </div>

        <div className="hidden sm:block">
          <div className="flex gap-2 ">
            <button
              aria-label="Click me to see previous review"
              className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-primary transition-all duration-200"
              onClick={handlePrev}
            >
              <FaArrowLeftLong size={18} />
            </button>
            <button
              aria-label="Click me to see next review"
              className="p-4 rounded-full text-white hover:text-[#121212] bg-[#1D1D20] hover:shadow-lg bg-light-gray hover:bg-primary transition-all duration-200"
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
                  <span className="text-primary">
                    <FaQuoteLeft size={60}></FaQuoteLeft>
                  </span>
                  <p className="text-[#BEBBBB] text-lg mt-4 ">
                    {review.feedbackMessage.slice(0, 260)}...
                  </p>

                  <div className="mt-5 sm:mt-7 md:mt-10">
                    <p className="font-medium text-primary text-3xl uppercase mb-3 ">
                      {review.customerName}
                    </p>
                    <p className="text-gray uppercase text-xl text-[#BEBBBB]">
                      {review.customerDesignation}
                    </p>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[300px] sm:w-full">
                  <img
                    style={{
                      width: "80%",
                      height: "80%",
                      objectFit: "cover",
                    }}
                    className="rounded-full"
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
        <div className="flex gap-2 mt-4">
          <button
            aria-label="Click me to see previous review"
            className="p-3 rounded-full text-white hover:text-[#121212] hover:shadow-lg bg-light-gray hover:bg-primary transition-all duration-200"
            onClick={handlePrev}
          >
            <FaArrowLeftLong size={18} />
          </button>
          <button
            aria-label="Click me to see next review"
            className="p-3 rounded-full text-white hover:text-[#121212] hover:shadow-lg bg-light-gray hover:bg-primary transition-all duration-200"
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
