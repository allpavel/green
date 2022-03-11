import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaMobile } from "react-icons/fa";
import Links from "../SocialLinks/SocialLinks";

const Wrapper = styled.section`
    height: 2rem;
    background-color: var(--additional-color);
    @media screen and (max-width: 535px) {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;

    @media screen and (max-width: 1280px) {
        max-width: 900px;
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
        margin-left: 2rem;
        margin-right: 0.2rem;
        color: var(--main-color);
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
                <Links />
            </Content>
        </Wrapper>
    );
};

export default TopBar;
