import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import MenuItems from "../MenuItems/MenuItems";
import { menuItems } from '../MenuItems/menuItemsList';

const Wrapper = styled.header`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    color: #212529;
`;

const Content = styled.nav`
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    height: 3rem;
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
