import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NightScene } from '../../../assets';
import ToastNotification from '../../../components/ToastNotification/ToastNotification';
import Button from '../../../components/common/buttons/Button/Button';
import { loginInputs } from '../../../data/index';
import { useRegisterMutation } from '../../../redux/features/auth/authApi';
import { formSchema } from '../../../utils/helper/Schema';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isLoading: loginLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const response = await register({ ...values });
      if (response.error) {
        return ToastNotification.error(response.error.data.message);
      } else if (response.data?.statusCode === 200) {
        ToastNotification.success(response.data.message);
        localStorage.setItem(
          'token',
          response?.data?.data.token !== undefined
            ? response?.data?.data.token
            : ''
        );
        setTimeout(() => {
          navigate(`/user-dashboard/`);
          localStorage.setItem('role', response?.data?.data.role);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }, 10);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-white h-[100vh] gap-12 grid grid-cols-2 ">
      <div className="max-w-screen-sm w-full mx-auto gap-6 py-20">
        <div className="w-full flex-col flex justify-center items-center">
          <h1 className="text-[22px] mb-4 font-semibold">Log in</h1>
          <span className="text-[18px] font-normal text-[secondary] ">
            Register to continue to Task Manger!
          </span>
        </div>

        <form className=" " onSubmit={formik.handleSubmit}>
          {loginInputs.map((input) => (
            <div key={input.id} className="mt-6 flex flex-col gap-2">
              <label
                className="text-[secondary] text-[18px] font-medium"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              {input.type === 'password' ? (
                <div className="relative">
                  <input
                    id={input.id}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={input.placeholder}
                    name={input.name}
                    className="border h-10 px-2 border-[#757575] rounded-md w-full pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[input.name]}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-[secondary]"
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
              ) : (
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  className="border h-10 px-2 border-[#757575] rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[input.name]}
                />
              )}
              {formik.touched[input.name] && formik.errors[input.name] && (
                <div className="text-red-500">{formik.errors[input.name]}</div>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center">
            <span className="text-[14px] font-medium text-[secondary]">
              Already have an account?
            </span>
            <div onClick={() => navigate('/login')}>
              <span className="text-[14px] font-medium text-[primary] cursor-pointer">
                Login
              </span>
            </div>
          </div>

          <Button
            disabled={loginLoading}
            title="Register"
            type="submit"
            onClick={formik.handleSubmit}
          />
        </form>
      </div>
      <div
        style={{
          backgroundImage: `url(${NightScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '164px',
          paddingRight: '164px',
        }}
      ></div>
    </section>
  );
};

export default Register;
