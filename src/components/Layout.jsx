import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Slider from "./Slider";
import People from "./People";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Home />
      <Slider />
      <People />
      <Footer />
    </div>
  );
};

export default Layout;
