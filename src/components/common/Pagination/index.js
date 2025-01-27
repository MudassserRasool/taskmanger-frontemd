import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  onPageChange,
  hasNext,
  hasPrev,
  color,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 5);

    if (endPage - startPage < 5) {
      startPage = Math.max(1, endPage - 5);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="p-4 sm:p-6 xl:p-7.5 flex items-center justify-center">
      <nav>
        <ul className="flex flex-wrap items-center  rounded-md">
          <li>
            <button
              onClick={onPrevPage}
              disabled={!hasPrev}
              className="flex h-9 w-9 items-center justify-center rounded-l-md hover:border-primary hover:text-primary disabled:cursor-not-allowed"
            >
              <GrFormPrevious />
            </button>
          </li>
          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center py-[5px] px-4 font-medium ${
                  page === currentPage
                    ? `border-primary bg-${
                        color ? color : 'primary'
                      } text-white`
                    : ''
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={onNextPage}
              disabled={!hasNext}
              className="flex h-9 w-9 items-center justify-center rounded-r-md hover:border-primary hover:text-primary disabled:cursor-not-allowed"
            >
              <GrFormNext />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
