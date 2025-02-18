'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any
}

export default function Section01({language}: Props) {
    return (
        <section className="section-01">
          <div className="banner-area">
            <div className="banner-text">
               <div><div>
               <p>World leader in valve supply</p>
                             <div>
                                <Link href="/contact" className="btn-01">{language?.main_01_02}</Link>
                            </div>
               </div></div>
            </div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="main-video-01"
                        >
                            <source src="/video/kclvalve_homepage_main_rev6.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        {/* <Link href="#">
                            <p>OOO Test</p>

                            <p>Go to OOO valve</p>
                        </Link> */}
          </div>


          <section>
            <Swiper
                autoplay={{
                    delay: 3000,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                 <div className="banner-area">
                    <Image src="/images/main/main-banner-02.jpg" alt="" width={1920} height={944}/>
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
                        <Image src="/images/main/main-banner-03.jpg" alt="" width={1920} height={944}/>
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
                        <Image src="/images/main/main-banner-04.jpg" alt="" width={1920} height={944}/>
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
                        <Image src="/images/main/main-banner-05.jpg" alt="" width={1920} height={944}/>
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
                        <Image src="/images/main/main-banner-06.jpg" alt="" width={1920} height={944}/>
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
                        <Image src="/images/main/main-banner-07.jpg" alt="" width={1920} height={944}/>
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
                <SwiperSlide>
                    <div className="banner-area">
                        <Image src="/images/main/main-banner-01.jpg" alt="" width={1920} height={944}/>
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
            </Swiper>
            </section>

        </section>
    )
}
