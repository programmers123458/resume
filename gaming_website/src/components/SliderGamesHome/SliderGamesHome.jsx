import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
// import slider images
import fortnite from "../../../public/fortnite-slider.jpg";
import arma2 from "../../../public/arma2-slider.jpg";
import fc from "../../../public/fc-slider.jpg";
import pes from "../../../public/pes-slider.jpg";
import cs16 from "../../../public/cs1.6-slider.jpg";
import cs2 from "../../../public/cs2-slider.jpg";
import mortal from "../../../public/mortal-slider.webp";
import gta from "../../../public/gta-slider.jpeg";

import "./SliderGamesHome.css";

const SliderGamesHome = () => {
  return (
    <>
      <h1 className="top">Top Games</h1>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={fortnite} alt="fortnite" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">Fortnite</h2>
              <p className="des-slider">
                Fortnite is the ultimate free-to-play online battle royale
                experience that redefines multiplayer gaming. Drop into a
                vibrant, ever-evolving world where 100 players fight to be the
                last one standing.
              </p>
              <p className="price-slider">$39.99</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={arma2} alt="arma2" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">ARMA 2</h2>
              <p className="des-slider">
                ARMA 2 is a deeply immersive military simulation that sets the
                benchmark for tactical realism in modern combat gaming.
              </p>
              <p className="price-slider">$12.99</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={fc} alt="fc" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">FC Mobile</h2>
              <p className="des-slider">
                EA SPORTS FC™ 25 gives you more ways to win for the club. Team
                up with friends in your favourite modes with the new 5v5 Rush,
                and manage your club to victory as FC IQ delivers more tactical
                control than ever before.
              </p>
              <p className="price-slider">$41.99</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={pes} alt="eFootball" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">eFootball</h2>
              <p className="des-slider">
                The feverish football game with a worldwide total of 750 million
                downloads is waiting for you! Play eFootball™ with users around
                the world!
              </p>
              <p className="price-slider">Free</p>
              <button className="btn-slider-game">Play</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={cs16} alt="cs1.6" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">CS 1.6</h2>
              <p className="des-slider">
                Play the world's number 1 online action game. Engage in an
                incredibly realistic brand of terrorist warfare in this wildly
                popular team-based game. Ally with teammates to complete
                strategic missions
              </p>
              <p className="price-slider">$6.29</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={cs2} alt="cs2" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">CS 2</h2>
              <p className="des-slider">
                For over two decades, Counter-Strike has offered an elite
                competitive experience, one shaped by millions of players from
                across the globe. And now the next chapter in the CS story is
                about to begin. This is Counter-Strike 2.
              </p>
              <p className="price-slider">Free</p>
              <button className="btn-slider-game">Play</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={mortal} alt="mortal" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">Mortal Kombat</h2>
              <p className="des-slider">
                Discover a reborn Mortal Kombat™ Universe created by the Fire
                God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic
                franchise with a new fighting system, game modes, and
                fatalities!
              </p>
              <p className="price-slider">$39.99</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-slider justify-between">
            <img src={gta} alt="gta" className="img-slider" />
            <div className="text-slider">
              <h2 className="name-slider">GTA V</h2>
              <p className="des-slider">
                Experience entertainment blockbusters Grand Theft Auto V and
                Grand Theft Auto Online — now upgraded for a new generation with
                stunning visuals, faster loading, 3D audio, and more, plus
                exclusive content for GTA Online players.
              </p>
              <p className="price-slider">$29.99</p>
              <button className="btn-slider-game">Buy</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderGamesHome;
