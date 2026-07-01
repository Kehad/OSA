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

export interface ResultFiltersProps {
  session: string;
  setSession: (val: string) => void;
  term: string;
  setTerm: (val: string) => void;
  classLevel: string;
  setClassLevel: (val: string) => void;
  hasSearched: boolean;
  onSearch: () => void;
}

export interface SubjectListProps {
  subjects: string[];
  expandedSubject: string | null;
  toggleSubject: (subject: string) => void;
  students: StudentResult[];
  updateScore: (studentId: string, subject: string, field: "ca1" | "ca2" | "exam", value: string) => void;
  calculateTotalAndGrade: (ca1: string, ca2: string, exam: string) => { total: string; grade: string };
}
