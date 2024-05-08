import CheddarSauce from "./CheddarSauce";
import RanchSauce from "./ranchSauce/RanchSauce"
import RoseSauce from "./roseSauce/RoseSauce"
import WhiteSauce from "./whiteSauce/WhiteSauce"

import "../pages.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function SaucesSwipes() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{CheddarSauce}</SwiperSlide>
        <SwiperSlide>{RanchSauce}</SwiperSlide>
        <SwiperSlide>{RoseSauce}</SwiperSlide>
        <SwiperSlide>{WhiteSauce}</SwiperSlide>
      </Swiper>
    </>
  );
}
