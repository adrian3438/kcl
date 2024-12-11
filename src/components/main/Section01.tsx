'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any
}

export default function Section01({language}: Props) {
    return (
        <section className="section-01">
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-01.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_01}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_02}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-02.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_04}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_05}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-03.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_07}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_08}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-04.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_10}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_11}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-05.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_13}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_14}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-06.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_16}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_17}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-07.png" alt="" width={1920} height={1080}/>
                        <div className="banner-text">
                            <div>
                                <div>
                                    <p>{language?.main_01_19}</p>
                                    <div>
                                        <Link href="/contact" className="btn-01">{language?.main_01_20}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <span/>
        </section>
    )
}
