import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    max-width: 1140px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(23.75rem, 1fr));
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    
`;


const Item = styled.div`
    padding: 1rem 2rem;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;

    &:nth-child(1), &:nth-child(4) {
        border-left: none
    }

    @media screen and (max-width: 1154px) {
        &:nth-child(4) {
        border-left: 1px solid #eee;
    }
    }

    h2 {
        color: var(--main-color);
    }

    h3 {
        margin: 1rem 0;
    }
`;

const WhyUs = () => {
    return (
        <Wrapper>
                <Item>
                    <h2>01</h2>
                    <h3>Lorem Ipsum</h3>
                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                </Item>
                <Item>
                    <h2>02</h2>
                    <h3>Repellat Nihil</h3>
                    <p>
                        Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno
                        para dest
                    </p>
                </Item>
                <Item>
                    <h2>03</h2>
                    <h3>Ad ad velit qui</h3>
                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                </Item>
                <Item>
                    <h2>04</h2>
                    <h3>Repellendus molestiae</h3>
                    <p>
                        Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando
                        casa
                    </p>
                </Item>
                <Item>
                    <h2>05</h2>
                    <h3>Sapiente Magnam</h3>
                    <p>
                        Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est
                        quibusdam
                    </p>
                </Item>
                <Item>
                    <h2>06</h2>
                    <h3>Facilis Impedit</h3>
                    <p>
                        Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus
                        corporis sequi
                    </p>
                </Item>
        </Wrapper>
    );
};

export default WhyUs;
