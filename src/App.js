import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';
import { baseUrl } from './constants';
import { authRoutes } from './data';

function App() {
  const navigate = useNavigate();

  const role = localStorage.getItem('role');

  const location = useLocation();
  let mainRoute = `/${role}-dashboard/`;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      if (!authRoutes.includes(location.pathname)) {
        navigate('/login');
      }
    } else {
      const baseRoute = location.pathname.split('/')[1];
      if (!baseRoute || baseRoute !== `${role}-dashboard`) {
        navigate(mainRoute);
      }
    }
  }, [location.pathname, navigate, mainRoute, role]);

  useEffect(() => {
    const refreshAuthToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const response = await fetch(`${baseUrl}/user/refresh-token`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        localStorage.setItem('token', data?.data?.token);
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    };

    refreshAuthToken();
    const interval = setInterval(refreshAuthToken, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* <Toaster
        position="top-center"
        toastOptions={toastStyles.toastContainer}
      /> */}
      <ToastContainer style={{ zIndex: 110 }} />

      <AppRoutes mainRoute={mainRoute} />
    </div>
  );
}

export default App;
