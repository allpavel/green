import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Wrapper = styled.div`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    cursor: pointer;
    z-index: 1000;
    visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
    opacity: ${({ isVisible }) => isVisible ? "1" : "0"};
    transition: all 0.4s ease;
    

    svg {
        height: 3rem;
        width: 3rem;
        color: var(--main-color);
    }
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            console.log("scroll");
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        console.log(isVisible);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return <Wrapper isVisible={isVisible}>{isVisible && <BsFillArrowUpSquareFill onClick={scrollToTop} />}</Wrapper>;
};

export default ScrollToTop;
