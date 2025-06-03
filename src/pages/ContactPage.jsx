import Header from "../components/contactPage/Header";
import Contact from "../components/contactPage/Contact";
import Layout from "../components/generalComponent/Layout/Layout";
import Message from "../components/contactPage/Message";
import Map from "../components/contactPage/Map";

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
