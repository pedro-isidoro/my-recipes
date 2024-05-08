import ApplePie from "./ApplePie"
import Beignet from "./beignet/Beignet"
import CookiePie from "./cookiePie/CookiePie"
import redBerryPie from "./redBerryPie/RedBerryPie"
import woodyWoodpeckerPie from "./woodyWoodpeckerPie/WoodyWoodpeckerPie"

import "../pages.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function SweetsSwiper() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{ApplePie}</SwiperSlide>
        <SwiperSlide>{Beignet}</SwiperSlide>
        <SwiperSlide>{CookiePie}</SwiperSlide>
        <SwiperSlide>{redBerryPie}</SwiperSlide>
        <SwiperSlide>{woodyWoodpeckerPie}</SwiperSlide>
      </Swiper>
    </>
  );
}
