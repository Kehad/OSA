import Button from "@/components/ui/button";
import { FilterDropdown } from "@/components/ui-template/Dropdown.-input";
import { ResultFiltersProps } from "../types";



export const ResultFilters = ({
  session, setSession,
  term, setTerm,
  classLevel, setClassLevel,
  hasSearched, onSearch
}: ResultFiltersProps) => {
  return (
    <div className="flex flex-col items-center w-full mb-10">
      <FilterDropdown
        label="Session"
        placeholder="Select a session"
        value={session}
        onChange={setSession}
        options={["2023/2024", "2024/2025"]}
      />
      <FilterDropdown
        label="Term"
        placeholder="Select a term"
        value={term}
        onChange={setTerm}
        options={["First Term", "Second Term", "Third Term"]}
      />
      <FilterDropdown
        label="Class"
        placeholder="Select a class"
        value={classLevel}
        onChange={setClassLevel}
        options={["Basic 3 A", "Basic 3 B", "Basic 4 A"]}
      />
      
      {!hasSearched && (
        <Button 
          className="w-full md:w-[480px] bg-[#1C3519] hover:bg-[#152a12] text-white py-3 rounded-lg font-medium mt-2"
          onClick={onSearch}
          disabled={!session || !term || !classLevel}
        >
          Search
        </Button>
      )}
    </div>
  );
};
