import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range to display (e.g., "01 to 10")
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Helper to pad numbers with a leading zero (e.g., 1 -> "01")
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalItems === 0) return null;

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-md">
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`
          flex items-center gap-2 px-6 py-2 rounded-lg border text-sm font-medium transition-all
          ${currentPage === 1
            ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 shadow-sm'
          }
        `}
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </button>

      {/* Range Text */}
      <span className="text-sm font-semibold text-gray-900">
        {formatNumber(startItem)} to {formatNumber(endItem)}
      </span>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`
          flex items-center gap-2 px-8 py-2 rounded-lg border text-sm font-medium transition-all
          ${currentPage === totalPages
            ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 shadow-sm'
          }
        `}
      >
        Next
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;