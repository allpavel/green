import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 331px);
    justify-content: center;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        margin: 0;
        font-size: 6rem;
    }
    h3 {
        font-size: 2rem;
    }
`;

export default function Error() {
    return (
        <Layout>
            <Seo title="Error" />
            <Wrapper className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                </section>
            </Wrapper>
        </Layout>
    );
}
