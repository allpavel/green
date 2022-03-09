import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import MenuItems from "../MenuItems/MenuItems";

const Wrapper = styled.ul`
    position: absolute;
    left: ${({ depthLevel }) => depthLevel > 1 ? "100%" : "auto"};
    top: ${({ depthLevel }) => depthLevel > 1 ? "-20px" : ""};
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08), 0 4px 6px -2px rgba(71, 63, 79, 0.16);
    font-size: 0.875rem;
    z-index: 9999;
    padding: 0.5rem 0;
    list-style: none;
    background-color: #fff;
    border-radius: 0.5rem;
    display: ${({ isDropdown }) => isDropdown ? 'block' : 'none'};
    min-width: 8.5rem;

    @media screen and (max-width: 1030px) {
        left: ${({ depthLevel }) => depthLevel > 1 ? "-140%" : "auto"};     
    }

`;


const Dropdown = ({ submenus, isDropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    return (
        <Wrapper isDropdown={isDropdown} depthLevel={depthLevel}>
            {submenus.map(submenu => (
                <MenuItems menu={submenu} key={uuidv4()} depthLevel={depthLevel} />
            ))}
        </Wrapper>
    );
};


export default Dropdown;