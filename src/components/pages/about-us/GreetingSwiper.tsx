'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

export default function GreetingSwiper() {
    return (
        <section className="greeting-swiper">
            {/* <Swiper
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
                    <Image src="/images/sub/greeting/greeting-01.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-02.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-03.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-04.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-05.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-06.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-07.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-08.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-09.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/sub/greeting/greeting-10.jpg" alt="" width={600} height={500}/>
                </SwiperSlide>


            </Swiper> */}
            <span/>
        </section>
    )
}
