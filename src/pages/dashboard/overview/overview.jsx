import { Bell, MoreHorizontal, Search } from "lucide-react";
import { useState } from "react";
import AttendanceCard from "./parts/AttendanceCard";
import FeesSummaryCard from "./parts/FeeSummaryCard";
import StatCard from "./parts/statictisCard";
import StudentTable from "./parts/studentTable";
import Calendar from "./parts/Calender";

import { StudentAttendanceData } from "./data";
import { FeesSummaryData } from "./data";

// Main Dashboard Component
export default function Overview() {
    const [searchQuery, setSearchQuery] = useState('');
    const [hasNotification, setHasNotification] = useState(true);
  
    const statsData = [
      {
        title: "Total students",
        value: "3000",
        gradient: "linear-gradient(135deg, #4B5563 0%, #374151 50%, #1F2937 100%)"
      },
      {
        title: "Total Parents",
        value: "3000", 
        gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 50%, #374151 100%)"
      },
      {
        title: "Total Staff",
        value: "3000",
        gradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)"
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}

        {/* Main Content */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-3xl font-lato font-mediu font-[600] font-bold text-gray-900 ">
              Hello Oluwatosin
            </h2>
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
                  isDate={StudentAttendanceData.isDate}
                  date={StudentAttendanceData.date}
                  attendanceData={StudentAttendanceData.attendanceData}
                  legendItems={StudentAttendanceData.legendItems}
                  colors={StudentAttendanceData.colors}
                  terms={StudentAttendanceData.terms}
                  itemData={StudentAttendanceData.itemData}
                  // onTermChange={handleTermChange}
                  // onViewAttendance={handleViewAttendance}
                  present={StudentAttendanceData.present}
                  absent={StudentAttendanceData.absent}
                  title={StudentAttendanceData.title}
                />
                <AttendanceCard
                  isDate={FeesSummaryData.isDate}
                  date={FeesSummaryData.date}
                  attendanceData={FeesSummaryData.attendanceData}
                  legendItems={FeesSummaryData.legendItems}
                  colors={FeesSummaryData.colors}
                  terms={FeesSummaryData.terms}
                  itemData={FeesSummaryData.itemData}
                  // onTermChange={handleTermChange}
                  // onViewAttendance={handleViewAttendance}
                  present={FeesSummaryData.present}
                  absent={FeesSummaryData.absent}
                  title={FeesSummaryData.title}
                />
                {/* <FeesSummaryCard /> */}
              </div>

              {/* Student Table */}
              <StudentTable />
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