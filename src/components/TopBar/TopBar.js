import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaMobile, FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    background-color: var(--additional-color);
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    
    @media screen and (max-width: 1500px) {
        width: 1000px;
    }

    @media screen and (max-width: 1280px) {
        width: 600px;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;

    a {
        text-decoration: none;
        color: black;
    }

    svg {
        margin-left: 1rem;
        margin-right: 0.2rem;
        color: var(--main-color);
    }
`;

const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    svg {
        margin-left: 0.5rem;
        color: grey;
        transition: all 0.4s ease-out;
    }

    svg:hover {
        color: var(--main-color);
        cursor: pointer;
    }
`;

const TopBar = () => {
    return (
        <Wrapper>
            <Content>
                <ContactInfo>
                    <FaEnvelope />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                    <FaMobile />
                    <span>+ 1 234 567 8909</span>
                </ContactInfo>
                <SocialLinks>
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaLinkedin />
                </SocialLinks>
            </Content>
        </Wrapper>
    );
};

export default TopBar;
