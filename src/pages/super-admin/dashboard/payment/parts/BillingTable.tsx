import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BillingItem {
  id: string;
  class: string;
  fees: string;
  lastUpdated: string;
}

interface BillingTableProps {
  data: BillingItem[];
}

const BillingTable: React.FC<BillingTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b border-gray-100">
            <TableHead className="text-gray-400 font-medium py-4 px-4 text-sm">No.</TableHead>
            <TableHead className="text-gray-400 font-medium py-4 px-4 text-sm">Class</TableHead>
            <TableHead className="text-gray-400 font-medium py-4 px-4 text-sm">Fees</TableHead>
            <TableHead className="text-gray-400 font-medium py-4 px-4 text-sm">Last Updated</TableHead>
            <TableHead className="text-gray-400 font-medium py-4 px-4 text-sm text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-50/30 transition-colors border-b border-gray-100 last:border-0">
              <TableCell className="py-4 px-4 text-gray-700 text-sm font-medium">{item.id}</TableCell>
              <TableCell className="py-4 px-4 text-gray-700 text-sm font-medium">{item.class}</TableCell>
              <TableCell className="py-4 px-4 text-gray-900 text-sm font-bold">{item.fees}</TableCell>
              <TableCell className="py-4 px-4 text-gray-500 text-sm font-medium">{item.lastUpdated}</TableCell>
              <TableCell className="py-4 px-4">
                <div className="flex justify-end gap-3">
                  <button className="text-green-500 hover:text-green-600 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BillingTable;
