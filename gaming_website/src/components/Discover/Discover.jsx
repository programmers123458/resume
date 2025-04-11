import React from "react";
import "./Discover.css";
// img
import discover1 from "../../../public/discover1.webp";
import discover2 from "../../../public/discover2.jpg";
import discover3 from "../../../public/discover3.avif";
import discover5 from "../../../public/discover5.avif";
import discover6 from "../../../public/discover6.avif";
import discover4 from "../../../public/discover4.webp";

const Discover = () => {
  return (
    <div className="bg-fff">
      <h1 className="title-discover">Discover Something New</h1>
      <div className="justify-around">
        <div className="container-discover">
          <div className="card-discover">
            <img src={discover1} alt="discover1" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">Split Fiction</p>
            <p className="price-discover">$49.99</p>
          </div>
        </div>

        <div className="container-discover">
          <div className="card-discover">
            <img src={discover2} alt="discover2" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">FragPunk</p>
            <p className="price-discover">Free</p>
          </div>
        </div>

        <div className="container-discover">
          <div className="card-discover">
            <img src={discover3} alt="discover1" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">Mini Royale</p>
            <p className="price-discover">Free</p>
          </div>
        </div>

        <div className="container-discover">
          <div className="card-discover">
            <img src={discover4} alt="discover1" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">Assasin's Creed. Shadows</p>
            <p className="price-discover">$69.99</p>
          </div>
        </div>

        <div className="container-discover">
          <div className="card-discover">
            <img src={discover5} alt="discover1" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">33 Immortals</p>
            <p className="price-discover">$8.99</p>
          </div>
        </div>

        <div className="container-discover">
          <div className="card-discover">
            <img src={discover6} alt="discover1" />
            <p className="purple-discover">Base Game</p>
            <p className="name-discover">AtomFall</p>
            <p className="price-discover">$22.49</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
