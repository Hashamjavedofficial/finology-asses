import React from "react";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import { SvgIcon } from "@material-ui/core";

import { useHeaderStyles } from "../styles/Header";

import Logo from "../assets/1-header/logo.png";
import BannerLeft from "../assets/2-banner/banner-rounded-001.svg";
import BannerRight from "../assets/2-banner/banner-rounded-002.svg";
import BannerImage from "../assets/2-banner/banner.png";

const Header = (props) => {
  const classes = useHeaderStyles();

  return (
    <div className={clsx(classes.MainDiv, "md:px-20 sm:px-6 relative")}>
      <div className="grid grid-cols-4 sm:pt-4 md:pt-6">
        <div className="flex justify-start">
          <img src={Logo} alt="" className={classes.HeaderLogo} />
        </div>
        <div className="col-span-2">
          <ul
            className={clsx(
              classes.List,
              "flex justify-around align-middle mt-4"
            )}
          >
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="mt-4 flex justify-end">
          <SvgIcon>
            <SearchIcon className={classes.SearchIcon} />
          </SvgIcon>
        </div>
      </div>
      <div className={classes.HeaderContent}>
        <div className="grid grid-cols-2 relative z-10">
          <div className="sm:col-span-2">
            <h1 className={classes.Heading}>Make development easy with us.</h1>
            <p>
              Doing development can never be easy, and it takes time and
              resources.
            </p>
            <p>We at EasyWork has the solution.</p>
          </div>
          <div></div>
        </div>
        <div>
          <img src={BannerLeft} alt="" className={classes.LeftBanner} />
        </div>
        <div>
          <img src={BannerImage} alt="" className={classes.BannerImage} />
        </div>
        <div>
          <img src={BannerRight} alt="" className={classes.RightBanner} />
        </div>
      </div>
    </div>
  );
};

export default Header;
