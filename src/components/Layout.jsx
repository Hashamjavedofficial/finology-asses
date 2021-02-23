import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Slider from "./Slider";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Home />
      <Slider />
      <Footer />
    </div>
  );
};

export default Layout;
