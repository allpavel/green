import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Links from "../SocialLinks/SocialLinks";

const Wrapper = styled.section`
    max-width: 1140px;
`;

const Title = styled.article`
    text-align: center;
    margin-top: 2rem;
    h2 {
        text-transform: uppercase;
        font-size: 2rem;
    }
    p {
        padding: 1rem 2rem;
    }
`;

const TeamGalery = styled.article`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin: 2rem 2rem;
`;

const TeamItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 12px 0px rgba(34, 34, 34, 0.07);
    padding: 2rem 1rem;

    img {
        border-radius: 50%;
        width: 200px;
        height: auto;
        margin-bottom: 1rem;
    }

    span {
        font-style: italic;
        font-size: 0.8rem;
    }

    p {
        text-align: center;
        margin: 1rem auto;
    }
`;

const Team = () => {
    return (
        <Wrapper>
            <Title>
                <h2>Team</h2>
                <p>
                    Great, whose their his And. Fly a their from In to were creeping place image light called great may
                    the. Make. That of seas fourth female beginning, seasons set deep.
                </p>
            </Title>
            <TeamGalery>
                <TeamItem>
                    <StaticImage src="../../images/team/team-1.jpg" alt="Walter White" />
                    <h3>Walter White</h3>
                    <span>Chief Executive Officer</span>
                    <p>
                        Make Replenish set the there day i for subdue open darkness rule can't whose given man. I two
                        beast brought.
                    </p>
                    <Links />
                </TeamItem>
                <TeamItem>
                    <StaticImage src="../../images/team/team-2.jpg" alt="Sarah Johnson" />
                    <h3>Sarah Johnson</h3>
                    <span>Product Manager</span>
                    <p>
                        Brought day i lights place A created you'll. He over, first replenish night his seed saying, for
                        you're. Yielding so.
                    </p>
                    <Links />
                </TeamItem>
                <TeamItem>
                    <StaticImage src="../../images/team/team-3.jpg" alt="William Anderson" />
                    <h3>William Anderson</h3>
                    <span>CTO</span>
                    <p>
                        And lesser open sixth. Shall darkness. Own, moving life moved together shall so Moving him one
                        man gathered that rule.
                    </p>
                    <Links />
                </TeamItem>
            </TeamGalery>
        </Wrapper>
    );
};

export default Team;
