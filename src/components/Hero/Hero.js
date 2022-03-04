import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = styled.section`
    position: relative;
    background: rgba(0, 0, 0, 0.7);

    img {
        height: 70vh;
        width: 100vw;
        object-fit: cover;
        background-color: var(--main-color);
        opacity: 0.5 !important;
    }
`;

const HeroText = styled.div`
    position: absolute;
    text-align: center;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
`;

const Hero = () => {
    return (
        <HeroImage>
            <StaticImage src="../../images/slide/slide1.jpg" alt="slide1" className="hero" />

            <HeroText>
                <h1>Welcome to Green</h1>
                <p>
                    There were two things that were important to Tracey. The first was her dog. Anyone that had ever met
                    Tracey knew how much she loved her dog.
                </p>
            </HeroText>
        </HeroImage>
    );
};

export default Hero;
