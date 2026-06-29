import ContactHeader from "@/components/landing/contact/contactHeader";
import ContactMap from "@/components/landing/contact/contactMap";
import ContactMessage from "@/components/landing/contact/contactMessage";
import ContactSupport from "@/components/landing/contact/contactSupport";
import Layout from "@/components/landing/generalComponent/Layout/Layout";


function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Layout paddingY="4rem" bg="#11200F">
        <ContactSupport />
      </Layout>
      <ContactMessage />
      <ContactMap />
    </>
  );
}

export default ContactPage;
