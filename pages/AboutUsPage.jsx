import Header from "../src/components/aboutUsPage/header/Header";
import Layout from "../src/components/generalComponent/Layout/Layout";
import Card from "../src/components/aboutUsPage/header/Card";
import { Flex } from "@chakra-ui/react";
import Story from "../src/components/aboutUsPage/story/Story";
import Purpose from "../src/components/aboutUsPage/purpose/Purpose";
import Value from "../src/components/aboutUsPage/value/Value";
import SchoolSection from "../src/components/aboutUsPage/schoolSection/SchoolSection";
import Team from "../src/components/aboutUsPage/team/Team";
import MainSlider from "../src/components/aboutUsPage/slider/mainSlider";
import FAQ from "../src/components/aboutUsPage/faq/FAQ";

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
