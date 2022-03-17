import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import WhyUs from "../components/WhyUs/WhyUs";
import Clients from "../components/Clients/Clients";
import Seo from "../components/SEO/SEO";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const HomePage = () => {
    return (
        <Layout>
            <Seo
                title={"Home"}
                description="Which, forth behold may together moveth together, hath, were sea land together evening from. Third. Saw every fourth seed light so fruit appear stars. It set morning won't dry from."
            />
            <Hero />
            <FeaturedServices />
            <WhyUs />
            <Clients />
            <ScrollToTop />
        </Layout>
    );
};

export default HomePage;
