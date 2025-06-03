// import React from "react";
// // import LogoOutLogo from "../../../assets/svg/Logout";
// import { Link } from "react-router-dom";

// const Sidenav = ({ items, activeItem, onItemSelect }) => {
//   return (
//     <aside className="bg-light-base w-full h-full border-r border-r-base">
//       <div className="h-[100px]" />
//       <ul className="w-4/5 m-auto flex flex-col gap-2">
//         {items.map((item) => (
//           <Link key={item.id} to={item.routeLink}>
//             <li
//               className={`flex items-center gap-2 pt-3 pb-3 pl-2 rounded-lg cursor-pointer ${
//                 activeItem === item.id
//                   ? "bg-base text-[#FFF]"
//                   : "hover:bg-base hover:text-[#FFF]"
//               }`}
//               onClick={() => onItemSelect(item.id)}
//             >
//               {item.icon}
//               <p className="text-[16px] font-[500]">{item.label}</p>
//             </li>
//           </Link>
//         ))}
//       </ul>
//       <button className="outline-none w-4/5 m-auto mt-10 flex items-center gap-2 pt-3 pb-3 pl-2">
//         {/* <LogoOutLogo /> */}
//         <p className="text-[16px] font-[500]">Log out</p>
//       </button>
//     </aside>
//   );
// };

// export default Sidenav;

import {
  Home,
  Users,
  User,
  Calendar,
  ClipboardList,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react"; // or any icon library you prefer
import { useState } from "react";
import OSA_LOGO from "../../assets/OSA-LOGO.png"; // Adjust the path as necessary

export default function Sidebar() {
  const [openSchedule, setOpenSchedule] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <Home />, active: false },
    { label: "Staff", icon: <User />, active: false },
    { label: "Students", icon: <Users />, active: false },
    { label: "Parents", icon: <User />, active: false },
    {
      label: "Schedule",
      icon: <Calendar />,
      children: ["Timetable", "Events"], // optional dropdown
    },
    { label: "Attendance", icon: <ClipboardList />, active: false },
    { label: "Payment", icon: <CreditCard />, active: true },
    // { label: "Settings", icon: <Settings />, active: false },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow border-r flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="p-4 flex items-center gap-2  border-b-[2px] border-[#A0A0A0]">
          <img
            src={OSA_LOGO}
            alt="Logo"
            className="h-[80px] w-[80px] rounded-full"
          />
          <div className="text-[18px] text-black font-medium leading-tight">
            <p>Oluwatosin</p>
            <p>Success Academy</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1 px-2">
          {menuItems.map((item, index) =>
            item.label === "Schedule" ? (
              <div key={index}>
                <button
                  onClick={() => setOpenSchedule(!openSchedule)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
                {openSchedule && (
                  <div className="ml-10 mt-1 space-y-1 text-sm text-gray-600">
                    {item.children.map((child, i) => (
                      <div
                        key={i}
                        className="py-1 hover:text-gray-900 cursor-pointer"
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={index}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded ${
                  item.active
                    ? "bg-green-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            )
          )}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-2 py-4 space-y-2">
        <button className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 px-3 py-2 rounded">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 w-full text-red-600 hover:bg-red-50 px-3 py-2 rounded">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
