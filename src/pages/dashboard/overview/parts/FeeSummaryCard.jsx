import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DonutChart from "./Doughnut";
import Legend from "./legend";

// Fees Summary Card Component
const FeesSummaryCard = () => {
  const [selectedTerm, setSelectedTerm] = useState("This term");

  const feesData = [
    { name: "Paid", value: 75 },
    { name: "Unpaid", value: 25 },
  ];

  const colors = ["#10B981", "#EF4444"];

  const legendItems = [
    { color: "#EF4444", label: "25% Unpaid" },
    { color: "#10B981", label: "75% Paid" },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Fees Summary</h3>
        <div className="relative">
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>This term</option>
            <option>Last term</option>
            <option>This year</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center">
          <DonutChart data={feesData} colors={colors} />
          <Legend items={legendItems} />
        </div>

        <div className="flex flex-col space-y-6 text-right ml-8">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total expected fee</p>
            <p className="text-3xl font-bold text-gray-900">75</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Collected fee</p>
            <p className="text-3xl font-bold text-gray-900">25</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium hover:underline">
          View attendance
        </button>
      </div>
    </div>
  );
};

export default FeesSummaryCard;