import { useState, useEffect } from "react";
import {
  Home,
  Users,
  User,
  Calendar,
  ClipboardList,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  BookOpenText,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import OSA_LOGO from "@/assets/OSA-LOGO.png"; // Adjust path as needed

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const basePath = location.pathname.startsWith("/super-admin") ? "/super-admin" : "/admin";

  const isAdmin = basePath === "/admin";

  // Menu configuration
  let menuItems = [
    { label: "Dashboard", icon: Home, link: `${basePath}/dashboard` },
    { label: "Staff", icon: User, link: `${basePath}/staff` },
    { label: "Students", icon: Users, link: `${basePath}/students` },
    { label: "Results", icon: BookOpenText, link: `${basePath}/results` },
    { label: "Parents", icon: User, link: `${basePath}/parents` },
    {
      label: "Schedule",
      icon: Calendar,
      children: [
        { label: "Timetable", link: `${basePath}/schedule/timetable` },
        { label: "Calendar", link: `${basePath}/schedule/calendar` },
        { label: "Events", link: `${basePath}/schedule/events` },
      ],
    },
    { label: "Attendance", icon: ClipboardList, link: `${basePath}/attendance` },
    { label: "Payment & Billings", icon: CreditCard, link: `${basePath}/payment` },

    // Bottom items
    { label: "Settings", icon: Settings, link: `${basePath}/settings`, isBottom: true },
    { label: "Log Out", icon: LogOut, link: "/logout", isBottom: true }, // Keep logout absolute if it handles app-wide sign out
  ];

  if (isAdmin) {
    menuItems = menuItems.filter(item => item.label !== "Staff" && item.label !== "Parents");
  }

  // Helper: check if path is active
  const isActive = (itemLink, childLink) => {
    if (!itemLink && !childLink) return false;
    const path = childLink || itemLink;
    return location.pathname.startsWith(path);
  };

  // Toggle dropdown
  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  // Render single menu item
  const renderMenuItem = (item, idx) => {
    const Icon = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const dropdownOpen = openDropdown === item.label;

    // Direct link (no children)
    if (!hasChildren && item.link) {
      const active = item.active ?? isActive(item.link);
      return (
        <Link
          key={idx}
          to={item.link}
          className={`flex items-center gap-3 w-full px-3 py-2 rounded transition-colors
            ${active ? "bg-green-900 text-white" : "text-gray-700 hover:bg-gray-100"}`}
          aria-current={active ? "page" : undefined}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>{item.label}</span>}
        </Link>
      );
    }

    const isParentActive = item.children && item.children.some(child => isActive(undefined, child.link));
    const showActive = dropdownOpen || isParentActive;

    // Dropdown parent
    return (
      <div key={idx}>
        <button
          onClick={() => toggleDropdown(item.label)}
          className={`flex items-center gap-3 w-full px-3 py-2 rounded transition-colors
            ${showActive ? "bg-green-900 text-white" : "hover:bg-gray-100 text-gray-700"}`}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>

        {/* Dropdown children */}
        {dropdownOpen && !collapsed && (
          <div className="ml-10 mt-1 space-y-1" role="menu">
            {item.children.map((child, i) => {
              const childActive = isActive(undefined, child.link);
              return (
                <Link
                  key={i}
                  to={child.link}
                  className={`block py-1 pl-2 pr-4 rounded text-sm transition-colors relative
                    ${childActive ? "text-green-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                  role="menuitem"
                >
                  {childActive && (
                    <div className="absolute left-[-1.5rem] top-0 bottom-0 w-[3px] bg-green-900 rounded-full" />
                  )}
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // Split top and bottom items
  const topItems = menuItems.filter((i) => !i.isBottom);
  const bottomItems = menuItems.filter((i) => i.isBottom);

  return (
    <aside
      className={`h-screen bg-white shadow border-r flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-80"}`}
      aria-label="Main navigation"
    >
      {/* Header: Logo + Toggle */}
      <div className="p-4 border-b-[2px] border-[#A0A0A0] flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <img src={OSA_LOGO} alt="OSA Logo" className="h-12 w-12 rounded-full" />
            <div className="text-lg font-medium leading-tight">
              <p>Oluwatosin</p>
              <p>Success Academy</p>
            </div>
          </div>
        )}
        {collapsed && (
          <img src={OSA_LOGO} alt="OSA Logo" className="h-12 w-12 rounded-full mx-auto" />
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100 lg:hidden"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 space-y-1 px-2 overflow-y-auto">
        {topItems.map(renderMenuItem)}
      </nav>

      {/* Footer: Settings & Logout */}
      <div className="px-2 py-4 space-y-1 border-t">
        {bottomItems.map(renderMenuItem)}
      </div>
    </aside>
  );
}