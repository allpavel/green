import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import MenuItems from "../MenuItems/MenuItems";
import TopBar from "../TopBar/TopBar";
import { menuItems } from '../MenuItems/menuItemsList';

const Wrapper = styled.header`
    width: 100%;
`;

const Content = styled.nav`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 3rem;

    @media screen and (max-width: 1500px) {
        max-width: 1000px;
    }

    @media screen and (max-width: 1280px) {
        max-width: 600px;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    justify-content: end;
    width: 100%;
    list-style: none;
    float: right;
`;

const NavBar = () => {
    
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <NavLinks>
                    {menuItems.map(menu => {
                        const depthLevel = 0;
                        return <MenuItems menu={menu} depthLevel={depthLevel} key={uuidv4()} />
})}
                </NavLinks>
            </Content>
        </Wrapper>
    );
};

export default NavBar;
