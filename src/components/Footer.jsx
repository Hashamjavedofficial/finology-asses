import React from "react";
import clsx from "clsx";
import { useMediaQuery, useTheme } from "@material-ui/core";

import { useFooterStyles } from "../styles/Footer";

import Logo from "../assets/1-header/logo.png";
import FooterLeft from "../assets/6-footer/footer-rounded-001.svg";
import FooterRight from "../assets/6-footer/footer-rounded-002.svg";

const Footer = (props) => {
  const classes = useFooterStyles();

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <footer className={clsx(classes.Footer)}>
      <div
        className={`grid md:grid-cols-9 sm:grid-cols-7 ${
          match ? "pt-6" : "pt-12"
        }`}
      >
        {!match && <div></div>}
        <div className="col-span-2">
          <div className="flex align-middle">
            <img src={Logo} alt="" className={classes.LogoImage} />
            <span className={clsx("md:mt-6 lg:mt-6 sm:mt-2", classes.LogoText)}>
              {" "}
              Easy Work
            </span>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className={classes.Heading}>Address</h1>
          <p className={classes.Paragraph}>
            52-1,Jalan Awan Hijua, Taman Overseas Union, 58200 Kuala Lumpur,
            Wilayah Persekutuan Kuala Lampur
          </p>
        </div>
        <div></div>
        <div className={match ? "col-span-2" : "col-span-1"}>
          <div>
            <h1 className={classes.Heading}>Contact</h1>
            <p className={classes.Paragraph}>03-7451 5283</p>
          </div>
          <div className="mt-2">
            <h1 className={classes.Heading}>Fax</h1>
            <p className={classes.Paragraph}>03-7451 5283</p>
          </div>
        </div>
        <div></div>
        {/*<img src={FooterLeft} alt="" className={classes.FooterLeft} />*/}
      </div>

      {/*<img src={FooterRight} alt="" />*/}
    </footer>
  );
};

export default Footer;
