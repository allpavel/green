import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import "./Clients.css";

const Wrapper = styled.section`
    max-width: 1140px;
    margin: 2rem auto;
`;

const Content = styled.div`
    margin: 1rem 0;
    text-align: center;
    padding: 0 2rem;

    h2 {
        text-transform: uppercase;
        margin: 1rem auto;
    }
`;

SwiperCore.use([Pagination, Autoplay]);

const Clients = () => {
    return (
        <Wrapper>
            <Content>
                <h2>Our clients</h2>
                <p>
                    From living which you'll give kind brought. Midst gathered. Heaven our very man of brought yielding
                    sea fifth waters fruitful their day their him were, may air, bearing you'll. Fourth.
                </p>
            </Content>
            <Swiper
                tag="div"
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                autoHeight={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                    },
                }}
            >
                <SwiperSlide>
                    <StaticImage src="../../images/clients/client-1.png" alt="slide-1" />
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default Clients;
