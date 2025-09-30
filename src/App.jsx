import { Route, Routes } from "react-router-dom";
import Nav from "./pages/nav.jsx";

import Layout from "./components/generalComponent/Layout/Layout.jsx";
import Footer from "./components/landingPage/Footer.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <div className="flex flex-col">
      {/* <Nav /> */}
      {/* <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes> */}
      <AppRouter />
      <Layout  padding="3rem 4rem" bg="#1C3519">
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
