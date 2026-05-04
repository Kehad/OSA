import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaymentHeader from "./PaymentHeader";
import BillingTable from "./parts/BillingTable";
import AddBillForm from "./parts/AddBillForm";

const billingData = [
  { id: "01", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "02", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "03", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "04", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "05", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "06", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "07", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "08", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "09", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
  { id: "10", class: "SS1", fees: "₦100,000", lastUpdated: "17-09-2024" },
];

const Billings = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddBill = (data: any) => {
    console.log("Adding bill:", data);
    setIsAdding(false);
    // Here you would typically call an API or update state
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PaymentHeader 
          title="Billings" 
          showAddButton={!isAdding} 
          onAddClick={() => setIsAdding(true)} 
        />

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!isAdding ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <BillingTable data={billingData} />
              </motion.div>
            ) : (
              <motion.div
                key="add"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <AddBillForm 
                  onCancel={() => setIsAdding(false)} 
                  onSubmit={handleAddBill} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Billings;
