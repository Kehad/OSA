import News from "../components/landingPage/News";
import MainSlider from "../components/landingPage/slider/mainSlider";
import Information from "../components/landingPage/Information";
import Acheievement from "../components/landingPage/acheievement";
import Layout from "../components/generalComponent/Layout/Layout";
import Header from "../components/landingPage/Header";


function LandingPage() {
  return (
    <>
      <Layout paddingLeft="3rem" bg="#1C3519">
        <Header />
      </Layout>
      <Layout paddingX="3rem" bg="#FEF9E6">
        <News />
      </Layout>
      <Layout paddingX="3rem" bg="#ffffff">
        <Information />
      </Layout>
      <Layout paddingX="3rem" bg="#fef9e6">
        <Acheievement />
      </Layout>
      <Layout paddingX="3rem" bg="#E2FFDE">
        <MainSlider />
        {/* <ImageSlider /> */}
      </Layout>
    </>
  );
}

export default LandingPage;
