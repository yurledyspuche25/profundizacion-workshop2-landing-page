import React from "react";
import FaceBookLogo from "../images/icon-facebook.svg";
import TwitterLogo from "../images/icon-twitter.svg";
import PinterestLogo from "../images/icon-pinterest.svg";
import InstagramLogo from "../images/icon-instagram.svg";

const Icons = () => {
  return (
    <div>
      <div>
        <img src={FaceBookLogo} alt="" />
        <img src={TwitterLogo} alt="" />
        <img src={PinterestLogo} alt="" />
        <img src={InstagramLogo} alt="" />
      </div>
      <p>2021 | Loopstudios. All rights reserved</p>
    </div>
  );
};

export default Icons;
