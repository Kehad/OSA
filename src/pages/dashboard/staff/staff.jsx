import { useState } from 'react';
import { Edit2, Trash2, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';



const Staff = () => {
//   const [staffList, setStaffList] = useState([
//     { id: 1, fullName: 'John Doe', phoneNumber: '+1234567890', emailAddress: 'john.doe@example.com', role: 'Manager' },
//     { id: 2, fullName: 'Jane Smith', phoneNumber: '+1234567891', emailAddress: 'jane.smith@example.com', role: 'Developer' },
//     { id: 3, fullName: 'Bob Johnson', phoneNumber: '+1234567892', emailAddress: 'bob.johnson@example.com', role: 'Designer' },
//     { id: 4, fullName: 'Alice Williams', phoneNumber: '+1234567893', emailAddress: 'alice.williams@example.com', role: 'HR' },
//     { id: 5, fullName: 'Charlie Brown', phoneNumber: '+1234567894', emailAddress: 'charlie.brown@example.com', role: 'Marketing' },
//     { id: 6, fullName: 'Diana Prince', phoneNumber: '+1234567895', emailAddress: 'diana.prince@example.com', role: 'Sales' },
//     { id: 7, fullName: 'Ethan Hunt', phoneNumber: '+1234567896', emailAddress: 'ethan.hunt@example.com', role: 'Operations' },
//     { id: 8, fullName: 'Fiona Green', phoneNumber: '+1234567897', emailAddress: 'fiona.green@example.com', role: 'Support' },
//     { id: 9, fullName: 'George Miller', phoneNumber: '+1234567898', emailAddress: 'george.miller@example.com', role: 'Finance' },
//     { id: 10, fullName: 'Hannah Lee', phoneNumber: '+1234567899', emailAddress: 'hannah.lee@example.com', role: 'Admin' },
//   ]);

  const [staffList, setStaffList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = staffList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentStaff = staffList.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    setStaffList(staffList.filter(staff => staff.id !== id));
  };

  const handleEdit = (id) => {
    console.log('Edit staff:', id);
  };

  const handleAddStaff = () => {
    const newId = Math.max(...staffList.map(s => s.id), 0) + 1;
    const newStaff= {
      id: newId,
      fullName: 'New Staff',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      role: 'Role'
    };
    setStaffList([...staffList, newStaff]);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
      <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className=" border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Staff List</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button 
                onClick={handleAddStaff}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add new staff
              </button>
            </div>
          </div>
          {staffList.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {startIndex + 1} to {endIndex} of {totalItems} results
            </div>
          )}
        </div>

        {/* Content */}
        {staffList.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 h-full">
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
              onClick={handleAddStaff}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900 transition-colors w-80"
            >
              <Plus className="w-5 h-5" />
              Add new staff
            </button>
          </div>
        ) : (
          /* Table */
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentStaff.map((staff, index) => (
                    <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {String(startIndex + index + 1).padStart(2, '0')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.fullName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.emailAddress}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => handleEdit(staff.id)}
                            className="text-green-600 hover:text-green-800 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(staff.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 p-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  {String(startIndex + 1).padStart(2, '0')} to {String(endIndex).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
    </div>
  );
};

export default Staff;