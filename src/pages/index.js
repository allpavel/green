import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import WhyUs from "../components/WhyUs/WhyUs";

const HomePage = () => {
    return (
        <>
            <Layout />
            <Hero />
            <FeaturedServices />
            <WhyUs />
        </>
    );
};

export default HomePage;
