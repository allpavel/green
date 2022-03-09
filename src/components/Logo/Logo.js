import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoWrapper = styled(Link)`
text-decoration: none;
text-transform: uppercase;
font-size: 1.5rem;
color: var(--main-color);
padding: 0 2rem;
`;

const Logo = () => {
    return <LogoWrapper to="/">Green</LogoWrapper>
}

export default Logo;