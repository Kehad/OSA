import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../../navigations/header/header";
// import Sidenav from "../../navigations/sidenav/sidenav";
// import ContactSupportLogo from "../../../assets/svg/contact_support";
// import AttacheMoneyLogo from "../../../assets/svg/attach_money";
// import VerifyUserLogo from "../../../assets/svg/verified_user";
import { Outlet } from "react-router-dom";
import Sidenav from "../../navigations/sidebar";

const sidenavItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    // icon: <ContactSupportLogo />,
    routeLink: "overview",
  },
  {
    id: "riders",
    label: "Riders",
    // icon: <VerifyUserLogo />,
    routeLink: "riders",
  },
  {
    id: "revenue",
    label: "Revenue",
    // icon: <AttacheMoneyLogo />,
    routeLink: "revenue",
  },
  {
    id: "settings",
    label: "Settings",
    // icon: <ContactSupportLogo />,
    routeLink: "settings",
  },
];

export const DashboardLayout = () => {
  // const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth < 768);

  useEffect(() => {
    const activeRoute = location.pathname.split("/")[2];
    setActiveItem(activeRoute || "dashboard");
  }, [location.pathname]);

  const handleSelectedItem = () => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
  };

//   useEffect(() => {
//     const handleResize = () => {
//       setShowHamburger(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

  return (
    <div className="h-screen flex w-full">
      {/* Sidebar */}
      <div
        className={`fixe bottom-0 top-0 w-[200px] sm:w-[240px] bg-white border-r border-r-base-color z-50 transition-transform duration-300
        ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidenav
          items={sidenavItems}
          activeItem={activeItem}
          onItemSelect={handleSelectedItem}
        />
              <div>asa</div>
                  
      </div>

      {/* Main Content */}
      <div className="ml-0 d:ml-[240px] w-full overflow-y-scroll bg-purple-500">
        <div>Header</div>
        <main className="p-4">
          <Outlet />
        </main>

        {/* Overlay for Mobile Menu */}
        {!isMobileMenuOpen && !showHamburger && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="h-screen w-full absolute bg-dark bg-opacity-50 inset-0"
          />
        )}
      </div>
    </div>
  );
};
