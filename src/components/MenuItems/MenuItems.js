import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";

const NavItem = styled.li`
    position: relative;
    margin: 0 2rem;
    font-size: 1rem;

    a {
        display: block;
        text-decoration: none;
    }
    button {
        color: inherit;
        font-size: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
    }
`;

const Arrow = styled.span`
    &::after {
        content: "";
        display: inline-block;
        margin-left: 0.28em;
        vertical-align: 0.09em;
        border-top: 0.42em solid;
        border-right: 0.32em solid transparent;
        border-left: 0.32em solid transparent;
    }
`;

const MenuItems = ({ menu, depthLevel }) => {
    const [isDropdown, setIsDropdown] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setIsDropdown(prev => !prev);
    };

    const handleMouseEnter = () => {
        if (window.innerWidth > 960) {
            setIsDropdown(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 960) {
            setIsDropdown(false);
        }
    };

    useEffect(() => {
        const handler = event => {
            if (isDropdown && ref.current && !ref.current.contains(event.target)) {
                setIsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [isDropdown]);

    return (
        <NavItem ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {menu.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isDropdown ? "true" : "false"}
                        onClick={handleClick}
                    >
                        {menu.title} {depthLevel > 0 ? <span>&raquo;</span> : <Arrow />}
                    </button>
                    <Dropdown submenus={menu.submenu} isDropdown={isDropdown} depthLevel={depthLevel} />
                </>
            ) : (
                <Link to={`/${menu.title.toLowerCase()}`}>{menu.title}</Link>
            )}
        </NavItem>
    );
};

export default MenuItems;
