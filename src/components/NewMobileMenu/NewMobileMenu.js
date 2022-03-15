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
        width: 100%;
        margin: 1.5rem 0;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
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
    width: 100%;
    label {
        margin: 1.5rem 0;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        z-index: 3;
        position: relative;
        transition: all .4s ease;
    }

    li {
        color: #000;
        list-style: none;
        text-align: right;
        font-size: 1.2rem;
        margin: 0 1rem 1rem;
        transition: all .4s ease;
    }

    li:hover {
        color: #0abf19;
    }

    li label {
        margin: 0 0;
        text-transform: lowercase;
        font-size: 1.2rem;
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

    input:checked + div svg {
        transform: rotate(0deg);
        transition: .2s;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Arrow = styled(MdArrowDropDown)`
    position: relative;
    left: 6px;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    transform: rotate(-90deg);
    transition: .2s;
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
                    <li>menu 2</li>
                    <li>menu 3</li>
                    <li>
                        <input type="checkbox" id="F" />
                        <div>
                            <Arrow />
                            <label htmlFor="F">Submenu</label>
                        </div>
                        <ul>
                            <li>menu 1</li>
                            <li>menu 2</li>
                            <li>menu 3</li>
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
