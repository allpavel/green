import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "../NavBar/NavBar";

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #5cb874;
        --additional-color: #edffef;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body, html {
        font-family: "Open Sans", sans-serif;
        height: 100%;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <NavBar />
            {children}
        </>
    );
};

export default Layout;
