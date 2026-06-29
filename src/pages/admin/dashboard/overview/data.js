export const StudentAttendanceData = {
  title: "Student Attendance",
  isDate: true,
  legendItems: [
    { color: "#FEF3C7", label: "25% Absent" },
    { color: "#FCD34D", label: "75% Present" },
  ],
  colors: ["#FCD34D", "#FEF3C7"],
  date: "24/10/2020",
  itemData: [
    { title: "No. of students present:", value: "75" },
    { title: "No. of students absent:", value: "25" },
  ],
};

export const FeesSummaryData = {
  title: "Fees Summary",
  isDate: false,
  legendItems: [
    { color: "#EF4444", label: "25% Unpaid" },
    { color: "#10B981", label: "75% Paid" },
  ],
  colors: ["#10B981", "#EF4444"],
  terms: ["This term", "Last term", "This year"],
  itemData: [
    { title: "Total expected fee", value: "75" },
    { title: "Collected fee", value: "25" },
  ],
};
