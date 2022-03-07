import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper";
import { StaticImage } from "gatsby-plugin-image";
import slide1 from '../../images/slide/slide1.jpg';
import slide2 from '../../images/slide/slide-2.jpg';
import slide3 from '../../images/slide/slide-3.jpg';
import "swiper/css";
import "swiper/css/bundle";
import "./Clients.css";

const Clients = () => {
    return (
            <Swiper
            tag="section"
                slidesPerView={2}
                spaceBetween={20}
                centeredSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                // autoplay={{ delay: 2000 }}
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
            >
                <SwiperSlide>
                    <div className="image-slider">
                        <img src={slide1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slider">
                        <img src={slide2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slider">
                        <img src={slide3} alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <StaticImage src="../../images/clients/client-2.png" alt="slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-3.png" alt="slide-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-4.png" alt="slide-4" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-5.png" alt="slide-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-6.png" alt="slide-6" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-7.png" alt="slide-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-8.png" alt="slide-8" />
                </SwiperSlide> */}
            </Swiper>
    );
};

export default Clients;
