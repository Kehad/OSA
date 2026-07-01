import { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, MoreHorizontal } from "lucide-react";
import emptysearch from "@/assets/empty-search.png";
import ViewEntityProfile from "@/components/entity/ViewEntityProfile";
import { FilterSelect } from "@/components/ui-template/filterSelect";

import EntityTable from "@/components/entity/EntityTable";
import { studentList } from "./data";
import { Student } from "./types";

export default function Students() {
  const [hasSearched, setHasSearched] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "view">("list");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const sessionOptions = useMemo(() => Array.from(new Set(studentList.map(s => s.session))), []);
  const termOptions = useMemo(() => Array.from(new Set(studentList.map(s => s.term))), []);
  const classOptions = useMemo(() => Array.from(new Set(studentList.map(s => s.class))), []);
  
  
  const [filters, setFilters] = useState({
    session: "",
    term: "",
    class: "",
  });

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredStudents = studentList.filter((student) => {
    const matchSession = !filters.session || student.session === filters.session;
    const matchTerm = !filters.term || student.term === filters.term;
    const matchClass = !filters.class || student.class === filters.class;
    return matchSession && matchTerm && matchClass;
  });

  const handleSearch = () => {
    setHasSearched(true);
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setViewMode("view");
  };



  if (viewMode === "view" && selectedStudent) {
    return (
      <div className="min-h-screen bg-white">
        <div className="p-8 pb-0 flex items-center gap-4">
          <button onClick={() => setViewMode("list")} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">View Student Profile</h1>
        </div>
        <ViewEntityProfile
          entity={selectedStudent}
          entityType="student"
          onBack={() => setViewMode("list")}
          onEdit={() => {}}
          onSave={() => {}}
          planMode="view"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-start mb-10">
          <h1 className="text-2xl font-bold text-gray-800">Student List</h1>
          {hasSearched && (
            <p className="text-gray-600 font-medium">Total no. of students <span className="text-black font-bold">{filteredStudents.length}</span></p>
          )}
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          {/* Filters */}
          <div className="space-y-4">
            <FilterSelect 
              label="Session" 
              placeholder="Select a session" 
              value={filters.session}
              options={sessionOptions}
              onChange={(value: string) => { updateFilter("session", value); setHasSearched(true); }}
            />
            <FilterSelect
              label="Term" 
              placeholder="Select a term" 
              value={filters.term}
              options={termOptions}
              onChange={(value: string) => { updateFilter("term", value); setHasSearched(true); }}
            />
            <FilterSelect 
              label="Class" 
              placeholder="Select a class" 
              value={filters.class}
              options={classOptions}
              onChange={(value: string) => { updateFilter("class", value); setHasSearched(true); }}
            />
          </div>

          {!hasSearched && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleSearch}
                className="w-full max-w-xl bg-[#1b3b2a] text-white font-bold py-3.5 rounded-lg hover:bg-[#152a15] active:scale-[0.98] transition-all"
              >
                Search
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="mt-16">
          {!hasSearched ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="relative mb-6">
                <img src={emptysearch} alt="Empty Search" className="w-48 h-48 object-contain" />
              </div>
              <p className="text-gray-400 text-lg">You've not set your filter</p>
            </div>
          ) : (
            <div>
              <div className="flex justify-end mb-4">
                 <p className="text-gray-600 font-medium">Total no. of students <span className="text-black font-bold">{filteredStudents.length}</span></p>
              </div>
              <EntityTable 
                entities={filteredStudents}
                config={{ entityType: "student" }}
                onView={handleView}
                onEdit={() => {}}
                onDelete={() => {}}
              />

              {/* Pagination */}
              <div className="flex items-center justify-center mt-12 gap-8">
                <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-gray-800 font-bold text-sm">01 to 10</span>
                <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
