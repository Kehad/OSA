import AttendanceCard from "./parts/AttendanceCard";
import StatCard from "./parts/statictisCard";
import StudentTable from "./parts/studentTable";
import Calendar from "./parts/Calender";
import useAuth from "@/hooks/useAuth";

import {
  RoleStatsData,
  RoleAttendanceData,
  RoleSummaryData,
} from "./data";

export default function Overview() {
  const { user } = useAuth();
  const role = user?.role || "admin";

  const firstName = user?.firstName || user?.fullName?.split(" ")[0] || "User";
  const roleTitle =
    role === "super-admin"
      ? "Super Admin Portal"
      : role === "student"
      ? "Student Learning Workspace"
      : "Operations & Academic Admin";

  const statsData = RoleStatsData[role] || RoleStatsData["admin"];
  const attendanceData = RoleAttendanceData[role] || RoleAttendanceData["admin"];
  const summaryData = RoleSummaryData[role] || RoleSummaryData["admin"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting & Subtitle */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-lato font-bold text-gray-900">
              Hello {firstName}
            </h2>
            <p className="text-sm font-medium text-gray-500 mt-1">
              Welcome back to your {roleTitle}
            </p>
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-900 border border-green-200 capitalize w-fit">
            {role.replace("-", " ")}
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  gradient={stat.gradient}
                />
              ))}
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceCard
                isDate={attendanceData.isDate}
                date={attendanceData.date}
                attendanceData={attendanceData.attendanceData}
                legendItems={attendanceData.legendItems}
                colors={attendanceData.colors}
                terms={attendanceData.terms}
                itemData={attendanceData.itemData}
                present={attendanceData.present}
                absent={attendanceData.absent}
                title={attendanceData.title}
              />
              <AttendanceCard
                isDate={summaryData.isDate}
                date={summaryData.date}
                attendanceData={summaryData.attendanceData}
                legendItems={summaryData.legendItems}
                colors={summaryData.colors}
                terms={summaryData.terms}
                itemData={summaryData.itemData}
                present={summaryData.present}
                absent={summaryData.absent}
                title={summaryData.title}
              />
            </div>

            {/* Role Table */}
            <StudentTable role={role} />
          </div>

          {/* Right Column - Calendar */}
          <div className="xl:col-span-1">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}