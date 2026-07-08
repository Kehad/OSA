import React from "react";

import Input from "@/components/ui/input";

import { TimetableFiltersProps } from "../types";

const TimetableFilters: React.FC<TimetableFiltersProps> = ({ control, isEditMode }) => {
  return (
    <div className="space-y-4">
      {!isEditMode && (
        <>
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto">
            <label className="w-24 text-gray-700 font-bold text-sm shrink-0">Session</label>
            <div className="flex-1">
              <Input
                name="session"
                control={control}
                type="select"
                placeholderText="Select Session"
                options={[
                  { label: "2023/2024", value: "2023/2024" },
                  { label: "2024/2025", value: "2024/2025" },
                  { label: "2025/2026", value: "2025/2026" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto">
            <label className="w-24 text-gray-700 font-bold text-sm shrink-0">Term</label>
            <div className="flex-1">
              <Input
                name="term"
                control={control}
                type="select"
                placeholderText="Select Term"
                options={[
                  { label: "First Term", value: "First Term" },
                  { label: "Second Term", value: "Second Term" },
                  { label: "Third Term", value: "Third Term" },
                ]}
              />
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto">
        <label className="w-24 text-gray-700 font-bold text-sm shrink-0">Format</label>
        <div className="flex-1">
          <Input
            name="format"
            control={control}
            type="select"
            placeholderText="Select format"
            options={[
              { label: "Regular", value: "Regular" },
              { label: "Exam", value: "Exam" },
              { label: "Summer", value: "Summer" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto">
        <label className="w-24 text-gray-700 font-bold text-sm shrink-0">Class</label>
        <div className="flex-1">
          <Input
            name="class"
            control={control}
            type="select"
            placeholderText="Select a class"
            options={[
              { label: "Basic 3 A", value: "Basic 3 A" },
              { label: "Basic 3 B", value: "Basic 3 B" },
              { label: "Basic 3 A & B", value: "Basic 3 A & B" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TimetableFilters;
