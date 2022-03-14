import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { MdArrowDropDown } from "react-icons/md";

const Wrapper = styled.nav`
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 40px;
    background-color: white;
    overflow-x: hidden;
    z-index: 100;
    transition: all 0.3s ease-in-out;

    @media screen and (min-width: 769px) {
        display: none;
    }

    a {
        margin: 2rem 0;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #000;
        transition: all 0.5s ease;
    }

    a:hover {
        color: #0abf19;
    }

    .active {
        color: #0abf19;
    }
`;

const Dropdown = styled.div`
    position: relative;
    label {
        margin: 2rem 0;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        width: 100%;
        display: block;
        z-index: 3;
        position: relative;
    }

    li {
        list-style: none;
    }

    label:hover {
        color: #0abf19;
        cursor: pointer;
    }

    ul,
    input[type="checkbox"] {
        display: none;
    }

    input:checked ~ ul {
        display: block;
    }

    div {
        display: flex;
        align-items: center;
    }
`;

const Arrow = styled(MdArrowDropDown)`
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    float: left;
    z-index: 0;
`;

const NewMobileMenu = ({ isOpen }) => {
    return (
        <Wrapper isOpen={isOpen}>
            <Link to={`/`} activeClassName="active">
                Home
            </Link>
            <Link to={`/about`} activeClassName="active">
                About
            </Link>
            <Link to={`/services`} activeClassName="active">
                Services
            </Link>
            <Dropdown>
                <input type="checkbox" id="D" />
                <div>
                    <Arrow />
                    <label htmlFor="D">Dropdown</label>
                </div>
                <ul>
                    <li>menu 1</li>
                    <li>menu 1</li>
                    <li>menu 1</li>
                    <li>
                        <Arrow />
                        <input type="checkbox" id="F" />
                        <label htmlFor="F">Submenu</label>
                        <ul>
                            <li>Submenu 1</li>
                            <li>Submenu 1</li>
                            <li>Submenu 1</li>
                        </ul>
                    </li>
                </ul>
            </Dropdown>
            <Link to={`/contact`} activeClassName="active">
                Contact
            </Link>
        </Wrapper>
    );
};

export default NewMobileMenu;
