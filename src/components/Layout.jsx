import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
