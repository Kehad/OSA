import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Button from "@/components/ui/button";
import emptySearch from "@/assets/empty-search.png";
import { FilterDropdown } from "@/components/ui-template/Dropdown.-input";

const mockStudents = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1).padStart(2, "0"),
  admissionNo: "OSA/24S/0001",
  fullName: "Nwachi Victory Onyekachi",
  present: true,
}));


const AttendancePage = () => {
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [date, setDate] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  
  const [students, setStudents] = useState(mockStudents);

  const handleSearch = () => {
    if (session && term && classLevel && date) {
      setHasSearched(true);
    }
  };

  const toggleAttendance = (id: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-lato p-6 lg:p-8">
      <div className="">
        <h1 className="text-xl font-bold text-[#333] mb-8">Class Attendance</h1>

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
          
          <div className="flex items-center gap-4 w-full md:w-[480px] mb-6">
            <label className="w-20 text-[#333] font-medium text-sm shrink-0">Date</label>
            <div className="relative flex-1">
              <input 
                type="date"
                className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-gray-600 focus:outline-none focus:ring-1 focus:ring-green-900/20 transition-all cursor-pointer text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {!hasSearched && (
            <Button 
              className="w-full md:w-[480px] bg-[#1C3519] hover:bg-[#152a12] text-white py-3 rounded-lg font-medium mt-2"
              onClick={handleSearch}
              disabled={!session || !term || !classLevel || !date}
            >
              Search
            </Button>
          )}
        </div>

        {!hasSearched ? (
          <div className="flex flex-col items-center justify-center mt-12 text-center animate-in fade-in duration-500">
             <img src={emptySearch} alt="No filter set" className="w-48 h-48 object-contain mb-4" />
             <p className="text-gray-500 text-base">You've not set your filter</p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-lg font-medium text-gray-800 mb-6">Student list</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
               {/* Table 1 */}
               <div className="w-full overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 font-medium border-b border-gray-300">
                      <tr>
                        <th className="py-3 font-medium whitespace-nowrap pr-4">No.</th>
                        <th className="py-3 font-medium whitespace-nowrap pr-4">Admission no</th>
                        <th className="py-3 font-medium whitespace-nowrap">Full Name</th>
                        <th className="py-3 font-medium text-right whitespace-nowrap">Attendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.slice(0, 10).map((student) => (
                        <tr key={student.id} className="border-b border-gray-200/60 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 text-gray-800 pr-4">{student.id}</td>
                          <td className="py-4 text-gray-800 pr-4">{student.admissionNo}</td>
                          <td className="py-4 text-gray-800">{student.fullName}</td>
                          <td className="py-4 text-right">
                             <div className="flex justify-end">
                               <button 
                                 onClick={() => toggleAttendance(student.id)}
                                 className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${student.present ? 'bg-[#1C3519] border border-[#1C3519]' : 'border border-gray-400 bg-white'}`}
                               >
                                 {student.present && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                               </button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
               
               {/* Table 2 */}
               <div className="w-full overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 font-medium border-b border-gray-300">
                      <tr>
                        <th className="py-3 font-medium whitespace-nowrap pr-4">No.</th>
                        <th className="py-3 font-medium whitespace-nowrap pr-4">Admission number</th>
                        <th className="py-3 font-medium whitespace-nowrap">Full Name</th>
                        <th className="py-3 font-medium text-right whitespace-nowrap">Attendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.slice(10, 20).map((student) => (
                        <tr key={student.id} className="border-b border-gray-200/60 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 text-gray-800 pr-4">{student.id}</td>
                          <td className="py-4 text-gray-800 pr-4">{student.admissionNo}</td>
                          <td className="py-4 text-gray-800">{student.fullName}</td>
                          <td className="py-4 text-right">
                             <div className="flex justify-end">
                               <button 
                                 onClick={() => toggleAttendance(student.id)}
                                 className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${student.present ? 'bg-[#1C3519] border border-[#1C3519]' : 'border border-gray-400 bg-white'}`}
                               >
                                 {student.present && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                               </button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
            
            <div className="mt-12 flex justify-center pb-8">
               <Button className="w-[300px] bg-[#1C3519] hover:bg-[#152a12] text-white py-3.5 rounded-lg font-medium text-base">
                 Save
               </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
