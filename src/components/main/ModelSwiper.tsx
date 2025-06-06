'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";

export default function ModelSwiper() {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/3d_modeling_rev1.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/3d_modeling_rev2.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/3d_modeling_rev3.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/3d_modeling_rev4.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/trunnion-ball-valve-300lb-10in.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/300LB-24.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/DBB-PLUG-VALVE-150LB-RF-DN250A.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/sleeved-plug-valve-150lb-rf-2-inch.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="banner-area">
          <Image src="/images/main/3d_modeling_rev5.jpg" alt="" width={1920} height={944} style={{verticalAlign: 'top'}}/>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
