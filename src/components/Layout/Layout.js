import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "../NavBar/NavBar";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <NavBar />
            <h1 className="text-muted">Hello World</h1>
            {children}
        </>
    );
};

export default Layout;
