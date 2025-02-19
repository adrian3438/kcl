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
              <div style={{padding: '56.25% 0 0 0', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/1057774474?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&background=1&muted=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}} title="kclvalve_homepage_main_rev6"></iframe>
              </div>

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
