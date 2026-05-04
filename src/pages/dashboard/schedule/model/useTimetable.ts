import { useState } from "react";

export const useTimetable = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [filters, setFilters] = useState({
    session: "",
    term: "",
    format: "",
    class: "",
  });

  const handleSearch = () => {
    setHasSearched(true);
  };

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return {
    hasSearched,
    filters,
    handleSearch,
    updateFilter,
  };
};
