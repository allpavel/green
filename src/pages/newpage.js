import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout/Layout";

const Wrapper = styled.div`
height: 100vh;
`;

export default function NewPage() {
    return (
        <Layout>
            <Wrapper>
            <h1>Hello World</h1>
            </Wrapper>
        </Layout>
        
    )
}