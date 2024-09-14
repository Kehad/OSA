import { Route, Routes } from "react-router-dom";
import Nav from "../pages/nav.jsx";
import LandingPage from "../pages/landingPage.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<LandingPage />} />    
      </Routes>
    </>
  );
}

export default App;
