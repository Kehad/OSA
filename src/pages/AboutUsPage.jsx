import Header from "../components/aboutUsPage/Header"
import Layout from "../components/generalComponent/Layout/Layout";

import { Flex } from "@chakra-ui/react";
import Story from "../components/aboutUsPage/Story";
import Purpose from "../components/aboutUsPage/Purpose";
import Value from "../components/aboutUsPage/Value";
import SchoolSection from "../components/aboutUsPage/SchoolSection";
import Team from "../components/aboutUsPage/Team";
import MainSlider from "../components/aboutUsPage/slider/mainSlider";
import FAQ from "../components/aboutUsPage/FAQ";
import Card from "../components/aboutUsPage/Card";

function AboutUsPage() {
  return (
    <>
      <Layout
        padding="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <Header />
        <Flex alignItems="center" justifyContent="center" paddingTop="4rem">
          <Card />
        </Flex>
      </Layout>

      <Story />

      <Flex alignItems="center" justifyContent="center" paddingBottom="4rem">
        <Purpose />
      </Flex>

      <Value />
      <Layout
        padding="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <SchoolSection />
      </Layout>

      <Team />

      <FAQ />

      <Layout
        paddingX="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <MainSlider />
      </Layout>
    </>
  );
}

export default AboutUsPage;
