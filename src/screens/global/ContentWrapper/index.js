import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContentWrapper = ({ children, isSidebarOpen }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <div className="px-8 py-6 bg-[#F0F1F7] min-h-screen flex-grow ms-auto w-[calc(100%-80px)]">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
