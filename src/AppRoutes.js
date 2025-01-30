import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllTasks from './screens/apps/AdminDashboard/TaskManger/AllTasks';
import CreateTasks from './screens/apps/AdminDashboard/TaskManger/CreateTasks';
import EditTask from './screens/apps/AdminDashboard/TaskManger/EditTask';
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
        path="/user-dashboard/*"
        element={
          token ? (
            <Layout>
              <Routes>
                <Route path="/" index element={<AllTasks />} />
                <Route path="/tasks/create" element={<CreateTasks />} />
                <Route path="/tasks/edit/:id" element={<EditTask />} />
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
