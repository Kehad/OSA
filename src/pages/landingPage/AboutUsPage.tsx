import { Flex } from "@chakra-ui/react";
import AboutHeader from "@/components/landing/aboutUs/aboutHeader";
import AboutCard from "@/components/landing/aboutUs/aboutCard";
import AboutStory from "@/components/landing/aboutUs/aboutStory";
import AboutPurpose from "@/components/landing/aboutUs/aboutPurpose";
import Layout from "@/components/landing/generalComponent/Layout/Layout";
import AboutValue from "@/components/landing/aboutUs/aboutValue";
import AboutSchoolSection from "@/components/landing/aboutUs/aboutSchoolSection";
import AboutTeam from "@/components/landing/aboutUs/aboutTeam";
import AboutFAQ from "@/components/landing/aboutUs/aboutFAQ";
import MainSlider from "@/components/landing/generalComponent/slider/mainSlider";



function AboutUsPage() {
  return (
    <>
      <Layout
        padding="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <AboutHeader />
        <Flex alignItems="center" justifyContent="center" paddingTop="4rem">
          <AboutCard />
        </Flex>
      </Layout>

      <AboutStory />

      <Flex alignItems="center" justifyContent="center" paddingBottom="4rem">
        <AboutPurpose />
      </Flex>

      <AboutValue />
      <Layout
        padding="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <AboutSchoolSection />
      </Layout>

      <AboutTeam />

      <AboutFAQ />

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
