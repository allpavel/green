import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: rgba(92, 184, 116, 1);;
        --additional-color: #edffef;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body, html {
        font-family: "Open Sans", sans-serif;
        max-width: 100%;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
