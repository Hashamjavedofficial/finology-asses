import React from "react";

import { useHomeStyles } from "../styles/Home";

import LeftImage from "../assets/3-content/content-001.png";
import RightImage from "../assets/3-content/content-002.png";
import clsx from "clsx";

const Home = (props) => {
  const classes = useHomeStyles();
  return (
    <div className="grid grid-cols-5 md:px-20 sm:px-6">
      <div className="md:col-span-3 flex justify-end sm:col-span-5">
        <img src={LeftImage} alt="" className={classes.LeftImage} />
      </div>
      <div className="md:col-span-1 md:text-left sm:col-span-5 sm:text-center">
        <h1 className={classes.TextHeading}>
          We can give you our best user experience to your system
        </h1>
        <p className={clsx("mt-4", classes.Paragraph)}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div></div>
      <div className="md:col-span-1 md:text-left sm:col-span-5 sm:text-center">
        <h1 className={classes.TextHeading}>
          Easy access, Whenever, whenever you want
        </h1>
        <p className={clsx("mt-4", classes.Paragraph)}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div></div>
      <div className="md:col-span-3 flex order-1 justify-start sm:col-span-5">
        <img src={RightImage} alt="" className={classes.RightImage} />
      </div>
    </div>
  );
};

export default Home;
