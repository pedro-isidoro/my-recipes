import BroyerBread from './BroyerBread';
import HamburguerBread from './hamburguerBread/HamburguerBread';
import SyrianBread from './syrianBread/SyrianBread';

import "../pages.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function BreadsSwiper(){
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{BroyerBread}</SwiperSlide>
        <SwiperSlide>{HamburguerBread}</SwiperSlide>
        <SwiperSlide>{SyrianBread}</SwiperSlide>
      </Swiper>
    </>
  );
}