'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

export default function GreetingSwiper() {
  return (
    <section className="greeting-swiper">
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/partner/kcl-partner-1.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/partner/kcl-partner-2.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/partner/kcl-partner-3.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-01.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-02.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-03.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-04.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-05.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-06.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-07.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-08.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-09.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-area">
            <Image src="/images/sub/greeting/greeting-10.jpg" alt="" width={1560} height={876}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
