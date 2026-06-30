import React from "react";
import emptySearch from "@/assets/empty-search.png";
import { useResult } from "./models/useResult";
import { ResultFilters } from "./parts/ResultFilters";
import { SubjectList } from "./parts/SubjectList";

const AdminResultPage = () => {
  const {
    session,
    setSession,
    term,
    setTerm,
    classLevel,
    setClassLevel,
    hasSearched,
    handleSearch,
    subjects,
    expandedSubject,
    toggleSubject,
    students,
    updateScore,
    calculateTotalAndGrade
  } = useResult();

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-lato p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-[#333] mb-8">Upload Results</h1>

        <ResultFilters
          session={session}
          setSession={setSession}
          term={term}
          setTerm={setTerm}
          classLevel={classLevel}
          setClassLevel={setClassLevel}
          hasSearched={hasSearched}
          onSearch={handleSearch}
        />

        {!hasSearched ? (
          <div className="flex flex-col items-center justify-center mt-12 text-center animate-in fade-in duration-500">
             <img src={emptySearch} alt="No filter set" className="w-48 h-48 object-contain mb-4" />
             <p className="text-gray-500 text-base">You've not set your filter</p>
          </div>
        ) : (
          <SubjectList
            subjects={subjects}
            expandedSubject={expandedSubject}
            toggleSubject={toggleSubject}
            students={students}
            updateScore={updateScore}
            calculateTotalAndGrade={calculateTotalAndGrade}
          />
        )}
      </div>
    </div>
  );
};

export default AdminResultPage;
