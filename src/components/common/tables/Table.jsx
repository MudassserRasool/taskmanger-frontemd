import React from 'react';
import Pagination from './Pagination';

const Table = ({ content, pagination, onPaginate }) => {
  return (
    <div className="overflow-hidden overflow-x-auto rounded-md border shadow-sm dark:border-black-300">
      <table className="min-w-full">
        <thead className="border-b bg-[#f7f9fc] dark:border-black-300  dark:bg-dark dark:text-gray">
          <tr>
            {content?.header?.map((item) => (
              <th
                scope="col"
                className=" whitespace-nowrap px-6 py-4 text-left text-[13px] font-medium text-gray-900 dark:text-black"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {content?.body?.length > 0 && (
          <tbody>
            {content?.body?.map((data) => (
              <tr className="border-b dark:border-black-300">
                {data?.rows.map((item) => (
                  <td className="max-w-[300px] px-6 py-4 text-[13px] font-medium text-gray-900 dark:text-black">
                    {item?.row}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {content?.body?.length < 1 && (
        <div className="flex w-full items-center justify-center py-4">
          <p>No data available in table</p>
        </div>
      )}

      {pagination?.totalCount > 10 && (
        <Pagination pagination={pagination} onPaginate={onPaginate} />
      )}
    </div>
  );
};

export default Table;
