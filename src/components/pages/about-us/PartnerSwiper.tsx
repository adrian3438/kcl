'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

export default function GreetingSwiper() {
    return (
        <section className="greeting-swiper">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={15}
            >
                <SwiperSlide>
                    <Image src="/images/sub/partner/kcl-partner-1.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/partner/kcl-partner-2.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>


            </Swiper>
            <span/>
        </section>
    )
}
