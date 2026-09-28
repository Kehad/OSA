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
      <div className="min-h-screen">
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
