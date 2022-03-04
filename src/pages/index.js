import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";

const HomePage = () => {
    return (
        <>
            <Layout />
            <Hero />
            <FeaturedServices />
        </>
    );
};

export default HomePage;
