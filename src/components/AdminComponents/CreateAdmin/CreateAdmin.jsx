import React, { useEffect, useState } from 'react';
import usePost from '../../../hooks/usePost';
import { API_ROUTES } from '../../../routes/apiRoutes';
import { isValidEmail } from '../../../utils/helper/validation';
import ToastNotification from '../../ToastNotification/ToastNotification';
import Button from '../common/buttons/Button/Button';

const CreateUser = ({ setDisplayCreateAdmin, refetchAdmin }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {
    data: createAdminResponse,
    postData: postAdminData,
    error: createAdminError,
    loading: createAdminLoading,
  } = usePost(API_ROUTES.CREATE_ADMIN);

  useEffect(() => {
    if (createAdminError) {
      ToastNotification.error(createAdminError);
      return;
    }
    if (createAdminResponse) {
      ToastNotification.success(createAdminResponse?.data.message);
      setDisplayCreateAdmin(false);
      refetchAdmin();
    }
  }, [createAdminResponse, createAdminError]);

  const handelSubmitAdmin = async () => {
    if (!isValidEmail(email)) {
      ToastNotification.error('Invalid email address');
      return;
    }
    await postAdminData({
      email,
      firstName,
      lastName,
    });
  };

  return (
    <div>
      <div className="bg-[#f8f8f8] px-4 rounded-lg py-4 ">
        <h1 className="text-[18px] px-4 font-medium">Create Admin</h1>
      </div>
      <div className="bg-white px-6 py-10  shadow-md">
        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <div className="flex flex-col justify-center  rounded-md">
            <label className=" mb-1 text-[16px] font-medium text-[#2a2a2a]">
              First Name
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center  rounded-md">
            <label className=" mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Last Name
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center  rounded-md">
            <label className="mb-1 text-[16px] font-medium text-[#2a2a2a]">
              Email Address
            </label>
            <input
              className="border h-10  px-2 py-6 border-[#696969] border-opacity-55 rounded-md"
              placeholder="@exapmle.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center  items-center mt-5">
        <Button
          title="Submit"
          onClick={handelSubmitAdmin}
          disabled={!email || !firstName || !lastName || createAdminLoading}
        />
      </div>
    </div>
  );
};

export default CreateUser;
