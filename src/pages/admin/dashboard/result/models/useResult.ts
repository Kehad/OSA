import { useState } from "react";

export interface StudentResult {
  id: string;
  admissionNo: string;
  fullName: string;
  scores: {
    [subject: string]: {
      ca1: string;
      ca2: string;
      exam: string;
    };
  };
}

const initialStudents: StudentResult[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1).padStart(2, "0"),
  admissionNo: "OSA/24S/0001",
  fullName: "Nwachi Victory Onyekachi",
  scores: {
    "Basic Science": { ca1: "", ca2: "", exam: "" },
    "Civic Education": { ca1: "", ca2: "", exam: "" },
    "English": { ca1: "", ca2: "", exam: "" },
    "Mathematics": { ca1: "", ca2: "", exam: "" },
    "Social Studies": { ca1: "", ca2: "", exam: "" },
  },
}));

export const useResult = () => {
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  
  const [students, setStudents] = useState<StudentResult[]>(initialStudents);

  const subjects = [
    "Basic Science",
    "Civic Education",
    "English",
    "Mathematics",
    "Social Studies",
  ];

  const handleSearch = () => {
    if (session && term && classLevel) {
      setHasSearched(true);
    }
  };

  const toggleSubject = (subject: string) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const updateScore = (studentId: string, subject: string, field: "ca1" | "ca2" | "exam", value: string) => {
    // Only allow numbers and empty string
    if (value !== "" && isNaN(Number(value))) return;
    
    // Check max values
    const numValue = Number(value);
    if (field === "ca1" && numValue > 20) return;
    if (field === "ca2" && numValue > 20) return;
    if (field === "exam" && numValue > 60) return;

    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          scores: {
            ...student.scores,
            [subject]: {
              ...student.scores[subject],
              [field]: value
            }
          }
        };
      }
      return student;
    }));
  };

  const calculateTotalAndGrade = (ca1: string, ca2: string, exam: string) => {
    if (ca1 === "" && ca2 === "" && exam === "") return { total: "", grade: "" };
    
    const total = (Number(ca1) || 0) + (Number(ca2) || 0) + (Number(exam) || 0);
    let grade = "F";
    if (total >= 70) grade = "A";
    else if (total >= 60) grade = "B";
    else if (total >= 50) grade = "C";
    else if (total >= 40) grade = "D";
    else if (total >= 0 && (ca1 !== "" || ca2 !== "" || exam !== "")) grade = "F";
    else grade = "";

    return { total: total.toString(), grade };
  };

  return {
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
  };
};
