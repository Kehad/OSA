import { useState } from "react";
import { Search, Bell, MoreHorizontal } from "lucide-react";
import { MessageIcon } from "../../../assets/svg/message.svg"; 

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div className="w-full h-20 bg-white border-b border-gray-200">
      <div className="max-w-7x mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-16">
          {/* Dashboard Title */}
          <div className="flex-shrink-0">
            <h1 className="text-[32px] font-montserrat font-bold text-gray-900">
              Dashboard
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-2/3 pl-10 pr-3 py-2 border border-[#E8E8E8] rounded-[80px] leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search name, class, subjects"
              />
            </div>
          </div>

          {/* Right Side - Icons and Profile */}
          <div className="flex items-center space-x-4">
            {/* More Options */}
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="h-5 w-5" />
              <MessageIcon />
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setHasNotification(!hasNotification)}
            >
              <Bell className="h-5 w-5" stroke="#000" />
              {hasNotification && (
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
              )}
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-montserrat font-bold text-gray-900">
                  Oluwatosin J.
                </div>
                <div className="text-[16px] font-lato font-normal text-gray-500">
                  Super Admin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
