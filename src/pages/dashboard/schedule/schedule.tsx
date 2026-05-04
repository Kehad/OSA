import React from "react";
import ScheduleHeader from "./ScheduleHeader";

const AdminScheduleTimetable = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleHeader title="Timetable" />
        
        <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-lg">Timetable content will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduleTimetable;