import { Text } from "@chakra-ui/react";
import Header from "../src/components/contactPage/header/Header";
import Message from "../src/components/contactPage/message/message";
import Layout from "../src/components/generalComponent/Layout/Layout";

function ContactPage() {
  return (
    <>
      <Header />
      <Layout paddingY="4rem" bg='#11200F'>
        <Message />
      </Layout>
    </>
  );
}

export default ContactPage;
