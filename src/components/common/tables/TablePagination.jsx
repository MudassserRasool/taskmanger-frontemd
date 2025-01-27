import React, { useContext } from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MainContext } from "../context/MainContext";

const TablePagination = ({ data, totalLength }) => {
  const { limit, page, setPage } = useContext(MainContext);
  const totalPages = Math.ceil(totalLength / limit);
  let pageOptions = [];
  for (let i = 1; i <= totalPages; i++) {
    pageOptions.push(i);
  }

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className="pt-6">
      {data.length !== 0 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="font-medium">
              Page {page} of {totalPages}
            </p>
            <select
              onChange={(e) => setPage(e.target.value)}
              className="rounded p-1"
              name=""
              id=""
              defaultValue={page}
            >
              {pageOptions?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={goToFirstPage} disabled={page === 1}>
              <CgPushChevronLeft size={20} />
            </button>
            <button onClick={goToPreviousPage} disabled={page === 1}>
              <FiChevronLeft size={20} />
            </button>
            <button onClick={goToNextPage} disabled={page === totalPages}>
              <FiChevronRight size={20} />
            </button>
            <button onClick={goToLastPage} disabled={page === totalPages}>
              <CgPushChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePagination;
