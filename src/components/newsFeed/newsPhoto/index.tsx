import { Navigation, Pagination, Scrollbar, A11y } from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperCustomStyles.css";

import Photo2 from "../../../assets/newsFeedsPhotoTest/Rectangle2.png";
import Photo1 from "../../../assets/newsFeedsPhotoTest/Rectangle2.png";

const NewsPhoto = () => {
  const photoArray: any = [Photo2, Photo1, Photo2, Photo1];
  return (
    <div className="bg-white rounded-lg relativeh-full swiper-container main-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {photoArray.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={item} className="rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsPhoto;
