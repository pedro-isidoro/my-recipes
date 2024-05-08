import ChocolateCake from "./ChocolateCake"; 
import CarrotCupcake from "./carrotCupcake/CarrotCupcake";
import ChocolateCupcake from "./chocolateCupcake/ChocolateCupcake";
import SpongeCake from "./spongeCake/SpongeCake";

import "../pages.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function CakesSwiper() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{ChocolateCake}</SwiperSlide>
        <SwiperSlide>{CarrotCupcake}</SwiperSlide>
        <SwiperSlide>{ChocolateCupcake}</SwiperSlide>
        <SwiperSlide>{SpongeCake}</SwiperSlide>
      </Swiper>
    </>
  );
}
