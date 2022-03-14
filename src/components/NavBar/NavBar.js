import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { MdMenu, MdClose } from "react-icons/md";
import MenuItems from "../MenuItems/MenuItems";
import TopBar from "../TopBar/TopBar";
import Logo from "../Logo/Logo";
import { menuItems } from "../MenuItems/menuItemsList";
import NewMobileMenu from "../NewMobileMenu/NewMobileMenu";

const Wrapper = styled.header`
    width: 100%;
`;

const Content = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    height: 3rem;

    @media screen and (max-width: 1500px) {
        max-width: 1000px;
    }

    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    justify-content: end;
    width: 100%;
    list-style: none;
    float: right;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: none;
        /* opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
        height: ${({ isOpen }) => isOpen ? "100vh" : "0"};
        flex-direction: column;
        justify-content: start;
        align-items: center;
        position: absolute;
        top: 40px;
        background-color: white;
        z-index: 5;
        transition: all 0.3s ease-in-out;

        li {
            height: 3rem;
            display: flex;
            align-items: center;

            a {
                font-size: 1.2rem;
            }

            button {
                font-size: 1.2rem;
            }
        } */
    }
`;

const MenuIcon = styled(MdMenu)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        width: 2rem;
        height: 2rem;
        color: black;
        margin-right: 2rem;
        cursor: pointer;
    }
`;

const CloseIcon = styled(MdClose)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        width: 2rem;
        height: 2rem;
        color: black;
        margin-right: 2rem;
        cursor: pointer;
    }
`;

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handler = event => {
            if (isOpen && ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [isOpen]);

    return (
        <Wrapper ref={ref}>
            <TopBar />
            <Content>
                <Logo />
                <NavLinks isOpen={isOpen}>
                    {menuItems.map(menu => {
                        const depthLevel = 0;
                        return <MenuItems menu={menu} depthLevel={depthLevel} key={uuidv4()} />;
                    })}
                </NavLinks>
                {isOpen ? <CloseIcon onClick={handleClick}/> : <MenuIcon onClick={handleClick} />}
                <NewMobileMenu isOpen={isOpen} />
            </Content>
        </Wrapper>
    );
};

export default NavBar;
