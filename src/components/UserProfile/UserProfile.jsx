import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

import React, { Fragment } from 'react';
import { useGetProfileQuery } from '../../redux/features/profile/profileApi';
import { handelLogout } from '../../utils/helper/HelperFunctions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const UserProfile = () => {
  const { data, error, isLoading } = useGetProfileQuery();
  const userNavigation = [
    { name: `Name : ${data?.data?.user?.name || ''}`, href: '#' },
    { name: 'Log out', href: '/login' },
  ];
  return (
    <Menu as="div">
      <MenuButton className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        <img
          className="h-11 w-11 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="hidden lg:flex lg:items-center">
          <IoIosArrowDown
            className="ml-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2.5 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              {({ isActive }) => (
                <a
                  href={item.href}
                  onClick={item.name === 'Log out' ? handelLogout : undefined}
                  className={classNames(
                    isActive ? 'bg-gray-50' : '',
                    'block px-3 py-1 text-sm leading-6',
                    item.name === 'Log out'
                      ? 'text-rose-600'
                      : 'text-[secondary]'
                  )}
                >
                  {item.name}
                </a>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default UserProfile;
