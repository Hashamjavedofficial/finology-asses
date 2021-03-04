import React from "react";
import Slider from "react-slick";
import { IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import SliderCard from "./SliderCard";
import useSliderStyle from "../styles/Slider";

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

  const classes = useSliderStyle();

  return (
    <div className="md:pl-20 sm:pl-6 my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mb-16 sm:mb-6">
        <div className="pl-5 flex justify-between">
          <div>
            <IconButton className={classes.HeartButton}>
              <FavoriteIcon />
            </IconButton>
          </div>

          <div className="ml-10">
            <Typography
              component="h5"
              variant="h5"
              color="primary"
              className={classes.HeadingText}
            >
              What other people say about our service
            </Typography>
          </div>
        </div>
        <div></div>
        <div className="flex justify-end md:col-span-2 lg:col-span-1 lg:pr-24 sm:pr-8 items-end">
          <div>
            <IconButton className={classes.SliderButton}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
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
