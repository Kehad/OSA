import { useState } from "react";
import { timetableData as initialData } from "../data";

export const useTimetable = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [gridData, setGridData] = useState(initialData);
  const [filters, setFilters] = useState({
    session: "",
    term: "",
    format: "",
    class: "",
  });

  const handleSearch = () => {
    if (filters.session && filters.term && filters.format && filters.class) {
      setHasSearched(true);
    }
  };

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCellChange = (day: string, periodIdx: number, value: string) => {
    setGridData((prev) => 
      prev.map((row) => 
        row.day === day 
          ? { ...row, periods: row.periods.map((p, i) => i === periodIdx ? value : p) }
          : row
      )
    );
  };

  const saveTimetable = () => {
    console.log("Saving timetable:", gridData);
    setIsEditMode(false);
  };

  return {
    hasSearched,
    isEditMode,
    filters,
    gridData,
    handleSearch,
    updateFilter,
    toggleEditMode,
    handleCellChange,
    saveTimetable,
    setHasSearched
  };
};
