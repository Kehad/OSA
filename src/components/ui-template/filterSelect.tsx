import { ChevronDown } from "lucide-react";

export const FilterSelect = ({ label, placeholder, value, options, onChange }: any) => (
    <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto mb-6">
      <label className="w-24 text-gray-700 font-bold text-sm shrink-0">{label}</label>
      <div className="relative flex-1">
        <select 
          className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3.5 pr-12 text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-900/10 transition-all cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );