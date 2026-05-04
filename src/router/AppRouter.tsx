import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../components/dashboardLayout/dashboard";
import Overview from "../pages/dashboard/overview/overview";
import StaffManagement from "../pages/dashboard/staff/parts/StaffManagement";
import Students from "../pages/dashboard/students/student";
import Parents from "@/pages/dashboard/parents/parents";
import AdminScheduleTimetable from "@/pages/dashboard/schedule/timetable";
import CalendarPage from "@/pages/dashboard/schedule/calendar";
import EventsPage from "@/pages/dashboard/schedule/events";
import SettingsPage from "@/pages/dashboard/settings/settings";
import PaymentsPage from "@/pages/dashboard/payment/payments";
import BillingsPage from "@/pages/dashboard/payment/billings";

// const AuthLogin = React.lazy(() => import("../pages/auth/login/Login"));

const AppRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        {/* <Route path="/contectPage" element={<ContectPage />} /> */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Redirect from /dashboard to /dashboard/overview */}
          <Route index element={<Navigate to="overview" replace />} />

          <Route path={`overview`}>
            <Route index element={<Overview />} />
          </Route>
          <Route path="/staff" element={<StaffManagement /> } />
          <Route path="/students" element={<Students /> } />
          <Route path="/parents" element={<Parents /> } />
          <Route path="/settings" element={<SettingsPage /> } />
          <Route path="/schedule">
            <Route path="timetable" element={<AdminScheduleTimetable /> } />
            <Route path="calendar" element={<CalendarPage /> } />
            <Route path="events" element={<EventsPage /> } />
          </Route>
          <Route path="/payment">
            <Route index element={<Navigate to="history" replace />} />
            <Route path="history" element={<PaymentsPage />} />
            <Route path="billings" element={<BillingsPage />} />
          </Route>
          {/* <Route path="/settings" element={<Settings /> } /> */}

          {/* <Route path={`${base.riders.value}`}>
              <Route index element={<Riders />} />
              <Route path="details/:_id" element={<RiderDetails />} />
            </Route> */}
          {/* <Route path={`${base.revenue.value}`} /> */}
          {/* settings */}
          {/* <Route path={`${base.settings.value}`}>
              <Route index element={<SettingsPage />} />
              <Route path="withdrawals" element={<WithdrawalDashboard />} />
            </Route> */}
          {/* <Route path={`${base.delivery.value}`} />
            <Route path={`${base.support.value}`} /> */}
        </Route>
        {/* <Route path="/auth">
            <Route path={`${AuthRoutes.login}`} element={<AuthLogin />} />
            <Route path={`${AuthRoutes.signup}`} element={<AuthSignUp />} />
            <Route
              path={`${AuthRoutes.forgot_password}`}
              element={<AuthForgot />}
            />
            <Route
              path={`${AuthRoutes.onboarding}`}
              element={<AuthOnboard />}
            />
            <Route
              path={`${AuthRoutes.reset_password}`}
              element={<ResetPassword />}
            />
          </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
