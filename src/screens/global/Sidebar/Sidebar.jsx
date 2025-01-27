import { useNavigate } from 'react-router-dom';
import { ManagementLogo, WhiteLogoWithoutText } from '../../../assets';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { adminNavigation } from '../../../routes/sidebarRoutes';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TailwindSidebar({ sidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  let pathName = location.pathname;

  let navigation;
  const role = localStorage.getItem('role');
  let sidebarColor;
  let menuColor;
  let log;
  if (role === 'admin') {
    sidebarColor = 'flex grow flex-col gap-y-5  bg-black pb-4 shadow-right';
    menuColor = {
      active: 'bg-white text-black',
      inactive: 'text-white hover:text-white hover:bg-gray',
    };
    log = {
      open: ManagementLogo,
      close: WhiteLogoWithoutText,
    };
    navigation = adminNavigation;
  }

  const [openItems, setOpenItems] = useState({}); // State to track open items

  const toggleItem = (itemName) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };
  const handleNavigation = (href, isChild = false) => {
    if (!isChild) {
      setOpenItems({});
    }
    navigate(href);
  };
  return (
    <>
      <div className="hidden z-50 lg:fixed lg:inset-y-0 rounded- lg:flex lg:w-72 lg:flex-col transition-all duration-300">
        <div className={sidebarColor}>
          <div className="flex h-16 justify-center my-8 shrink-0 items-center">
            <img className="w-24" src={log?.open} alt="logo" />
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="">
                  {navigation?.map((item, index) => {
                    let isActive = false;
                    const segments = pathName.split('/').filter(Boolean);
                    if (item.href === `/${role}-dashboard/`) {
                      isActive = pathName === item.href;
                    } else {
                      const secondSegment = `/${segments[0]}/${segments[1]}`;
                      isActive = item.href === secondSegment;
                    }

                    let roundedClass = '';
                    if (index === 0) {
                      roundedClass = 'rounded-tr-2xl';
                    } else if (index === navigation.length - 1) {
                      roundedClass = 'rounded-br-2xl';
                    }

                    return (
                      <li key={item.name}>
                        <div>
                          <div
                            onClick={() =>
                              item.child
                                ? toggleItem(item.name)
                                : handleNavigation(item.href)
                            }
                            className={classNames(
                              isActive
                                ? `${menuColor.active} ${roundedClass}`
                                : menuColor.inactive,
                              'group flex items-center gap-x-3 p-2 px-12 text-sm leading-6 font-semibold cursor-pointer'
                            )}
                          >
                            <div className="text-[16px] font-medium">
                              {item.icon}
                            </div>
                            <p className="text-[16px] font-medium">
                              {item.name}{' '}
                            </p>
                            {item.child && (
                              <span className="ml-auto">
                                {openItems[item.name] ? '▲' : '▼'}
                              </span>
                            )}
                          </div>
                          {item.child && openItems[item.name] && (
                            <ul className="pl-20 mt-2 space-y-2">
                              {item.child.map((child) => (
                                <li
                                  key={child.name}
                                  onClick={() =>
                                    handleNavigation(child.href, true)
                                  }
                                  className="cursor-pointer text-white text-sm"
                                >
                                  - {child.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
