import React from "react";
import Slider from "react-slick";

import SliderCard from "./SliderCard";

import { slideCards } from "../utils/redundancy";

const CustomSlider = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "20px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="md:pl-20 sm:pl-6 my-10">
      <div className="flex justify-between">
        <div></div>
        <div></div>
      </div>
      <Slider {...settings} className={"grid grid-cols-2 gap-4"}>
        {slideCards.map((card) => (
          <div key={card.name + card.comment}>
            <SliderCard data={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
