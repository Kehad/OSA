import { Button, Text } from "@chakra-ui/react";
import Header from "../src/components/contactPage/header/Header";
import Contact from "../src/components/contactPage/contact/Contact";
import Layout from "../src/components/generalComponent/Layout/Layout";
import Message from "../src/components/contactPage/message/message";
import Map from "../src/components/contactPage/map/Map";

function ContactPage() {
  return (
    <>
      <Header />
      <Layout paddingY="4rem" bg="#11200F">
        <Contact />
      </Layout>
      <Message />
      <Map />
    </>
  );
}

export default ContactPage;
