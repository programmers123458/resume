import React from "react";
import "./MainHome.css";

const MainHome = () => {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h1 className="title">
            The Best <span className="purple">Games</span> Out There
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>

          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
