import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = styled.section`
    width: 100%;
    height: 50vh;
    background-image: url("../../images/slide/slide1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
`;

const HeroText = styled.div``;

const Hero = () => {
    return (
        <HeroImage>
            <HeroText>
                <h1>This is a Heading</h1>
                <p>This is a paragraph</p>
            </HeroText>
        </HeroImage>
    );
};

export default Hero;
