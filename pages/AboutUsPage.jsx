import React from "react";
import Header from "../src/components/aboutUsPage/header/Header";
import Layout from "../src/components/generalComponent/Layout/Layout";

function AboutUsPage() {
  return (
    <>
      <Layout
        padding="3rem"
        bgImage={`linear-gradient(rgba(226, 255, 222, 0.4), rgba(255, 255, 255, 0.2))`}
      >
        <Header />
      </Layout>
    </>
  );
}

export default AboutUsPage;
