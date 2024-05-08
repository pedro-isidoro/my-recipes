import StrawberryNido from "./StrawberryNido";

import "../pages.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function FillingsSwiper() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{StrawberryNido}</SwiperSlide>
      </Swiper>
    </>
  );
}
