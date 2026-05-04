import React from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaymentHeader from "./PaymentHeader";

const paymentData = [
  { id: "01", student: "Adebayo Tosin", class: "SS1", amount: "₦100,000", date: "17-09-2024", status: "Paid" },
  { id: "02", student: "Olawale John", class: "SS1", amount: "₦100,000", date: "16-09-2024", status: "Paid" },
  { id: "03", student: "Chidi Okafor", class: "SS2", amount: "₦120,000", date: "15-09-2024", status: "Pending" },
  { id: "04", student: "Fatima Yusuf", class: "JSS3", amount: "₦85,000", date: "14-09-2024", status: "Paid" },
  { id: "05", student: "Ibrahim Musa", class: "SS1", amount: "₦100,000", date: "13-09-2024", status: "Paid" },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PaymentHeader title="Payments" />

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-gray-100">
                    <TableHead className="text-gray-400 font-medium py-6 px-6">ID</TableHead>
                    <TableHead className="text-gray-400 font-medium py-6 px-6">Student</TableHead>
                    <TableHead className="text-gray-400 font-medium py-6 px-6">Class</TableHead>
                    <TableHead className="text-gray-400 font-medium py-6 px-6">Amount</TableHead>
                    <TableHead className="text-gray-400 font-medium py-6 px-6">Date</TableHead>
                    <TableHead className="text-gray-400 font-medium py-6 px-6">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0">
                      <TableCell className="py-5 px-6 text-gray-600">{item.id}</TableCell>
                      <TableCell className="py-5 px-6 font-medium text-gray-900">{item.student}</TableCell>
                      <TableCell className="py-5 px-6 text-gray-600">{item.class}</TableCell>
                      <TableCell className="py-5 px-6 font-bold text-gray-900">{item.amount}</TableCell>
                      <TableCell className="py-5 px-6 text-gray-400">{item.date}</TableCell>
                      <TableCell className="py-5 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
