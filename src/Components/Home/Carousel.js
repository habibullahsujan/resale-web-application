import React from "react";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-20 text-[#242325]">
      <div></div>

      <Slider {...settings}>
        <div className="relative">
          <div className="absolute z-40 lg:w-[50%] mx-auto lg:ml-40 lg:mt-10 hidden lg:block">
            <h2 className="text-xl font-bold">
              Classified platform, a Marketplace Connecting Buyers and Sellers
            </h2>
            <p>
              {" "}
              Start buying and selling today! Make shopping SIMPLE, SECURE and
              FAST on the largest marketplace in Bangladesh. Discover what you
              need and sell all sorts of products in our simple yet powerful
              platform.
            </p>
            <button className="btn">Shop Now</button>
          </div>

          <img
            className="lg:w-[78%] mx-auto h-64 rounded-lg"
            src="https://i.ibb.co/grpyhbv/apple-laptop-1.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="absolute z-40 lg:w-[50%] mx-auto lg:ml-40 lg:mt-10 hidden lg:block">
            <h2 className="text-xl font-bold">
              Promote any of your product & earn money within our vast network
            </h2>
            <p>
              Start buying and selling today! Make shopping SIMPLE, SECURE and
              FAST on the largest marketplace in Bangladesh. Discover what you
              need and sell all sorts of products in our simple yet powerful
              platform. Sign Up Now
            </p>
            <a href="#productCategory" className="btn">Shop Now</a>
          </div>
          <img
            className="w-[78%] mx-auto h-64 rounded-lg"
            src="https://i.ibb.co/K9qBRzJ/hp-laptop-3.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
