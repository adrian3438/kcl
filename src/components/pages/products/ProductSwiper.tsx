'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import {Navigation, Pagination} from "swiper/modules";

interface Props {
  productImageList?: string[];
}

export default function ProductSwiper({productImageList}: Props) {
  return (
    <section className="product-swiper">
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        {productImageList?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-area">
              <Image src={image} alt="" width={400} height={225}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
