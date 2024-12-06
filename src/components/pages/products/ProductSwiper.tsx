'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import {Navigation} from "swiper/modules";

interface Props {
    productImageList?: string[];
}

export default function ProductSwiper({productImageList}: Props) {
    return (
        <section className="product-swiper">
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
            >
                {productImageList?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} alt="" width={400} height={225}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
