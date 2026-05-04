import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidenav from "../navigations/sidebar";
import Header from "../navigations/header/Header";

const sidenavItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    routeLink: "overview",
  },
  {
    id: "riders",
    label: "Riders",
    routeLink: "riders",
  },
  {
    id: "revenue",
    label: "Revenue",
    routeLink: "revenue",
  },
  {
    id: "settings",
    label: "Settings",
    routeLink: "settings",
  },
];

export const DashboardLayout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth < 768);

  useEffect(() => {
    const activeRoute = location.pathname.split("/")[2];
    setActiveItem(activeRoute || "dashboard");
  }, [location.pathname]);

  const handleSelectedItem = (id) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex w-full overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixe bottom-0 top-0 w-[250px] sm:w-[20rem] bg-white border-r border-r-base-color z-50 transition-transform duration-300
        ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidenav
          items={sidenavItems}
          activeItem={activeItem}
          onItemSelect={handleSelectedItem}
        />
      </div>

      {/* Main Content */}
      <div className="ml-0 md:ml-[240px flex flex-col h-screen w-full relative">
        <Header />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

       
        {/* Mobile Overlay */}
        {/* {isMobileMenuOpen && showHamburger && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed h-screen w-full bg-black bg-opacity-50 inset-0 z-40"
          />
        )} */}
      </div>
    </div>
  );
};
