import { Route, Routes } from "react-router-dom";
// import Nav from "./pages/nav.jsx";

import Footer from "./components/landing/home/homeFooter.jsx";
import AppRouter from "./router/AppRouter.jsx";
import Layout from "./components/landing/generalComponent/Layout/Layout.jsx";
// import AboutUsPage from "./pages/landingPage/AboutUsPage.jsx";
// import ContactPage from "./pages/landingPage/ContactPage.jsx";
// import HomePage from "./pages/landingPage/HomePage.jsx";


function App() {
  return (
    <div className="flex flex-col">

     {/* Landing Page */}
      {/* <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
