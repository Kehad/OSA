export const timeSlots = [
  "8:00 - 8:45",
  "8:45 - 9:30",
  "9:30 - 10:00",
  "10:00 - 10:45",
  "10:45 - 11:30",
  "11:30 - 12:15",
  "12:15 - 12:30",
  "12:30 - 13:15",
  "13:15 - 14:00",
  "14:00 - 14:45",
];

export const timetableData = [
  { day: "Mon", periods: ["English", "Maths", "Long Break", "Basic Science", "English", "Maths", "Short Break", "Maths", "Maths", "Basic Science"] },
  { day: "Tue", periods: ["Maths", "English", "Long Break", "Maths", "Basic Science", "English", "Short Break", "Basic Science", "Maths", "English"] },
  { day: "Wed", periods: ["Basic Science", "English", "Long Break", "English", "Maths", "Maths", "Short Break", "Maths", "English", "Maths"] },
  { day: "Thu", periods: ["English", "English", "Long Break", "English", "English", "Basic Science", "Short Break", "English", "Maths", "Maths"] },
  { day: "Fri", periods: ["Maths", "Maths", "Long Break", "English", "Basic Science", "English", "Short Break", "English", "Maths", "Basic Science"] },
];

export const events = [
  {
    id: 1,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
  {
    id: 2,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
  {
    id: 3,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
];

export const academicEvents = [
  {
    month: "February",
    year: 2024,
    events: [
      {
        date: new Date(2024, 1, 26),
        label: "Monday, FEB 26, 2024",
        title: "Mid-Term Break Begins",
        type: "highlighted"
      }
    ]
  },
  {
    month: "March",
    year: 2024,
    events: [
      {
        date: new Date(2024, 2, 21),
        label: "Thursday, MAR 21, 2024",
        title: "Inter-House Sports Competition",
        type: "outlined"
      },
      {
        date: new Date(2024, 2, 26),
        label: "Tuesday, MAR 26, 2024",
        title: "Open Day / Parent-Teacher Conference",
        type: "outlined"
      }
    ]
  },
  {
    month: "April",
    year: 2024,
    events: [
      {
        date: new Date(2024, 3, 14),
        label: "Sunday, APR 14, 2024",
        title: "First Term Resumption",
        type: "outlined"
      },
      {
        date: new Date(2024, 3, 15),
        label: "Monday, APR 15, 2024",
        title: "Academic Session 2024/2025 Kickoff",
        type: "outlined"
      },
      {
        date: new Date(2024, 3, 16),
        label: "Tuesday, APR 16, 2024",
        title: "Orientation for New Students",
        type: "outlined"
      }
    ]
  },
  {
    month: "October",
    year: 2024,
    events: [
      {
        date: new Date(2024, 9, 8),
        label: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
        type: "outlined"
      }
    ]
  }
];