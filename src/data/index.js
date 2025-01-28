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

const resetFormInputs = [
  {
    id: 1,
    type: 'text',
    label: 'Password',
    placeholder: 'Enter Password',
    name: 'password',
  },
  {
    id: 2,
    type: 'text',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    name: 'confirmPassword',
  },
];

const authRoutes = [
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-success',
  '/otp-verification',
  '/reset-password',
  '/success-reset-password',
  '/otp-error',
  '/management-login',
  '/admin-login',
  '/teacher-login',
];

export { authRoutes, loginInputs, resetFormInputs };
