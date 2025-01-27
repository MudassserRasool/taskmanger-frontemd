import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = ({ pagination, onPaginate }) => {
  const currentPage = pagination?.currentPage;
  const totalPages = pagination?.totalPage;
  const totalCount = pagination?.totalCount;
  const hasNextPage = pagination?.hasNextPage;

  const handleOnPagination = (key, value) => {
    onPaginate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <select
          className="rounded bg-[#F8FAFB] px-4 py-3 text-sm dark:bg-transparent"
          value={pagination?.currentLimit}
          onChange={(e) => handleOnPagination('limit', e?.target?.value)}
        >
          <option value={10} className="dark:bg-black">
            10
          </option>
          <option value={20} className="dark:bg-black">
            20
          </option>
          <option value={50} className="dark:bg-black">
            50
          </option>
        </select>
        <span className="ml-2 text-sm text-gray-600">
          Showing {currentPage} to {totalPages} of {totalCount} records
        </span>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleOnPagination('page', currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded p-1 hover:bg-gray-200 disabled:opacity-50"
        >
          <FaAngleLeft size={20} />
        </button>
        <span className="rounded bg-blue-500 px-3 py-1 text-white">
          {currentPage}
        </span>
        <button
          onClick={() => handleOnPagination('page', currentPage + 1)}
          disabled={!hasNextPage}
          className="rounded p-1 hover:bg-gray-200 disabled:opacity-50"
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
