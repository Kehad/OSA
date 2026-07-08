import { Route, Routes } from "react-router-dom";
// import Nav from "./pages/nav.tsx";

import Footer from "./components/landing/home/homeFooter.tsx";
import AppRouter from "./router/AppRouter.tsx";
import Layout from "./components/landing/generalComponent/Layout/Layout.tsx";
import { AuthProvider } from "./context/AuthContext";
// import AboutUsPage from "./pages/landingPage/AboutUsPage.tsx";
// import ContactPage from "./pages/landingPage/ContactPage.tsx";
// import HomePage from "./pages/landingPage/HomePage.tsx";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col">
        {/* Landing Page */}
        {/* <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes> */}
        <AppRouter />
        <Layout padding="3rem 4rem" bg="#1C3519">
          <Footer />
        </Layout>
      </div>
    </AuthProvider>
  );
}

export default App;
