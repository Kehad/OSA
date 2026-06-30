import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../components/dashboardLayout/dashboard";

// --- Super Admin Imports ---
import SuperAdminOverview from "../pages/super-admin/dashboard/overview/overview";
import SuperAdminStaffManagement from "../pages/super-admin/dashboard/staff/parts/StaffManagement";
import SuperAdminStudents from "../pages/super-admin/dashboard/students/student";
import SuperAdminParents from "../pages/super-admin/dashboard/parents/parents";
import SuperAdminScheduleTimetable from "../pages/super-admin/dashboard/schedule/timetable";
import SuperAdminCalendarPage from "../pages/super-admin/dashboard/schedule/calendar";
import SuperAdminEventsPage from "../pages/super-admin/dashboard/schedule/events";
import SuperAdminSettingsPage from "../pages/super-admin/dashboard/settings/settings";
import SuperAdminPaymentsPage from "../pages/super-admin/dashboard/payment/payments";
import SuperAdminBillingsPage from "../pages/super-admin/dashboard/payment/billings";
import SuperAdminAttendancePage from "../pages/super-admin/dashboard/attendance/attendance";

// --- Admin Imports ---
import AdminOverview from "../pages/admin/dashboard/overview/overview";
import AdminStudents from "../pages/admin/dashboard/students/student";
import AdminScheduleTimetable from "../pages/admin/dashboard/schedule/timetable";
import AdminCalendarPage from "../pages/admin/dashboard/schedule/calendar";
import AdminEventsPage from "../pages/admin/dashboard/schedule/events";
import AdminSettingsPage from "../pages/admin/dashboard/settings/settings";
import AdminAttendancePage from "../pages/admin/dashboard/attendance/attendance";
import AdminResultPage from "@/pages/admin/dashboard/result/result";

const AppRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        {/* Redirect Root to Super Admin by default, or you can add a landing page */}
        <Route path="/" element={<Navigate to="/super-admin/dashboard/overview" replace />} />

        {/* Super Admin Routes */}
        <Route path="/super-admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard/overview" replace />} />
          <Route path="dashboard">
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<SuperAdminOverview />} />
          </Route>
          <Route path="staff" element={<SuperAdminStaffManagement />} />
          <Route path="students" element={<SuperAdminStudents />} />
          <Route path="parents" element={<SuperAdminParents />} />
          <Route path="settings" element={<SuperAdminSettingsPage />} />
          <Route path="schedule">
            <Route path="timetable" element={<SuperAdminScheduleTimetable />} />
            <Route path="calendar" element={<SuperAdminCalendarPage />} />
            <Route path="events" element={<SuperAdminEventsPage />} />
          </Route>
          <Route path="payment">
            <Route index element={<Navigate to="history" replace />} />
            <Route path="history" element={<SuperAdminPaymentsPage />} />
            <Route path="billings" element={<SuperAdminBillingsPage />} />
          </Route>
          <Route path="attendance" element={<SuperAdminAttendancePage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard/overview" replace />} />
          <Route path="dashboard">
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<AdminOverview />} />
          </Route>
          <Route path="students" element={<AdminStudents />} />
          <Route path="settings" element={<AdminSettingsPage />} />
          <Route path="results" element={<AdminResultPage />} />
          <Route path="schedule">
            <Route path="timetable" element={<AdminScheduleTimetable />} />
            <Route path="calendar" element={<AdminCalendarPage />} />
            <Route path="events" element={<AdminEventsPage />} />
          </Route>
          
          <Route path="attendance" element={<AdminAttendancePage />} />
        </Route>

      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
