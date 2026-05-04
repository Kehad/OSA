import { useState } from "react";

export const useAttendance = () => {
  const [view, setView] = useState<"dashboard" | "school" | "class">("dashboard");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const navigateToSchool = (schoolId: string) => {
    setSelectedSchool(schoolId);
    setView("school");
  };

  const navigateToClass = (classId: string) => {
    setSelectedClass(classId);
    setView("class");
  };

  const goBack = () => {
    if (view === "class") setView("school");
    else if (view === "school") setView("dashboard");
  };

  const todayStats = [
    {
      title: "Primary School Attendance",
      date: "24/10/2020",
      present: 75,
      absent: 25,
      total: 100,
      color: "#1C3A1C",
      secondaryColor: "#748274",
    },
    {
      title: "Secondary School Attendance",
      date: "24/10/2020",
      present: 75,
      absent: 25,
      total: 100,
      color: "#D9C580",
      secondaryColor: "#F9F4E5",
    },
  ];

  const weeklyData = [
    { name: "Mon", present: 100, absent: 5 },
    { name: "Tue", present: 85, absent: 10 },
    { name: "Wed", present: 95, absent: 8 },
    { name: "Thu", present: 80, absent: 20 },
    { name: "Fri", present: 70, absent: 25 },
  ];

  return {
    view,
    selectedSchool,
    selectedClass,
    navigateToSchool,
    navigateToClass,
    goBack,
    todayStats,
    weeklyData,
  };
};
