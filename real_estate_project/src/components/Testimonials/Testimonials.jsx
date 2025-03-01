import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <div class="container">
          <h2>What Our Clients Are Saying</h2>
          <div id="testimonials-slider">
            <div>
              <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ background: "transparent" }}
              >
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 1
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 2
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 3
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 4
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 5
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 6
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 7
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 8
                </SwiperSlide>
                <SwiperSlide style={{ background: "transparent" }}>
                  Comment 9
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
