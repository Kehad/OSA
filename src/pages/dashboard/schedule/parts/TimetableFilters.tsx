import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterSelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, placeholder, value, options, onChange }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto mb-4">
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

interface TimetableFiltersProps {
  filters: any;
  updateFilter: (key: string, value: string) => void;
  isEditMode?: boolean;
}

const TimetableFilters: React.FC<TimetableFiltersProps> = ({ filters, updateFilter, isEditMode }) => {
  return (
    <div className="space-y-1">
      {!isEditMode && (
        <>
          <FilterSelect 
            label="Session" 
            placeholder="Select Session" 
            value={filters.session}
            options={["2023/2024", "2024/2025", "2025/2026"]}
            onChange={(value) => updateFilter("session", value)}
          />
          <FilterSelect 
            label="Term" 
            placeholder="Select Term" 
            value={filters.term}
            options={["First Term", "Second Term", "Third Term"]}
            onChange={(value) => updateFilter("term", value)}
          />
        </>
      )}
      <FilterSelect 
        label="Format" 
        placeholder="Select format" 
        value={filters.format}
        options={["Regular", "Exam", "Summer"]}
        onChange={(val) => updateFilter("format", val)}
      />
      <FilterSelect 
        label="Class" 
        placeholder="Select a class" 
        value={filters.class}
        options={["Basic 3 A", "Basic 3 B", "Basic 3 A & B"]}
        onChange={(val) => updateFilter("class", val)}
      />
    </div>
  );
};

export default TimetableFilters;
