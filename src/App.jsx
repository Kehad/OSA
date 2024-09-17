import { Route, Routes } from "react-router-dom";
import Nav from "../pages/nav.jsx";
import LandingPage from "../pages/landingPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import Layout from "./components/generalComponent/Layout/Layout.jsx";
import Footer from "./components/landingPage/footer/Footer.jsx";
import AboutUsPage from "../pages/AboutUsPage.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Layout padding="3rem 4rem" bg="#1C3519">
        <Footer />
      </Layout>
    </>
  );
}

export default App;
