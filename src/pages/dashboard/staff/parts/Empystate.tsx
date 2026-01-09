/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";


// Empty State Component
export const EmptyState = ({ onAddClick }) => (
  <div className="flex flex-col items-center justify-center py-24">
    <div className="w-32 h-32 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
        <div className="absolute -right-2 -top-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          <Plus className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
    <p className="text-gray-500 text-lg mb-8">There are no staffs yet</p>
    <button 
      onClick={onAddClick}
      className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900 w-80"
    >
      <Plus className="w-5 h-5" />
      Add new staff
    </button>
  </div>
);