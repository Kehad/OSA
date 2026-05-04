import React from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Payments", link: "/payment/history" },
  { label: "Billings", link: "/payment/billings" },
];

interface PaymentHeaderProps {
  title: string;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

const PaymentHeader: React.FC<PaymentHeaderProps> = ({ title, showAddButton, onAddClick }) => {
  const location = useLocation();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {showAddButton && (
          <button
            onClick={onAddClick}
            className="bg-[#1C3A1C] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#152a15] transition-colors"
          >
            <span className="text-xl">+</span> Add bill
          </button>
        )}
      </div>
      
      <div className="flex justify-center">
        <div className="flex gap-32">
          {tabs.map((tab) => {
            // Check if active (handle potential sub-routes if needed)
            const isActive = location.pathname.startsWith(tab.link);
            return (
              <Link
                key={tab.link}
                to={tab.link}
                className={`pb-4 px-10 text-lg font-medium transition-colors relative ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-t-full" 
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Import motion for the layout animation
import { motion } from "framer-motion";

export default PaymentHeader;
