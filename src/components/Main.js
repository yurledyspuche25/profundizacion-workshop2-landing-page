import React from "react";
import imagePrincipal from "../images/desktop/image-interactive.jpg"

const Main = () => {
  return (
    <main className="container p-5 m-5 d-flex">
      <img src={imagePrincipal}></img>
      <div className="p-5 d-flex flex-column justify-content-center align-items-center">
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed business through digital
          experiences that bind to their brand.
        </p>
      </div>
    </main>
  );
};

export default Main;
