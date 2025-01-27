import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from './screens/apps/AdminDashboard/AdminDashboard/AdminDashboard';
import AllUsers from './screens/apps/AdminDashboard/AllUsers/AllUsers';
import AllFeatures from './screens/apps/AdminDashboard/Features/AllFeatures';
import CreateFeature from './screens/apps/AdminDashboard/Features/CreateFeature';
import EditFeature from './screens/apps/AdminDashboard/Features/EditFeature';
import AllSubscriptions from './screens/apps/AdminDashboard/Subscription/AllSubscriptions';
import CreateSubscription from './screens/apps/AdminDashboard/Subscription/CreateSubscription';
import EditSubscription from './screens/apps/AdminDashboard/Subscription/EditSubscription';
import Login from './screens/Auth/Login/Login';
import Error404Page from './screens/Error404Page/Error404Page';
import Layout from './screens/global/Layout/Layout';

const AppRoutes = ({ mainRoute }) => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route
        path="/login"
        element={!token ? <Login /> : <Navigate to={mainRoute} />}
      />

      <Route
        path="/admin-dashboard/*"
        element={
          token ? (
            <Layout>
              <Routes>
                <Route path="/" index element={<AdminDashboard />} />
                <Route path="/users" index element={<AllUsers />} />
                <Route
                  path="/subscription-features"
                  element={<AllFeatures />}
                />
                <Route
                  path="/subscription-features/create"
                  element={<CreateFeature />}
                />
                <Route
                  path="/subscription-features/edit/:id"
                  element={<EditFeature />}
                />
                <Route path="/subscriptions" element={<AllSubscriptions />} />
                <Route
                  path="/subscriptions/create"
                  element={<CreateSubscription />}
                />
                <Route
                  path="/subscriptions/edit/:id"
                  element={<EditSubscription />}
                />

                <Route path="*" element={<Error404Page />} />
              </Routes>
            </Layout>
          ) : token === undefined || null ? (
            <Navigate to="/login" />
          ) : (
            <Navigate to={mainRoute} />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
