import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import Header from "../Header";
import "swiper/swiper-bundle.css";
import "./_Shared/_style.scss";
SwiperCore.use([Navigation, Pagination]);
export default memo(() => {
  const slides = [];
  for (let i = 1; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div id="center-box">
          <img
            src={`/Images/img-${i}.png`}
            alt={`slide img_${i}`}
            width="100%"
            height="100"
          />
        </div>
        <div id="center-box">
          <p>ضمانت نور و لبخند</p>
        </div>
        {/* /home/laruz/Desktop/new-me/src/_InitialData/Images/img-1.png */}
        
        {/* <img src={require(`./_InitialData/Images/img-${i}.png`)} alt={`slide img_${i}`} /> */}
      </SwiperSlide>
    );
  }
  return (
    
    <div className="main_top">
              <Header />

      <div className="slider_main">

        <Swiper
          id="main-carousel"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
});
