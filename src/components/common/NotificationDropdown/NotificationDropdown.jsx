import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { useEffect, useRef, useState } from 'react';
import { VscBell, VscBellDot } from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';
import { NotificationSound } from '../../../assets';
import useFetch from '../../../hooks/useFetch';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ToastNotification from '../../ToastNotification/ToastNotification';
import './NotificationDropdown.css';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevNotificationLength, setPrevNotificationLength] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const { data, refetch } = useFetch(API_ROUTES.STUDENT_NOTIFICATIONS);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const notificationSound = useRef(null);

  useEffect(() => {
    if (!notificationSound.current) {
      notificationSound.current = new Audio(NotificationSound);
    }
  }, []);
  useEffect(() => {
    if (location.pathname !== '/student-dashboard/') {
      setIsUserInteracted(true);
    }
  }, [location.pathname]);
  console.log(location.pathname);
  console.log(notificationSound.current);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const { data: notificationData } = data?.data || {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const intervalId = setInterval(() => {
      refetch();
    }, 1000 * 60 * 3);

    document.addEventListener('mousedown', handleClickOutside);

    if (
      isUserInteracted &&
      notificationData?.length > prevNotificationLength &&
      notificationSound.current
    ) {
      notificationSound.current
        .play()
        .then(() => {
          ToastNotification.success('New notification received');
        })
        .catch((error) => {
          console.log(error);
        });
      setPrevNotificationLength(notificationData?.length);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearInterval(intervalId);
    };
  }, [refetch, notificationData, prevNotificationLength, isUserInteracted]);
  useEffect(() => {
    let shakeInterval;
    if (notificationData?.length > 0) {
      shakeInterval = setInterval(() => {
        const bell = document.getElementById('notification-bell');
        if (bell) {
          bell.classList.add('shake');
          setTimeout(() => {
            bell.classList.remove('shake');
          }, 500);
        }
      }, 5000);
    }
    return () => {
      clearInterval(shakeInterval);
    };
  }, [notificationData]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id={notificationData?.length > 0 ? 'notification-bell' : ''}
        type="button"
        className={`p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-[#b731d2] transition duration-150 ease-in-out`}
        onClick={toggleDropdown}
      >
        <span className="sr-only">View notifications</span>
        {notificationData?.length ? (
          <VscBellDot className="h-6 w-6 text-red-500" aria-hidden="true" />
        ) : (
          <VscBell className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 overflow-hidden ">
          <div className="px-4 py-2 bg-gray-50 bg-primary text-white">
            <h3 className="text-sm font-semibold text-gray-700">
              Notifications
            </h3>
          </div>
          <div className="divide-y divide-[#696969] divide-opacity-20 max-h-64 overflow-y-auto">
            {notificationData?.length > 0 ? (
              notificationData &&
              notificationData.map((notification) => (
                <div
                  onClick={() => {
                    navigate(
                      `/student-dashboard/quiz?id=${notification.quizId}`
                    );
                    window.location.reload();
                  }}
                  key={notification._id}
                  className={`px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer ${
                    notification.isRead ? '' : 'opacity-10'
                  }`}
                >
                  <p className="text-sm text-gray-800">
                    {notification.notificationType}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(notification.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No new notifications
              </div>
            )}
          </div>
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <button
              className="text-sm font-medium text-[#b731d2] hover:text-[#b731d2] transition duration-150 ease-in-out"
              onClick={() => console.log('View all notifications')}
            >
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
