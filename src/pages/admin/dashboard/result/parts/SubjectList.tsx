import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "@/components/ui/button";
import { StudentResult } from "../models/useResult";

interface SubjectListProps {
  subjects: string[];
  expandedSubject: string | null;
  toggleSubject: (subject: string) => void;
  students: StudentResult[];
  updateScore: (studentId: string, subject: string, field: "ca1" | "ca2" | "exam", value: string) => void;
  calculateTotalAndGrade: (ca1: string, ca2: string, exam: string) => { total: string; grade: string };
}

export const SubjectList = ({
  subjects,
  expandedSubject,
  toggleSubject,
  students,
  updateScore,
  calculateTotalAndGrade,
}: SubjectListProps) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Subject list</h2>
      
      <div className="flex flex-col gap-4">
        {subjects.map((subject) => (
          <div key={subject} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleSubject(subject)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-700">{subject}</span>
              {expandedSubject === subject ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedSubject === subject && (
              <div className="border-t border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-6 font-medium text-gray-400 font-normal whitespace-nowrap bg-white">No.</th>
                      <th className="py-3 px-6 font-medium text-gray-400 font-normal whitespace-nowrap bg-white">Admission no</th>
                      <th className="py-3 px-6 font-medium text-gray-400 font-normal whitespace-nowrap bg-white w-full">Full Name</th>
                      <th className="py-3 px-4 font-medium text-gray-600 font-normal whitespace-nowrap text-center bg-[#f3f4f6] border-l border-white/50">1st CA<br/><span className="text-[11px]">(20)</span></th>
                      <th className="py-3 px-4 font-medium text-gray-600 font-normal whitespace-nowrap text-center bg-[#f3f4f6] border-l border-white/50">2nd CA<br/><span className="text-[11px]">(20)</span></th>
                      <th className="py-3 px-4 font-medium text-gray-600 font-normal whitespace-nowrap text-center bg-[#f3f4f6] border-l border-white/50">Exam<br/><span className="text-[11px]">(60)</span></th>
                      <th className="py-3 px-4 font-medium text-gray-600 font-normal whitespace-nowrap text-center bg-[#f3f4f6] border-l border-white/50">Total<br/><span className="text-[11px]">(100)</span></th>
                      <th className="py-3 px-6 font-medium text-gray-600 font-normal whitespace-nowrap text-center bg-[#f3f4f6] border-l border-white/50">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => {
                      const scores = student.scores[subject];
                      const { total, grade } = calculateTotalAndGrade(scores.ca1, scores.ca2, scores.exam);

                      return (
                        <tr key={student.id} className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 text-gray-600">{student.id}</td>
                          <td className="py-4 px-6 text-gray-600">{student.admissionNo}</td>
                          <td className="py-4 px-6 text-gray-600">{student.fullName}</td>
                          <td className="p-0 bg-[#f3f4f6]/60 border-l border-white/50">
                            <input 
                              type="text" 
                              className="w-full h-full py-4 text-center bg-transparent outline-none focus:ring-2 focus:ring-inset focus:ring-[#1C3519] text-gray-700"
                              value={scores.ca1}
                              onChange={(e) => updateScore(student.id, subject, "ca1", e.target.value)}
                            />
                          </td>
                          <td className="p-0 bg-[#f3f4f6]/60 border-l border-white/50">
                            <input 
                              type="text" 
                              className="w-full h-full py-4 text-center bg-transparent outline-none focus:ring-2 focus:ring-inset focus:ring-[#1C3519] text-gray-700"
                              value={scores.ca2}
                              onChange={(e) => updateScore(student.id, subject, "ca2", e.target.value)}
                            />
                          </td>
                          <td className="p-0 bg-[#f3f4f6]/60 border-l border-white/50">
                            <input 
                              type="text" 
                              className="w-full h-full py-4 text-center bg-transparent outline-none focus:ring-2 focus:ring-inset focus:ring-[#1C3519] text-gray-700"
                              value={scores.exam}
                              onChange={(e) => updateScore(student.id, subject, "exam", e.target.value)}
                            />
                          </td>
                          <td className="py-4 px-4 text-center font-medium text-gray-700 bg-[#f3f4f6]/60 border-l border-white/50">
                            {total}
                          </td>
                          <td className="py-4 px-6 text-center font-medium text-gray-700 bg-[#f3f4f6]/60 border-l border-white/50">
                            {grade}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center pb-8">
        <Button className="w-[300px] bg-[#1C3519] hover:bg-[#152a12] text-white py-3.5 rounded-lg font-medium text-base">
          Save
        </Button>
      </div>
    </div>
  );
};
