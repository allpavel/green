import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    svg {
        margin-left: 0.5rem;
        color: grey;
        transition: all 0.4s ease-out;

        @media screen and (max-width: 735px) {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--main-color);

        }
    }

    svg:hover {
        color: var(--main-color);
        cursor: pointer;
    }
`;

const Links = () => {
    return (
        <SocialLinks>
            <FaTwitter />
            <FaFacebook />
            <FaInstagramSquare />
            <FaLinkedin />
        </SocialLinks>
    );
};

export default Links;