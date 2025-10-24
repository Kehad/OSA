/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";

// Pagination Component
export const Pagination = ({ currentPage, totalItems, itemsPerPage, onPrevious, onNext }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex items-center justify-center gap-4 p-6 border-t border-gray-200">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>
      <span className="text-sm text-gray-600">
        {String(startIndex + 1).padStart(2, '0')} to {String(endIndex).padStart(2, '0')}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
