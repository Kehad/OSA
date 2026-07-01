import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { label: "Timetable", link: "/admin/schedule/timetable" },
  { label: "Calendar", link: "/admin/schedule/calendar" },
  { label: "Events", link: "/admin/schedule/events" },
];

import { ScheduleHeaderProps } from "./types";

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ title }) => {
  const location = useLocation();

  return (
    <div className="mb-8">
      {title && <h1 className="text-2xl font-bold text-gray-800 mb-8">{title}</h1>}
      <div className="flex justify-center border-b border-gray-200 mb-6 relative">
        <div className="flex gap-4 md:gap-8 w-full max-w-2xl px-4">
          {tabs.map((tab) => {
            // Check if current path includes the tab link to keep it active even on sub-routes
            const isActive = location.pathname.includes(tab.link);
            return (
              <Link
                key={tab.link}
                to={tab.link}
                className={`flex-1 text-center py-4 text-base md:text-lg font-medium transition-all duration-300 relative rounded-t-lg hover:bg-gray-50/50 ${
                  isActive
                    ? "text-[#1C3519]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="schedule-active-tab"
                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-yellow-400 rounded-t-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeader;
