import React, { useState } from 'react';
import Button from '../../../components/AdminComponents/common/buttons/Button/Button';
// import ToastNotification from '../../../components/ToastNotification/ToastNotification';
// import usePatch from '../../../hooks/usePatch';
// import { API_ROUTES } from '../../../routes/apiRoutes';
import Pagination from '../../common/Pagination';
import PreLoader from '../../common/Preloader/PreLoader';

const AdminsListComponent = ({
  adminsData,
  loadingAdminData,
  refetchAdmin,
  setPageNumber,
  pageNumber,
  rowsPerPage,
  totalRecords,
  setDisplayCreateAdmin,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalRecords / rowsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
      setPageNumber(currentPage + 1);
      refetchAdmin();
    }
  };

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage((prevPage) => prevPage - 1);
      setPageNumber(currentPage - 1);
      refetchAdmin();
    }
  };

  const handlePagesChange = (page) => {
    setCurrentPage(page);
    setPageNumber(page);
    refetchAdmin();
  };

  const startIndex = (currentPage - 1) * rowsPerPage;

  // const { data, loading, error, patchData } = usePatch(API_ROUTES.UPDATE_ADMIN);

  const handleStatusChange = async (admin) => {
    const updatedStatus = !admin.enable;
    // await patchData(admin._id, { enable: updatedStatus });
    // refetchAdmin();
  };

  // useEffect(() => {
  //   if (error) {
  //     ToastNotification.error(error);
  //   } else if (data) {
  //     ToastNotification.success('Status updated successfully');
  //   }
  // }, [data, error]);

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-[#000000] text-[26px]  font-medium">Admins List</h1>
        <Button
          title="Create Admin"
          onClick={() => setDisplayCreateAdmin(true)}
        />
      </div>

      {loadingAdminData ? (
        <PreLoader />
      ) : (
        <>
          <div className="rounded-lg shadow-md bg-white">
            <div className="grid grid-cols-4 py-4.5 px-4 sm:grid-cols-5 md:px-7 2xl:px-7.5">
              <div className="col-span-1.5 py-6 justify-start flex items-center">
                <p className="font-medium text-primary">#</p>
              </div>

              <div className="col-span-1.5 justify-start flex items-center">
                <p className="font-medium text-primary">Name</p>
              </div>
              <div className="col-span-1.5 justify-start flex items-center">
                <p className="font-medium text-primary">Email</p>
              </div>
              <div className="col-span-1.5 justify-start flex items-center">
                <p className="font-medium text-primary">Status</p>
              </div>
              <div className="col-span-1.5 justify-end flex items-center">
                <p className="font-medium text-primary">Actions</p>
              </div>
            </div>
            {adminsData &&
              adminsData.map((admin, key) => (
                <div
                  className="grid grid-cols-4 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5"
                  key={key}
                >
                  <div className="col-span-1.5 hidden justify-start items-center sm:flex">
                    <p className="text-sm text-black ">
                      {startIndex + key + 1}
                    </p>
                  </div>

                  <div className="col-span-1.5 hidden justify-start items-center sm:flex">
                    <p className="text-sm text-black ">{`${
                      admin.firstName || ''
                    } ${admin.lastName || ''}`}</p>
                  </div>
                  <div className="col-span-1.5 justify-start flex items-center">
                    <p className="text-sm text-black ">{admin.email}</p>
                  </div>
                  <div className="col-span-1.5 justify-center flex items-center">
                    <p
                      className={`text-sm text-white p-1 w-24 text-center ${
                        admin.enable ? 'bg-green-500' : 'bg-rose-500'
                      } rounded-lg`}
                    >
                      {admin.enable ? 'Active' : 'Deactivated'}
                    </p>
                  </div>

                  <div className="col-span-1.5 justify-end flex items-center">
                    <label className="inline-flex items-center cursor-pointer p-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={admin.enable}
                        onChange={() => handleStatusChange(admin)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full border peer-checked:bg-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:border-gray-300 dark:border-gray-600 peer-checked:after:border-white after:border-black" />
                    </label>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 mb-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              hasNext={hasNextPage}
              hasPrev={hasPrevPage}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              onPageChange={handlePagesChange}
              color="black"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminsListComponent;
