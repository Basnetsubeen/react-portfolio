import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
