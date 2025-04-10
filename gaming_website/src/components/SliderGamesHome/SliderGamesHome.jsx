import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
// import slider images
import fortnite from '../../../public/fortnite-slider.jpg'
import arma2 from '../../../public/arma2-slider.jpg'
import fc from '../../../public/fc-slider.jpg'
import pes from '../../../public/pes-slider.jpg'
import cs16 from '../../../public/cs1.6-slider.jpg'
import cs2 from '../../../public/cs2-slider.jpg'
import mortal from '../../../public/mortal-slider.webp'
import gta from '../../../public/gta-slider.jpeg'

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
          <img src={fortnite} alt="fortnite" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={arma2} alt="arma2" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fc} alt="fc" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pes} alt="pes" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cs16} alt="cs1.6" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cs2} alt="cs2" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mortal} alt="mortal" className="img-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gta} alt="gta" className="img-slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderGamesHome;
