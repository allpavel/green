import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout/Layout";
import Team from "../components/Team/Team";
import Seo from "../components/SEO/SEO";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 1140px;
    margin: 0 auto;
`;

const Heading = styled.article`
    text-align: center;
    margin-top: 2rem;

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
    }

    p {
        padding: 1rem 2rem;
    }
`;

const Content = styled.article`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

    p {
        padding: 1rem 2rem;
    }
`;

const Text = styled.div`
    h2 {
        padding: 1rem 2rem;
    }
`;

const Image = styled.div`
    padding: 1rem 2rem;
`;

const AboutPage = () => {
    return (
        <Layout>
            <Seo title={"About"} description={"Land day. There grass evening fish living green which moving."} />
            <Wrapper>
                <Heading>
                    <h1>About Us</h1>
                    <p>
                        For for every, every also. Day it also, kind form saying was beast. Our winged creepeth called,
                        without, form sea may there open gathering shall seasons, in which set signs.
                    </p>
                </Heading>
                <Content>
                    <Text>
                        <h2>
                            Vestibulum tortor ac. Faucibus quisque torquent eleifend nisl. Ipsum metus fringilla blandit
                            erat fermentum sagittis nunc aptent, nunc condimentum conubia.
                        </h2>
                        <p>
                            Sociosqu vitae sociosqu nonummy, congue senectus tincidunt proin arcu magna felis tempus
                            vulputate curabitur eleifend nibh ac conubia tempus nam montes bibendum porta euismod risus
                            venenatis taciti odio sociis amet.
                        </p>
                        <p>
                            Midst heaven meat said life, second male earth set also years subdue deep life lesser make
                            beginning is whales fowl.
                        </p>
                        <p>
                            Moved. Likeness bring so set. Forth hath lesser lesser. Days land moved for also subdue
                            beast likeness. I place. Herb.
                        </p>
                        <p>
                            Fruitful creeping our which their. Two two let likeness. Male stars first whose. Darkness
                            image all appear yielding creature, gathered was shall for hath it appear it. Midst thing
                            good itself third moveth. There. There gathering them, moving air forth. Us were earth good
                            fifth yielding midst fly thing. Moved.
                        </p>
                    </Text>
                    <Image>
                        <StaticImage src="../images/about.jpg" alt="about us image" />
                    </Image>
                </Content>
                <Team />
            </Wrapper>
        </Layout>
    );
};

export default AboutPage;
