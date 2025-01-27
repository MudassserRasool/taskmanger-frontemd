import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/common/tables/Table';

import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Card from '../../../../components/ui/Card';
import {
  useBlockUserMutation,
  useGetUsersQuery,
} from '../../../../redux/features/auth/authApi';
// import AdminsListComponent from '../../../../components/AdminComponents/AdminsListComponent/AdminsListComponent';
// import CreateAdmin from '../../../../components/AdminComponents/CreateAdmin/CreateAdmin';
// import useFetch from '../../../../hooks/useFetch';
// import { API_ROUTES } from '../../../../routes/apiRoutes';
const AllUsers = () => {
  const navigate = useNavigate();

  const [paginate, setPaginate] = useState({
    // page: 1,
    limit: 10,
  });

  const { data, error, isLoading } = useGetUsersQuery({
    limit: paginate?.limit,
  });

  const [blockUser] = useBlockUserMutation();

  const handelBlockUnblock = async (id, isBlocked) => {
    console.log('Parameters:', { id, isBlocked });
    const response = await blockUser({ id, data: isBlocked }); // editSubscription({ id: data?._id, data: values })
    if (response.error) {
      ToastNotification.error(response?.error?.data?.message);
    } else if (response.data?.statusCode === 200) {
      console.log(response.data);
      ToastNotification.success(response.data.message);
    }
  };

  const content = {
    header: ['Name', 'Email', 'Role', 'Block'], // block or unblock user in actions

    body: data?.data?.data.map((item) => ({
      rows: [
        {
          row: item?.name,
        },
        {
          row: item?.email,
        },
        {
          row: item?.role,
        },
        {
          row: (
            <div className="flex items-center gap-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={item.isBlocked}
                  onChange={() => handelBlockUnblock(item.id, !item.isBlocked)}
                />
                <div class="relative border w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ),
        },
      ],
    })),
  };

  return (
    <Card>
      <Table
        content={content}
        pagination={data?.data?.paginate}
        onPaginate={setPaginate}
      />
    </Card>
  );
};

export default AllUsers;
