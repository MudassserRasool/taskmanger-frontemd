import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';
import { authRoutes } from './data';

function App() {
  const navigate = useNavigate();

  const role = localStorage.getItem('role');

  const location = useLocation();
  let mainRoute = `/user-dashboard/`;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      if (!authRoutes.includes(location.pathname)) {
        navigate('/login');
      }
    } else {
      const baseRoute = location.pathname.split('/')[1];
      if (!baseRoute || baseRoute !== `user-dashboard`) {
        navigate(mainRoute);
      }
    }
  }, [location.pathname, navigate, mainRoute, role]);

  return (
    <div className="app">
      <ToastContainer style={{ zIndex: 110 }} />
      <AppRoutes mainRoute={mainRoute} />
    </div>
  );
}

export default App;
