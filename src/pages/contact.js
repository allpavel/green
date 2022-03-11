import React from "react";
import styled from "styled-components";
import { BsGeoAlt, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Layout from "../components/Layout/Layout";

const Wrapper = styled.main`
    max-width: 1140px;
    margin: 0 auto;
`;

const Title = styled.article`
    margin: 2rem 0;
    text-align: center;

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        padding: 1rem 2rem;
    }
`;

const Content = styled.article`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
    border-top: 3px solid var(--main-color);
    border-bottom: 3px solid var(--main-color);
    padding: 2rem;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

    div {
        margin-bottom: 1rem;
    }
    svg {
        margin-right: 1rem;
        width: auto;
        height: 3rem;
        padding: 0.5rem;
        border-radius: 50%;
        float: left;
        background-color: #eaf6ed;
        fill: var(--main-color);
        transition: all 0.5s ease;
    }

    div:hover svg {
        fill: white;
        background-color: #5cb874;
    }
`;

const ContactForm = styled.form`
    border-top: 3px solid var(--main-color);
    border-bottom: 3px solid var(--main-color);
    padding: 2rem;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

    input {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        outline: none;
        border: 1px solid black;
        transition: all 0.4s ease;
    }
    input:focus {
        border: 1px solid var(--main-color);
    }
`;

const Contacts = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    height: auto;

    div {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-bottom: 1rem;
        padding: 0 0.5rem 0.5rem;
    }
`;

const Subject = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem 1.5rem;

`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem 1.5rem;

    textarea {
        font-size: 1rem;
        padding: 0.5rem;
        outline: none;
        border-radius: 5px;
    }

    textarea:focus {
        border: 1px solid var(--main-color);
        
    }
`;

const Button = styled.div`
text-align: center;

button {
    background: var(--main-color);
    border: 0;
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    transition: all 0.4s ease;
    border-radius: 5px;

    :hover {
        background: #6ec083;
    }
}
`;

const Contact = () => {
    return (
        <Layout>
            <Wrapper>
                <Title>
                    <h1>Contact</h1>
                    <p>
                        Evening seed creature had creeping cattle. Open herb be night above void darkness day firmament
                        moveth don't seasons. Given us own bring all was to grass. Is moveth divided male the that.
                        Which greater heaven let us open very a.
                    </p>
                </Title>
                <Content>
                    <ContactInfo>
                        <div>
                            <BsGeoAlt />
                            <h2>Location:</h2>
                            <p>112 View St, Mountain View, CA 94041</p>
                        </div>
                        <div>
                            <AiOutlineMail />
                            <h2>Email:</h2>
                            <p>contact@example.com</p>
                        </div>
                        <div>
                            <BsPhone />
                            <h2>Call:</h2>
                            <p>+1 234 567 8990</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.4638445820358!2d-122.07824997074735!3d37.39325229873943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb731497de027%3A0x4d1e9418b1979d37!2zMTEyIFZpZXcgU3QsIE1vdW50YWluIFZpZXcsIENBIDk0MDQxLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1647012632373!5m2!1sru!2sru"
                            width="100%"
                            height="290"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </ContactInfo>
                    <ContactForm>
                        <Contacts>
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input id="name" type="text" required autoComplete="off" />
                            </div>
                            <div>
                                <label htmlFor="name">Your Email</label>
                                <input id="email" type="text" required autoComplete="off" />
                            </div>
                        </Contacts>
                        <Subject>
                            <label htmlFor="name">Subject</label>
                            <input id="name" type="text" required autoComplete="off" />
                        </Subject>
                        <TextArea>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows={10} />
                        </TextArea>
                        <Button>
                            <button>Send Message</button>
                        </Button>
                    </ContactForm>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default Contact;
