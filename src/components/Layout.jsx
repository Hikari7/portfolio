import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

//ここでglobal.scssを反映させている
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
