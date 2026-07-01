/* eslint-disable react/prop-types */
import { Filter, Plus } from "lucide-react";
import { EmptyState } from "./Empystate";
import { StaffTable } from "./StaffTable";
import { Pagination } from "@/components/ui/pagination";
import Button from "@/components/ui/button";
import { StaffListViewProps } from "../types";

// Staff List View Component
const StaffListView = ({
  staffList,
  currentPage,
  itemsPerPage,
  onAddStaff,
  onView,
  onEdit,
  onDelete,
  onPageChange,
}: StaffListViewProps) => {
  const totalItems = staffList.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentStaff = staffList.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-end justify-end gap-3">
            <Button
              text={"Filter"}
              onClick={onAddStaff}
              leftIcon={Filter}
              size="lg"
              colorScheme="gray"
              variant="outline"
            />
            <Button
              text={"Add new Staff"}
              onClick={onAddStaff}
              leftIcon={Plus}
              size="lg"
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Staff List</h1>
            {staffList.length > 0 && (
              <div className="mt-4 text-md text-black">
                Showing <span className="font-bold">{startIndex + 1} to {endIndex}</span>  of <span className="font-bold">{totalItems}</span> results
              </div>
            )}
          </div>
        </div>

        {staffList.length === 0 ? (
          <EmptyState onAddClick={onAddStaff} />
        ) : (
          <>
            <StaffTable
              staff={currentStaff}
              startIndex={startIndex}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
            {/* {Math.ceil(totalItems / itemsPerPage) > 1 && ( */}
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPrevious={() => onPageChange(Math.max(1, currentPage - 1))}
              onNext={() => onPageChange(currentPage + 1)}
            />
            {/* )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default StaffListView;
