import React from "react";
import { useTranslation } from 'react-i18next';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const maxLeftPages = 2;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - maxLeftPages, 1);
      let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

      if (endPage - startPage < maxPageNumbersToShow - 1) {
        startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift('...');
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map(number =>
      number === '...' ? (
        <li key={number}><button className="px-2 py-1">...</button></li>
      ) : (
        <li key={number}>
          <button
            className={`border rounded-lg px-5 py-1 ${currentPage === number ? 'bg-Secondary text-white border-yellow-400' : 'border-gray-300'}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        </li>
      )
    );
  };

  return (
    <div className="w-full h-[80px] my-20">
      <ul className="flex gap-2 justify-center pt-6">
        <li>
          <button
            className={`border border-gray-300 rounded-lg px-3 py-1 text-gray-900${currentPage === 1 ? 'text-gray-300' : ''}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {t('Pre')}
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className={`border border-gray-300 dark:text-gray-300 rounded-lg px-3 py-1 text-gray-900${currentPage === totalPages ? 'text-gray-300' : ''}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
          {t('Next')}
          </button>
        </li>
      </ul>
    </div>
  );
};
