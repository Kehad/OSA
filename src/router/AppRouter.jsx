import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../components/layout/dashboard/dashboard";




// const AuthLogin = React.lazy(() => import("../pages/auth/login/Login"));


const AppRouter = () => {
  return (

      <React.Suspense
       
      >
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            overview route
            {/* <Route path={`${base.overview.value}`}>
              <Route index element={<Overview />} />
            </Route> */}

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
