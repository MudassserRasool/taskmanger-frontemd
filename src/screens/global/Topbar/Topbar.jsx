// import { IoMenuOutline } from 'react-icons/io5';

// import NotificationDropdown from '../../../components/common/NotificationDropdown/NotificationDropdown';
import UserProfile from '../../../components/UserProfile/UserProfile';

const TopBar = ({
  handleDrawerOpen,
  isFullScreen,
  toggleFullScreen,
  isSidebarOpen,
}) => {
  return (
    <div className=" sticky top-0  z-40 justify-between flex h-16 shrink-0 items-center gap-x-4 shadow-bottom bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-12">
      <div>
        {/* <button onClick={handleDrawerOpen}>
          <IoMenuOutline color="#000" className="text-[24px]" />
        </button> */}
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* {role === 'student' && <NotificationDropdown />} */}
        <UserProfile />
      </div>
    </div>
  );
};

export default TopBar;
