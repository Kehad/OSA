import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAttendance } from "./models/useAttendance";
import AttendanceDashboard from "./parts/AttendanceDashboard";
import SchoolAttendanceList from "./parts/SchoolAttendanceList";
import ClassAttendanceDetail from "./parts/ClassAttendanceDetail";

const AttendancePage = () => {
  const {
    view,
    selectedSchool,
    selectedClass,
    navigateToSchool,
    navigateToClass,
    goBack,
    todayStats,
    weeklyData,
  } = useAttendance();

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AttendanceDashboard
                stats={todayStats}
                weeklyData={weeklyData}
                onViewSchool={navigateToSchool}
              />
            </motion.div>
          )}

          {view === "school" && (
            <motion.div
              key="school"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <SchoolAttendanceList
                schoolName={selectedSchool === "primary" ? "Primary School" : "Secondary School"}
                onBack={goBack}
                onClassClick={navigateToClass}
              />
            </motion.div>
          )}

          {view === "class" && (
            <motion.div
              key="class"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <ClassAttendanceDetail
                className={selectedClass || "Primary 1"}
                onBack={goBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AttendancePage;
