import { JoinUs, SignUpSlider } from '../assets';

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
const signupInputs = [
  {
    id: 2,
    type: 'text',
    label: 'First Name',
    placeholder: 'First Name',
    name: 'firstName',
  },
  {
    id: 3,
    type: 'text',
    label: 'Last Name',
    placeholder: 'Last Name',
    name: 'lastName',
  },
  {
    id: 4,
    type: 'email',
    label: 'Email Address',
    placeholder: 'someone@gmail.com',
    name: 'email',
  },
  {
    id: 5,
    type: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    name: 'password',
  },
  {
    id: 6,
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    name: 'confirmPassword',
  },
];
const navLinks = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Contact' },
];
const otpInputs = [
  {
    id: 1,
    type: 'text',
    label: 'Enter Email',
    placeholder: 'Enter Email',
    name: 'email',
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

const signUpSliderData = [
  {
    avatar: JoinUs,
    text: '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
  },
  {
    avatar: JoinUs,
    text: '"Education is the foundation of all we do in life. It shapes who we are and what we aspire to be." - Julie Payette',
  },
  {
    avatar: JoinUs,
    text: '"Education is the foundation upon which we build our future." - Christine Gregoire',
  },
];

const loginImagesData = [
  {
    avatar: SignUpSlider,
    text: '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
  },
  {
    avatar: SignUpSlider,
    text: '"Education is the foundation of all we do in life. It shapes who we are and what we aspire to be." - Julie Payette',
  },
  {
    avatar: SignUpSlider,
    text: '"Education is the foundation upon which we build our future." - Christine Gregoire',
  },
];
export {
  authRoutes,
  loginImagesData,
  loginInputs,
  navLinks,
  otpInputs,
  resetFormInputs,
  signupInputs,
  signUpSliderData,
};
