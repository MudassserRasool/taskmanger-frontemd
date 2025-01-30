const loginInputs = [
  {
    id: 1,
    type: 'email',
    label: 'Email',
    placeholder: 'someone@gmail.com',
    name: 'email',
  },
  {
    id: 2,
    type: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    name: 'password',
  },
];

const authRoutes = ['/login', '/signup'];

export { authRoutes, loginInputs };
