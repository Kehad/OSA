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
      <Layout padding="pl-[3rem]" color="bg-[#1C3519]">
        <Header />
      </Layout>
      <Layout padding="px-[3rem]" color="bg-[#FEF9E6]">
        <News />
      </Layout>
      <Layout padding="px-[3rem]" color="bg-[#ffffff]">
        <Information />
      </Layout>
      <Layout padding="px-[3rem]" color="bg-[#fef9e6]">
        <Acheievement />
      </Layout>
      <Layout padding="px-[3rem]" color="bg-[#E2FFDE66]">
        <MainSlider />
        {/* <ImageSlider /> */}
      </Layout>
      <Layout padding="px-[3rem] py-[4rem]" color="bg-[#1C3519]">
        <Footer />
      </Layout>
    </>
  );
}

export default LandingPage;
