import React from "react";
import styled from "styled-components";
import {FaLaptop, FaBriefcase, } from 'react-icons/fa'
import { BsCalendar2Week } from 'react-icons/bs';

const Wrapper = styled.section`
    background-color: var(--additional-color);
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23.75rem, 1fr));
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
`;

const Content = styled.div`
    padding: 1rem 2rem;
    
    svg {
        width: 3rem;
        height: auto;
        margin-bottom: 0.8rem;
    }

    h2 {
        margin-bottom: 0.8rem;
    }
`;

const FeaturedServices = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <FaLaptop />
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Fourth fill sixth i open second their yielding Us wherein he life sixth sea seas wherein,
                        greater fruit beginning had.
                    </p>
                </Content>
                <Content>
                    <FaBriefcase />
                    <h2>Dolor Sitema</h2>
                    <p>
                        Doesn't stars life fifth god image sea form seas, so yielding without fifth unto moving days
                        dominion day great to.
                    </p>
                </Content>
                <Content>
                    <BsCalendar2Week />
                    <h2>Sed ut perspiciatis</h2>
                    <p>
                        She'd also. Moving waters land green wherein. Had. Blessed abundantly may very together seas
                        lights third, for don't creature void.
                    </p>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default FeaturedServices;
