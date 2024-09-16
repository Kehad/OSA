import React from "react";
import Header from "../src/components/landingPage/Header/Header";
import Layout from "../src/components/generalComponent/Layout/Layout";
import Information from "../src/components/landingPage/Information/Information";
import News from "../src/components/landingPage/News/News";
import Acheievement from "../src/components/landingPage/achievement/acheievement";
import ImageSlider from "../src/components/landingPage/slider/slider";
import MainSlider from "../src/components/landingPage/slider/mainSlider";
import Footer from "../src/components/landingPage/footer/Footer";

function LandingPage() {
  return (
    <>
      <Layout paddingLeft="3rem" bg='#1C3519'>
        <Header />
      </Layout>
      <Layout paddingX="3rem" bg='#FEF9E6'>
        <News />
      </Layout>
      <Layout paddingX="3rem" bg='#ffffff'>
        <Information />
      </Layout>
      <Layout paddingX="3rem" bg='#fef9e6'>
        <Acheievement />
      </Layout>
      <Layout paddingX="3rem" bg='#E2FFDE'>
        <MainSlider />
        {/* <ImageSlider /> */}
      </Layout>
     
    </>
  );
}

export default LandingPage;
