import { FaSchool } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { ImUsers } from 'react-icons/im';

const adminNavigation = [
  {
    name: 'Dashboard',
    href: '/admin-dashboard/',
    icon: <GiGreekTemple />,
    current: true,
  },
  {
    name: 'Users',
    href: '/admin-dashboard/users',
    icon: <ImUsers />,
    current: false,
  },
  {
    name: 'Subscription',
    href: '#',
    icon: <FaSchool />,
    current: false,
    child: [
      {
        name: 'Subscription Plan',
        href: '/admin-dashboard/subscriptions',
        current: false,
      },
      {
        name: 'Features',
        href: '/admin-dashboard/subscription-features',
        current: false,
      },
    ],
  },
];

export { adminNavigation };
