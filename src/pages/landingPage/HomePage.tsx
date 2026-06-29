// import News from "@/components/landingPage/News";
// import MainSlider from "@/components/landingPage/slider/mainSlider";
// import Information from "@/components/landingPage/Information";
// import Acheievement from "@/components/landingPage/acheievement";
// import Layout from "@/components/generalComponent/Layout/Layout";
// import Header from "@/components/landingPage/Header";

import Layout from "@/components/landing/generalComponent/Layout/Layout";
import MainSlider from "@/components/landing/generalComponent/slider/mainSlider";
import HomeAcheievement from "@/components/landing/home/homeacheievement";
import HomeHeader from "@/components/landing/home/homeHeader";
import HomeInformation from "@/components/landing/home/homeInformation";
import HomeNews from "@/components/landing/home/homeNews";


function HomePage() {
  return (
    <>
      <Layout paddingLeft="3rem" bg="#1C3519">
        <HomeHeader />
      </Layout>
      <Layout paddingX="3rem" bg="#FEF9E6">
        <HomeNews />
      </Layout>
      <Layout paddingX="3rem" bg="#ffffff">
        <HomeInformation />
      </Layout>
      <Layout paddingX="3rem" bg="#fef9e6">
        <HomeAcheievement />
      </Layout>
      <Layout paddingX="3rem" bg="#E2FFDE">
        <MainSlider />
        {/* <ImageSlider /> */}
      </Layout>
    </>
  );
}

export default HomePage;
