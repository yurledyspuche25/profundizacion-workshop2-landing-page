import React from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className=" d-flex bg-black text-bg-primary justify-content-between px-5">
      <div className="">
        <h1>Loopstudios</h1>
        <Navbar />
      </div>
      <Icons />
    </div>
  );
};

export default Footer;
