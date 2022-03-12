import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin, FaSkype } from "react-icons/fa";

const Wrapper = styled.footer`
    background-color: black;
    color: white;
    text-align: center;
    padding: 2rem 0;
    min-height: 251px;
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        padding: 0 2rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;

        svg {
            width: 3rem;
            height: 3rem;
            border: 2px solid transparent;
            background-color: var(--main-color);
            border-radius: 50%;
            margin: 0 0.5rem;
            padding: 0.5rem;
            transition: all 0.4s ease;
        }

        svg:hover {
            background-color: rgba(92, 184, 116, .7);
        }
    }

    span {
        color: var(--main-color);
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <h2>Green</h2>
            <p>
                Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi
                placeat.
            </p>
            <div>
                <FaTwitter />
                <FaFacebook />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaSkype />
            </div>
            <p>
                © Copyright <b>Pavel Alloyarov</b>. All Rights Reserved
            </p>
            <p>
                Designed by <span>Pavel Alloyarov</span>
            </p>
        </Wrapper>
    );
};

export default Footer;
